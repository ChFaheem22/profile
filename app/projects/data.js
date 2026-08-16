export const projects = [
  {
    slug: 'quickserve',
    name: 'QuickServe',
    title: 'QuickServe',
    tagline: 'MERN service-booking platform',
    description:
      'A full-stack web application connecting users with local service providers. Includes authentication, service listings, real-time booking, role-based dashboards, payment method support, and a ratings & reviews system.',
    tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: '/quickserve.png',
    grad: '#2b3dff',
    demo: 'https://frontend-woad-beta-94.vercel.app/',
    github: null,
    hasCaseStudy: true,
  },

  {
    slug: 'drivego',
    name: 'DriveGo',
    title: 'DriveGo',
    tagline: 'Flutter car rental app',
    description:
      'A full-featured mobile car rental ecosystem built with Flutter. Offers real-time vehicle availability, seamless booking flows, and secure identity verification.',
    tools: ['Flutter', 'Dart', 'Firebase Auth', 'Cloudinary'],
    image: '/drivego.png',
    grad: '#121212',
    demo: null,
    github: 'https://github.com/ChFaheem22/flutter.git',
    hasCaseStudy: true,
  },

  {
    slug: 'autosmart-ai',
    name: 'AutoSmart AI',
    title: 'AutoSmart AI',
    tagline: 'AI car recommendation & pricing',
    description:
      'A CustomTkinter desktop app that recommends cars and predicts fair market price using a machine learning model.',
    tools: ['Python', 'CustomTkinter', 'Machine Learning'],
    image: '/autosmart-ai.png',
    grad: '#b5502a',
    demo: null,
    github: null,
    hasCaseStudy: false,
  },

  {
    slug: 'carapp',
    name: 'CarApp',
    title: 'CarApp',
    tagline: 'AI-powered car pricing desktop app',
    description:
      'A Python desktop application with AI-powered car pricing and market analysis.',
    tools: ['Python', 'CustomTkinter', 'Pandas'],
    image: '/carapp.png',
    grad: '#2f6b4f',
    demo: null,
    github: null,
    hasCaseStudy: false,
  },

  {
    slug: 'car-rental-system',
    name: 'Car Rental System',
    title: 'Car Rental System',
    tagline: 'Database-driven rental management',
    description:
      'Complete vehicle rental management system using MySQL and MongoDB.',
    tools: ['MySQL', 'MongoDB'],
    image: '/car-rental-system.png',
    grad: '#5b3a8f',
    demo: null,
    github: null,
    hasCaseStudy: false,
  },

  {
    slug: 'blog-app',
    name: 'Blog App',
    title: 'Blog App',
    tagline: 'Next.js blog application',
    description:
      'Modern blog application focused on clean UI and optimized performance.',
    tools: ['HTML', 'CSS', 'React.js', 'Next.js'],
    image: '/blog-app.png',
    grad: '#43506b',
    demo: 'https://blog-phi-blush-60.vercel.app/',
    github: null,
    hasCaseStudy: false,
  },
];

export const caseStudies = {
  quickserve: {
    title: 'QuickServe',
    tagline: 'A MERN-stack platform connecting customers with local service providers',
    role: 'Full-stack developer (solo)',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    demo: 'https://frontend-woad-beta-94.vercel.app/',
    github: null,
    problem:
      'Booking a local service provider — a plumber, electrician, tutor, or similar — usually happens through word of mouth or scattered listings with no reliable way to check availability, compare providers, or leave feedback after the job is done.',
    solution:
      'QuickServe gives customers a single place to browse service listings, book a provider in real time, and pay through a supported payment method. Providers get a dashboard to manage incoming bookings, separate from the customer-facing side, so each role only sees what it needs.',
    features: [
      'Authentication with role-based access for customers and providers',
      'Service listings with real-time booking',
      'Separate dashboards for customers and service providers',
      'Payment method support added on top of the original booking flow',
      'A ratings & reviews system so customers can rate completed jobs',
    ],
    challenges:
      'The trickiest part was extending an already-working booking flow with payments and reviews without breaking existing behavior — that meant carefully mapping out how a booking\'s state (pending → confirmed → completed → reviewed) should flow through both the API and the UI, and keeping the customer and provider dashboards in sync with the same underlying data.',
    testing:
      'To validate the backend thoroughly, I wrote a white-box testing document covering 70 test cases across 6 different testing techniques as part of an academic deliverable — a good discipline for catching edge cases that manual clicking through the app tends to miss.',
    lessons:
      'Building the ratings/reviews and payment features on top of an existing schema (rather than designing everything upfront) was a good lesson in how much easier extensions are when the data model anticipates future fields, even loosely.',
  },
  drivego: {
    title: 'DriveGo',
    tagline: 'A cross-platform mobile car rental app built with Flutter',
    role: 'Mobile developer (solo)',
    stack: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloudinary'],
    demo: null,
    github: 'https://github.com/ChFaheem22/flutter.git',
    problem:
      'Traditional car rental services involve a lot of friction — calling around, uncertain availability, and manual identity checks — that a mobile-first, self-serve flow can remove.',
    solution:
      'DriveGo is a Flutter app that shows real-time vehicle availability and lets a user go from browsing to a confirmed booking in a few taps, with identity verification handled in-app instead of at a counter.',
    features: [
      'Real-time vehicle availability',
      'End-to-end booking flow, from selection to confirmation',
      'Secure identity verification during sign-up',
      'Firebase Authentication for user accounts',
      'Cloudinary for handling uploaded documents/images',
    ],
    challenges:
      'Coordinating Firebase Auth state with the rest of the app\'s navigation — making sure a user only reaches booking screens once they\'re properly verified — required careful handling of async auth state instead of assuming it resolves instantly.',
    testing: null,
    lessons:
      'Working across a full mobile booking flow, rather than a single screen or feature, gave a much clearer picture of how state (auth, availability, booking status) needs to be threaded consistently through an entire app rather than handled locally per screen.',
  },
};
