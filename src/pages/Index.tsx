import React, { useState } from 'react';
import TopHeader from '@/components/Dashboard/TopHeader';
import SidebarNav from '@/components/Dashboard/SidebarNav';
import CoursesSection from '@/components/Dashboard/CoursesSection';
import HighlightsSection from '@/components/Dashboard/HighlightsSection';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const IndexPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* TopHeader is fixed, height h-16 (4rem), z-index 50 */}
      <TopHeader onToggleSidebar={toggleSidebar} />

      {/* Container for Sidebar and Main Content, sits below TopHeader */}
      <div className="flex flex-1 overflow-hidden pt-16"> 
        {/* SidebarNav Container */}
        {/* This div controls the fixed positioning, animation, and visibility of the sidebar */}
        <div
          className={cn(
            'fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 bg-sidebar transition-all duration-300 ease-in-out overflow-hidden',
            // Logic for sidebar visibility and width:
            // When open: Full width (w-64) and visible (translate-x-0).
            // When closed:
            //   - On small screens (<sm): Still w-64 but translated off-screen to the left (-translate-x-full) for slide-out effect.
            //   - On medium screens and up (sm+): Collapsed to w-0 and remains in place (sm:translate-x-0), main content adjusts.
            isSidebarOpen 
              ? 'w-64 translate-x-0'
              : 'w-64 -translate-x-full sm:w-0 sm:translate-x-0'
          )}
        >
          {/* SidebarNav component is intrinsically w-64 wide. 
              It will be clipped by parent's overflow-hidden if parent becomes w-0 (on sm+ screens when closed).
              h-full ensures it takes the full height of its container. */}
          <SidebarNav className="h-full" />
        </div>

        {/* Main Content Area */}
        <main
          className={cn(
            'flex-1 overflow-y-auto transition-all duration-300 ease-in-out',
            'py-6 px-4 sm:px-6 lg:px-8', // Standard padding for content area
            // Adjust left margin based on sidebar state for sm+ screens:
            // If sidebar is open, main content is pushed by w-64 (sm:ml-64).
            // If sidebar is closed (w-0 on sm+), main content takes full width (sm:ml-0).
            // On smaller screens, sidebar is an overlay, so no margin adjustment needed for main content.
            isSidebarOpen ? 'sm:ml-64' : 'sm:ml-0'
          )}
        >
          {/* Optional container to constrain content width */}
          <div className="max-w-7xl mx-auto">
            {/* Page Title Section - e.g., "Courses" with an icon */}
            <div className="mb-8 flex items-center space-x-3 sm:space-x-4">
              <div className="bg-primary p-3 rounded-full flex-shrink-0">
                <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Courses</h1>
            </div>
            
            <CoursesSection />
            <HighlightsSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
