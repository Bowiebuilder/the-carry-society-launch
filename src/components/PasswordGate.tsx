import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface PasswordGateProps {
  onSuccess: () => void;
}

const PasswordGate = ({ onSuccess }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState(false);

  // Simple password for demo - in production this would be server-validated
  const VALID_PASSWORD = "CARRY2024";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError(false);

    // Simulate check delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (password.toUpperCase() === VALID_PASSWORD) {
      toast({
        title: "Access Granted",
        description: "Welcome to The Carry.",
      });
      onSuccess();
    } else {
      setError(true);
      toast({
        title: "Access Denied",
        description: "Invalid access code.",
        variant: "destructive",
      });
    }

    setIsChecking(false);
  };

  return (
    <div className="animate-fade-in-delay-3 w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 font-sans text-center">
            Enter Access Code
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="••••••••"
            className={`text-center tracking-[0.3em] ${
              error ? "border-destructive" : ""
            }`}
            required
          />
        </div>

        <Button
          type="submit"
          variant="velvet"
          size="lg"
          className="w-full"
          disabled={isChecking}
        >
          {isChecking ? "Verifying..." : "Request Access"}
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-xs mt-6 font-sans">
        Contact a member for access credentials.
      </p>
    </div>
  );
};

export default PasswordGate;
