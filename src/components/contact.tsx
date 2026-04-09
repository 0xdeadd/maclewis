"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.projectType = projectType;

    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-mac-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3">
            REQUEST A QUOTE
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Tell us about your project. We&apos;ll get back to you within one
            business day.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Quote Request Received
            </h3>
            <p className="text-white/60">
              We&apos;ll be in touch within one business day. For urgent
              requests, call us directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(770) 555-0100"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/80">Project Type *</Label>
                <Select
                  value={projectType}
                  onValueChange={(v) => setProjectType(v ?? "")}
                  required
                >
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clearing">Clearing</SelectItem>
                    <SelectItem value="grading">Grading</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="concrete">Concrete</SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-white/80">
                  Project Location *
                </Label>
                <Input
                  id="location"
                  name="location"
                  required
                  placeholder="City or county"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/80">
                Project Details
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about the project — acreage, timeline, anything that helps us quote accurately."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-mac-red hover:bg-mac-red/90 text-white text-lg font-bold py-6"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
