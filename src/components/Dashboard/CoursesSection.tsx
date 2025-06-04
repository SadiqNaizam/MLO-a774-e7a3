import React from 'react';
import { cn } from '@/lib/utils';
import CourseCard, { CourseCardProps } from './CourseCard';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface CoursesSectionProps {
  className?: string;
}

const coursesData: CourseCardProps[] = [
  {
    id: '1',
    title: 'Conversation Mastery: Communicate with Confidence',
    author: 'Science of People with Vanessa Van Edwards',
    lessonsCount: 26,
    imageUrl: 'https://placehold.co/400x225/1e293b/ffffff?text=Course+1',
    isPaid: true,
    courseUrl: '#',
    category: 'SCIENCE - PEOPLE'
  },
  {
    id: '2',
    title: '3D Printing Technology: Why 3D Printer is a Super Hero?',
    author: "Let's Make Education Simple",
    lessonsCount: 29,
    imageUrl: 'https://placehold.co/400x225/475569/ffffff?text=Course+2',
    isPaid: true,
    courseUrl: '#',
  },
  {
    id: '3',
    title: "'English as a lifestyle' workbook",
    author: 'linguamarina',
    lessonsCount: 4,
    imageUrl: 'https://placehold.co/400x225/64748b/ffffff?text=Course+3',
    isPaid: true,
    courseUrl: '#',
  },
  {
    id: '4',
    title: 'Advanced React Patterns for Enterprise Applications',
    author: 'DevMaster Pro',
    lessonsCount: 45,
    imageUrl: 'https://placehold.co/400x225/1e293b/ffffff?text=Course+4',
    isPaid: true,
    courseUrl: '#',
    category: 'PROGRAMMING'
  },
  {
    id: '5',
    title: 'The Art of Digital Illustration: From Sketch to Masterpiece',
    author: 'PixelPerfect Academy',
    lessonsCount: 30,
    imageUrl: 'https://placehold.co/400x225/475569/ffffff?text=Course+5',
    isPaid: false, // Example of a free course
    courseUrl: '#',
    category: 'ART & DESIGN'
  },
  {
    id: '6',
    title: 'Mastering Financial Markets: A Trader\'s Guide',
    author: 'Capital Gains Institute',
    lessonsCount: 60,
    imageUrl: 'https://placehold.co/400x225/64748b/ffffff?text=Course+6',
    isPaid: true,
    courseUrl: '#',
    category: 'FINANCE'
  },
];

const CoursesSection: React.FC<CoursesSectionProps> = ({ className }) => {
  const [visibleCourses, setVisibleCourses] = React.useState(3);

  const showMoreCourses = () => {
    setVisibleCourses(prev => Math.min(prev + 3, coursesData.length));
  };

  return (
    <section className={cn('py-8', className)}>
      <h2 className="text-2xl font-bold text-foreground mb-6">Paid courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {coursesData.slice(0, visibleCourses).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      {visibleCourses < coursesData.length && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={showMoreCourses} className="w-full sm:w-auto px-8 border-border hover:bg-muted text-foreground">
            Show more
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
