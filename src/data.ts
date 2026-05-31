import { ServiceCard, StatItem, PortfolioProject, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'wordpress',
    icon: 'Globe',
    title: 'Premium WordPress Websites',
    description: 'Pixel-perfect Elementor designs, fast-loading, SEO-optimized, mobile-responsive websites built to convert.',
    tags: ['Elementor Pro', 'WooCommerce', 'SEO', 'Speed Optimization'],
    gradient: 'from-blue-600/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'whatsapp',
    icon: 'MessageSquare',
    title: 'WhatsApp Business API',
    description: 'Automate customer communication, send bulk messages, integrate CRM, and grow sales through WhatsApp.',
    tags: ['WABA', 'Cloud API', 'CRM Integration', 'Auto-Reply'],
    gradient: 'from-emerald-600/20 via-emerald-500/10 to-transparent'
  },
  {
    id: 'tidio',
    icon: 'Bot',
    title: 'Tidio Chatbot Automation',
    description: 'Smart chatbots that qualify leads, answer FAQs, and book appointments 24/7 without human intervention.',
    tags: ['Tidio', 'AI Chatbot', 'Lead Gen', 'Live Chat'],
    gradient: 'from-indigo-600/20 via-indigo-500/10 to-transparent'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-1',
    value: '50+',
    label: 'Projects Completed',
    icon: 'Briefcase'
  },
  {
    id: 'stat-2',
    value: '100%',
    label: 'Client Satisfaction',
    icon: 'Users'
  },
  {
    id: 'stat-3',
    value: '3',
    label: 'Core Super-Skills',
    icon: 'Award'
  },
  {
    id: 'stat-4',
    value: '24/7',
    label: 'Expert Support',
    icon: 'Clock'
  }
];

export const BENEFITS_DATA: string[] = [
  'Custom high-converting design tailored to your specific industry',
  'Fully responsive layouts optimized for all mobile, tablet, and desktop screens',
  'Automated lead qualification and CRM sync so you never miss another deal',
  'Professional speed audits for lightning-fast PageSpeed loading times',
  'Fully documented code and post-delivery maintenance guidance'
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'port-1',
    title: 'Aura Luxury Boutique Store',
    category: 'WordPress (Elementor) Development',
    tags: ['Elementor Pro', 'WooCommerce', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#live-demo'
  },
  {
    id: 'port-2',
    title: 'Zenith Real Estate Helper',
    category: 'WhatsApp API Integration',
    tags: ['WABA API', 'Node.js', 'HubSpot'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#live-demo'
  },
  {
    id: 'port-3',
    title: 'Nova SaaS Smart Chatbot',
    category: 'Chatbot Automation',
    tags: ['Tidio Chatbot', 'Lead Gen', 'Dialogflow'],
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#live-demo'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Founder',
    company: 'Lumina Spa',
    rating: 5,
    review: 'Highly recommended! They built our Elementor WooCommerce site in record time and connected WhatsApp CRM so we never miss a lead again.',
    initials: 'SJ',
    avatarBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Operations Director',
    company: 'Vortex SaaS',
    rating: 5,
    review: 'Our custom Tidio chatbot qualifies leads 24/7. It has transformed our sales pipeline and reduced human response time by over 90%.',
    initials: 'MV',
    avatarBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  },
  {
    id: 'test-3',
    name: 'Aisha Rahal',
    role: 'Marketing Lead',
    company: 'Hale Organic',
    rating: 5,
    review: 'Exceptional quality of work and communication! The WhatsApp automation has doubled our repeat customer sales and engagement.',
    initials: 'AR',
    avatarBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
  }
];
