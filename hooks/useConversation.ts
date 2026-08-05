"use client";

import { useRef, useState, useCallback } from "react";
import { ConversationEngine, EngineResponse } from "@/conversation";
import { generateUUID } from "@/lib/uuid";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function useConversation() {
  const engine = useRef(new ConversationEngine(generateUUID()));

  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [allowFreeText, setAllowFreeText] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [summary, setSummary] = useState<string | undefined>();
  const [leadScore, setLeadScore] = useState<number | undefined>();
  const [counsellorNotes, setCounsellorNotes] = useState<string[]>([]);

  const handleEngineResponse = useCallback((response: EngineResponse) => {
    setQuickReplies(response.quickReplies ?? []);
    setAllowFreeText(response.allowFreeText);
    setProgress(response.progress);
    setIsComplete(response.isComplete);
    if (response.summary) setSummary(response.summary);
    if (response.leadScore !== undefined) setLeadScore(response.leadScore);
    if (response.counsellorNotes) setCounsellorNotes(response.counsellorNotes);
  }, []);

  const start = useCallback(async () => {
    setStarted(true);
    setIsTyping(true);

    try {
      const res = await engine.current.start();
      setMessages([
        {
          id: generateUUID(),
          role: "assistant",
          content: res.message,
        },
      ]);
      handleEngineResponse(res);
    } finally {
      setIsTyping(false);
    }
  }, [handleEngineResponse]);

  const send = useCallback(
    async (message: string) => {
      const text = message.trim();
      if (!text) return;

      if (!started) {
        setStarted(true);
      }

      const userMsg: ChatMessage = {
        id: generateUUID(),
        role: "user",
        content: text,
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      // Simulate a natural typing delay (450ms) for smoother micro-interaction
      await new Promise((r) => setTimeout(r, 450));

      try {
        const res = await engine.current.reply(text);

        // Add assistant response
        const assistantMsg: ChatMessage = {
          id: generateUUID(),
          role: "assistant",
          content: res.message,
        };

        setMessages((prev) => [...prev, assistantMsg]);
        handleEngineResponse(res);
      } finally {
        setIsTyping(false);
      }
    },
    [started, handleEngineResponse]
  );

  const restart = useCallback(async () => {
    setMessages([]);
    setStarted(false);
    setProgress(0);
    setIsComplete(false);
    setQuickReplies([]);
    setSummary(undefined);
    setLeadScore(undefined);
    setCounsellorNotes([]);
    setIsTyping(true);

    try {
      const res = await engine.current.restart();
      setStarted(true);
      setMessages([
        {
          id: generateUUID(),
          role: "assistant",
          content: res.message,
        },
      ]);
      handleEngineResponse(res);
    } finally {
      setIsTyping(false);
    }
  }, [handleEngineResponse]);

  return {
    started,
    messages,
    isTyping,
    quickReplies,
    allowFreeText,
    progress,
    isComplete,
    summary,
    leadScore,
    counsellorNotes,
    start,
    send,
    restart,
    session: engine.current.getSession(),
  };
}