import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import classImg from "@assets/IMG_1430_1781724800082.jpeg";
import speakingImg from "@assets/IMG_1427_1781724800077.jpeg";

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
                About Dr. Witherspoon
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                An educator, researcher, and advocate dedicated to making mathematics accessible, meaningful, and transformative for all learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="sticky top-32">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mb-6">
                  <img src={speakingImg} alt="Dr. Witherspoon presenting at a conference" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                  <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Credentials</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Ph.D. in Mathematics Education</li>
                    <li>Associate Professor, University of Alabama at Birmingham</li>
                    <li>Former Classroom Teacher & Math Coach</li>
                    <li>International Speaker</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
              <h2>A Fervent Dedication to Deep Understanding</h2>
              <p>
                Dr. Taajah Felder Witherspoon is an Associate Professor at the University of Alabama at Birmingham, specializing in mathematics education. With a fervent dedication to fostering deep understanding in students, she prioritizes providing opportunities for them to construct knowledge through reasoning, particularly in the realms of multiplication and fractions.
              </p>
              <p>
                Drawing from her rich background as a classroom teacher and math coach, Dr. Witherspoon has honed her teaching philosophy and beliefs. She understands what works in theory and, more importantly, what works in a vibrant, unpredictable classroom.
              </p>

              <h2>Research & Focus Areas</h2>
              <p>
                Her research endeavors have centered around enhancing students' comprehension of fractions on the number line and facilitating procedural fluency in fractional reasoning, while also investigating potential obstacles to learning algebra. 
              </p>
              <p>
                She doesn't just look at how math is taught—she looks at how it is cognitively processed. By decoding the "why" behind mathematical struggles, she empowers educators to intervene effectively.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 bg-muted/20 rounded-r-lg italic font-serif text-2xl text-foreground">
                "We must provide opportunities for students to construct knowledge through reasoning, shifting from pure memorization to deep conceptual understanding."
              </blockquote>

              <h2>Empowering Marginalized Learners</h2>
              <p>
                Most recently, Dr. Witherspoon has spearheaded innovative initiatives aimed at supporting marginalized populations in developing a strong mathematical identity. She believes that every student, regardless of background, deserves to see themselves as capable mathematicians.
              </p>
              
              <div className="mt-12 rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-[21/9]">
                <img src={classImg} alt="Dr. Witherspoon teaching internationally" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-center text-muted-foreground mt-4 italic">
                Dr. Witherspoon engaging with students in a South African classroom, bringing her research into global practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
