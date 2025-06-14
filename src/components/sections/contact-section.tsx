
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion } from 'framer-motion';

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full font-body" disabled={pending}>
      {pending ? <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

const sectionAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.status === 'error') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-secondary"
      variants={sectionAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }} // Changed once: true to once: false
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Have a project in mind or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // Changed once: true to once: false
          >
            <Card className="bg-card">
              <form action={formAction}>
                <CardHeader>
                  <CardTitle className="font-headline">Send Us a Message</CardTitle>
                  <CardDescription className="font-body">
                    Fill out the form and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="font-body">Full Name</Label>
                    <Input id="name" name="name" required aria-describedby="name-error"/>
                    {state.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="font-body">Email Address</Label>
                    <Input id="email" name="email" type="email"  required aria-describedby="email-error"/>
                    {state.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="font-body">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel"  aria-describedby="phone-error"/>
                    {state.errors?.phone && <p id="phone-error" className="text-sm text-destructive">{state.errors.phone.join(', ')}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message" className="font-body">Message</Label>
                    <Textarea id="message" name="message" rows={5} required aria-describedby="message-error"/>
                    {state.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-8 pt-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: false, amount: 0.3 }} // Changed once: true to once: false
          >
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-3">Our Office</h3>
              <div className="flex items-start text-muted-foreground font-body">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>Ramdev Gali,<br />Kalandri, Sirohi-307802<br />Rajasthan</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-3">Call Us</h3>
              <div className="flex items-center text-muted-foreground font-body">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">95098 31814</a>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-3">Email Us</h3>
              <div className="flex items-center text-muted-foreground font-body">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:loharbhawar02@gmail.com" className="hover:text-primary transition-colors">loharbhawar02@gmail.com</a>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm">
              We are available Monday to Saturday, 9 AM to 6 PM PST.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
