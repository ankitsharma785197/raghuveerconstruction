
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
// Removed AnimatedText import as it's no longer used here

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function RCLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "h-6 w-6 text-primary"}
    >
      <path d="M10 40V10H22C26.4183 10 30 13.5817 30 18C30 22.4183 26.4183 26 22 26H15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 26L30 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 32C40 36.4183 36.4183 40 32 40C27.5817 40 24 36.4183 24 32V18C24 13.5817 27.5817 10 32 10C36.4183 10 40 13.5817 40 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#hero" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Raghuveer Construction Logo" className="h-6 w-6" />
          <span className="font-headline text-2xl font-bold text-foreground">Raghuveer Construction</span>
        </Link>
          <div className="hidden md:flex h-full w-auto">&nbsp;</div>
          <div className="md:hidden h-10 w-10">&nbsp;</div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 max-w-screen-2xl items-center justify-between">
      <Link href="#hero" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Raghuveer Construction Logo" className="h-6 w-6" />
          <span className="font-headline text-2xl font-bold text-foreground">Raghuveer Construction</span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center relative group text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <SheetClose asChild>
                  <Link href="#hero" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Raghuveer Construction Logo" className="h-6 w-6" />
                    <span className="font-headline text-2xl font-bold text-foreground">Raghuveer Construction</span>
                  </Link>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    {currentYear ? `© ${currentYear} Raghuveer Construction` : '© Raghuveer Construction'}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
