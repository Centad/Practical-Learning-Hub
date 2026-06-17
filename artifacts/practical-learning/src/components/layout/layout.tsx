import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col items-start gap-0.5 relative z-50">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              PLS
            </span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-medium">
              Practical Learning Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary relative py-1 ${
                  location === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 font-semibold bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Link href="/contact">Book Dr. Witherspoon</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-28 px-6 pb-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-3xl font-medium ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full w-full bg-primary hover:bg-foreground transition-colors">
                  <Link href="/contact">Book Dr. Witherspoon</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">{children}</main>

      <footer className="bg-secondary text-secondary-foreground py-20 mt-auto border-t border-secondary-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            <div className="md:col-span-2 space-y-6">
              <Link href="/" className="inline-flex flex-col items-start gap-1">
                <span className="font-serif text-3xl font-bold text-primary">PLS</span>
                <span className="text-sm font-sans uppercase tracking-widest text-secondary-foreground/70">
                  Practical Learning Solutions
                </span>
              </Link>
              <p className="text-secondary-foreground/80 max-w-md text-base leading-relaxed">
                Elevating knowledge, lifestyle, and professional growth through practical tools and actionable strategies for personal and business success.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xl font-medium">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xl font-medium">Contact</h4>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li className="flex gap-3">
                  <Mail size={20} className="text-primary shrink-0" />
                  <a href="mailto:info@practicallearningsolutions.com" className="hover:text-primary transition-colors">
                    info@practicallearningsolutions.com
                  </a>
                </li>
                <li>
                  <Button asChild variant="outline" className="mt-4 border-secondary-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary w-full sm:w-auto">
                    <Link href="/contact">Inquire for Booking</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} Practical Learning Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
