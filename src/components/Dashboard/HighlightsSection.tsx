import React from 'react';
import { cn } from '@/lib/utils';
import HighlightCard, { HighlightCardProps } from './HighlightCard';

interface HighlightsSectionProps {
  className?: string;
}

const highlightsData: HighlightCardProps[] = [
  {
    id: 'highlight-1',
    imageUrl: 'https://placehold.co/600x400/0284c7/ffffff?text=MILLION%2B+VIEWS',
    altText: 'Million+ Views Highlight',
  },
  {
    id: 'highlight-2',
    imageUrl: 'https://placehold.co/600x400/059669/ffffff?text=LIFE+SCIENCE',
    altText: 'Life Science Highlight',
  },
  {
    id: 'highlight-3',
    imageUrl: 'https://placehold.co/600x400/7c3aed/ffffff?text=CHEMICAL+EQUATIONS',
    altText: 'Chemical Equations Highlight',
  },
];

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-8', className)}>
      <h2 className="text-2xl font-bold text-foreground mb-6">This Month's Courses Highlight: Formal And Informal Learning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlightsData.map((highlight) => (
          <HighlightCard key={highlight.id} {...highlight} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
