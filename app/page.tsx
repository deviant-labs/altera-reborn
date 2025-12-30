import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans relative overflow-x-hidden selection:bg-altera selection:text-white">
      
      {/* GLOBAL OVERLAYS */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-grunge mix-blend-overlay contrast-150"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-scanline animate-scanline"></div>

      {/* BACKGROUND COMING SOON - Fixed Consistency */}
      <div className="fixed inset-0 z-[0] pointer-events-none flex items-center justify-center select-none">
        <h1 className="text-[25vw] lg:text-[18vw] font-black uppercase italic tracking-tighter leading-none text-altera opacity-5 animate-pulse text-center">
          COMING <br className="lg:hidden"/> SOON
        </h1>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen p-6 lg:p-16">
        
        {/* NAV SECTION */}
        <nav className="flex justify-between items-center border-b border-white/10 pb-4 mb-12">
          <div className="flex flex-col gap-1">
             <span className="text-altera font-bold text-[10px] tracking-[0.2em] animate-pulse">// SYSTEM_STATUS: PENDING</span>
             <span className="text-gray-500 text-[9px] tracking-[0.2em]">ALL_WORLD_SHIPPING</span>
          </div>
          <div className="relative w-10 h-10 lg:w-20 lg:h-20">
             <Image src="/images/logo-humanity.png" alt="Logo" fill className="object-contain" />
          </div>
        </nav>

        {/* HEADLINE SECTION: Rapat (Repet) & Solid Colors */}
        <div className="flex-1 flex flex-col justify-center py-6">
          <div className="flex flex-col gap-1 lg:gap-0">
            <div className="inline-block self-start border border-altera text-altera bg-altera-faint px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md animate-reveal">
              ● Official Launch Soon
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-[16vw] lg:text-[110px] text-white font-black uppercase leading-[0.85] tracking-tighter animate-reveal delay-100">
                Built From
              </h1>
              
              <h1 className="text-[16vw] lg:text-[110px] text-gray-400 font-black uppercase leading-[0.85] tracking-tighter animate-reveal delay-200">
                What We
              </h1>
              
              {/* SURVIVED: Solid Red & Grunge Flicker */}
              <h1 className="text-[16vw] lg:text-[110px] text-altera font-black uppercase leading-[0.85] tracking-tighter animate-reveal delay-300 animate-grunge-text">
                Survived.
              </h1>
            </div>
          </div>
        </div>

        {/* MANIFESTO BOX SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12">
          <div className="hidden lg:block lg:col-span-7"></div>
          
          <div className="lg:col-span-5 relative">
            <div className="border border-altera bg-altera-faint p-8 lg:p-12 pt-16 lg:pt-20 backdrop-blur-md shadow-2xl relative group overflow-visible animate-reveal delay-300 mb-8">
              
              {/* LOGO STICKER: Slow Grunge Animation */}
              <div className="absolute -top-8 -left-4 lg:-top-10 lg:-left-6 w-40 lg:w-72 h-16 lg:h-24 z-30 animate-grunge blur-[0.5px]">
                 <Image src="/images/logo-humanity.png" alt="Altera Logo Sticker" fill className="object-contain object-left drop-shadow-2xl" />
              </div>

              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-50 group-hover:opacity-100 transition-all">
                 <h3 className="text-altera font-mono text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
                    altera._co
                 </h3>
              </div>
              
              <p className="text-gray-200 text-sm lg:text-lg leading-relaxed uppercase tracking-wide font-medium mb-8 relative z-10">
                "Built from moments that broke us. Altera is coming, carrying real stories from the streets."
              </p>
              
              <div className="flex flex-col lg:flex-row gap-4 relative z-10">
                <button className="bg-altera text-white px-8 py-4 font-black uppercase text-[10px] lg:text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg active:scale-95">
                  Stay Close
                </button>
                <button className="border border-white/20 text-gray-300 hover:text-white px-8 py-4 font-black uppercase text-[10px] lg:text-xs tracking-[0.2em] transition-colors hover:border-altera">
                  The Beginning
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex justify-between text-[8px] lg:text-[10px] font-mono tracking-[0.3em] text-gray-600 uppercase border-t border-white/10 pt-4">
          <p>© 2025. Altera.</p>
          <p className="animate-pulse text-altera">LIVE_SIGNAL</p>
        </div>

      </div>
    </main>
  );
}