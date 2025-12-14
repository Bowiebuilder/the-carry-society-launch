import { cn } from "@/lib/utils";

interface CarryLogoProps {
  className?: string;
}

const CarryLogo = ({ className }: CarryLogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Golf ball icon with golden accent */}
      <div className="relative mb-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Dimple pattern */}
          <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="30" cy="18" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
      
      {/* THE CARRY wordmark */}
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] text-foreground">
        THE CARRY
      </h1>
      
      {/* Decorative line */}
      <div className="mt-6 flex items-center gap-4">
        <div className="h-px w-12 bg-accent/60" />
        <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <div className="h-px w-12 bg-accent/60" />
      </div>
    </div>
  );
};

export default CarryLogo;
