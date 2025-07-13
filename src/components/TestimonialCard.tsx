
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, company, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
            "{content}"
          </blockquote>
          <div className="mt-auto">
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
