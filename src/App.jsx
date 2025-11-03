import React from 'react';
import Hero from './components/Hero.jsx';
import TrustEngine from './components/TrustEngine.jsx';
import DashboardsShowcase from './components/DashboardsShowcase.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <main>
        <section id="how" className="w-full bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight">How Sahakar works</h2>
              <p className="mt-2 text-slate-600">
                Clear paths for both sides of the marketplace: buyers post needs, sellers bid transparently, and admins keep everyone safe.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <InfoCard
                title="Buyers post RFQs"
                desc="Restaurants and hotels publish quantity, quality, and delivery windows."
              />
              <InfoCard
                title="Sellers bid live"
                desc="Farmers and FPOs place competitive bids in the Live Market to win orders."
              />
              <InfoCard
                title="Fulfil & settle"
                desc="Track logistics and payments with oversight from the Control Center."
              />
            </div>
          </div>
        </section>
        <TrustEngine />
        <DashboardsShowcase />
        <CTASection />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Sahakar. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#trust" className="hover:text-slate-900">Trust</a>
            <a href="#dashboards" className="hover:text-slate-900">Dashboards</a>
            <a href="#registration" className="hover:text-slate-900">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

export default App;
