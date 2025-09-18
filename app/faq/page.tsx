import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Frequently Asked Questions</h1>
                  <p className="text-neutral-400 text-lg">
                    Answers to common questions about our technology support and business solutions.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. How fast can you get new employees set up?
                  </h2>
                  <p className="text-neutral-300">
                    We can have new hires ready to work on Day 1. This includes email setup, device configuration, 
                    shared folder access, and all necessary apps—typically completed in under a day.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. What's your response time for tech support?</h2>
                  <p className="text-neutral-300">
                    Our "one call and it's fixed" approach means most issues are resolved within hours, not days. 
                    We handle everything from printer problems to weird computer glitches without derailing your workday.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Will we lose emails during a domain migration?
                  </h2>
                  <p className="text-neutral-300">
                    Never. We ensure zero-loss email migrations with clean cutovers to professional work email on your domain. 
                    No downtime, no bounce backs, and bulletproof deliverability with proper SPF/DKIM/DMARC setup.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. How do you handle file sharing and collaboration?</h2>
                  <p className="text-neutral-300">
                    We set up shared drives and team spaces that "just work." Everyone finds the right file the first time, 
                    with clear access rules to protect sensitive documents while keeping projects moving.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Can you help with workflow automation?</h2>
                  <p className="text-neutral-300">
                    Absolutely. We create automatic reminders and alerts tied to due dates and milestones, plus 
                    inbox-to-task automations that turn emails into trackable to-dos and weekly summaries.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. What about security without killing productivity?
                  </h2>
                  <p className="text-neutral-300">
                    We set up MFA and least-privilege access without slowing down your team. Plus phishing-resistant 
                    email settings and simple team training to reduce risk while maintaining efficiency.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. How do you handle documentation and ownership?</h2>
                  <p className="text-neutral-300">
                    We create easy SOPs and checklists so processes survive vacations and turnover. Everything is clearly 
                    documented with "who owns what" mapped out—no more tickets bouncing around.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Can you help with app launches and updates?
                  </h2>
                  <p className="text-neutral-300">
                    Yes. We get your internal tools or portals live quickly with proper deployment, versioning, and 
                    easy updates. Clear staging to production processes ensure changes don't break what's already working.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Do you work with ecommerce and retail operations?
                  </h2>
                  <p className="text-neutral-300">
                    We support clean product listings, consistent data, and smoother vendor workflows with retailers. 
                    Clear placement and reporting so you know what's moving and why.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. How do we get started?</h2>
                  <p className="text-neutral-300">
                    Simply{" "}
                    <a href="/contact" className="text-lime-300 underline">
                      contact us
                    </a>{" "}
                    with your tech challenges and we'll show you how to solve them. We'll get back to you within 24 hours.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
