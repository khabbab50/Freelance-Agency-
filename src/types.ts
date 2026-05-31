export interface ServiceCard {
  id: string;
  icon: string; // Tailwind class or icon name
  title: string;
  description: string;
  tags: string[];
  gradient: string; // for the glass glow effect
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  initials: string;
  avatarBg: string; // tailwind color class
}

export interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}
