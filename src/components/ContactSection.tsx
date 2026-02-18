import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  User,
  Tag,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const reservationSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(50, "First name is too long"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters").max(50, "Last name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type FormData = z.infer<typeof reservationSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const result = reservationSchema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: FormErrors = {};
    result.error.errors.forEach((e) => {
      const key = e.path[0] as keyof FormData;
      if (!fieldErrors[key]) fieldErrors[key] = e.message;
    });
    setErrors(fieldErrors);
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix the errors below",
        description: "Some fields need your attention before we can send your request.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Simulate async send
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setForm(initialForm);
    setErrors({});

    toast({
      title: "Reservation Request Sent!",
      description: "Thank you! Our team will get back to you within 24 hours.",
    });
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition ${
      errors[field] ? "border-red-400 focus:ring-red-400/30" : "border-border focus:ring-lounge-gold/40"
    }`;

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="divider-ornament font-body text-xs font-semibold text-lounge-gold tracking-widest uppercase mb-4 inline-block">
            Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">Find Us in Juba</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base font-light">
            We'd love to hear from you. Reach out to book, enquire, or simply say hello — our team is always ready to
            assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: ["Hai Referendum", "Juba, South Sudan"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+211 9222 333 303"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["boulevardresortlimited@gmail.com"],
              },
              {
                icon: Clock,
                title: "Opening Hours",
                lines: ["Mon – Fri: 8:00 AM – 11:00 PM", "Sat – Sun: 9:00 AM – Midnight"],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-5 p-5 rounded-2xl bg-card shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-lounge-gold/15">
                  <Icon size={18} className="text-lounge-gold" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm mb-1">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="font-body text-muted-foreground text-sm">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-2 flex items-center gap-4">
              <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Follow us</span>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Facebook, href: "https://web.facebook.com/boulevardloungelimited", label: "Facebook" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-lounge-gold hover:bg-lounge-gold/10 transition-all duration-200 text-muted-foreground hover:text-lounge-gold"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="bg-card rounded-3xl shadow-card border border-border p-8">
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">Make a Reservation</h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className={`${inputClass("firstName")} pl-10`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="flex items-center gap-1 text-xs text-red-500 font-body mt-1">
                      <AlertCircle size={11} />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className={`${inputClass("lastName")} pl-10`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="flex items-center gap-1 text-xs text-red-500 font-body mt-1">
                      <AlertCircle size={11} />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${inputClass("email")} pl-10`}
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-red-500 font-body mt-1">
                    <AlertCircle size={11} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                  Service Interested In
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                    <Tag size={16} />
                  </div>
                  <select name="service" value={form.service} onChange={handleChange} className={`${inputClass("service")} pl-10`}>
                    <option value="">Select a service...</option>
                    <option>Spa Treatment</option>
                    <option>Pool & Bar</option>
                    <option>Event / Catering</option>
                    <option>Dining Reservation</option>
                    <option>Ladies' Night</option>
                  </select>
                </div>
                {errors.service && (
                  <p className="flex items-center gap-1 text-xs text-red-500 font-body mt-1">
                    <AlertCircle size={11} />
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none text-muted-foreground">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us what you need..."
                    className={`${inputClass("message")} pl-10 resize-none`}
                  />
                </div>
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-red-500 font-body mt-1">
                    <AlertCircle size={11} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full font-body font-semibold gradient-cta text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-card text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
