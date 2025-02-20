
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExpertiseCard = ({ icon: Icon, title, description }: ExpertiseCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="mb-4 inline-block rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-rich-black">{title}</h3>
        <p className="text-rich-gray">{description}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
