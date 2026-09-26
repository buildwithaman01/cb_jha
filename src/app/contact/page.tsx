"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Inquiry from C.B. Jha Tutorials",
          ...data,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please call us directly.");
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
    
    if (!data.name || !data.phone || !data.message) {
      alert("Please fill in your Name, Phone, and Message before sending via WhatsApp.");
      return;
    }

    let text = `*New Contact Inquiry (C.B. Jha Tutorials)*\n\n`;
    text += `*Name:* ${data.name}\n`;
    text += `*Phone:* ${data.phone}\n`;
    if (data.email) text += `*Email:* ${data.email}\n`;
    text += `*Interested In:* ${data.inquiry}\n`;
    text += `*Message:* ${data.message}\n`;

    window.open(`https://wa.me/919470808655?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-24 pb-14 md:pt-28 md:pb-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <Container className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl">
            Have a question about admissions, home tuition, or staffing? Our team responds within 24 hours.
          </p>
        </Container>
      </section>

      <Container className="mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/8 border border-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    C.B. Jha Tutorials<br />
                    Dhanaut, Ward No. 03<br />
                    Near Premlata Kunj Apartment<br />
                    Mahuabag, Rupaspur<br />
                    Patna, Bihar — 801506
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/8 border border-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Call / WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+919470808655" className="hover:text-accent transition-colors">+91 94708 08655</a><br />
                    Mon – Sat, 9:00 AM to 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/8 border border-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:contact.cbjha@gmail.com" className="hover:text-accent transition-colors">contact.cbjha@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/919470808655?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 bg-[#f0fdf4] border border-green-200 hover:bg-green-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-green-800 text-sm">Chat on WhatsApp</p>
                <p className="text-green-600 text-xs">Fastest response — usually within minutes</p>
              </div>
              <svg className="ml-auto w-4 h-4 text-green-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Google Maps Embed */}
            <div className="mt-8 overflow-hidden border border-border" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCB+Jha+Tutorials!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="C.B. Jha Tutorials location map"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/DjKVL4ccrKGACSgC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-primary text-xs font-medium hover:text-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 border border-border bg-card">
                <CheckCircle className="w-14 h-14 text-secondary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-card border border-border p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-primary mb-1">Send a Message</h3>
                <p className="text-muted-foreground text-sm mb-6">Fill in the details and we&apos;ll reach out promptly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" required
                      className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required
                        className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                      <input type="email" id="email" name="email"
                        className="w-full h-11 px-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-foreground mb-1.5">Interested In *</label>
                    <select id="inquiry" name="inquiry" required
                      className="w-full h-11 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                      <option value="">Select a service</option>
                      <option value="academic-coaching">Academic Coaching</option>
                      <option value="home-tuition">Home Tuition</option>
                      <option value="residential-hostel">Residential &amp; Hostel</option>
                      <option value="school-staffing">School Staffing</option>
                      <option value="other">Other / General Query</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Your Message *</label>
                    <textarea id="message" name="message" required rows={5}
                      className="w-full p-4 border border-input bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 h-12 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      {submitting ? "Sending..." : "Send via Email"}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 h-12 bg-[#25D366] text-white font-heading font-semibold text-sm tracking-wide hover:bg-[#20bd5a] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0z"/>
                      </svg>
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
