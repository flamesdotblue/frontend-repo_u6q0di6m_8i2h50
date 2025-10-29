import React from 'react';
import Hero3D from './components/Hero3D';
import ProfileCard from './components/ProfileCard';
import ContactLinks from './components/ContactLinks';
import Footer from './components/Footer';

function App() {
  // Profile data — replace with your details
  const profile = {
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    name: 'Alex Johnson',
    designation: 'Senior Product Designer',
    phone: '+1 234 567 890',
    whatsapp: '+1 234 567 890',
    email: 'alex.johnson@example.com',
    website: 'https://alexjohnson.design',
    socials: {
      instagram: 'https://instagram.com/alexj',
      facebook: 'https://facebook.com/alexj',
      twitter: 'https://twitter.com/alexj',
      linkedin: 'https://linkedin.com/in/alexj',
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero3D />

      <main className="px-6">
        <ProfileCard
          avatarUrl={profile.avatarUrl}
          name={profile.name}
          designation={profile.designation}
        />

        <ContactLinks
          phone={profile.phone}
          whatsapp={profile.whatsapp}
          email={profile.email}
          website={profile.website}
          socials={profile.socials}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
