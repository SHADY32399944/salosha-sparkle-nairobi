import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const ServiceCard = ({ title, description, icon: Icon, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-service border-0">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-primary-foreground" />
        </div>
        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardDescription className="text-center text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;