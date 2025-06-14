
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  dataAiHint: string;
};

export function ProjectCard({ imageUrl, title, description, dataAiHint }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="font-body text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
