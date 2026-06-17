import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic2 } from "lucide-react";
import stageImg from "@assets/IMG_1426_1781724800075.jpeg";
import dataImg from "@assets/IMG_1428_1781724800079.jpeg";

export default function Speaking() {
  const topics = [
    {
      title: "Decoding Dyscalculia",
      subtitle: "Understanding math learning differences",
      description: "A deep dive into the cognitive realities of dyscalculia. This keynote unpacks the science behind severe math difficulties and equips educators with empathetic, effective strategies to support neurodivergent learners."
    },
    {
      title: "Learning Teaching",
      subtitle: "Cognitive approaches to mathematics instruction",
      description: "Shifting the paradigm from 'how to teach' to 'how students learn.' This presentation bridges cognitive science and classroom practice, revealing how the brain processes mathematical concepts."
    },
    {
      title: "Beyond Memorization",
      subtitle: "Fraction sense and number line reasoning",
      description: "Fractions are often the gatekeeper to higher mathematics. Discover research-backed methods for building genuine fraction sense and procedural fluency using number line reasoning."
    },
    {
      title: "Mathematical Identity",
      subtitle: "Supporting marginalized learners",
      description: "How do we help students see themselves as 'math people'? This powerful talk addresses the systemic barriers in math education and provides a framework for building confident, capable learners in marginalized communities."
    },
    {
      title: "The Fluency Trap",
      subtitle: "Procedural fluency vs. conceptual understanding",
      description: "Explore the delicate balance between knowing 'how' to solve a problem and knowing 'why' the solution works, and how to teach for both simultaneously."
    }
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--foreground)) 35%, hsl(var(--foreground) / 0.6) 60%, transparent 85%)' }} />
          <img 
            src={stageImg} 
            alt="Dr. Witherspoon speaking on stage with purple lighting" 
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary bg-primary/20 text-primary font-medium tracking-wide text-sm mb-6">
                <Mic2 size={16} /> Keynote Speaking
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-background mb-6 leading-tight">
                Inspire. Challenge. <span className="text-primary italic">Transform.</span>
              </h1>
              <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light">
                Dynamic, research-backed keynotes that shift paradigms and leave audiences with actionable momentum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Signature Topics</h2>
              <p className="text-lg text-muted-foreground">
                Dr. Witherspoon's presentations are tailored for educators, administrators, and policy makers seeking to elevate mathematical instruction and learning outcomes.
              </p>
            </div>
            <div className="mt-8 md:mt-0 shrink-0">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-foreground">
                <Link href="/contact">Book for Your Event</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {topics.map((topic, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border-b border-border pb-8"
              >
                <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{topic.subtitle}</h4>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{topic.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Appearances */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">Recent Appearances</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <h4 className="font-bold text-lg mb-1">NCTM Conference, New Orleans</h4>
                  <p className="text-muted-foreground text-sm">Keynote Presentation</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <h4 className="font-bold text-lg mb-1">Decoding Dyscalculia University Series</h4>
                  <p className="text-muted-foreground text-sm">Lecture Hall Series</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <h4 className="font-bold text-lg mb-1">Math Cognition Summit</h4>
                  <p className="text-muted-foreground text-sm">Research Presentation: Algebraic Patterns</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={dataImg} alt="Dr. Witherspoon pointing at algebraic pattern data" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <p className="font-serif text-xl italic leading-snug">
                  "Dr. Witherspoon's ability to translate complex data into compelling narrative is unmatched."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
