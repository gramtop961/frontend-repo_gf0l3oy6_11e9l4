import React from 'react';
import { Store, Building2, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="registration" className="w-full bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Get started</h2>
          <p className="mt-2 text-slate-600">Choose your path to begin the verification process.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="group block rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10">
                <Store className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Farmer / FPO</h3>
                <p className="text-sm text-slate-600">Apply for seller verification</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>

          <a
            href="#"
            className="group block rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10">
                <Building2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Restaurant / Hotel</h3>
                <p className="text-sm text-slate-600">Apply for buyer verification</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          By continuing, you agree to undergo document review and identity verification to protect marketplace integrity.
        </p>
      </div>
    </section>
  );
}
