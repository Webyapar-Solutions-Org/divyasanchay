"use client";

import { useMemo, useState } from "react";

const currentYear = new Date().getFullYear();

function formatCurrency(value: number) {
  return `Rs.${Math.round(value).toLocaleString("en-IN")}`;
}

function formatShortCurrency(value: number) {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(1)} Cr`;
  }

  if (value >= 100000) {
    return `${(value / 100000).toFixed(1)} L`;
  }

  return Math.round(value).toLocaleString("en-IN");
}

function calculateSipFutureValue(monthlyAmount: number, years: number, annualReturn: number) {
  const months = years * 12;
  const monthlyRate = annualReturn / 100 / 12;

  if (monthlyRate === 0) {
    return monthlyAmount * months;
  }

  return monthlyAmount * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
}

function buildChartPoints(monthlyAmount: number, years: number, annualReturn: number) {
  const step = Math.max(1, Math.ceil(years / 5));
  const points = [];

  for (let year = 0; year <= years; year += step) {
    points.push({
      year,
      invested: monthlyAmount * year * 12,
      value: calculateSipFutureValue(monthlyAmount, year, annualReturn),
    });
  }

  if (points[points.length - 1]?.year !== years) {
    points.push({
      year: years,
      invested: monthlyAmount * years * 12,
      value: calculateSipFutureValue(monthlyAmount, years, annualReturn),
    });
  }

  return points;
}

function pathFromPoints(points: Array<{ x: number; y: number }>) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
}

function SliderField({
  label,
  prefix,
  suffix,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <label className="text-xl font-normal text-[#111] lg:text-2xl">{label}</label>
        <div className="flex h-[50px] w-full items-center justify-between rounded-[10px] border border-[#ddd] px-4 text-xl sm:w-[258px] lg:text-2xl">
          <span>{prefix ?? suffix}</span>
          <input
            aria-label={label}
            className="min-w-0 flex-1 bg-transparent text-right font-normal outline-none"
            max={max}
            min={min}
            onChange={(event) => onChange(Number(event.target.value))}
            step={step}
            type="number"
            value={value}
          />
        </div>
      </div>
      <input
        aria-label={`${label} slider`}
        className="h-1.5 w-full cursor-pointer accent-[#193d80]"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        style={{ background: `linear-gradient(to right, #193d80 ${percentage}%, #d7d7d7 ${percentage}%)` }}
        type="range"
        value={value}
      />
    </div>
  );
}

function SipChart({
  points,
  maxValue,
}: {
  points: Array<{ year: number; invested: number; value: number }>;
  maxValue: number;
}) {
  const chartWidth = 394;
  const chartHeight = 287;
  const left = 76;
  const top = 35;
  const bottom = top + chartHeight;
  const right = left + chartWidth;
  const safeMax = Math.max(maxValue, 1);

  const valuePoints = points.map((point) => ({
    x: left + (point.year / points[points.length - 1].year) * chartWidth,
    y: bottom - (point.value / safeMax) * chartHeight,
  }));
  const investedPoints = points.map((point) => ({
    x: left + (point.year / points[points.length - 1].year) * chartWidth,
    y: bottom - (point.invested / safeMax) * chartHeight,
  }));
  const yLabels = Array.from({ length: 6 }, (_, index) => {
    const value = safeMax - (safeMax / 5) * index;
    return {
      label: formatShortCurrency(value),
      y: top + (chartHeight / 5) * index,
    };
  });

  return (
    <div className="h-full rounded-lg border border-[#ddd] bg-white p-[20px] shadow-[0_3px_5px_rgba(0,0,0,0.25)]">
      <svg className="h-[421px] w-full" role="img" viewBox="0 0 495 410">
        <title>SIP growth chart</title>
        <g stroke="#e5e7eb" strokeWidth="1">
          {yLabels.map((label) => (
            <line key={label.y} x1={left} x2={right} y1={label.y} y2={label.y} />
          ))}
          {points.map((point) => {
            const x = left + (point.year / points[points.length - 1].year) * chartWidth;
            return <line key={point.year} x1={x} x2={x} y1={top} y2={bottom} />;
          })}
        </g>

        <g fill="#4d4d4d" fontSize="14">
          {yLabels.map((label) => (
            <text key={label.y} x="0" y={label.y + 5}>{label.label}</text>
          ))}
          <text x="68" y={bottom + 18}>0</text>
        </g>

        <path d={pathFromPoints(valuePoints)} fill="none" stroke="#123378" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d={pathFromPoints(investedPoints)} fill="none" stroke="#67a45a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />

        {valuePoints.map((point, index) => (
          <circle key={`value-${points[index].year}`} cx={point.x} cy={point.y} fill="#123378" r="5" stroke="white" strokeWidth="2" />
        ))}
        {investedPoints.map((point, index) => (
          <circle key={`invested-${points[index].year}`} cx={point.x} cy={point.y} fill="#67a45a" r="5" stroke="white" strokeWidth="2" />
        ))}

        <g fill="#4d4d4d" fontSize="14">
          {points.map((point) => {
            const x = left + (point.year / points[points.length - 1].year) * chartWidth;
            return (
              <text key={point.year} textAnchor="middle" x={x} y={bottom + 38}>
                {currentYear + point.year}
              </text>
            );
          })}
        </g>

        <rect fill="#123378" height="20" rx="4" width="40" x="54" y="382" />
        <text fill="#4d4d4d" fontSize="14" x="104" y="397">Future Value</text>
        <rect fill="#67a45a" height="20" rx="4" width="40" x="280" y="382" />
        <text fill="#4d4d4d" fontSize="14" x="330" y="397">Amount Invested</text>
      </svg>
    </div>
  );
}

