export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export const faqs: FAQ[] = [
  { category: "General", q: "What conditions does Dr. Joshi's Clinic treat?", a: "We offer Ayurvedic care for kidney disease, cancer support, diabetes, hypertension, infertility, arthritis, joint and spine issues, neurological conditions, and general wellness through Panchakarma." },
  { category: "General", q: "Do you offer online consultations?", a: "Yes — secure video consultations are available for patients across India and overseas. Reports can be shared in advance for review." },
  { category: "General", q: "How do I book an appointment?", a: "You can book through our website form, WhatsApp, or by calling our clinic directly. We confirm within a few working hours." },
  { category: "General", q: "Where is your clinic located?", a: "Our main clinic is at Dadar West, Mumbai, with branches and partner centres in Borivali, Thane, Pune and Nashik." },
  { category: "General", q: "What languages are consultations available in?", a: "We consult in English, Hindi and Marathi based on your preference." },

  { category: "Treatment", q: "Is Ayurvedic treatment safe alongside modern medicine?", a: "Yes — when prescribed by qualified physicians who carefully check for interactions and time the medicines correctly." },
  { category: "Treatment", q: "How long does Ayurvedic treatment usually take?", a: "Acute issues respond in days to weeks. Chronic conditions like kidney disease, arthritis or infertility usually need 3–12 months of consistent care." },
  { category: "Treatment", q: "Will I have to follow a strict diet?", a: "Diet plays a major role, but we focus on practical, sustainable Indian-kitchen-friendly changes rather than extreme restrictions." },
  { category: "Treatment", q: "Are there any side effects?", a: "Authentic Ayurvedic medicines are generally free of significant side effects when correctly prescribed and sourced." },
  { category: "Treatment", q: "Can children take Ayurvedic medicines?", a: "Yes, many of our protocols are gentle and dose-adjusted for children and adolescents." },

  { category: "Panchakarma", q: "What is Panchakarma?", a: "Panchakarma is a structured five-step Ayurvedic detoxification process that removes deep toxins, balances the doshas and rejuvenates the body." },
  { category: "Panchakarma", q: "How long does a Panchakarma program last?", a: "Programs typically run from 7 to 21 days based on your goals and condition." },
  { category: "Panchakarma", q: "Do I need to stay at the clinic?", a: "Both outpatient and residential options are available; some programs are best done residentially for full effect." },
  { category: "Panchakarma", q: "Is Panchakarma safe in pregnancy?", a: "Most Panchakarma procedures are not advised in pregnancy. Specific gentle therapies may be safe — only under expert supervision." },

  { category: "Kidney Care", q: "Can Ayurveda reduce creatinine?", a: "In many CKD stage 2–4 patients, yes, gradually. Outcomes vary by cause, stage and adherence to the program." },
  { category: "Kidney Care", q: "Should I stop dialysis?", a: "Never on your own. Decisions about dialysis are always made jointly with your nephrologist based on lab values." },
  { category: "Kidney Care", q: "Can Ayurveda help with kidney stones?", a: "Yes — small to medium stones often respond well to herbal protocols and dietary correction." },

  { category: "Cancer Care", q: "Does Ayurveda cure cancer?", a: "We do not promise a cure. Our role is integrative — reducing side-effects, supporting strength and improving quality of life." },
  { category: "Cancer Care", q: "Can I start Ayurveda during chemotherapy?", a: "Yes — protocols are timed carefully so they support, not interfere with, ongoing oncology treatment." },

  { category: "Payments", q: "Do you accept insurance?", a: "Most outpatient Ayurvedic care is currently not covered by insurance in India. We provide clear receipts for any reimbursement claim you wish to file." },
  { category: "Payments", q: "What are your payment options?", a: "We accept cash, card, UPI and online bank transfers. Treatment packages can often be paid in instalments." },

  { category: "Franchise", q: "Do you offer franchise opportunities?", a: "Yes — we welcome qualified healthcare entrepreneurs to partner with us. Visit our Franchise page for full details." },
  { category: "Franchise", q: "What support do franchise partners receive?", a: "Brand licensing, doctor training, in-house medicines, marketing support and ongoing clinical mentorship." },
];

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));
