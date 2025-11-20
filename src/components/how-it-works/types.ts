import { LucideIcon } from "lucide-react";
import { ClipboardPen, Search, FileSignature, Banknote, Calendar, FileText, Home, Clock, Handshake, Key } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
  timeline: string;
  iconColor: string;
  bgColor: string;
  circleColor: string;
}

// Updated landlord process steps with more consistent, premium colors
export const landlordProcessSteps: ProcessStep[] = [
  {
    title: "Inquiry & Consultation",
    description: "Contact us with your event details. We'll discuss your technical requirements, audience size, and scheduling preferences.",
    icon: ClipboardPen,
    timeline: "Same day response",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "bg-[var(--theme-primary)]"
  },
  {
    title: "Venue Walkthrough",
    description: "Visit our theater for a personalized tour. See the stage, test acoustics, and meet our technical team.",
    icon: Home,
    timeline: "Within 2-3 days",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "theme-accent-bg"
  },
  {
    title: "Confirm Booking",
    description: "Choose your package and dates. Sign the rental agreement with transparent terms and included services clearly outlined.",
    icon: FileSignature,
    timeline: "1-2 days",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "bg-[var(--theme-primary)]"
  },
  {
    title: "Rehearse & Perform",
    description: "Use your complimentary rehearsal time, then take the stage. Our technical team supports you from setup through final curtain.",
    icon: Banknote,
    timeline: "Your event dates",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "theme-accent-bg"
  }
];

// Tenant process steps remain unchanged
export const tenantProcessSteps: ProcessStep[] = [
  {
    title: "Browse Listings",
    description: "Explore our curated selection of premium properties.",
    icon: Search,
    timeline: "Anytime",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "bg-[var(--theme-primary)]"
  },
  {
    title: "Schedule Viewing",
    description: "Book a convenient time to visit properties you like.",
    icon: Calendar,
    timeline: "Same Day",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "theme-accent-bg"
  },
  {
    title: "Apply Online",
    description: "Complete our simple application process.",
    icon: FileText,
    timeline: "10 minutes",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "bg-[var(--theme-primary)]"
  },
  {
    title: "Move In",
    description: "Get your keys and enjoy your new home.",
    icon: Home,
    timeline: "As scheduled",
    iconColor: "text-[var(--theme-primary)]",
    bgColor: "bg-[var(--theme-primary-light)]",
    circleColor: "theme-accent-bg"
  }
];
