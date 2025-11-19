import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Riverside Clean-Up',
    tags: ['3 hrs', 'Outdoors', 'Team of 5'],
    color: '#2AB3B1',
  },
  {
    id: 2,
    title: 'Food Bank Packing',
    tags: ['2 hrs', 'Indoors', 'Solo'],
    color: '#FF7A3C',
  },
  {
    id: 3,
    title: 'Tutor Hour',
    tags: ['1 hr', 'Online', 'Flexible'],
    color: '#FFD54A',
  },
];

function Events() {
  return (
    <section id="events" className="py-12 bg-[#111322]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[22px] font-semibold text-white mb-6"
          style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
        >
          This week on campus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <motion.div
              key={e.id}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-[#111322] border border-white/10 overflow-hidden"
            >
              <div className="p-4">
                <h3
                  className="text-[18px] font-medium text-white"
                  style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
                >
                  {e.title}
                </h3>
                <p className="mt-2 text-[14px] text-white/70">Make an impact with friends after class.</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t, i) => (
                    <div
                      key={t}
                      className="px-3 py-1.5 text-[12px] rounded-full bg-white/10 text-white border border-white/15"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <button
                    className="px-3 py-2 text-sm rounded-md font-semibold text-[#111322]"
                    style={{ backgroundColor: e.color }}
                  >
                    Join event
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
