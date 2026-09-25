import { QuickLinkItem, ResourceItem, TestimonialItem, PricingPlan, FaqItem } from '../types';

export const QUICK_LINKS: QuickLinkItem[] = [
  {
    id: 'toefl-suite',
    title: 'TOEFL Practice Suite',
    category: 'Assessment & Tests',
    badge: 'Popular',
    description: 'Full-length Primary, Junior & iBT practice with AI speech & writing scoring.',
    iconName: 'GraduationCap',
    path: '#features'
  },
  {
    id: 'auto-grading',
    title: 'Auto-Grading Engine',
    category: 'Assessment & Tests',
    badge: 'AI-Powered',
    description: 'Instant rubric scoring for grammar, open-ended answers, and TOEFL essays.',
    iconName: 'Sparkles',
    path: '#interactive-demo'
  },
  {
    id: 'worksheets',
    title: 'Worksheet Generator',
    category: 'Teacher Resources',
    badge: 'Updated',
    description: 'Generate printable & digital exercises aligned to CEFR & local standards in seconds.',
    iconName: 'FileSpreadsheet',
    path: '#interactive-demo'
  },
  {
    id: 'worksheet-uploads',
    title: 'Worksheet Uploads & OCR',
    category: 'Teacher Resources',
    description: 'Upload legacy PDFs or scanned paper worksheets to convert them into auto-graded tests.',
    iconName: 'UploadCloud',
    path: '#features'
  },
  {
    id: 'prefix-suffix',
    title: 'Prefix & Suffix Practice',
    category: 'Vocabulary Lab',
    badge: 'Interactive',
    description: 'Bite-sized morphological drills for beginners to advanced language learners.',
    iconName: 'Type',
    path: '#interactive-demo'
  },
  {
    id: 'class-mgmt',
    title: 'Classroom Management',
    category: 'Analytics & Admin',
    description: 'Manage rosters, assign tiered homework, and monitor real-time completion.',
    iconName: 'Users',
    path: '#features'
  },
  {
    id: 'analytics',
    title: 'Diagnostic Analytics',
    category: 'Analytics & Admin',
    badge: 'Real-time',
    description: 'Visual skill heatmaps, student growth trends, and class mastery reports.',
    iconName: 'BarChart3',
    path: '#features'
  },
  {
    id: 'learning-games',
    title: 'Gamified Learning Hub',
    category: 'Student Engagement',
    description: 'Interactive classroom games, flashcard showdowns, and reward badges.',
    iconName: 'Gamepad2',
    path: '#interactive-demo'
  },
  {
    id: 'pre-kid',
    title: 'Pre-Kid Foundation Hub',
    category: 'Curriculum Paths',
    description: 'Phonics, basic vocabulary, tracing sheets, and auditory listening prompts.',
    iconName: 'Baby',
    path: '#resources'
  },
  {
    id: 'kid-program',
    title: 'Kid Program (Grades 1-6)',
    category: 'Curriculum Paths',
    description: 'Structured grammar progression, reading comprehension passages, and quizzes.',
    iconName: 'BookOpen',
    path: '#resources'
  },
  {
    id: 'chinese-language',
    title: 'Multilingual Support (Chinese/ESL)',
    category: 'Curriculum Paths',
    description: 'Dual-language prompts and localized scaffolding for international ESL learners.',
    iconName: 'Languages',
    path: '#resources'
  }
];

export const STATS_DATA = [
  { value: '38,000+', label: 'Active Educators', description: 'Across 42 countries worldwide' },
  { value: '1,400+', label: 'Schools & Academies', description: 'Using CMC Network daily' },
  { value: '12.4 hrs', label: 'Average Weekly Time Saved', description: 'Per teacher on manual grading' },
  { value: '98.6%', label: 'CEFR & TOEFL Accuracy', description: 'Standardized automated assessment' }
];

