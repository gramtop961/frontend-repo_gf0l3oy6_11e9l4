import React from 'react';
import { Store, Building2, Shield } from 'lucide-react';

export default function DashboardsShowcase() {
  const cards = [
    {
      icon: <Store className="h-6 w-6 text-emerald-600" />,
      title: 'Seller Dashboard',
      points: [
        'Live Market: bid on buyer RFQs',
        'Track orders and payouts',
        'Mobile-first experience',
      ],
    },
    {
      icon: <Building2 className="h-6 w-6 text-emerald-600" />,
      title: 'Buyer Dashboard',
      points: [
        'Post a Need (RFQ) in minutes',
        'Compare bids and supplier profiles',
        'Order history and status tracking',
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      title: 'Admin Control Center',
      points: [
        'Verification queues and approvals',
        'Logistics oversight & payment monitoring',
        'Dispute resolution workflows',
      ],
    },
  ];

  return (
    <section id="dashboards" className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Role-based dashboards</h2>
          <p className="mt-2 text-slate-600">Each dashboard is purpose-built to keep work simple and outcomes transparent.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                {c.icon}
                <h3 className="text-lg font-medium">{c.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
