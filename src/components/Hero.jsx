import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative w-full h-[72vh] min-h-[560px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#111322]/20 via-[#111322]/40 to-[#111322] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[28px] sm:text-5xl leading-tight font-semibold text-white tracking-tight"
            style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
          >
            Find your next impact in minutes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            className="mt-4 text-base sm:text-lg text-white/80"
          >
            Bright, social and fast. Every screen answers one question: What impact can I make this week?
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
            }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {[
              { label: '3 hrs', color: '#FFD54A' },
              { label: 'Clean up', color: '#2AB3B1' },
              { label: 'Team of 5', color: '#FF7A3C' },
            ].map((chip, idx) => (
              <motion.div
                key={chip.label}
                variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.16 }}
                className="relative"
              >
                <div
                  className="px-3 py-2 text-sm rounded-full text-[#111322] font-medium"
                  style={{ backgroundColor: chip.color }}
                >
                  <div className="relative">
                    <span>{chip.label}</span>
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2A2A5E]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1], delay: 0.12 }}
            className="mt-8 flex items-center gap-3"
          >
            <button className="px-5 py-3 rounded-md bg-[#FF7A3C] text-[#111322] font-semibold hover:brightness-110 transition-all">
              Browse events
            </button>
            <button className="px-5 py-3 rounded-md bg-[#2AB3B1]/10 text-white border border-[#2AB3B1]/40 hover:bg-[#2AB3B1]/20 transition-colors">
              Create a team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