export const RESOURCE_CATALOG: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'TOEFL Junior Reading Mastery: Inference & Detail Question Bank',
    category: 'TOEFL Prep',
    gradeLevel: 'Middle (Grades 4-6)',
    downloads: 14200,
    rating: 4.9,
    pages: 24,
    standards: ['TOEFL Junior', 'CEFR B1-B2', 'Lexile 750L-950L'],
    description: 'A curated 6-unit diagnostic pack with 12 authentic informational passages, paired vocabulary questions, and automated scoring answer keys.',
    tag: 'Teacher Favorite',
    previewSnippet: 'Passage excerpt: "Deep-sea hydrothermal vents create ecosystems that thrive entirely without sunlight, relying instead on chemosynthesis..."',
    tags: ['Reading Comprehension', 'TOEFL Practice', 'Expository Text', 'Answer Key Included']
  },
  {
    id: 'res-2',
    title: 'Prefixes & Suffixes Morphological Masterclass (un-, re-, -able, -tion)',
    category: 'Grammar & Vocab',
    gradeLevel: 'Elementary (Grades 1-3)',
    downloads: 28900,
    rating: 5.0,
    pages: 18,
    standards: ['Common Core L.3.4.B', 'CEFR A2'],
    description: 'Complete classroom toolkit including interactive sorting cards, root word matching games, contextual fill-in-the-blank, and self-checking worksheets.',
    tag: 'High Impact',
    previewSnippet: 'Prefix rule: un- (not / opposite) -> happy to unhappy, tie to untie. Suffix rule: -able (capable of) -> rely to reliable.',
    tags: ['Morphology', 'Roots & Affixes', 'Vocabulary Builder', 'Printable PDF']
  },
  {
    id: 'res-3',
    title: 'Phonics Foundations: CVC Blends & Vowel Teams Activity Binder',
    category: 'Reading & Phonics',
    gradeLevel: 'Pre-Kid',
    downloads: 19400,
    rating: 4.8,
    pages: 32,
    standards: ['Early Literacy', 'CEFR Pre-A1'],
    description: 'Color-coded visual phonemic awareness worksheets, tracing exercises, and audio-guided sound cards tailored for ESL early learners.',
    tag: 'Pre-K Essential',
    previewSnippet: 'Phoneme blend activities: /ch/, /sh/, /th/ sorting mats with illustrated animal picture prompts for auditory association.',
    tags: ['Phonics', 'Early Childhood', 'Visual Tracing', 'ESL Scaffolding']
  },
  {
    id: 'res-4',
    title: 'TOEFL Speaking Independent Task 1 & 2 Template & Rubric System',
    category: 'TOEFL Prep',
    gradeLevel: 'TOEFL Prep',
    downloads: 11800,
    rating: 4.9,
    pages: 16,
    standards: ['TOEFL iBT', 'CEFR B2-C1'],
    description: 'Structured speaking response templates, transition phrase banks, pacing audio guides, and standardized scoring rubrics for teachers.',
    tag: 'Speaking Rubric',
    previewSnippet: 'Teacher rubric checklist: 1. Topic Development & Elaboration (4 pts) 2. Delivery & Intonation (4 pts) 3. Language Use & Grammar (4 pts).',
    tags: ['Speaking Prep', 'Oral Fluency', 'Rubric Guide', 'Audio Prompts']
  },
  {
    id: 'res-5',
    title: 'Academic Writing & Paraphrasing: Avoiding Plagiarism Workshop Pack',
    category: 'Auto-Grade Quizzes',
    gradeLevel: 'Middle (Grades 4-6)',
    downloads: 9800,
    rating: 4.9,
    pages: 20,
    standards: ['W.5.2', 'W.6.2', 'CEFR B1'],
    description: 'Includes 30 sentence-combining drills, synonym replacement exercises, and auto-graded citation quizzes for classroom or homework.',
    tag: 'Writing Lab',
    previewSnippet: 'Paraphrasing formula: Change word order, employ synonyms, adjust active/passive voice while retaining identical semantic intent.',
    tags: ['Academic Writing', 'Paraphrasing', 'Grammar Drill', 'Auto-Scored']
  },
  {
    id: 'res-6',
    title: 'Grammar Arcade: Irregular Verbs & Past Tense Classroom Relay Game',
    category: 'Classroom Games',
    gradeLevel: 'Elementary (Grades 1-3)',
    downloads: 16700,
    rating: 4.8,
    pages: 12,
    standards: ['L.2.1.D', 'CEFR A1-A2'],
    description: 'Engaging printable bingo boards, flash-duel cards, and quick quiz question prompts to turn irregular verb memorization into an interactive classroom tournament.',
    tag: 'Gamified',
    previewSnippet: 'Challenge: Give the simple past and past participle of "freeze", "catch", "swim", and "break" in under 15 seconds.',
    tags: ['Interactive Game', 'Verbs', 'Classroom Fun', 'Team Activity']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Sarah Lin',
    role: 'Lead ESL & TOEFL Prep Coordinator',
    school: 'Pacific Gateway International Academy',
    location: 'Singapore',
    avatarUrl: 'https://images.pexels.com/photos/7752808/pexels-photo-7752808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    metric: 'Saved 14 hours/week',
    quote: 'CMC Network revolutionized how our 12 ESL teachers handle TOEFL prep. What used to take our staff entire weekends to grade now happens automatically with precise CEFR rubrics. Our students’ mock test scores increased by 22% in one term.',
    rating: 5,
    badge: 'TOEFL Coordinator'
  },
  {
    id: 'test-2',
    author: 'Marcus Vance',
    role: 'Head of Curriculum & Instruction',
    school: 'St. Jude International bilingual School',
    location: 'Bangkok / London',
    avatarUrl: 'https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    metric: '98% Student Engagement',
    quote: 'The worksheet generator alone is worth ten times the subscription. We can differentiate reading passages into three distinct Lexile levels with one click. Teachers spend their time mentoring, not formatting printable sheets.',
    rating: 5,
    badge: 'Curriculum Director'
  },
  {
    id: 'test-3',
    author: 'Elena Rostova',
    role: 'Primary & Kindergarten English Specialist',
    school: 'Bright Horizons Bilingual Academy',
    location: 'Toronto, Canada',
    avatarUrl: 'https://images.pexels.com/photos/9489925/pexels-photo-9489925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    metric: 'Classroom grading cut by 75%',
    quote: 'For early childhood and Pre-Kid programs, having visual phonics and prefix/suffix drills with instant automated checks keeps young minds hyper-engaged. The student interface feels like an educational playground, not a chore.',
    rating: 5,
    badge: 'Early Ed Specialist'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Individual Teacher',
    tagline: 'Ideal for independent tutors and classroom teachers testing automated tools.',
    monthlyPrice: 0,
    annualPrice: 0,
    ctaText: 'Start Free Forever',
    targetUser: 'Single Educator',
    features: [
      'Up to 60 student accounts',
      'Instant Auto-Grading (150 tests/mo)',
      'Access to 200+ Core Worksheets',
      'Standard TOEFL Junior Practice Banks',
      'Basic Class Progress Dashboard',
      'PDF & Google Docs Export',
      'Email Community Support'
    ]
  },
  {
    id: 'pro-educator',
    name: 'Pro Educator',
    tagline: 'For passionate teachers who want full AI grading superpowers & unlimited resources.',
    monthlyPrice: 15,
    annualPrice: 12,
    popular: true,
    ctaText: 'Get 14-Day Free Trial',
    targetUser: 'Power Teachers & Tutors',
    features: [
      'Unlimited student accounts & classes',
      'Unlimited AI Auto-Grading & Essay Feedback',
      'Full TOEFL Suite (Primary, Junior & iBT)',
      'AI Custom Worksheet Generator (Unlimited)',
      'Legacy Worksheet PDF & OCR Converter',
      'Automated Rubrics & CEFR Diagnostic Heatmaps',
      'Custom School Logo on Printable Tests',
      'Audio Listening Tracks & Speaking Pronunciation AI',
      'Priority Teacher Support (under 2 hrs)'
    ]
  },
  {
    id: 'school-campus',
    name: 'School & Campus License',
    tagline: 'Complete institutional solution with LMS sync, admin oversight, and localized curriculum.',
    monthlyPrice: 49,
    annualPrice: 39,
    ctaText: 'Contact Academic Sales',
    targetUser: 'Schools, Districts & Language Academies',
    features: [
      'All Pro Educator features for entire faculty',
      'Google Classroom, Canvas & Schoology LMS Sync',
      'Institutional Admin Dashboard & Department Analytics',
      'Custom Curriculum & Standard Mapping (IB, Cambridge, Local)',
      'Dedicated Teacher Training Workshops & Onboarding',
      'Custom TOEFL & Placement Mock Exam Creator',
      'FERPA, COPPA & GDPR Student Privacy Compliance SLA',
      'Dedicated Account Manager & 24/7 Priority Support'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Grading & AI',
    question: 'How accurate is the CMC Network AI Auto-Grading engine for TOEFL?',
    answer: 'Our auto-grading engine is fine-tuned on hundreds of thousands of certified TOEFL Primary, Junior, and iBT evaluator rubrics. It evaluates grammar, lexical range, coherence, syntax, and task completion with a 98.6% correlation to certified human examiner scores. Teachers retain full manual override control with customizable comment snippets.'
  },
  {
    id: 'faq-2',
    category: 'Platform',
    question: 'Can I upload my existing paper worksheets or PDF files?',
    answer: 'Yes! CMC Network includes a built-in Smart OCR Worksheet Uploader. Simply upload your PDF, scanned handout, or picture of a textbook page. Our platform automatically extracts text, identifies questions, formats answer keys, and converts static sheets into interactive, auto-graded digital assignments.'
  },
  {
    id: 'faq-3',
    category: 'Curriculum',
    question: 'What age groups and language proficiency levels do you cover?',
    answer: 'Creative Minds Network covers learners of all ages: Pre-Kid (ages 4-6 phonics & early literacy), Kid Program (Grades 1-6 grammar & vocabulary foundation), TOEFL Junior & Primary prep, and Upper Middle/High School academic English prep (CEFR levels Pre-A1 through C1). We also offer dual-language support in English, Chinese, and Khmer.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & Schools',
    question: 'Is there a free tier for teachers who want to try the platform?',
    answer: 'Absolutely. Individual educators can use our Starter plan 100% free with no credit card required. You get 60 student slots, monthly auto-graded tests, and instant access to our core worksheet library forever.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Schools',
    question: 'How do school campus licenses work with existing Learning Management Systems?',
    answer: 'School licenses support one-click Single Sign-On (Google Workspace, Microsoft Education) and automated gradebook sync with Google Classroom, Canvas, Schoology, and Clever. No duplicate data entry required.'
  },
  {
    id: 'faq-6',
    category: 'Grading & AI',
    question: 'Is student personal data protected and privacy-compliant?',
    answer: 'Yes. CMC Network strictly adheres to FERPA, COPPA, and GDPR regulatory standards. Student student responses are encrypted end-to-end, anonymized during evaluation, and never used to train public commercial AI models.'
  }
];

