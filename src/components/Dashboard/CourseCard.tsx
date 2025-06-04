import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle } from 'lucide-react';

export interface CourseCardProps {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  lessonsCount: number;
  isPaid: boolean;
  courseUrl: string;
  category?: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  title,
  author,
  lessonsCount,
  isPaid,
  courseUrl,
  category,
  className,
}) => {
  return (
    <Card className={cn('bg-card border-0 overflow-hidden rounded-lg group', className)}>
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </AspectRatio>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-sm flex items-center space-x-1.5">
          <BookOpen className="h-3 w-3" />
          <span>{lessonsCount} lessons</span>
        </div>
        {category && (
            <Badge variant="secondary" className="absolute top-2 left-2 bg-black/50 text-white border-none text-xs">
                {category}
            </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-md font-semibold text-card-foreground leading-tight">
          <a href={courseUrl} className="hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded">
            {title}
          </a>
        </h3>
        <div className="flex items-center text-xs text-secondary-foreground space-x-1.5">
          <span>{author}</span>
          <CheckCircle className="h-3 w-3 text-muted-foreground" />
          <span>Course</span>
        </div>
        <div className="flex items-center justify-between pt-1">
            {isPaid ? (
                <p className="text-xs font-medium text-accent-secondary">Pay to watch</p>
            ) : (
                <p className="text-xs font-medium text-green-500">Free</p>
            )}
        </div>
        <a 
            href={courseUrl} 
            className="block text-sm text-secondary-foreground hover:text-foreground focus:outline-none focus:ring-1 focus:ring-ring rounded mt-1"
        >
            View full course
        </a>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
