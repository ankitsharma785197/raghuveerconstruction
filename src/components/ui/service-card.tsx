import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground font-body">{description}</p>
      </CardContent>
    </Card>
  );
}
