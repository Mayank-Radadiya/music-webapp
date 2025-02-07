import FeaturedCourses from "@/components/FeaturedCourses";
import GridPage from "@/components/Grid-page";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import ScrollSection from "@/components/ScrollSection";
import UpcomingWebinars from "@/components/UpcomingWebiners";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96]  antialiased bg-grid-white[0.02]">
    <HeroSection />
    <FeaturedCourses/>
    <ScrollSection /> 
    <GridPage/>
    <UpcomingWebinars/>
    <Instructor/>
   </main>
  );
}
