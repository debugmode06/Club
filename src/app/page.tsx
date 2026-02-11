import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Announcements } from "@/components/sections/Announcements";
import { Team } from "@/components/sections/Team";
import { Schedule } from "@/components/sections/Schedule";
import { Rules } from "@/components/sections/Rules";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Team />
      <About />
      <Announcements />
      <Schedule />
      <Rules />
    </div>
  );
}
