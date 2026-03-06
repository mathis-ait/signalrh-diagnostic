import {
  Scale, Shield, Building2, Users, Activity, Zap,
  Bell, BarChart3, ClipboardList, HelpCircle
} from "lucide-react";

const MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale, Shield, Building2, Users, Activity, Zap,
  Bell, BarChart3, ClipboardList,
};

interface PilierIconProps {
  name: string;
  className?: string;
}

export function PilierIcon({ name, className = "w-4 h-4" }: PilierIconProps) {
  const Icon = MAP[name] ?? HelpCircle;
  return <Icon className={className} />;
}
