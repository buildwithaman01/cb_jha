"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { CheckCircle, Clock, FileCheck, Users, Award } from "lucide-react";

const SUBJECTS = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi", "Social Science", "Sanskrit", "Computer Science", "Accountancy", "Economics", "Business Studies", "History", "Geography", "Political Science"];

function SchoolRequestForm() {
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
        body: JSON.stringify({ _subject: "New School Staffing Request", ...data }),
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
    
    let text = `*New School Staffing Request*\n\n`;
    text += `*School:* ${data.schoolName}\n`;
    text += `*Contact:* ${data.contactName}\n`;
    text += `*Phone:* ${data.phone}\n`;
    if (data.email) text += `*Email:* ${data.email}\n`;
    text += `*Required:* ${data.teacherCount} ${data.staffingType} (${data.subjects})\n`;
    text += `*Duration:* ${data.duration} | *Urgency:* ${data.urgency}\n`;

    window.open(`https://wa.me/919470808655?text=${encodeURIComponent(text)}`, "_blank");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center border border-border bg-card">
        <CheckCircle className="w-12 h-12 text-secondary mb-4" />
        <h3 className="font-heading text-xl font-bold text-primary mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">Our institutional team will contact you within 24–48 hours with suitable candidate profiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">School/Institute Name *</label>
          <input type="text" name="schoolName" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Contact Person Name *</label>
          <input type="text" name="contactName" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Designation</label>
          <input type="text" name="designation" placeholder="e.g. Principal, HR, Coordinator" className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number *</label>
          <input type="tel" name="phone" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
        <input type="email" name="email" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">School Address *</label>
        <textarea name="address" required rows={2} className="w-full p-3 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Staffing Type Needed *</label>
        <div className="flex flex-wrap gap-4">
          {["Guest Faculty", "Regular Faculty", "Not Sure"].map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer text-sm">
              <input type="radio" name="staffingType" value={t} required className="accent-accent" />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Subject(s) Required *</label>
        <input type="text" name="subjects" required placeholder="e.g. Mathematics, Physics, English..." className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Number of Teachers Needed *</label>
          <input type="number" name="teacherCount" min="1" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Duration *</label>
          <select name="duration" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all">
            <option value="">Select duration</option>
            <option value="Short-term">Short-term (&lt;1 month)</option>
            <option value="1-3 months">1–3 months</option>
            <option value="6 months">6 months</option>
            <option value="Permanent">Permanent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Urgency *</label>
        <select name="urgency" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all">
          <option value="">Select urgency</option>
          <option value="Immediate">Immediate (within 24–48 hours)</option>
          <option value="Within a week">Within a week</option>
          <option value="Within a month">Within a month</option>
          <option value="Planning ahead">Planning ahead</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Additional Requirements</label>
        <textarea name="notes" rows={3} placeholder="e.g. Board exam crash course, specific syllabus, language preference..." className="w-full p-3 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button type="submit" disabled={submitting} className="flex-1 h-12 bg-accent text-accent-foreground font-heading font-semibold text-sm hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {submitting ? "Submitting..." : "Submit Staffing Request"}
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

function TeacherRegForm() {
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
        body: JSON.stringify({ _subject: "New Teacher Registration (School Staffing)", ...data }),
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
    
    let text = `*New Teacher Registration*\n\n`;
    text += `*Name:* ${data.name}\n`;
    text += `*Phone:* ${data.phone}\n`;
    if (data.email) text += `*Email:* ${data.email}\n`;
    text += `*Qualification:* ${data.qualification}\n`;
    text += `*Level & Subjects:* ${data.level} - ${data.subjects}\n`;
    text += `*Experience:* ${data.experience} Years\n`;

    window.open(`https://wa.me/919470808655?text=${encodeURIComponent(text)}`, "_blank");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center border border-border bg-card">
        <CheckCircle className="w-12 h-12 text-secondary mb-4" />
        <h3 className="font-heading text-xl font-bold text-primary mb-2">Registration Received!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">Our placement team will review your profile and contact you within 3–5 working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
          <input type="text" name="name" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number *</label>
          <input type="tel" name="phone" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
        <input type="email" name="email" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Highest Qualification *</label>
          <input type="text" name="qualification" required placeholder="e.g. M.Sc Mathematics, M.A. English" className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">B.Ed / Teaching Certification *</label>
          <div className="flex gap-6 h-11 items-center">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="hasBEd" value={v} required className="accent-accent" /> {v}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Years of Teaching Experience *</label>
          <input type="number" name="experience" min="0" max="50" required className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Level Qualified For *</label>
          <select name="level" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all">
            <option value="">Select level</option>
            <option value="PRT">PRT (Primary)</option>
            <option value="TGT">TGT (Trained Graduate)</option>
            <option value="PGT">PGT (Post Graduate)</option>
            <option value="PRT & TGT">PRT &amp; TGT</option>
            <option value="TGT & PGT">TGT &amp; PGT</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Subject Specialization *</label>
        <input type="text" name="subjects" required placeholder="e.g. Mathematics, Physics" className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Employment *</label>
          <select name="employmentType" required className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all">
            <option value="">Select</option>
            <option value="Guest">Guest / Visiting</option>
            <option value="Permanent">Permanent</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Current Status</label>
          <select name="currentStatus" className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all">
            <option value="">Select</option>
            <option value="Employed">Employed</option>
            <option value="Looking">Looking for Opportunities</option>
            <option value="Notice Period">Serving Notice Period</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Location *</label>
        <input type="text" name="preferredLocation" required placeholder="e.g. Patna, Kankarbagh area..." className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
      </div>

      <p className="text-xs text-muted-foreground border border-border/60 p-3 bg-muted/30">
        🔒 Your resume and ID are used only for verification and kept strictly confidential.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button type="submit" disabled={submitting} className="flex-1 h-12 bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {submitting ? "Submitting..." : "Register Profile"}
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

export default function SchoolStaffingPage() {
  const [activeTab, setActiveTab] = useState<"school" | "teacher">("school");

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero */}
      <PageHero
        eyebrow="School Staffing"
        headline="Qualified Teachers,"
        highlight="When You Need Them."
        description="Schools face sudden teacher shortages — sick leave, maternity leave, subject-expert gaps. We supply verified Guest and Regular faculty so your classrooms are never without a qualified teacher."
        variant="navy"
      />

      <Container className="mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Content */}
          <div className="lg:col-span-7 space-y-16">

            {/* Two Models */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Two Staffing Models</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-7 border-l-4 border-l-primary border border-border bg-card">
                  <Clock className="w-7 h-7 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Guest / Visiting Faculty</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Short-term leave cover (sick, maternity)", "Board exam crash course specialists", "JEE/NEET guest lecturers", "Subject-specific short assignments", "Available within 24–48 hours"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">›</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 border-l-4 border-l-accent border border-border bg-card">
                  <Award className="w-7 h-7 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Regular / Permanent Faculty</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["PRT – Primary Teacher placements", "TGT – Trained Graduate Teacher", "PGT – Post Graduate Teacher", "Full recruitment & placement service", "Replacement guarantee within 30 days"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">›</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vetting Process */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">Our Vetting Process</h2>
              <div className="space-y-0 divide-y divide-border">
                {[
                  { n: "01", t: "Document Verification", b: "ID proof, educational certificates, and experience letters verified before any interview." },
                  { n: "02", t: "Subject Knowledge Test", b: "Written or oral assessment of subject expertise by our senior educators." },
                  { n: "03", t: "Demo Class / Interview", b: "A live demo class evaluated by our team for teaching methodology and communication." },
                  { n: "04", t: "Background Check", b: "Address verification and reference check with previous employers/institutions." },
                  { n: "05", t: "Placement & Follow-Up", b: "We monitor initial performance and take feedback from the school within the first month." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start py-5">
                    <span className="font-heading text-2xl font-bold text-foreground/10 leading-none shrink-0 mt-1 w-10">{step.n}</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-0.5">{step.t}</h3>
                      <p className="text-sm text-muted-foreground">{step.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Schools Choose Us */}
            <div className="p-8 bg-[#22262B] text-white">
              <h3 className="font-heading text-xl font-bold mb-6 text-accent">Why Schools Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  { icon: <Clock className="w-4 h-4 text-accent shrink-0" />, t: "Fast turnaround — guest faculty within 24–48 hours of request" },
                  { icon: <FileCheck className="w-4 h-4 text-accent shrink-0" />, t: "Pre-vetted pool — no cold candidates, all verified" },
                  { icon: <Users className="w-4 h-4 text-accent shrink-0" />, t: "All levels and subjects covered — Primary to Senior Secondary" },
                  { icon: <CheckCircle className="w-4 h-4 text-accent shrink-0" />, t: "30-day replacement guarantee for all placements" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/70">{item.icon} {item.t}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Forms */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="flex border border-border mb-6">
                <button onClick={() => setActiveTab("school")} className={`flex-1 py-3 text-sm font-heading font-semibold transition-colors ${activeTab === "school" ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`}>
                  Request Faculty
                </button>
                <button onClick={() => setActiveTab("teacher")} className={`flex-1 py-3 text-sm font-heading font-semibold transition-colors ${activeTab === "teacher" ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`}>
                  Register as Teacher
                </button>
              </div>

              <div className="bg-card border border-border p-6 shadow-sm">
                {activeTab === "school" ? (
                  <>
                    <h3 className="font-heading text-xl font-bold text-primary mb-1">Request Faculty for Your School</h3>
                    <p className="text-muted-foreground text-xs mb-5">Our institutional team responds within 24–48 hours.</p>
                    <SchoolRequestForm />
                  </>
                ) : (
                  <>
                    <h3 className="font-heading text-xl font-bold text-primary mb-1">Register as a Teacher</h3>
                    <p className="text-muted-foreground text-xs mb-5">For school placement — PRT, TGT, PGT positions.</p>
                    <TeacherRegForm />
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