export const INTERACTIVE_TOEFL_SAMPLES = [
  {
    id: 'sample-1',
    title: 'Middle School TOEFL Reading Diagnostic',
    level: 'CEFR B1 (Intermediate)',
    question: 'Read the short excerpt on "Ocean Ecosystems" and summarize the author’s primary argument in 2-3 sentences.',
    studentSubmission: 'The ocean has deep vents where animals live without sun. They make energy from chemicals instead of plants doing photosynthesis. This shows life can survive in very harsh conditions.',
    aiScore: {
      overall: '8.8 / 10',
      cefr: 'B2 Proficient',
      grammar: 92,
      coherence: 95,
      vocabulary: 88,
      feedback: 'Excellent synthesis of the core scientific concept. Sentence variety is strong with accurate use of technical terms ("chemosynthesis", "photosynthesis"). Minor opportunity: combine sentence 1 and 2 with a subordinate clause for higher academic flow.'
    }
  },
  {
    id: 'sample-2',
    title: 'Prefix & Suffix Contextual Application',
    level: 'CEFR A2 (Elementary / Kid Program)',
    question: 'Change the base word "care" using prefixes/suffixes to complete: "She was very ______ when crossing the street, but her brother was ______ and lost his ball."',
    studentSubmission: 'She was very careful when crossing the street, but her brother was careless and lost his ball.',
    aiScore: {
      overall: '10 / 10',
      cefr: 'A2+ Target Met',
      grammar: 100,
      coherence: 100,
      vocabulary: 100,
      feedback: 'Flawless morphological application! Correctly identified "-ful" for attentive behavior and "-less" for lack of attention in contrasting sentence clauses.'
    }
  },
  {
    id: 'sample-3',
    title: 'TOEFL Junior Listening Response',
    level: 'CEFR B2 (Advanced)',
    question: 'Why did the biology teacher instruct students to bring field journals to Friday’s laboratory session?',
    studentSubmission: 'Because the teacher wants them to record observations of butterfly lifecycles right away rather than trying to remember the details afterwards.',
    aiScore: {
      overall: '9.2 / 10',
      cefr: 'B2 High Mastery',
      grammar: 94,
      coherence: 96,
      vocabulary: 90,
      feedback: 'Accurate comprehension of speaker intent. Appropriate causal conjunction ("rather than") and clear distinction between immediate notation and memory recall.'
    }
  }
];
