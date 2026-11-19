
export interface Project {
    id: string;
    number: string;
    title: string;
    type: string;
    description: string;
    stack: string[];
    features: string[];
    theme: 'finance' | 'health' | 'streaming';
    liveUrl?: string;
    githubUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'finance',
      number: '01',
      title: 'Finance & Investment Management',
      type: 'Fintech platform',
      theme: 'finance',
  
      description:
        'A modular fintech dashboard for managing financial activity, investment portfolios, transactions, analytics and market information.',
  
      stack: [
        'React.js',
        'JavaScript',
        'Redux Toolkit',
        'Tailwind CSS',
        'React Router',
        'REST APIs',
        'Axios',
        'Recharts',
      ],
  
      features: [
        'Portfolio and account management',
        'Transactions, budgets and payments',
        'Investment analytics and market watchlists',
        'Mutual funds and IPO workflows',
        'Interactive charts, reusable tables and filters',
        'Authentication, protected routes and lazy loading',
      ],
    },
  
    {
      id: 'health',
      number: '02',
      title: 'Hospital Management & Patient Portal',
      type: 'Healthcare platform',
      theme: 'health',
  
      description:
        'A scalable React and TypeScript healthcare experience for doctor discovery, appointment booking and patient self-service.',
  
      stack: [
        'React.js',
        'TypeScript',
        'Vite',
        'React Router',
        'TanStack Query',
        'Tailwind CSS',
        'REST APIs',
      ],
  
      features: [
        'Doctor and department discovery',
        'Doctor availability and time-slot selection',
        'Appointment booking, cancellation and rescheduling',
        'Patient dashboard and profile management',
        'Authentication and query caching',
        'Reusable UI and API state management',
      ],
    },
  
    {
      id: 'streaming',
      number: '03',
      title: 'Netflix Clone',
      type: 'Streaming experience',
      theme: 'streaming',
      liveUrl: "https://kishor6203.github.io/netflix-clone/",
  
      description:
        'A responsive streaming interface with dynamic movie discovery, authentication and content search.',
  
      stack: [
        'React.js',
        'JavaScript',
        'Redux Toolkit',
        'Firebase Auth',
        'TMDB API',
        'Tailwind CSS',
        'React Router',
      ],
  
      features: [
        'Firebase authentication and protected routes',
        'Dynamic movie categories via TMDB',
        'Movie search with debouncing',
        'Reusable movie cards',
        'Responsive streaming interface',
      ],
    },
  ];
  