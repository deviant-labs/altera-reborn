import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans relative overflow-x-hidden selection:bg-altera selection:text-white">
      
      {/* ==================================================================
          GLOBAL EFFECTS
         ================================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-grunge mix-blend-overlay contrast-150"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-scanline animate-scanline"></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] pointer-events-none select-none w-full text-center">
        <h1 className="text-[18vw] font-black uppercase italic tracking-tighter leading-none text-altera opacity-10 animate-pulse">
          COMING <br className="lg:hidden"/> SOON
        </h1>
      </div>


      {/* ==================================================================
          TAMPILAN MOBILE / HP
         ================================================================== */}
      <div className="block lg:hidden relative z-10 p-6 pb-20">
        
        <nav className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
          <div className="flex flex-col gap-1">
             <span className="text-altera font-bold text-[10px] tracking-[0.2em] animate-pulse">// SYSTEM_STATUS: PENDING</span>
             <span className="text-gray-500 text-[9px] tracking-[0.2em]">ALL_WORLD_SHIPPING</span>
          </div>
          <div className="relative w-10 h-10">
             <Image src="/images/logo-humanity.png" alt="Logo" width={40} height={40} className="object-contain" />
          </div>
        </nav>

        <div className="flex flex-col gap-2 mb-10">
          <div className="inline-block self-start border border-altera text-altera bg-altera-faint px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            ● Official Launch Soon
          </div>
          
          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter">
            Built <br/> From
          </h1>
          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter text-gray-400">
            What We
          </h1>
          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>
            Survived.
          </h1>
        </div>

        {/* --- MOBILE BOX CONTENT --- */}
        <div className="mt-10 border border-altera bg-altera-faint p-6 pt-12 shadow-xl relative backdrop-blur-md overflow-visible group">
          
          {/* LOGO MOBILE (CORTEIZ STYLE) */}
          {/* Tambah blur-[0.5px] sebagai base blur */}
          <div className="absolute -top-6 -left-2 w-36 h-16 z-20 animate-grunge blur-[0.5px]">
             <Image src="/images/logo-humanity.png" alt="Altera Logo Sticker" fill className="object-contain object-left drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
          </div>

          <div className="absolute top-5 right-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <h3 className="text-altera font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
               altera._co
            </h3>
          </div>
          
          <p className="text-gray-200 text-sm leading-relaxed font-medium mb-6 uppercase relative z-10">
            "Built from moments that broke us. Altera is coming, carrying real stories from the streets."
          </p>
          
          <div className="flex flex-col gap-3 relative z-10">
            <button className="bg-altera text-white py-4 font-black uppercase text-xs tracking-[0.2em] shadow-lg active:scale-95 transition-transform">
              Stay Close
            </button>
            <button className="border border-white/20 text-gray-300 hover:text-white py-4 font-black uppercase text-xs tracking-[0.2em] transition-colors hover:border-altera">
              This is just the beginning
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-[9px] text-gray-600 font-mono tracking-[0.3em]">
          © 2025 ALTERA. <span className="text-altera animate-pulse">LIVE_SIGNAL</span>
        </div>
      </div>


      {/* ==================================================================
          TAMPILAN DESKTOP / LAPTOP
         ================================================================== */}
      <div className="hidden lg:flex flex-col min-h-screen p-16 relative z-10">
        
        <nav className="flex justify-between items-start w-full uppercase font-mono text-[10px] tracking-[0.3em]">
          <div className="flex flex-col gap-1">
            <span className="text-altera font-bold">// SYSTEM_STATUS: PENDING</span>
            <span className="text-gray-500">ALL_WORLD_SHIPPING</span>
          </div>
          <div className="relative w-20 h-20">
             <Image src="/images/logo-humanity.png" alt="Logo" fill className="object-contain" />
          </div>
        </nav>

        <div className="flex-1 grid grid-cols-12 items-center w-full">
          
          <div className="col-span-7 relative">
             <div className="relative z-10">
                <div className="inline-block border border-altera text-altera bg-altera-faint px-4 py-2 mb-8 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  ● Official Launch Soon
                </div>

                <h1 className="text-[110px] font-black uppercase leading-[0.85] tracking-tighter">
                  Built From <br />
                  <span className="relative inline-block text-white">
                    What We
                    <span className="absolute top-1/2 left-[-10%] w-[120%] h-[3px] bg-white/30"></span>
                  </span> <br />
                  <span className="text-transparent relative hover:text-white transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px white' }}>
                    Survived.
                  </span>
                </h1>
             </div>
          </div>

          {/* --- DESKTOP BOX CONTENT --- */}
          <div className="col-span-5 flex flex-col justify-end h-full pb-10 z-20">
            <div className="border border-altera bg-altera-faint p-12 pt-20 backdrop-blur-md shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 relative group overflow-visible">
              
              {/* --- LOGO DESKTOP (CORTEIZ STYLE) --- */}
              {/* blur-[0.8px] supaya tidak terlalu HD */}
              <div className="absolute -top-10 -left-6 w-72 h-24 z-30 animate-grunge blur-[0.8px]">
                 <Image src="/images/logo-humanity.png" alt="Altera Logo Sticker" fill className="object-contain object-left drop-shadow-[0_0_15px_rgba(204,27,27,0.3)]" />
              </div>

              <div className="absolute top-8 right-8 opacity-50 group-hover:opacity-100 transition-all duration-300">
                 <h3 className="text-altera font-mono text-xs uppercase tracking-[0.3em] font-bold">
                    altera._co
                 </h3>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed uppercase tracking-wide font-medium mb-8 relative z-10">
                "Built from moments that broke us. Altera is coming, carrying real stories from the streets."
              </p>
              <div className="flex gap-4 relative z-10">
                <button className="bg-altera text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[5px_5px_0px_rgba(255,255,255,0.2)]">
                  Stay Close
                </button>
                <button className="border border-white/20 text-gray-300 hover:text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] transition-colors hover:border-altera">
                  This is just the beginning
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-16 right-16 flex justify-between text-[10px] font-mono tracking-[0.3em] text-gray-600 uppercase border-t border-white/10 pt-4">
          <p>© 2025. Altera.</p>
          <p className="animate-pulse text-altera">LIVE_SIGNAL</p>
        </div>

      </div>
    </main>
  );
}