'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, ArrowRight, Check } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Submit to Web3Forms
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: 'New Newsletter Subscription — Groovia',
            from_name: 'Groovia Newsletter',
            email,
            message: `New newsletter subscription request from: ${email}`,
          }),
        });
      } catch (err) {
        console.error(err);
      }
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const socials = [
    { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  ];

  return (
    <footer className="bg-white border-t border-outline-variant" role="contentinfo">
      <div className="max-w-container mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-8">
        {/* Newsletter CTA */}
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-on-primary mb-2">
                Grow your business with insights, tips & product updates
              </h3>
              <p className="text-on-primary/80 text-sm md:text-base">
                Join thousands of Indian local businesses. No spam, unsubscribe anytime.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 h-12 px-4 rounded-md bg-white/95 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-white text-sm"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="h-12 px-6 rounded-md bg-white text-primary font-semibold hover:bg-on-primary-container transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <Check size={18} /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-on-surface-variant leading-relaxed max-w-sm">
              The complete Local Commerce Operating System for Indian businesses. Manage orders, inventory, customers,
              payments & marketing — all from one platform.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> {SITE_CONFIG.phone}
              </a>
              <p className="flex items-center gap-2 text-on-surface-variant">
                <MapPin size={16} className="text-primary" /> {SITE_CONFIG.city}, {SITE_CONFIG.country}
              </p>
            </div>
          </div>

          <FooterColumn title="Product" links={FOOTER_LINKS.product} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved. Made with care in India.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-on-background mb-4 uppercase tracking-wider">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}