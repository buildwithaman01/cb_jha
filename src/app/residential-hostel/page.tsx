"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Shield, BookOpen, Coffee, Wifi, Camera, Clock, CheckCircle, HeartPulse } from "lucide-react";

const AMENITIES = [
  { icon: Shield, label: "24/7 Security & CCTV" },
  { icon: BookOpen, label: "Dedicated Study Hall" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Coffee, label: "3 Meals Daily (Veg/Non-Veg)" },
  { icon: HeartPulse, label: "First-Aid & Health Support" },
  { icon: Camera, label: "Warden On-Site Supervision" },
];

const DAILY_ROUTINE = [
  { time: "5:30 AM", activity: "Wake-up & Morning Freshen-up" },
  { time: "6:00 AM", activity: "Optional Morning Walk / Yoga" },
  { time: "7:00 AM", activity: "Breakfast" },
  { time: "8:00 AM", activity: "Coaching Center (Morning Batch)" },
  { time: "1:00 PM", activity: "Lunch" },
  { time: "2:30 PM", activity: "Afternoon Self-Study / Rest" },
  { time: "4:30 PM", activity: "Coaching Center (Evening Batch)" },
  { time: "7:30 PM", activity: "Dinner" },
  { time: "8:30 PM", activity: "Compulsory Study Hours" },
  { time: "10:30 PM", activity: "Lights Out" },
];

function HostelInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact.cbjha@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: "New Residential Hostel Inquiry", ...data }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      alert("Error submitting. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    let text = `*New Residential Hostel Inquiry*\n\n`;
    text += `*Student:* ${data.studentName}\n`;
    text += `*Parent:* ${data.parentName}\n`;
    text += `*Phone:* ${data.phone}\n`;
    text += `*Class & Gender:* ${data.studentClass} - ${data.gender}\n`;
    text += `*Room Type:* ${data.roomType}\n`;
    text += `*From City:* ${data.fromCity}\n`;

    window.open(`https://wa.me/919470808655?text=${encodeURIComponent(text)}`, "_blank");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center border border-[#2E7D5B]/30 bg-[#f5f8f6]">
        <CheckCircle className="w-12 h-12 text-secondary mb-4" />
        <h3 className="font-heading text-xl font-bold text-secondary mb-2">Inquiry Received!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">Our residential team will contact you to schedule a visit and confirm availability.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Student Name *</label>
          <input type="text" name="studentName" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Parent/Guardian Name *</label>
          <input type="text" name="parentName" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number *</label>
          <input type="tel" name="phone" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email (optional)</label>
          <input type="email" name="email" className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Student&apos;s Class *</label>
          <select name="studentClass" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
            <option value="">Select class</option>
            {[6,7,8,9,10,11,12].map(c => <option key={c} value={c}>Class {c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Gender *</label>
          <div className="flex gap-6 h-11 items-center">
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="gender" value={g} required className="accent-secondary" /> {g}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Room Type *</label>
          <select name="roomType" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
            <option value="">Select</option>
            <option value="Shared 2-seater">Shared 2-seater</option>
            <option value="Shared 3-seater">Shared 3-seater</option>
            <option value="Shared 4-seater">Shared 4-seater</option>
            <option value="Single Room">Single Room</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Duration of Stay *</label>
          <select name="duration" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
            <option value="">Select</option>
            <option value="Monthly">Monthly</option>
            <option value="Full Academic Year">Full Academic Year</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Move-in Date *</label>
          <input type="date" name="moveInDate" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Food Preference *</label>
          <div className="flex gap-4 h-11 items-center">
            {["Veg", "Non-Veg", "Either"].map((f) => (
              <label key={f} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="foodPref" value={f} required className="accent-secondary" /> {f}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Coming From (City/Town) *</label>
        <input type="text" name="fromCity" required placeholder="e.g. Muzaffarpur, Bhagalpur, Darbhanga..." className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Special Requirements</label>
        <textarea name="notes" rows={3} placeholder="e.g. Medical conditions, dietary restrictions, allergies..." className="w-full p-3 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button type="submit" disabled={submitting} className="flex-1 h-12 bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:bg-secondary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {submitting ? "Submitting..." : "Check Availability"}
        </button>
        <button type="button" onClick={handleWhatsApp} className="flex-1 h-12 bg-[#25D366] text-white font-heading font-semibold text-sm hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0z"/>
          </svg>
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

export default function ResidentialHostelPage() {
  return (
    <div style={{ backgroundColor: "color-mix(in srgb, #2E7D5B 6%, #FAFAF7)" }} className="min-h-screen pb-24">
      {/* Hero */}
      <PageHero
        eyebrow="Residential &amp; Hostel"
        headline="A Home Away"
        highlight="From Home."
        description="A safe, disciplined, and supportive residential environment for students coming from outside Patna. Focus entirely on your studies — we handle the rest."
        variant="green"
      />

      <Container className="mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Content */}
          <div className="lg:col-span-7 space-y-16">

            {/* Hostel Details */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Hostel Details</h2>
              <div className="border border-[#2E7D5B]/20 bg-white divide-y divide-[#2E7D5B]/10">
                {[
                  { label: "Location", value: "Near C.B. Jha Tutorials, Patna (exact address shared on inquiry)" },
                  { label: "Capacity", value: "~40 students (limited seats — early inquiry recommended)" },
                  { label: "Accommodation", value: "Separate wings for boys and girls" },
                  { label: "Room Types", value: "Shared 2/3/4-seater · Single room available at extra cost" },
                  { label: "Meals", value: "3 meals/day included · Veg and Non-Veg options" },
                  { label: "Fee Structure", value: "Monthly basis · Contact for current rates" },
                  { label: "Study Hours", value: "Compulsory 8:30 PM – 10:30 PM daily" },
                  { label: "Visitor Policy", value: "Parents only · Weekends · Prior notice required" },
                ].map((row) => (
                  <div key={row.label} className="flex">
                    <div className="w-40 shrink-0 p-4 bg-[#f5f8f6] text-secondary font-semibold text-sm border-r border-[#2E7D5B]/10">{row.label}</div>
                    <div className="flex-1 p-4 text-sm text-muted-foreground">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Facilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {AMENITIES.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.label} className="flex items-center gap-3 p-4 bg-white border border-[#2E7D5B]/15 hover:border-secondary/40 transition-colors">
                      <div className="w-9 h-9 bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm font-medium text-foreground leading-tight">{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Daily Routine */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Sample Daily Routine</h2>
              <div className="relative">
                <div className="absolute left-[52px] top-4 bottom-4 w-px bg-[#2E7D5B]/15" />
                <div className="space-y-4">
                  {DAILY_ROUTINE.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-24 shrink-0 text-right">
                        <span className="text-xs font-heading font-semibold text-secondary bg-[#f5f8f6] border border-[#2E7D5B]/15 px-2 py-1 inline-block">{item.time}</span>
                      </div>
                      <div className="w-3 h-3 rounded-full border-2 border-secondary bg-white shrink-0 relative z-10" />
                      <p className="text-sm text-foreground/80">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GBP note */}
            <div className="p-5 border border-[#2E7D5B]/30 bg-[#f5f8f6] flex items-start gap-3">
              <span className="text-lg">📍</span>
              <p className="text-sm text-foreground/70">
                For live hostel photos, reviews, and directions, visit our dedicated{" "}
                <span className="font-semibold text-secondary">Google Business Profile</span>
                {" "}— link will be added once the profile is live.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="bg-white border border-[#2E7D5B]/20 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-secondary mb-1">Enquire About Hostel Stay</h3>
                <p className="text-muted-foreground text-xs mb-5">Fill in the details and our residential team will contact you to schedule a visit.</p>
                <HostelInquiryForm />
              </div>

              <a
                href="https://wa.me/919470808655?text=I%27d%20like%20to%20enquire%20about%20the%20hostel%20facility"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-4 p-4 bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group"
              >
                <div className="w-9 h-9 bg-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-800 text-sm">WhatsApp for Quick Queries</p>
                  <p className="text-green-600 text-xs">Fastest way to check room availability</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
