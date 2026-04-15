import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { FaqJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Webdesign & Website-Erstellung',
    subtitle: 'SEO & Webentwickler DACH',
    description: 'Hochwertiges Webdesign, responsive Firmen-Websites und Online-Shops (E-Commerce) für Kunden aus Österreich und Deutschland.',
    features: ['React / Next.js', 'Responsive Design', 'SEO Optimized', 'API Integration', 'Performance Tuned', 'Secure & Scalable'],
    link: '/web-development',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Chatbots',
    subtitle: 'Smart Automation',
    description: 'Intelligent chatbots trained on your business data that automate customer support, capture leads and boost engagement 24/7.',
    features: ['Custom Training', 'Multi-Platform', 'Lead Capture', 'CRM Sync', 'WhatsApp & Social', 'Analytics Dashboard'],
    link: '/ai-chatbots',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Voice Agents',
    subtitle: 'Call Automation',
    description: 'AI-powered voice systems that handle inbound and outbound calls, qualify leads and integrate with your business workflows.',
    features: ['Call Handling', 'Lead Qualification', 'CRM Integration', 'Custom Scripts', 'Multi-Language', 'Real-Time Analytics'],
    link: '/voice-agents',
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on scope. A landing page takes 3-5 days, a business website 1-2 weeks, and custom applications 4-8 weeks. We provide a clear timeline after the discovery call.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. All packages include post-launch support. The duration depends on the package tier and is discussed during the introductory meeting.',
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Absolutely. You can start with Starter and upgrade anytime. We credit your existing investment toward the upgraded package.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern, battle-tested technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS and more. We choose the best stack for your specific needs.',
  },
];

export default function Services() {
  usePageTitle('Services — Website-Erstellung & KI-Lösungen', {
    description: 'Professionelle Website erstellen lassen für Österreich und Deutschland. Webdesign, AI Chatbots, Voice Agents und Automation — alle Pakete und Preise.',
    path: '/services',
  });
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <div className="badge">Webdesign Agentur Österreich</div>
          <h1 className="section-title">Professionelle Website<br />erstellen lassen (DACH)</h1>
          <p className="page-header-desc">Wir entwickeln moderne, schnelle und SEO-optimierte Websites für lokale Unternehmen in Österreich und Deutschland.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="svc-overview">
        <div className="container">
          <div className="svc-overview-grid">
            {services.map((svc) => (
              <Link to={svc.link} className="svc-overview-card" key={svc.title}>
                <div className="svc-card-top">
                  <div className="svc-overview-icon">
                    <i className={svc.icon}></i>
                  </div>
                  <span className="svc-subtitle">{svc.subtitle}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-divider"></div>
                <ul className="svc-feature-list">
                  {svc.features.map((f) => (
                    <li key={f}><i className="fa-solid fa-circle-check"></i> {f}</li>
                  ))}
                </ul>
                <span className="svc-learn-more">
                  Explore service <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="svc-process">
        <div className="container">
          <div className="badge">So arbeiten wir</div>
          <h2 className="section-title">Transparente Website-Erstellung</h2>
          <p className="svc-process-subtitle">Persönliche Betreuung für Kunden in Österreich & Deutschland.</p>
          <div className="svc-process-grid">
            <div className="svc-process-step">
              <div className="svc-step-number">01</div>
              <h3>Discovery Call</h3>
              <p>We discuss your business goals, requirements and timeline to understand exactly what you need.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">02</div>
              <h3>Custom Proposal</h3>
              <p>You receive a detailed scope, timeline and pricing tailored to your project — no generic quotes.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">03</div>
              <h3>Build & Review</h3>
              <p>We design and develop your solution with regular check-ins so you're always in the loop.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">04</div>
              <h3>Launch & Support</h3>
              <p>We deploy your project and provide ongoing support to make sure everything runs smoothly.</p>
            </div>
          </div>
          <div className="svc-process-cta">
            <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid">Book a Free Discovery Call</a>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="svc-trust">
        <div className="container">
          <div className="svc-trust-grid">
            <div className="svc-trust-item">
              <h3>5+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="svc-trust-item">
              <h3>100%</h3>
              <p>On-Time Delivery</p>
            </div>
            <div className="svc-trust-item">
              <h3>24/7</h3>
              <p>AI-Powered Support</p>
            </div>
            <div className="svc-trust-item">
              <h3>80%+</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="container">
          <div className="badge">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="svc-faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`svc-faq-item ${openFaq === idx ? 'svc-faq-open' : ''}`}
                key={idx}
              >
                <button className="svc-faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${openFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="svc-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
