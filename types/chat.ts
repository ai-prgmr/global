export type Sender = "assistant" | "user";

export interface Suggestion {
    id: string;
    label: string;
    value: string;

    type?: "message" | "link";

    href?: string;
}

export interface ChatAction {
    type: "consultation" | "link";
    label: string;
    href?: string;
}

export interface ChatMessage {
    id: string;
    sender: Sender;
    text: string;
    timestamp: number;

    suggestions?: Suggestion[];
    status?: "sending" | "sent" | "received";
    action?: ChatAction;
}

export interface ConversationContext {
    country?: string;
    course?: string;
    qualification?: string;
    budget?: string;
    scholarship?: boolean;
    visa?: boolean;
}

export interface ChatState {
    messages: ChatMessage[];
    context: ConversationContext;
    isTyping: boolean;
}