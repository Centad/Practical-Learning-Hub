import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import audienceImg from "@assets/IMG_1429_1781724800081.jpeg";

export default function Services() {
  const services = [
    {
      title: "Professional Development Workshops",
      description: "Immersive, hands-on sessions for educators and school districts designed to transform math instruction from rote memorization to conceptual understanding.",
      features: ["Fractions on the number line", "Procedural fluency strategies", "Overcoming algebraic obstacles", "Cognitive approaches to teaching"]
    },
    {
      title: "Customized Learning Experiences",
      description: "Tailored consulting programs for schools and organizations looking to revamp their educational approach or support marginalized populations.",
      features: ["Curriculum review and alignment", "Building mathematical identities", "Data-driven instructional shifts", "Long-term coaching partnerships"]
    },
    {
      title: "Corporate & Educational Consulting",
      description: "Strategic guidance translating complex research into actionable strategies for educational technology companies, policy makers, and business leaders.",
      features: ["Research translation", "Product/curriculum advising", "Diversity & inclusion in STEM", "Executive learning strategies"]
    }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/50 text-primary font-medium tracking-wide text-sm mb-6">
                Consulting & Education
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light">
                Bridging the gap between academic research and practical, impactful execution for educators, organizations, and professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="bg-muted/30 rounded-2xl p-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Core Focus Areas</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <img src={audienceImg} alt="Large workshop audience" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-background text-lg font-medium max-w-md">
                  Dr. Witherspoon brings energy and actionable insights to audiences of all sizes.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                The PLS Approach
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">Research-Backed</h4>
                  <p className="text-muted-foreground">Every strategy provided is grounded in current academic research on cognitive development and mathematics education.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">Practically Applicable</h4>
                  <p className="text-muted-foreground">Theory is only useful if it can be executed. We provide tangible tools that can be implemented the very next day.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">Identity Focused</h4>
                  <p className="text-muted-foreground">We focus heavily on building strong mathematical identities, particularly for marginalized populations who have historically been left behind.</p>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-foreground">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
