
'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Removed AnimatedText import as it's no longer used for the tagline under the company name

function RCLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "h-8 w-8 text-primary"} // Default size for footer
    >
      <path d="M10 40V10H22C26.4183 10 30 13.5817 30 18C30 22.4183 26.4183 26 22 26H15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 26L30 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 32C40 36.4183 36.4183 40 32 40C27.5817 40 24 36.4183 24 32V18C24 13.5817 27.5817 10 32 10C36.4183 10 40 13.5817 40 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="#hero" className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Raghuveer Construction Logo" className="h-6 w-6" />
              {/* Reverted to simple text for company name */}
              <span className="font-headline text-2xl font-bold">Raghuveer Construction</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building dreams into reality with precision and passion. Your trusted partner in construction.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Ramdev Gali, Kalandri, Sirohi, Rajasthan-307802</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">95098 31814</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:loharbhawar02@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">loharbhawar02@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear ? `© ${currentYear} Raghuveer Construction. All rights reserved.` : '© Raghuveer Construction. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
