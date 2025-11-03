import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Store, Building2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1e17] text-white">
      {/* Tricolor top accent inspired by the Indian flag */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1.5">
        <div className="h-full w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
      </div>

      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1tYbY4Z1cdq9VHt9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft farm-tone gradient overlay so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1e17]/40 via-[#0b1e17]/70 to-[#0b1e17]" />

      {/* Decorative radial glow resembling sunrise over fields */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,153,51,0.25),transparent_70%)] p-24" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 pt-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/40">
              <Rocket className="h-5 w-5 text-emerald-300" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Sahakar</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#how" className="text-sm text-emerald-200/80 hover:text-white">How it works</a>
            <a href="#trust" className="text-sm text-emerald-200/80 hover:text-white">Trust Engine</a>
            <a href="#dashboards" className="text-sm text-emerald-200/80 hover:text-white">Dashboards</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#buyer-signup" className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 md:block">
              For Buyers
            </a>
            <a href="#farmer-signup" className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-300">
              For Farmers
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto mt-20 max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Empowering Indian farmers with direct access to commercial buyers
          </h1>
          <p className="mt-4 text-lg text-emerald-100/90">
            From field to fork without middlemen. Post needs, bid transparently, and trade confidently with manual verification and platform oversight.
          </p>
          <p className="mt-2 text-sm text-emerald-100/70">भारत के किसानों के लिए सरल, सुरक्षित और पारदर्शी मार्केटप्लेस</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              id="farmer-signup"
              href="#registration"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-100"
            >
              <Store className="h-5 w-5" />
              I'm a Farmer / FPO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              id="buyer-signup"
              href="#registration"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-5 py-3 font-medium text-emerald-300 ring-1 ring-emerald-300/30 hover:bg-emerald-500/20"
            >
              <Building2 className="h-5 w-5" />
              I'm a Business Buyer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-14 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <FeaturePill icon={<Rocket className="h-4 w-4" />} title="APMC-free" subtitle="Direct procurement" />
          <FeaturePill icon={<Store className="h-4 w-4" />} title="Live Market" subtitle="Transparent bidding" />
          <FeaturePill icon={<Building2 className="h-4 w-4" />} title="Verified" subtitle="Manual approval" />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-emerald-100/80">{subtitle}</p>
      </div>
    </div>
  );
}
