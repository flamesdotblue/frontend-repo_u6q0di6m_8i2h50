import React from 'react';
import { Phone, MessageCircle, Mail, Globe, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const LinkButton = ({ href, icon: Icon, label, colorClass = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 rounded-xl bg-slate-900/70 ring-1 ring-white/10 hover:ring-white/20 hover:bg-slate-900/90 transition-colors px-4 py-3 ${colorClass}`}
  >
    <Icon className="h-5 w-5" />
    <span className="text-sm md:text-base font-medium">{label}</span>
  </a>
);

const ContactLinks = ({ phone, whatsapp, email, website, socials = {} }) => {
  const normalizedWhatsApp = whatsapp || phone;
  const waHref = normalizedWhatsApp ? `https://wa.me/${normalizedWhatsApp.replace(/[^\d]/g, '')}` : null;

  return (
    <div className="w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
      {phone && (
        <LinkButton href={`tel:${phone}`} icon={Phone} label={`Call ${phone}`} />
      )}
      {waHref && (
        <LinkButton href={waHref} icon={MessageCircle} label="WhatsApp" colorClass="text-emerald-300" />
      )}
      {email && (
        <LinkButton href={`mailto:${email}`} icon={Mail} label={email} />
      )}
      {website && (
        <LinkButton href={website} icon={Globe} label={website.replace(/^https?:\/\//, '')} />
      )}

      {socials.instagram && (
        <LinkButton href={socials.instagram} icon={Instagram} label="Instagram" />
      )}
      {socials.facebook && (
        <LinkButton href={socials.facebook} icon={Facebook} label="Facebook" />
      )}
      {socials.twitter && (
        <LinkButton href={socials.twitter} icon={Twitter} label="Twitter / X" />
      )}
      {socials.linkedin && (
        <LinkButton href={socials.linkedin} icon={Linkedin} label="LinkedIn" />
      )}
    </div>
  );
};

export default ContactLinks;
