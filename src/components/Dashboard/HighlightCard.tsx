import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface HighlightCardProps {
  id: string;
  imageUrl: string;
  altText: string;
  className?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ imageUrl, altText, className }) => {
  return (
    <Card className={cn('bg-card border-0 overflow-hidden rounded-lg group', className)}>
      <AspectRatio ratio={16/9}> {/* Adjust ratio as needed, image shows varied ratios, 16:9 is a common default */}
        <img 
          src={imageUrl} 
          alt={altText} 
          className="object-cover w-full h-full group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        />
      </AspectRatio>
      {/* Highlight cards typically don't have much text content directly on them as per notes */}
      {/* Any text overlay is assumed to be part of the image itself or handled by a more complex version */}
    </Card>
  );
};

export default HighlightCard;
