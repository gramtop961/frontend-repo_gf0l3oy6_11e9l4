import React from 'react';
import { Shield, CheckCircle, Users } from 'lucide-react';

export default function TrustEngine() {
  const steps = [
    {
      title: 'Registration',
      desc: 'Farmers/FPOs and Buyers submit credentials and business details.',
    },
    {
      title: 'Manual Verification',
      desc: 'Admin reviews documents and validates identities and licenses.',
    },
    {
      title: 'Approval & Access',
      desc: 'Upon approval, users get access to dashboards tailored to their roles.',
    },
  ];

  return (
    <section id="trust" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 ring-1 ring-emerald-200">
            <Shield className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Trust Engine</h2>
            <p className="text-slate-600">A rigorous onboarding and verification process keeps the marketplace safe.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <Users className="h-5 w-5 text-emerald-700" />
          <p className="text-sm text-emerald-900">
            Admins can mediate disputes, oversee logistics, and monitor payments from the Control Center.
          </p>
        </div>
      </div>
    </section>
  );
}
