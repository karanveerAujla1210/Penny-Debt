import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';
import FloatingCTA from '../components/FloatingCTA';
import WhatsAppWidget from '../components/WhatsAppWidget';

const stats = [
  { label: 'Debt Analysed', value: '150', suffix: '+ Cr', prefix: '₹' },
  { label: 'Clients Helped', value: '10000', suffix: '+' },
  { label: 'Success Rate', value: '95', suffix: '%' },
];

export default function Home() {
  return (
    <>
      <SEO title="Turn Your Debt Into A Manageable Plan | Penny & Debt" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-900 bg-hero-radial text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-24 md:flex-row md:pb-24 md:pt-28">
          
          {/* Left: Text */}
          <div className="relative z-10 max-w-xl space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              Debt Relief • India
              <span className="ml-2 h-1.5 w-1.5 rounded-full bg-accent-teal" />
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
            >
              Turn your{' '}
              <span className="bg-gradient-to-r from-brand-400 via-brand-200 to-accent-cyan bg-clip-text text-transparent">
                unmanageable debt
              </span>{' '}
              into a clear plan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="max-w-lg text-base text-slate-300 md:text-lg"
            >
              Penny & Debt analyses your loans and credit cards, designs a realistic relief strategy, and keeps you on track—so you don't have to fight this alone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/apply"
                className="rounded-lg bg-btn-primary bg-[length:220%_220%] bg-left px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-right hover:scale-105"
              >
                Check Your Eligibility
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-slate-600 bg-white/5 px-6 py-3 text-sm text-slate-100 hover:bg-white/10"
              >
                Book Free Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400"
            >
              <div className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>1:1 Human Counsellors</span>
              </div>
              <span>•</span>
              <span>Data Kept Private & Secure</span>
            </motion.div>
          </div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="float-soft rounded-3xl border border-white/10 bg-card-soft p-5 shadow-[0_28px_80px_rgba(15,23,42,0.95)] backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Your Debt Snapshot
              </p>

              <div className="mt-4 grid gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface-800/80 px-4 py-3"
                  >
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="font-numeric text-xl font-semibold text-slate-50">
                        <AnimatedCounter end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                      </p>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-500 to-accent-cyan opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-cyan/20 blur-3xl" />
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            How Penny & Debt Helps You
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Understand Your Debt', desc: 'We analyze your income, expenses, loans, and payment history.' },
              { step: '2', title: 'Design Relief Plan', desc: 'Our team creates a tailored strategy with realistic payment roadmap.' },
              { step: '3', title: 'Support Till Freedom', desc: 'Regular check-ins, plan adjustments, and guidance on dealing with lenders.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan text-2xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-diagonal-blue px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Start Your Debt-Free Journey Today
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Join 10,000+ Indians who achieved financial freedom with our expert guidance.
          </p>
          <Link
            to="/apply"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-brand-700 shadow-xl hover:scale-105"
          >
            Apply Now - It's Free
          </Link>
        </div>
      </section>

      <FloatingCTA />
      <WhatsAppWidget />
    </>
  );
}
