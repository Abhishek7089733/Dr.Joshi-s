export interface ContentPage {
  slug: string;
  title: string;
  titleHi?: string;
  metaDescription: string;
  intro: string;
  introHi?: string;
  causes: string[];
  symptoms: string[];
  method: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const services: ContentPage[] = [
  {
    slug: "ayurvedic-panchakarma-treatment-in-mumbai",
    title: "Ayurvedic Panchakarma Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक पंचकर्म उपचार",
    metaDescription:
      "Authentic Panchakarma therapy in Mumbai for deep detoxification, stress relief and complete rejuvenation under expert Ayurvedic supervision.",
    intro:
      "Panchakarma is the cornerstone of classical Ayurvedic medicine — a structured five-step purification process designed to gently eliminate accumulated toxins (ama), rebalance the doshas and restore the body's innate ability to heal itself. At our Mumbai clinic, every Panchakarma program is built around your individual prakriti (constitution) and current health goals, blending traditional protocols with thoughtful modern hygiene and patient comfort.",
    introHi:
      "पंचकर्म आयुर्वेद की पाँच-चरणीय शोधन प्रक्रिया है जो शरीर से विषाक्त पदार्थों को निकालकर दोषों को संतुलित करती है। मुंबई में हमारा क्लिनिक आपकी प्रकृति के अनुसार व्यक्तिगत पंचकर्म कार्यक्रम प्रदान करता है।",
    causes: [
      "Long-term exposure to processed food, irregular meals and screen-heavy lifestyles",
      "Chronic stress, poor sleep and weakened digestive fire (agni)",
      "Accumulated environmental toxins and seasonal dosha imbalance",
      "Suppressed natural urges and lack of detoxification routines",
    ],
    symptoms: [
      "Persistent fatigue, brain fog and low energy",
      "Frequent indigestion, bloating and irregular bowel movements",
      "Dull skin, hair fall and joint stiffness",
      "Mood swings, anxiety and disturbed sleep",
    ],
    method: [
      "Detailed pulse, prakriti and vikriti assessment by senior Ayurvedic physicians",
      "Preparatory therapies (Snehana — internal & external oleation, and Swedana — herbal steam) to mobilise toxins",
      "Core Panchakarma procedures: Vamana, Virechana, Basti, Nasya and Raktamokshana — only the ones suited to you",
      "Post-care Rasayana plan with diet, herbs and lifestyle for lasting results",
    ],
    benefits: [
      "Deep cellular detoxification without harsh chemicals or side-effects",
      "Improved digestion, sleep, immunity and skin clarity",
      "Mental calmness, sharper focus and emotional balance",
      "Renewed vitality and a strong foundation for treating chronic disease",
    ],
    faqs: [
      { q: "How long does a typical Panchakarma program last?", a: "Programs usually run from 7 to 21 days depending on your goals — wellness, chronic disease support or seasonal detox." },
      { q: "Is Panchakarma safe for everyone?", a: "It is broadly safe when supervised by qualified physicians. We screen for pregnancy, severe debility and certain cardiac conditions before starting." },
      { q: "Can I continue work during the therapy?", a: "Light work is possible for outpatient programs, but residential or intense protocols benefit from complete rest." },
      { q: "Will I have to follow a strict diet?", a: "Yes — a sattvic, easy-to-digest diet is part of the protocol and you will be guided meal by meal." },
    ],
  },
  {
    slug: "ayurvedic-holistic-treatment-in-mumbai",
    title: "Ayurvedic Holistic Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक समग्र उपचार",
    metaDescription:
      "Holistic Ayurvedic treatment in Mumbai that addresses body, mind and lifestyle together for complete, long-term healing — without side effects.",
    intro:
      "True healing happens when the body, mind and daily habits move together in the same direction. Our holistic Ayurvedic programs in Mumbai look beyond a single symptom and treat you as a whole person — your sleep, digestion, emotions, work pressure and relationships are all part of the prescription. The result is steady, lasting recovery instead of short-term symptom suppression.",
    introHi: "हमारा समग्र आयुर्वेदिक उपचार शरीर, मन और जीवनशैली तीनों पर एक साथ काम करता है ताकि स्थायी आरोग्य प्राप्त हो।",
    causes: [
      "Modern lifestyle stress and disconnection from natural rhythms",
      "Poor diet quality and inconsistent eating times",
      "Sedentary work, lack of movement and shallow breathing",
      "Suppressed emotions and chronic mental over-stimulation",
    ],
    symptoms: [
      "Multiple unexplained complaints across systems (gut, skin, mood, sleep)",
      "Recurrent infections and slow recovery from minor illness",
      "Hormonal swings, weight changes and low libido",
      "Feeling 'unwell' even when reports look normal",
    ],
    method: [
      "Whole-person consultation covering physical, emotional and lifestyle factors",
      "Personalised herbal prescriptions made in-house from organic raw materials",
      "Diet, daily routine (dinacharya) and seasonal routine (ritucharya) guidance",
      "Yoga, pranayama and mindfulness coaching as part of the treatment plan",
      "Periodic Panchakarma or mini-detox cycles when indicated",
    ],
    benefits: [
      "Sustainable improvement in energy, mood and resilience",
      "Reduced dependence on long-term symptomatic medication",
      "Better digestion, hormonal balance and immunity",
      "A clear, practical lifestyle blueprint you can actually follow",
    ],
    faqs: [
      { q: "How is holistic Ayurveda different from regular treatment?", a: "We do not chase isolated symptoms; we map all your concerns to the underlying dosha imbalance and treat them together." },
      { q: "Do I need to stop my modern medicines?", a: "No. We integrate carefully and reduce dependency only when your physician confirms it is safe." },
      { q: "How soon will I feel a difference?", a: "Most patients notice improvement in sleep and digestion within 2–4 weeks; chronic conditions need 3–6 months of consistent care." },
      { q: "Is this approach suitable for children and elderly?", a: "Yes — protocols are gentle and dose-adjusted across all age groups." },
    ],
  },
  {
    slug: "ayurvedic-organic-medicine-in-mumbai",
    title: "Ayurvedic Organic Medicine In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक जैविक औषधि",
    metaDescription:
      "Pure, in-house Ayurvedic organic medicines prepared from authentic herbs — safe, potent and prescribed by experienced doctors in Mumbai.",
    intro:
      "Medicines are only as good as the herbs that go into them. Every formulation we use is prepared in-house from carefully sourced organic herbs, processed using traditional methods and rigorously checked for purity. There are no fillers, no synthetic preservatives and no shortcuts — just clean, classical Ayurvedic medicine you can trust.",
    introHi: "हमारी सभी औषधियाँ शुद्ध जैविक जड़ी-बूटियों से पारंपरिक विधि द्वारा हमारे अपने केंद्र में बनाई जाती हैं।",
    causes: [
      "Wide availability of adulterated herbs and unverified branded products",
      "Loss of traditional preparation knowledge in mass production",
      "Heavy-metal contamination in poorly sourced raw materials",
    ],
    symptoms: [
      "Inconsistent results from over-the-counter Ayurvedic products",
      "Side-effects or stomach upset after using commercial formulations",
      "No improvement despite long-term self-medication",
    ],
    method: [
      "Direct sourcing of single herbs from trusted organic farms",
      "Classical preparation: kashayam, churna, bhasma, ghrita and taila as per the textbooks",
      "Quality checks for identity, purity and potency before dispensing",
      "Doctor-prescribed dosage tailored to your prakriti and current condition",
    ],
    benefits: [
      "Higher potency with predictable, repeatable results",
      "Minimal to no side-effects when taken under guidance",
      "Safe for long-term use in chronic conditions",
      "Complete traceability from herb to bottle",
    ],
    faqs: [
      { q: "Are your medicines certified?", a: "Yes — we follow GMP-aligned in-house quality protocols and use raw materials with valid certifications." },
      { q: "Can I order medicines online?", a: "Refills are dispatched after a doctor consultation; first-time prescriptions require an in-person or video consult." },
      { q: "Do organic Ayurvedic medicines expire?", a: "Each formulation has its own shelf life; dispensed medicines carry clear date and storage instructions." },
      { q: "Are these safe with my existing prescriptions?", a: "We check for interactions during consultation and adjust timing or dosage accordingly." },
    ],
  },
];

export const treatments: ContentPage[] = [
  {
    slug: "ayurvedic-kidney-treatment-in-mumbai",
    title: "Ayurvedic Kidney Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक किडनी उपचार",
    metaDescription:
      "Specialised Ayurvedic kidney treatment in Mumbai for CKD, raised creatinine and dialysis support — safe, evidence-informed and personalised.",
    intro:
      "Kidney disease rarely happens overnight, and it does not have to end on dialysis. Our Ayurvedic nephrology programs combine classical formulations, dietary correction and modern monitoring to slow disease progression, support residual kidney function and improve overall quality of life — even in patients already on dialysis.",
    introHi: "हम सीकेडी, बढ़े हुए क्रिएटिनिन और डायलिसिस के मरीजों के लिए विशेष आयुर्वेदिक किडनी उपचार प्रदान करते हैं।",
    causes: [
      "Long-standing diabetes and uncontrolled hypertension",
      "Chronic painkiller and antibiotic overuse",
      "Recurrent urinary infections and stones",
      "Genetic factors and autoimmune conditions",
    ],
    symptoms: [
      "Swelling around the eyes, ankles and feet",
      "Foamy or blood-tinged urine, frequent night-time urination",
      "Persistent fatigue, nausea and loss of appetite",
      "Rising creatinine and urea on blood reports",
    ],
    method: [
      "Detailed nephro-Ayurvedic assessment with current lab reports",
      "Customised herbal protocol using Punarnava, Gokshura, Varuna and other renoprotective herbs",
      "Strict dietary plan controlling protein, sodium, potassium and phosphorus",
      "Stress management, yoga and pranayama suited for renal patients",
      "Regular monitoring of creatinine, GFR and urine output",
    ],
    benefits: [
      "Stabilised or improved creatinine and GFR in many cases",
      "Reduced swelling, better appetite and energy levels",
      "Lower frequency of dialysis sessions in selected patients",
      "Improved overall well-being and confidence",
    ],
    faqs: [
      { q: "Can Ayurveda reverse kidney failure?", a: "Complete reversal depends on the stage and cause. Early-stage CKD often responds remarkably; advanced cases focus on stabilisation and quality of life." },
      { q: "Do I need to stop dialysis?", a: "Never stop dialysis on your own. Any change is decided jointly with your nephrologist based on lab trends." },
      { q: "How long is the treatment?", a: "Most protocols run 6–12 months with periodic review every 4–6 weeks." },
      { q: "Are the medicines safe for kidneys?", a: "Yes — every formulation is screened to be renoprotective and free of nephrotoxic ingredients." },
    ],
  },
  {
    slug: "ayurvedic-cancer-treatment-in-mumbai",
    title: "Ayurvedic Cancer Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक कैंसर उपचार",
    metaDescription:
      "Integrative Ayurvedic cancer care in Mumbai that supports chemotherapy, reduces side-effects and improves strength, immunity and quality of life.",
    intro:
      "Cancer care is no longer a single-treatment journey. Our integrative Ayurvedic oncology program works alongside your oncologist to reduce the side-effects of chemotherapy and radiation, rebuild strength, support immunity and improve overall quality of life — at every stage from diagnosis to long-term remission.",
    causes: [
      "Genetic predisposition combined with environmental triggers",
      "Long-term exposure to tobacco, alcohol and processed foods",
      "Chronic inflammation and weakened immunity",
      "Prolonged stress and disrupted circadian rhythms",
    ],
    symptoms: [
      "Unexplained weight loss, fatigue and persistent low-grade fever",
      "Lumps, non-healing ulcers or change in moles",
      "Long-standing cough, voice change or difficulty swallowing",
      "Severe side-effects of ongoing chemo or radiation",
    ],
    method: [
      "Stage-aware integrative plan in coordination with your oncologist",
      "Rasayana herbs to support immunity, blood counts and energy",
      "Specific protocols for chemo-induced nausea, mouth ulcers, neuropathy and hair loss",
      "Personalised diet to maintain weight and protein levels",
      "Mind-body therapies for anxiety, sleep and emotional resilience",
    ],
    benefits: [
      "Better tolerance of chemotherapy and radiation",
      "Improved appetite, weight and haemoglobin",
      "Reduced fatigue and faster recovery between cycles",
      "Stronger immunity and lower infection risk",
    ],
    faqs: [
      { q: "Can Ayurveda cure cancer?", a: "We do not promise a cure. Our role is integrative — reducing side-effects, rebuilding strength and supporting long-term remission." },
      { q: "Will the herbs interact with chemotherapy?", a: "We carefully time and select herbs to avoid interactions. Your oncologist is kept informed throughout." },
      { q: "When can treatment be started?", a: "Ideally at diagnosis, but it is helpful at any stage including post-treatment recovery." },
      { q: "Is home delivery of medicines available?", a: "Yes — for established patients, refills can be couriered after a teleconsultation." },
    ],
  },
  {
    slug: "ayurvedic-brain-treatment-in-mumbai",
    title: "Ayurvedic Brain Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक मस्तिष्क उपचार",
    metaDescription:
      "Ayurvedic brain and neurological treatment in Mumbai for migraine, stroke recovery, Parkinson's, anxiety and memory issues — personalised and natural.",
    intro:
      "The nervous system is exquisitely sensitive to lifestyle, sleep and nutrition. Our Ayurvedic neuro-care program addresses chronic headaches, migraine, stroke recovery, Parkinson's, anxiety, depression and age-related memory decline using classical brain-nourishing therapies (Medhya Rasayana) along with diet, yoga and counselling.",
    causes: [
      "Chronic stress, burnout and poor sleep hygiene",
      "Excessive screen time and sensory overload",
      "Vata aggravation due to irregular routine and travel",
      "Vascular risk factors — hypertension, diabetes, high cholesterol",
    ],
    symptoms: [
      "Frequent headaches, migraine and dizziness",
      "Tremors, stiffness, slowed movement or speech changes",
      "Memory lapses, difficulty concentrating and brain fog",
      "Persistent anxiety, low mood and disturbed sleep",
    ],
    method: [
      "Shirodhara and Shiroabhyanga to calm the nervous system",
      "Nasya therapy with medicated oils for direct neurological effect",
      "Brahmi, Shankhapushpi, Ashwagandha and Jatamansi-based formulations",
      "Yoga, pranayama and meditation tailored to your condition",
      "Lifestyle and digital-detox coaching",
    ],
    benefits: [
      "Reduced frequency and intensity of migraines",
      "Better sleep, calmer mind and improved focus",
      "Faster neurological recovery after stroke or surgery",
      "Slowed progression in degenerative conditions",
    ],
    faqs: [
      { q: "Is Shirodhara safe for everyone?", a: "It is widely safe; we screen for cold, sinusitis and certain skin conditions before scheduling." },
      { q: "Can it help with anxiety and depression?", a: "Yes, as a supportive therapy alongside any psychiatric care you may already be receiving." },
      { q: "How many sessions are needed?", a: "Typically 7–14 sessions per cycle, repeated based on response." },
      { q: "Will I become dependent on these therapies?", a: "No — the goal is to teach your nervous system to self-regulate, not create dependency." },
    ],
  },
  {
    slug: "ayurvedic-diabetes-treatment-in-mumbai",
    title: "Ayurvedic Diabetes Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक मधुमेह उपचार",
    metaDescription:
      "Manage type 2 diabetes naturally with Ayurvedic treatment in Mumbai — improve sugar control, reduce medication dependence and prevent complications.",
    intro:
      "Diabetes is a metabolic story written over years of lifestyle choices, and Ayurveda has been treating it as 'Madhumeha' for millennia. Our program combines proven herbs, structured diet, movement and stress management to improve insulin sensitivity, stabilise blood sugar and protect against long-term complications.",
    causes: [
      "Sedentary lifestyle and excess refined carbohydrate intake",
      "Genetic predisposition and family history",
      "Chronic stress and disturbed sleep",
      "Long-standing obesity and insulin resistance",
    ],
    symptoms: [
      "Increased thirst, hunger and frequent urination",
      "Unexplained weight loss or stubborn weight gain",
      "Tingling, numbness or burning in feet",
      "Slow-healing wounds and recurrent infections",
    ],
    method: [
      "Detailed metabolic and lifestyle assessment",
      "Herbal support with Vijaysar, Gudmar, Methi, Karela and Jamun",
      "Structured low-glycaemic diet built around Indian meals",
      "Daily movement plan — walking, surya namaskar and yoga",
      "Regular monitoring of HbA1c, fasting and post-meal sugars",
    ],
    benefits: [
      "Better HbA1c and stable daily sugar readings",
      "Reduced dependence on oral medication in many patients",
      "Improved energy, weight and sleep",
      "Lower risk of neuropathy, retinopathy and kidney damage",
    ],
    faqs: [
      { q: "Can Ayurveda completely cure diabetes?", a: "Type 2 diabetes can often be put into long remission with discipline, but lifelong lifestyle care is essential." },
      { q: "Will I need to stop my allopathic medicines?", a: "Only gradually and only when sugar values consistently support a reduction, in coordination with your doctor." },
      { q: "Is Ayurvedic treatment safe for type 1 diabetes?", a: "Insulin remains essential. Ayurveda plays a supportive role in metabolic balance and complications." },
      { q: "How long until I see results?", a: "Most patients see improvement in fasting sugars within 4–8 weeks of consistent care." },
    ],
  },
  {
    slug: "ayurvedic-infertility-treatment-in-mumbai",
    title: "Ayurvedic Infertility Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक बांझपन उपचार",
    metaDescription:
      "Ayurvedic infertility treatment in Mumbai for both partners — improve egg and sperm quality, balance hormones and prepare the body for natural conception.",
    intro:
      "Fertility is the result of healthy ovulation, healthy sperm and a healthy uterine environment — all of which depend on overall wellness. Our couple-centric Ayurvedic fertility program improves reproductive tissue (shukra dhatu), balances hormones and prepares the body for natural conception, and also supports those undergoing IUI or IVF.",
    causes: [
      "PCOS, endometriosis and irregular ovulation",
      "Low sperm count, motility or morphology issues",
      "Hormonal imbalance, thyroid disorders and high stress",
      "Lifestyle factors — late nights, smoking, processed food",
    ],
    symptoms: [
      "Inability to conceive after 12 months of unprotected intercourse",
      "Irregular or painful periods, heavy bleeding",
      "Recurrent miscarriages",
      "Low libido, erectile issues or hormonal acne",
    ],
    method: [
      "Couple consultation and review of all reports",
      "Uttar basti, Yoni Prakshalana and other classical procedures when indicated",
      "Rasayana and Vajikarana herbs for both partners",
      "Diet, sleep and stress correction over 3–6 months",
      "IVF/IUI support protocols when needed",
    ],
    benefits: [
      "Improved egg and sperm quality on lab parameters",
      "Regular cycles and balanced hormones",
      "Better implantation success in IVF cycles",
      "Stronger overall vitality and emotional well-being",
    ],
    faqs: [
      { q: "Is Ayurvedic infertility treatment safe?", a: "Yes — protocols are gentle, hormone-supportive and free of harsh stimulation." },
      { q: "How long should we try Ayurveda before considering IVF?", a: "A typical preparation cycle is 3–6 months; we will guide you transparently if assisted reproduction becomes the better option." },
      { q: "Do both partners need treatment?", a: "Yes, in most cases — fertility is a couple journey." },
      { q: "Can it help after a failed IVF?", a: "Absolutely. Many couples come to us for body preparation between IVF cycles." },
    ],
  },
  {
    slug: "ayurvedic-arthritis-treatment-in-mumbai",
    title: "Ayurvedic Arthritis Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक गठिया उपचार",
    metaDescription:
      "Long-lasting relief from arthritis pain and stiffness with Ayurvedic treatment in Mumbai — natural therapies for osteoarthritis, RA and gout.",
    intro:
      "Joint pain that limits your day-to-day life deserves more than a pain killer. Our Ayurvedic arthritis program addresses osteoarthritis, rheumatoid arthritis and gout with a combination of internal medicines, classical Panchakarma procedures and structured exercises that reduce inflammation, restore mobility and protect cartilage.",
    causes: [
      "Age-related wear and tear of cartilage",
      "Autoimmune inflammation in rheumatoid arthritis",
      "High uric acid leading to gout",
      "Vata–Kapha imbalance and accumulated ama in joints",
    ],
    symptoms: [
      "Morning stiffness lasting more than 30 minutes",
      "Swelling, warmth and tenderness in joints",
      "Reduced range of movement and grip strength",
      "Difficulty climbing stairs or sitting cross-legged",
    ],
    method: [
      "Internal medicines: Yogaraj Guggulu, Maharasnadi Kashayam and others tailored to you",
      "External therapies: Janu Basti, Patra Pinda Sweda, Kati Basti",
      "Periodic Panchakarma cycles for ama clearance",
      "Structured physiotherapy and joint-friendly yoga",
      "Anti-inflammatory diet and weight optimisation",
    ],
    benefits: [
      "Significant reduction in pain and stiffness",
      "Improved joint flexibility and walking comfort",
      "Lower dependence on long-term painkillers",
      "Slowed progression of joint damage",
    ],
    faqs: [
      { q: "Can Ayurveda reverse arthritis?", a: "Pain and inflammation reduce remarkably, and progression slows; structural changes already present cannot be undone." },
      { q: "Are external therapies painful?", a: "No — most patients find them deeply relaxing." },
      { q: "Will I have to give up favourite foods?", a: "We focus on practical changes; complete restriction is rarely needed for life." },
      { q: "How soon will I feel better?", a: "Many patients feel relief within 2–4 weeks; deeper change takes 3 months of consistent care." },
    ],
  },
  {
    slug: "ayurvedic-joints-and-spine-treatment-in-mumbai",
    title: "Ayurvedic Joints & Spine Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक जोड़ और रीढ़ उपचार",
    metaDescription:
      "Ayurvedic treatment for back pain, slipped disc, cervical spondylosis and joint disorders in Mumbai — non-surgical, lasting relief.",
    intro:
      "Back, neck and joint pain often respond beautifully to a combination of classical Ayurvedic therapies and modern movement science. Our spine and joint program offers non-surgical relief for slipped disc, sciatica, cervical spondylosis, frozen shoulder and chronic backache.",
    causes: [
      "Long hours of sitting and poor posture",
      "Sudden lifting or twisting injuries",
      "Age-related disc degeneration",
      "Vata aggravation due to irregular lifestyle",
    ],
    symptoms: [
      "Radiating pain down the leg or arm",
      "Numbness or tingling in fingers or toes",
      "Stiff neck or lower back, especially in the morning",
      "Difficulty bending, sitting or standing for long",
    ],
    method: [
      "Kati Basti, Greeva Basti and Pizhichil for targeted relief",
      "Sahacharadi and Mahanarayan oil-based abhyanga",
      "Internal medicines for nerve health and inflammation",
      "Posture correction and core-strengthening yoga",
      "Ergonomic and workplace coaching",
    ],
    benefits: [
      "Strong, lasting pain relief without injections",
      "Improved posture, flexibility and core strength",
      "Avoided or postponed spine surgery in many cases",
      "Better sleep and quality of life",
    ],
    faqs: [
      { q: "Can I avoid spine surgery?", a: "Many cases of slipped disc and sciatica respond fully to conservative Ayurvedic care; we are honest if surgery is unavoidable." },
      { q: "How many sessions do I need?", a: "A typical course is 7–14 sessions, sometimes repeated based on chronicity." },
      { q: "Is bed rest needed?", a: "Modern recommendations favour gentle movement; we customise based on severity." },
      { q: "Can I continue gym workouts?", a: "Yes, with adjustments — we will guide what to keep and what to pause." },
    ],
  },
  {
    slug: "kidney-failure-ayurvedic-treatment",
    title: "Kidney Failure Ayurvedic Treatment",
    titleHi: "किडनी फेल्योर का आयुर्वेदिक उपचार",
    metaDescription:
      "Specialist Ayurvedic treatment for kidney failure — improve creatinine, support dialysis patients and protect remaining kidney function naturally.",
    intro:
      "A diagnosis of kidney failure can feel overwhelming, but it is not the end of options. Our specialised program supports patients across CKD stages 3–5 and those already on dialysis, with the goal of stabilising kidney function, reducing symptoms and improving day-to-day quality of life.",
    causes: [
      "Long-standing diabetes and hypertension",
      "Chronic glomerulonephritis and polycystic kidney disease",
      "Nephrotoxic medication overuse",
      "Recurrent obstructions and urinary infections",
    ],
    symptoms: [
      "Marked swelling in legs, face and abdomen",
      "Severe fatigue, breathlessness and itching",
      "Reduced urine output and metallic taste",
      "Steeply rising creatinine and falling GFR",
    ],
    method: [
      "Comprehensive nephro-Ayurvedic evaluation",
      "Tailored protocol with renoprotective herbs and minerals",
      "Renal-friendly diet planning by experienced dietitians",
      "Regular nephro-monitoring and coordination with your nephrologist",
      "Symptom-specific care for itching, cramps and sleep",
    ],
    benefits: [
      "Stabilised or slowly improving creatinine in selected patients",
      "Reduced number of dialysis sessions in some cases",
      "Better appetite, sleep and overall energy",
      "Improved emotional well-being for patient and family",
    ],
    faqs: [
      { q: "Is this treatment a replacement for dialysis?", a: "No — it works alongside your nephrology team. Decisions about dialysis are always medical." },
      { q: "Can it bring creatinine down?", a: "In many CKD stage 3–4 patients, yes, gradually. Stage 5 outcomes vary case by case." },
      { q: "Are the medicines safe long-term?", a: "Yes — they are specifically chosen to be non-toxic to the kidneys and monitored during treatment." },
      { q: "Do you offer remote consultation?", a: "Yes — we serve patients across India and overseas via secure video consults." },
    ],
  },
  {
    slug: "ayurvedic-hypertension-treatment-in-mumbai",
    title: "Ayurvedic Hypertension Treatment In Mumbai",
    titleHi: "मुंबई में आयुर्वेदिक उच्च रक्तचाप उपचार",
    metaDescription:
      "Control high blood pressure naturally with Ayurvedic hypertension treatment in Mumbai — reduce medication, prevent complications and feel calmer.",
    intro:
      "High blood pressure is rarely just about salt. It is a signal that your nervous system, sleep, stress response and circulation are all asking for attention. Our Ayurvedic hypertension program brings these elements back into balance with herbs, diet, breath work and lifestyle redesign.",
    causes: [
      "Chronic stress and high mental load",
      "Excess salt, refined food and alcohol",
      "Sedentary lifestyle and central obesity",
      "Sleep apnoea and disturbed sleep",
    ],
    symptoms: [
      "Headaches, especially at the back of the head",
      "Palpitations, breathlessness on exertion",
      "Blurred vision and giddiness",
      "Often, no symptoms — only a high reading",
    ],
    method: [
      "Detailed BP profiling and 7-day home monitoring",
      "Sarpagandha, Jatamansi and Ashwagandha-based formulations",
      "Pranayama and meditation taught one-to-one",
      "DASH-style diet adapted to Indian kitchens",
      "Sleep, stress and screen-time correction",
    ],
    benefits: [
      "Smoother daily BP readings without spikes",
      "Reduced medication dose in many patients (under doctor guidance)",
      "Lower risk of stroke, heart attack and kidney damage",
      "Calmer mind and better sleep",
    ],
    faqs: [
      { q: "Will I be able to stop my BP medicines?", a: "Possibly, depending on baseline values and response — always tapered with your physician." },
      { q: "Is Ayurveda safe with my current cardiac drugs?", a: "Yes — we screen carefully for interactions during consultation." },
      { q: "How long is the treatment?", a: "A core program runs 3–6 months with follow-ups every few months thereafter." },
      { q: "Do I need to change my diet drastically?", a: "We focus on sustainable changes you can actually maintain long-term." },
    ],
  },
];

export const allContent = [...services, ...treatments];

export function findContent(slug: string): ContentPage | undefined {
  return allContent.find((c) => c.slug === slug);
}
