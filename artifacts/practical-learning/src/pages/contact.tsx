import { useState } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an area of interest"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      organization: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  }

  return (
    <PageTransition>
      <section className="py-20 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                  Let's Work Together.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Whether you're looking to book a keynote, schedule a professional development workshop, or inquire about consulting, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <a href="mailto:info@practicallearningsolutions.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@practicallearningsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Based in Birmingham, Alabama<br />
                      Available for global travel
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-6">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-primary w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out to Practical Learning Solutions. We'll be in touch shortly to discuss your inquiry.
                    </p>
                    <Button 
                      onClick={() => {
                        form.reset();
                        setIsSubmitted(false);
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Inquiry Form</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="bg-background" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@example.com" type="email" className="bg-background" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization/School</FormLabel>
                              <FormControl>
                                <Input placeholder="Optional" className="bg-background" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Area of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background">
                                    <SelectValue placeholder="Select a topic..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="keynote">Keynote Speaking</SelectItem>
                                  <SelectItem value="workshop">Professional Development Workshop</SelectItem>
                                  <SelectItem value="consulting">Consulting Services</SelectItem>
                                  <SelectItem value="other">Other Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your event, audience, or goals..." 
                                className="min-h-[120px] bg-background resize-y" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-foreground h-14 text-lg mt-4">
                        Submit Inquiry
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
