# Globalizers Study Compass — Intelligent Pre-Counselling & Q&A System
## Executive Overview & Client Q&A Guide

**Study Compass** is an automated, AI-assisted Digital Pre-Counselling widget designed specifically for Globalizers. It serves two distinct purposes:

1. **Structured Lead Qualification (Pre-Counselling)**: Guides students through a 10-step assessment to gather their academic background, preferred study destination, budget, intake, test status, and contact details, generating a qualified lead score and counsellor notes.
2. **Instant Knowledge Base Q&A**: Answers student questions in real-time about visas, tuition costs, scholarships, exams, work rights, and post-study work permits using structured JSON knowledge rules — without breaking the pre-counselling flow.

---

## 🎯 Dual-Engine Architecture

```
                       +-----------------------------------+
                       |    Student Types Message / Click  |
                       +-----------------------------------+
                                         |
                                         v
                         Does input match a FAQ/Country?
                                /                 \
                             YES                   NO
                             /                       \
        +----------------------------+     +----------------------------+
        |   Returns Instant Knowledge |     |   Advances Pre-Counselling |
        |   Base Answer & Resumes    |     |   Qualification Flow State |
        |   Active Flow Prompt       |     +----------------------------+
        +----------------------------+
```

---

## 📋 Comprehensive List of Questions Students Can Ask

Below are the **11 core knowledge categories** built into the engine, along with real questions students can ask and the exact answers returned by Study Compass:

---

### 1. Cost of Studying & Tuition Fees
**Keywords**: *cost, fees, tuition, living expenses, price, budget, affordable*

- **Sample Questions**:
  - *"How much does it cost to study abroad?"*
  - *"What are the tuition fees in USA or UK?"*
  - *"What is the living expense in Canada?"*
  - *"Can I study in Germany for free?"*
- **System Answer**:
  > Studying abroad costs vary by country:
  > • **USA / UK**: Tuition ranges from $20,000–$45,000/yr; living costs ~$12,000–$18,000/yr.
  > • **Canada / Australia**: Tuition ranges from CAD/AUD 20,000–38,000/yr; living costs ~$15,000/yr.
  > • **Germany / Europe**: Low/No tuition at public universities; living costs ~$11,000/yr.

---

### 2. Student Visas & Financial Proof
**Keywords**: *visa, student visa, permit, embassy, vfs, interview, financial proof, funds*

- **Sample Questions**:
  - *"What documents are required for a student visa?"*
  - *"How much bank balance is needed for visa?"*
  - *"Do you provide visa interview preparation?"*
  - *"What is CAS for UK visa?"*
- **System Answer**:
  > Student visas require an official admit letter (e.g., I-20 for USA, CAS for UK, LOA for Canada), proof of tuition & living funds, health insurance, and clean academic records. Globalizers provides full visa counselling & mock interview prep.

---

### 3. Scholarships & Financial Aid
**Keywords**: *scholarship, funding, financial aid, grant, bursary, fee waiver, assistantship*

- **Sample Questions**:
  - *"Can I get a 100% scholarship?"*
  - *"Are scholarships available for Master's students?"*
  - *"How do I apply for financial aid?"*
- **System Answer**:
  > Scholarships can cover 10% to 100% of tuition based on academic excellence, GRE/GMAT/IELTS scores, and early application. Globalizers helps match your profile with university and government scholarships.

---

### 4. IELTS Requirements & English Tests
**Keywords**: *ielts, english test, band score, ielts score, toefl, duolingo, language test*

- **Sample Questions**:
  - *"What IELTS score is needed for Master's?"*
  - *"Is IELTS mandatory for study abroad?"*
  - *"Do universities accept Duolingo or TOEFL?"*
  - *"Can I get IELTS waiver?"*
- **System Answer**:
  > Most universities require an IELTS score of 6.5 overall (no band below 6.0) for Master's programs, or 6.0 for Bachelor's. Some universities accept TOEFL (80+), Duolingo (115+), or medium of instruction waivers.


---

