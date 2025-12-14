import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  onBack: () => void;
}

const ApplicationForm = ({ onBack }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    firm: "",
    referral: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Received",
      description: "We will be in touch within 48 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      firm: "",
      referral: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="animate-fade-in w-full max-w-md mx-auto">
      <button
        onClick={onBack}
        className="mb-8 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-[0.15em] uppercase font-sans flex items-center gap-2"
      >
        <span>←</span>
        <span>Back</span>
      </button>

      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
        Request Consideration
      </h2>
      <p className="text-muted-foreground text-sm mb-8 font-sans">
        Membership is by invitation only. Complete this form to request consideration.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-sans">
              First Name
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-sans">
              Last Name
            </label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-sans">
            Email
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@firm.com"
          />
        </div>

        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-sans">
            Firm / Fund
          </label>
          <Input
            name="firm"
            value={formData.firm}
            onChange={handleChange}
            required
            placeholder="Capital Partners"
          />
        </div>

        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-sans">
            Referred By
          </label>
          <Input
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            placeholder="Member name (optional)"
          />
        </div>

        <Button
          type="submit"
          variant="cream"
          size="lg"
          className="w-full mt-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-xs mt-8 font-sans leading-relaxed">
        By submitting, you acknowledge that membership decisions are final and at the sole discretion of The Carry.
      </p>
    </div>
  );
};

export default ApplicationForm;
