/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Sprout, 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  ChevronRight, 
  Layers, 
  Smartphone, 
  Laptop, 
  Clock, 
  FileText,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react';

import InteractiveShowcase from './components/InteractiveShowcase';
import ExperienceSlider from './components/ExperienceSlider';
import DemoForm from './components/DemoForm';
import { Language, translations } from './data/translations';
import LanguageSelectorModal from './components/LanguageSelectorModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState<Language>('en');
  const [langModalOpen, setLangModalOpen] = useState(false);

  // Smooth scroll handler
  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // Tracking section highlights on scroll
  useEffect(() => {
    // Check if user has stored language preference
    const storedLang = localStorage.getItem('farming_app_lang') as Language;
    if (storedLang && ['en', 'ro', 'hu', 'bg', 'fr', 'de'].includes(storedLang)) {
      setLanguage(storedLang);
    } else {
      // Trigger selection modal on first entry
      setLangModalOpen(true);
    }

    const handleScroll = () => {
      const sections = ['interactive-showcase', 'experience-slider', 'pricing-section', 'demo-request-form'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('farming_app_lang', lang);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-cream-light font-sans text-charcoal-olive selection:bg-olive-sage selection:text-cream-light">
      
      {/* Editorial Header Navigation */}
      <nav className="sticky top-0 z-50 bg-cream-light/85 backdrop-blur-md border-b border-border-warm/60 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with clean Leaf Icon */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-full border border-olive-deep flex items-center justify-center bg-cream-rich text-olive-deep">
              <Sprout size={16} />
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-charcoal-olive">
              Farming <span className="serif-italic font-normal">Management</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <button 
              onClick={() => scrollToAnchor('interactive-showcase')}
              className={`transition hover:text-olive-deep ${activeSection === 'interactive-showcase' ? 'text-olive-deep underline decoration-olive-sage underline-offset-4' : 'text-charcoal-olive/70'}`}
              id="nav-link-showcase"
            >
              {t.navFeatures}
            </button>
            <button 
              onClick={() => scrollToAnchor('experience-slider')}
              className={`transition hover:text-olive-deep ${activeSection === 'experience-slider' ? 'text-olive-deep underline decoration-olive-sage underline-offset-4' : 'text-charcoal-olive/70'}`}
              id="nav-link-experience"
            >
              {t.navWebVsMobile}
            </button>
            <button 
              onClick={() => scrollToAnchor('pricing-section')}
              className={`transition hover:text-olive-deep ${activeSection === 'pricing-section' ? 'text-olive-deep underline decoration-olive-sage underline-offset-4' : 'text-charcoal-olive/70'}`}
              id="nav-link-pricing"
            >
              {t.navPricing}
            </button>
          </div>

          {/* CTA Trigger & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLangModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-charcoal-olive hover:text-olive-deep bg-cream-rich/50 hover:bg-cream-rich border border-border-warm rounded-xl transition duration-200 cursor-pointer"
              title="Change Language"
              id="desktop-lang-switcher-btn"
            >
              <Globe size={14} className="text-olive-deep shrink-0" />
              <span className="uppercase">{language}</span>
            </button>
            <button 
              onClick={() => scrollToAnchor('demo-request-form')}
              className="bg-olive-deep hover:bg-olive-dark text-cream-light text-xs font-bold px-5 py-2.5 rounded-xl transition duration-300 transform hover:scale-103 shadow-sm hover:shadow-md"
              id="header-cta-btn"
            >
              {t.navCta}
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal-olive focus:outline-none"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream-light border-b border-border-warm shadow-md p-6 flex flex-col gap-4 animate-fadeIn">
            <button 
              onClick={() => scrollToAnchor('interactive-showcase')}
              className="text-left font-semibold text-sm text-charcoal-olive/80 hover:text-olive-deep py-2"
            >
              {t.navFeatures}
            </button>
            <button 
              onClick={() => scrollToAnchor('experience-slider')}
              className="text-left font-semibold text-sm text-charcoal-olive/80 hover:text-olive-deep py-2"
            >
              {t.navWebVsMobile}
            </button>
            <button 
              onClick={() => scrollToAnchor('pricing-section')}
              className="text-left font-semibold text-sm text-charcoal-olive/80 hover:text-olive-deep py-2"
            >
              {t.navPricing}
            </button>
            
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between py-2 border-t border-b border-border-warm/40 my-1">
              <span className="text-xs font-semibold text-charcoal-olive/70 uppercase tracking-wider">Language</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLangModalOpen(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-charcoal-olive bg-cream-rich border border-border-warm rounded-lg transition"
              >
                <Globe size={12} className="text-olive-deep" />
                <span className="uppercase">{language}</span>
              </button>
            </div>

            <button 
              onClick={() => scrollToAnchor('demo-request-form')}
              className="bg-olive-deep hover:bg-olive-dark text-cream-light text-sm font-bold py-3 rounded-xl transition mt-2 text-center"
            >
              {t.navCta}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-28 px-6 overflow-hidden">
        {/* Faded Editorial Rolling Farmland Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80" 
            alt="Rolling Farmland and Crop Rows" 
            className="w-full h-full object-cover opacity-35 object-center"
            referrerPolicy="no-referrer"
          />
          {/* Ambient fades to blend flawlessly into our warm cream layout */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream-light via-cream-light/30 to-cream-light/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cream-light/10 via-transparent to-cream-light"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 z-10 animate-fadeIn">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-charcoal-olive tracking-tight leading-none font-medium">
              {t.heroTitle} <br />
              <span className="serif-italic font-normal text-olive-deep">{t.heroTitleSerif}</span> <br />
              {t.heroTitleEnd}
            </h1>

            <p className="text-charcoal-olive/80 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={() => scrollToAnchor('demo-request-form')}
                className="bg-olive-deep hover:bg-olive-dark text-cream-light font-bold text-xs px-6 py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-sm"
                id="hero-primary-btn"
              >
                {t.heroCtaPrimary}
                <ArrowRight size={14} />
              </button>
              <button 
                onClick={() => scrollToAnchor('pricing-section')}
                className="bg-transparent hover:bg-cream-rich border border-olive-deep/60 hover:border-olive-deep text-olive-deep font-bold text-xs px-6 py-3.5 rounded-xl transition duration-300 flex items-center justify-center"
                id="hero-secondary-btn"
              >
                {t.heroCtaSecondary}
              </button>
            </div>
          </div>

          {/* Hero Right Mockup Graphics */}
          <div className="lg:col-span-6 relative flex justify-center items-center z-10">
            {/* Background Soft Shadows */}
            <div className="absolute w-72 h-72 bg-olive-sage/10 rounded-full blur-3xl pointer-events-none -top-10 -left-10"></div>
            
            <div className="relative w-full max-w-md p-4 bg-cream-rich/40 border border-border-warm rounded-3xl shadow-sm animate-float-slow">
              
              {/* Web App preview mockup */}
              <div className="bg-cream-light border border-border-warm rounded-2xl p-4 shadow-sm mb-4">
                <div className="flex items-center justify-between mb-3 border-b border-border-warm/40 pb-2">
                  <span className="text-[10px] font-mono font-bold text-olive-deep">FARM_HQ_NODE_A</span>
                  <span className="w-2 h-2 rounded-full bg-olive-medium animate-pulse"></span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span>North Soil Moisture</span>
                    <span className="text-olive-deep font-bold">42.5% VWC</span>
                  </div>
                  <div className="w-full h-1.5 bg-cream-dark/60 rounded-full overflow-hidden">
                    <div className="h-full bg-olive-deep rounded-full" style={{ width: '42.5%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-charcoal-olive/60 mt-1">
                    <span>Compost Status: Optimal</span>
                    <span>Zone Alpha</span>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup floating over Web Mockup */}
              <div className="absolute -bottom-8 -right-4 w-[160px] bg-cream-light border-[4px] border-charcoal-olive rounded-[24px] shadow-lg p-3 animate-float-medium">
                <div className="w-8 h-2.5 bg-charcoal-olive rounded-full mx-auto mb-2.5 flex items-center justify-center">
                  <span className="w-3 h-0.5 bg-cream-light/40 rounded-full"></span>
                </div>
                <div className="text-[9px] border-b border-border-warm/60 pb-1.5 mb-2 flex items-center justify-between font-mono font-bold text-olive-deep">
                  <span>SQLite Cache</span>
                  <span>100%</span>
                </div>
                <div className="space-y-1 text-[8px] text-charcoal-olive/80">
                  <div className="bg-cream-rich p-1.5 rounded-md border border-border-warm/60 font-semibold">
                    📋 Active Field Task
                  </div>
                  <div className="bg-cream-rich p-1.5 rounded-md border border-border-warm/60 flex items-center justify-between">
                    <span>Barcode Scanner</span>
                    <span className="text-olive-medium font-bold font-mono">ON</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Showcase (Tabbed Features) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <InteractiveShowcase language={language} />
      </section>

      {/* Web vs Mobile Synergy Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <ExperienceSlider language={language} />
      </section>

      {/* Pricing Matrix Section */}
      <section id="pricing-section" className="py-20 px-6 bg-cream-rich/30 border-y border-border-warm/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-olive-medium font-bold uppercase block mb-1">{t.tailoredDeployments}</span>
            <h3 className="text-3xl sm:text-4xl font-display text-charcoal-olive tracking-tight leading-tight">
              {t.pricingTitle}
            </h3>
            <p className="text-charcoal-olive/75 text-sm sm:text-base mt-3">
              {t.pricingSubtitle}
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Tier */}
            <div className="bg-cream-light border border-border-warm rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden">
              <div>
                <h4 className="text-xl font-serif text-charcoal-olive font-medium">{t.pricingStarter}</h4>
                <p className="text-xs text-charcoal-olive/60 mt-2 min-h-[40px]">
                  {t.pricingStarterDesc}
                </p>
                <div className="my-6 flex items-baseline">
                  <span className="text-4xl font-serif font-medium text-charcoal-olive">$120</span>
                  <span className="text-xs text-charcoal-olive/60 font-semibold font-mono ml-1">{t.pricingMonth}</span>
                </div>
                
                <div className="border-t border-border-warm/60 pt-6 space-y-3.5">
                  {t.pricingStarterFeats.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-olive/80">
                      <Check size={14} className="text-olive-deep shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => scrollToAnchor('demo-request-form')}
                className="w-full mt-8 py-3 rounded-xl border border-olive-deep text-olive-deep font-bold text-xs hover:bg-olive-deep hover:text-cream-light transition duration-300"
              >
                {t.pricingGetStarted}
              </button>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="bg-cream-light border-2 border-olive-deep rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-olive-deep text-cream-light font-mono font-bold text-[9px] uppercase px-2.5 py-1 rounded-full tracking-wider">
                {t.mostPopular}
              </div>

              <div>
                <h4 className="text-xl font-serif text-charcoal-olive font-medium">{t.pricingPro}</h4>
                <p className="text-xs text-charcoal-olive/60 mt-2 min-h-[40px]">
                  {t.pricingProDesc}
                </p>
                <div className="my-6 flex items-baseline">
                  <span className="text-4xl font-serif font-medium text-charcoal-olive">$350</span>
                  <span className="text-xs text-charcoal-olive/60 font-semibold font-mono ml-1">{t.pricingMonth}</span>
                </div>
                
                <div className="border-t border-border-warm/60 pt-6 space-y-3.5">
                  {t.pricingProFeats.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-olive/80">
                      <Check size={14} className="text-olive-deep shrink-0 mt-0.5" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => scrollToAnchor('demo-request-form')}
                className="w-full mt-8 py-3 rounded-xl bg-olive-deep text-cream-light font-bold text-xs hover:bg-olive-dark transition duration-300 shadow-sm"
              >
                {t.pricingGetStarted}
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-cream-light border border-border-warm rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden">
              <div>
                <h4 className="text-xl font-serif text-charcoal-olive font-medium">{t.pricingEnt}</h4>
                <p className="text-xs text-charcoal-olive/60 mt-2 min-h-[40px]">
                  {t.pricingEntDesc}
                </p>
                <div className="my-6 flex items-baseline">
                  <span className="text-4xl font-serif font-medium text-charcoal-olive">{t.pricingCustom}</span>
                  <span className="text-xs text-charcoal-olive/60 font-semibold font-mono ml-1">
                    {language === 'en' ? 'pricing' : language === 'ro' ? 'prețuri' : language === 'hu' ? 'árazás' : language === 'bg' ? 'цени' : language === 'fr' ? 'tarif' : 'Preise'}
                  </span>
                </div>
                
                <div className="border-t border-border-warm/60 pt-6 space-y-3.5">
                  {t.pricingEntFeats.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-olive/80">
                      <Check size={14} className="text-olive-deep shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => scrollToAnchor('demo-request-form')}
                className="w-full mt-8 py-3 rounded-xl border border-olive-deep text-olive-deep font-bold text-xs hover:bg-olive-deep hover:text-cream-light transition duration-300"
              >
                {t.pricingGetStarted}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Glassmorphic Contact Demo Request Form */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="demo-request-form">
        <DemoForm language={language} />
      </section>

      {/* Beautiful Editorial Footer */}
      <footer className="border-t border-border-warm px-6 py-12 bg-cream-rich">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border border-olive-deep flex items-center justify-center bg-cream-light text-olive-deep">
              <Sprout size={14} />
            </div>
            <span className="font-display font-medium text-base text-charcoal-olive">
              Farming <span className="serif-italic font-normal">Management</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-charcoal-olive/60">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-olive-deep transition">Home</button>
            <button onClick={() => scrollToAnchor('interactive-showcase')} className="hover:text-olive-deep transition">Features</button>
            <button onClick={() => scrollToAnchor('experience-slider')} className="hover:text-olive-deep transition">Synergy</button>
            <button onClick={() => scrollToAnchor('pricing-section')} className="hover:text-olive-deep transition">Pricing</button>
          </div>

          <p className="text-[11px] font-mono text-charcoal-olive/50 text-center md:text-right">
            © 2026 Farming Management Monorepo Workspace. All rights reserved.
          </p>
        </div>
      </footer>

      <LanguageSelectorModal
        isOpen={langModalOpen}
        onClose={() => setLangModalOpen(false)}
        selectedLanguage={language}
        onSelectLanguage={handleSelectLanguage}
      />

    </div>
  );
}