### 6. Study Intakes & Application Deadlines
**Keywords**: *intake, intakes, semester, fall, spring, summer, deadline, when to apply*

- **Sample Questions**:
  - *"When is the Fall intake?"*
  - *"What is the difference between Fall and Spring intake?"*
  - *"When should I start applying for 2025 intake?"*
- **System Answer**:
  > Major study intakes are:
  > • **Fall (Sept/Oct)**: Primary intake with max course options & scholarships.
  > • **Spring (Jan/Feb)**: Secondary intake with good options.
  > • **Summer (May/June)**: Available for select certificate/short courses.

---

### 7. Part-Time Work Rights while Studying
**Keywords**: *work, part time, job, earn, work hours, campus job, hourly wage*

- **Sample Questions**:
  - *"Can international students work part time?"*
  - *"How many hours can I work per week in Canada?"*
  - *"Can I work on campus in USA?"*
- **System Answer**:
  > International students can work up to 20 hours/week during classes and full-time (40 hrs/wk) during semester breaks in Canada, Australia, UK, and USA (on-campus).

---

### 8. Post-Study Work Visa (PSW) & Stayback Rights
**Keywords**: *psw, post study, work visa, stay back, stayback, work permit, pgwp, opt*

- **Sample Questions**:
  - *"How many years of work visa do I get after graduating in UK?"*
  - *"What is Canada PGWP work permit?"*
  - *"What is OPT for STEM graduates in USA?"*
  - *"What is stayback period in Australia?"*
- **System Answer**:
  > Post-Study Work rights by country:
  > • **UK**: 2 years (Graduate Route), 3 years for PhD.
  > • **Canada**: Up to 3 years (PGWP).
  > • **Australia**: 2–4 years depending on degree level & regional study.
  > • **USA**: 1 year OPT (+2 years extension for STEM majors).

---

### 9. Statement of Purpose (SOP) Guidance
**Keywords**: *sop, statement of purpose, essay, personal statement, letter of intent*

- **Sample Questions**:
  - *"What is an SOP?"*
  - *"Does Globalizers help with SOP writing and editing?"*
- **System Answer**:
  > An SOP outlines your academic background, career goals, why you chose the course and university, and why that country. Globalizers provides professional SOP review and editorial feedback.

---

### 10. Document Checklist for Applications
**Keywords**: *document, documents, checklist, transcripts, lor, recommendation, marksheets, degree, passport*

- **Sample Questions**:
  - *"What documents are needed to apply for universities?"*
  - *"Do I need LORs for Master's application?"*
- **System Answer**:
  > Standard Application Document Checklist:
  > 1. Academic Transcripts & Degree Certificates
  > 2. Passport copy
  > 3. English Test Scorecard (IELTS/TOEFL/Duolingo)
  > 4. 2-3 Letters of Recommendation (LORs)
  > 5. Statement of Purpose (SOP)
  > 6. Updated CV / Resume

---

### 11. Country Destination Overviews
**Keywords**: *australia, canada, uk, united kingdom, usa, america, germany, ireland, new zealand*

- **Sample Questions**:
  - *"Tell me about studying in Australia"*
  - *"Why study in Canada?"*
  - *"What are the benefits of studying in Germany?"*
- **System Answer**:
  > Returns curated country profiles featuring top universities, post-study work benefits, average tuition, and career highlights for the requested country.

---

## 💼 Why Founders & Clients Love This Feature

1. **24/7 Instant Engagement**: Engages prospective students immediately when they visit the site, answering their top questions in seconds without waiting for office hours.
2. **Zero Lead Drop-Off**: If a student asks a random question in the middle of pre-counselling, the system answers it and **resumes the qualification flow seamlessly**.
3. **Structured Lead Export**: At the end of the session, counsellors receive:
   - Full student profile (Country, Course, GPA, Intake, Test, Budget, Passport, Contact)
   - Lead Score (0–100)
   - Auto-generated Counsellor Action Notes
   - Instant export to **Google Sheets** / CRM
