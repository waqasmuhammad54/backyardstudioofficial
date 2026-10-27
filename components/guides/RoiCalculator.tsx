"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-AE", {
  style: "currency",
  currency: "AED",
  maximumFractionDigits: 0,
});

function NumericField({
  id,
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = 1,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs font-semibold tracking-wide mb-2" style={{ color: "var(--cream)" }}>
        {label}
      </span>
      <span className="flex items-center border" style={{ borderColor: "var(--border)", background: "var(--black)" }}>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(event) => onChange(Math.max(min, Number(event.target.value) || 0))}
          className="w-full bg-transparent px-4 py-3 outline-none"
          style={{ color: "var(--cream)" }}
        />
        {suffix && <span className="pr-4 text-xs" style={{ color: "var(--muted)" }}>{suffix}</span>}
      </span>
    </label>
  );
}

export default function RoiCalculator() {
  const [productionCost, setProductionCost] = useState(40000);
  const [distributionCost, setDistributionCost] = useState(20000);
  const [incrementalLeads, setIncrementalLeads] = useState(40);
  const [closeRate, setCloseRate] = useState(10);
  const [grossProfit, setGrossProfit] = useState(8000);

  const result = useMemo(() => {
    const totalCost = productionCost + distributionCost;
    const customers = incrementalLeads * (closeRate / 100);
    const createdValue = customers * grossProfit;
    const profitAfterCost = createdValue - totalCost;
    const roi = totalCost > 0 ? (profitAfterCost / totalCost) * 100 : 0;
    const breakEvenCustomers = grossProfit > 0 ? totalCost / grossProfit : 0;
    const breakEvenLeads = closeRate > 0 ? breakEvenCustomers / (closeRate / 100) : 0;

    return { totalCost, customers, createdValue, profitAfterCost, roi, breakEvenCustomers, breakEvenLeads };
  }, [productionCost, distributionCost, incrementalLeads, closeRate, grossProfit]);

  return (
    <section id="roi-calculator" className="scroll-mt-28 border-y" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
      <div className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <p className="eyebrow mb-3">Planning tool</p>
        <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--cream)" }}>
          CORPORATE VIDEO ROI CALCULATOR
        </h2>
        <p className="max-w-3xl leading-relaxed mb-10" style={{ color: "var(--silver)" }}>
          Use incremental leads and gross profit—not total pipeline—to create a defensible planning case. Change every assumption and keep the conservative version in the approved production brief.
        </p>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <div className="grid sm:grid-cols-2 gap-5 p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-3)" }}>
            <NumericField id="production-cost" label="Production cost" value={productionCost} onChange={setProductionCost} suffix="AED" step={1000} />
            <NumericField id="distribution-cost" label="Media, landing page and tracking" value={distributionCost} onChange={setDistributionCost} suffix="AED" step={1000} />
            <NumericField id="incremental-leads" label="Incremental qualified leads" value={incrementalLeads} onChange={setIncrementalLeads} step={1} />
            <NumericField id="close-rate" label="Lead-to-customer rate" value={closeRate} onChange={setCloseRate} suffix="%" step={0.5} />
            <div className="sm:col-span-2">
              <NumericField id="gross-profit" label="Gross profit per new customer" value={grossProfit} onChange={setGrossProfit} suffix="AED" step={500} />
            </div>
          </div>

          <div className="p-7 border" style={{ borderColor: "var(--gold)", background: "var(--black)" }} aria-live="polite">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--gold)" }}>Estimated outcome</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Total investment</p>
                <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>{money.format(result.totalCost)}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Expected customers</p>
                <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>{result.customers.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Incremental gross profit</p>
                <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>{money.format(result.createdValue)}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Profit after video cost</p>
                <p className="font-display text-2xl" style={{ color: result.profitAfterCost >= 0 ? "var(--gold)" : "#fca5a5" }}>
                  {money.format(result.profitAfterCost)}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-7 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Estimated ROI</p>
              <p className="font-display text-5xl" style={{ color: result.roi >= 0 ? "var(--gold)" : "#fca5a5" }}>
                {result.roi.toFixed(0)}%
              </p>
              <p className="text-xs leading-relaxed mt-4" style={{ color: "var(--silver)" }}>
                Break-even requires about {result.breakEvenCustomers.toFixed(1)} customers or {result.breakEvenLeads.toFixed(0)} incremental qualified leads at the assumptions entered.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs leading-relaxed mt-6" style={{ color: "var(--muted)" }}>
          Planning estimate only. This calculator does not predict demand, attribution or campaign lift. Validate the inputs with finance, sales and analytics owners before approval.
        </p>
      </div>
    </section>
  );
}
