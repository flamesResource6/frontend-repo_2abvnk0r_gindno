import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between rounded-xl mt-4 bg-[#111322]/60 backdrop-blur-sm border border-white/10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF7A3C] shadow-[0_0_20px_rgba(255,122,60,0.6)]" />
            <div>
              <div className="text-white font-semibold leading-tight">Collective Spark</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">Make impact this week</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#teams" className="hover:text-white transition-colors">Teams</a>
            <a href="#stats" className="hover:text-white transition-colors">Impact</a>
          </nav>

          <button className="md:hidden text-white/80" aria-label="menu">
            <Menu size={22} />
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-2 text-sm rounded-md bg-[#2AB3B1]/10 border border-[#2AB3B1]/30 text-[#2AB3B1] hover:bg-[#2AB3B1]/20 transition-colors">Log in</button>
            <button className="px-4 py-2 text-sm rounded-md bg-[#FF7A3C] text-[#111322] font-semibold hover:brightness-110 transition-all">Join now</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
