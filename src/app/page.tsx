import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    title: "予算管理",
    description: "月・週の予算を設定し、支出見込みとのズレを早めに把握できるようにします。",
  },
  {
    title: "献立管理",
    description: "日々の食事計画をまとめ、買い物と連動した無駄のない運用を目指します。",
  },
  {
    title: "買い物リスト",
    description: "必要な食材を自動で整理し、スマホで確認しながら効率よく買い物できます。",
  },
  {
    title: "価格記録",
    description: "実際の購入価格を蓄積し、次回以降の計画精度向上につなげます。",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-8">
      <header className="rounded-3xl bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 shadow-sm">
        <p className="text-xs font-medium tracking-[0.2em] text-emerald-700">MEALWISE</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">mealwise</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          食費を予算内に抑える献立・買い物管理サービス
        </p>
      </header>

      <section className="mt-6 space-y-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}
