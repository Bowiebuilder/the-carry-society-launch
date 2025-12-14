import { useState } from "react";
import CarryLogo from "@/components/CarryLogo";
import PasswordGate from "@/components/PasswordGate";
import ApplicationForm from "@/components/ApplicationForm";

type ViewState = "landing" | "application";

const Index = () => {
  const [view, setView] = useState<ViewState>("landing");

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      
      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-foreground/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-foreground/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-foreground/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-foreground/10" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {view === "landing" ? (
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="animate-fade-in">
              <CarryLogo />
            </div>

            {/* Tagline */}
            <p className="animate-fade-in-delay mt-10 font-serif text-lg md:text-xl text-muted-foreground italic">
              The Private Golf Society for Capital.
            </p>

            {/* Brand philosophy quote */}
            <div className="animate-fade-in-delay-2 mt-16 max-w-lg">
              <blockquote className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                "In Private Equity, 'Carry' is the ultimate reward for performance. 
                In golf, 'Carry' is the distance you cover in the air. Both require 
                precision, power, and the right conditions.
              </blockquote>
              <p className="mt-4 text-accent font-serif text-lg italic">
                We provide the conditions.
              </p>
            </div>

            {/* Password Gate */}
            <div className="mt-16 w-full">
              <PasswordGate onSuccess={() => setView("application")} />
            </div>
          </div>
        ) : (
          <ApplicationForm onBack={() => setView("landing")} />
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 font-sans">
          Est. MMXXIV
        </p>
      </footer>
    </main>
  );
};

export default Index;