export default function SipCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [years, setYears] = useState(15);
  const [annualReturn, setAnnualReturn] = useState(12);

  const results = useMemo(() => {
    const invested = monthlyAmount * years * 12;
    const total = calculateSipFutureValue(monthlyAmount, years, annualReturn);
    const profit = total - invested;
    const chartPoints = buildChartPoints(monthlyAmount, years, annualReturn);
    const maxValue = Math.max(...chartPoints.map((point) => point.value));

    return { chartPoints, invested, maxValue, profit, total };
  }, [annualReturn, monthlyAmount, years]);

  const stats = [
    ["Invested Amount:", formatCurrency(results.invested)],
    ["Total Amount:", formatCurrency(results.total)],
    ["Profit:", formatCurrency(results.profit)],
  ];

  return (
    <section className="mx-auto max-w-[1260px] px-4 py-16 lg:px-0 lg:py-[75px]">
      <h2 className="text-3xl font-bold text-[#123378] lg:text-4xl">My Calculator</h2>
      <p className="mt-[13px] text-base font-normal text-[#4d4d4d] lg:text-lg">Estimate the future value of your monthly SIP investment</p>
      <div className="mt-[50px] grid items-start gap-10 lg:grid-cols-[685px_535px]">
        <div className="space-y-[50px]">
          <SliderField label="SIP Amount" max={100000} min={500} onChange={setMonthlyAmount} prefix="Rs." step={500} value={monthlyAmount} />
          <SliderField label="Investment Duration" max={40} min={1} onChange={setYears} suffix="Years" value={years} />
          <SliderField label="Expected Rate of Return % (p.a.)" max={30} min={1} onChange={setAnnualReturn} suffix="%" value={annualReturn} />
          <button className="h-[60px] w-full rounded-[10px] bg-[#ed702d] text-2xl font-normal text-white shadow-sm lg:w-[266px]" type="button">
            Calculate
          </button>
        </div>
        <SipChart maxValue={results.maxValue} points={results.chartPoints} />
      </div>
      <div className="mt-[50px] grid gap-4 md:grid-cols-3 lg:gap-6">
        {stats.map(([label, value]) => (
          <div key={label} className="flex h-[150px] flex-col items-center justify-center rounded bg-[#eaf4fc] text-center shadow-[0_3px_5px_rgba(0,0,0,0.25)]">
            <p className="text-lg font-normal text-[#111]">{label}</p>
            <p className="mt-5 text-2xl font-bold text-[#111]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
