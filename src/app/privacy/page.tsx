import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Database, Lock, Mail, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy matters to us. Here's how we protect your data.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Privacy Overview</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  WanderWhere creates a Supabase account for each signed-in traveler. We store essentials only: display name, email, profile photo, saved trips, saved places, AI itinerary prompts, and help-center messages.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Optional data you enter (notes, lists, feedback) stays in Supabase under your user ID. You can request export or deletion any time by emailing{" "}
                  <a href="mailto:Wanderwheree@gmail.com" className="text-primary hover:underline font-medium">
                    Wanderwheree@gmail.com
                  </a>
                  ; records are purged from backups within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Essential Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Display name</li>
                      <li>Email address</li>
                      <li>Profile photo</li>
                      <li>Saved trips and places</li>
                      <li>AI itinerary prompts</li>
                      <li>Help-center messages</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Optional Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Personal notes</li>
                      <li>Custom lists</li>
                      <li>User feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use third-party services strictly for operations. No advertising SDKs or trackers are embedded, and we don't sell or share data with marketers.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h3 className="font-semibold mb-1">Supabase</h3>
                    <p className="text-sm text-foreground/70">Authentication, database, and file storage</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h3 className="font-semibold mb-1">Expo Push Notifications</h3>
                    <p className="text-sm text-foreground/70">Optional push notifications (only if you opt in)</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h3 className="font-semibold mb-1">Resend</h3>
                    <p className="text-sm text-foreground/70">In-app help requests reach us via email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="space-y-4 text-foreground/80">
                  <p className="leading-relaxed">
                    All traffic between the app and Supabase/Resend is encrypted using TLS (Transport Layer Security), and Supabase encrypts data at rest.
                  </p>
                  <p className="leading-relaxed">
                    Access to production data is limited to the WanderWhere engineering team. We implement industry-standard security practices to protect your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <div className="space-y-4 text-foreground/80">
                  <p className="leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Request a copy of your data (data export)</li>
                    <li>Request deletion of your data</li>
                    <li>Update or correct your information</li>
                    <li>Opt out of push notifications at any time</li>
                  </ul>
                  <p className="leading-relaxed">
                    To exercise any of these rights, email us at{" "}
                    <a href="mailto:Wanderwheree@gmail.com" className="text-primary hover:underline font-medium">
                      Wanderwheree@gmail.com
                    </a>
                    . Records are purged from backups within 30 days of your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Don't Do */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">What We Don't Do</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground/80">The app currently does not request precise location or collect analytics</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground/80">If you decline notifications, no push token is stored</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground/80">No advertising SDKs or tracking pixels</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground/80">We never sell or share your data with marketers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-foreground/80 mb-6">
              If you have any questions about our privacy practices, please don't hesitate to reach out.
            </p>
            <a
              href="mailto:Wanderwheree@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 gradient-thailand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
