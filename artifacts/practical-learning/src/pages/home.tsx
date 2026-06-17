import { PageTransition } from "@/components/layout/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

import heroImg from "@assets/IMG_1429_1781724800081.jpeg";
import profileImg from "@assets/IMG_1425_1781724800073.jpeg";
import classImg1 from "@assets/IMG_1430_1781724800082.jpeg";
import classImg2 from "@assets/IMG_1431_1781724800084.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent z-10" />
          <img 
            src={heroImg} 
            alt="Dr. Witherspoon presenting to a large audience" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-medium tracking-wide text-sm">
                Empowering Minds. Transforming Education.
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-background">
                Making math <span className="text-primary italic">make sense.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-background/80 leading-relaxed max-w-2xl font-light">
                Practical Learning Solutions translates research into actionable strategies for educators, professionals, and students hungry to grow.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground border-none">
                  <Link href="/contact">Book a Keynote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Link href="/about">Meet Dr. Witherspoon</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Value Prop */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Elevate your knowledge, lifestyle, and professional growth.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                Practical Learning Solutions helps people elevate their potential by researching and learning across topics such as education, travel, dining, health, inspiration, and investment. 
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                We translate complex research into professional development and customized learning experiences that provide practical tools and actionable strategies for personal and business success.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">For Educators</h4>
                    <p className="text-sm text-muted-foreground">Actionable strategies for classroom success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">For Professionals</h4>
                    <p className="text-sm text-muted-foreground">Workshops designed for tangible growth.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src={classImg1} alt="Dr. Witherspoon teaching engaged students" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-background z-20 hidden md:block">
                <img src={classImg2} alt="Students raising hands in classroom" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Witherspoon */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              <div className="md:col-span-2 relative min-h-[400px]">
                <img src={profileImg} alt="Dr. Taajah Felder Witherspoon presenting" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                <div className="text-primary font-bold tracking-widest text-sm uppercase mb-3">The Founder</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Dr. Taajah Felder Witherspoon, PhD</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  An Associate Professor specializing in mathematics education, Dr. Witherspoon brings a fervent dedication to fostering deep understanding in students. Drawing from her rich background as a classroom teacher and math coach, she translates academic research into practical reality.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Specialist in fractional reasoning & procedural fluency
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Champion for marginalized populations in mathematics
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Global speaker and educational consultant
                  </li>
                </ul>
                <div>
                  <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-foreground transition-colors group">
                    Read Full Biography
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expertise in Action</h2>
            <p className="text-background/70 text-lg">
              Delivering high-impact experiences tailored for your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Keynote Speaking",
                desc: "Energetic, research-backed presentations that inspire audiences and shift paradigms around learning.",
                icon: Globe,
                href: "/speaking"
              },
              {
                title: "Professional Development",
                desc: "Workshops designed to give educators practical tools to foster deep understanding in students.",
                icon: GraduationCap,
                href: "/services"
              },
              {
                title: "Consulting",
                desc: "Customized learning experiences and strategic guidance for schools, districts, and organizations.",
                icon: Lightbulb,
                href: "/services"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background/5 border border-background/10 p-8 rounded-2xl hover:bg-background/10 transition-colors"
              >
                <service.icon size={32} className="text-primary mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-background/70 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <Link href={service.href} className="inline-flex items-center gap-2 text-primary hover:text-background transition-colors font-medium">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to transform your learning environment?</h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 font-light">
            Bring Dr. Witherspoon's expertise to your next conference, school district, or professional event.
          </p>
          <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg bg-foreground text-background hover:bg-background hover:text-foreground border-none shadow-xl hover:scale-105 transition-all">
            <Link href="/contact">Inquire About Booking</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
