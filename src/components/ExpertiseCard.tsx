
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExpertiseCard = ({ icon: Icon, title, description }: ExpertiseCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="relative">
        <Icon className="h-8 w-8 text-primary mb-4" />
        <h3 className="mb-3 text-xl font-semibold text-rich-black">{title}</h3>
        <p className="text-rich-gray text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
