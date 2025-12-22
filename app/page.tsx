import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      
      {/* 1. BACKGROUND TEXTURE & NOISE (Pakai class CSS .bg-grunge) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-25 bg-grunge mix-blend-overlay contrast-150"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-scanline animate-scanline"></div>

      {/* 2. GIANT COMING SOON BACKGROUND */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0] pointer-events-none select-none w-full text-center">
        <h1 className="text-[18vw] font-black uppercase italic tracking-tighter leading-none text-altera opacity-10 animate-pulse">
          COMING <br className="lg:hidden"/> SOON
        </h1>
      </div>

      {/* 3. LAYOUT WRAPPER */}
      <div className="relative z-10 flex flex-col min-h-screen p-6 md:p-12 lg:p-16">
        
        {/* --- HEADER NAV --- */}
        <nav className="flex justify-between items-start w-full uppercase font-mono text-[10px] tracking-[0.3em] mb-10 lg:mb-0">
          <div className="flex flex-col gap-1">
            <span className="text-altera font-bold">// SYSTEM_STATUS: PENDING</span>
            <span className="text-gray-500">MKS_CONNECTION_V1</span>
          </div>
          
          <div className="relative group">
             <div className="absolute inset-0 bg-altera blur-[30px] opacity-40"></div>
             <Image 
                src="/images/logo-humanity.png" 
                alt="Altera Logo"
                width={70}
                height={70}
                className="object-contain relative z-10"
             />
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 items-center w-full h-full gap-12 lg:gap-0 mt-8 lg:mt-0">
          
          {/* HEADLINE (Kiri) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative w-full">
            <div className="inline-block self-start border border-altera text-altera bg-altera-faint px-4 py-2 mb-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              ● Official Launch Soon
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase leading-[0.9] tracking-tighter">
              Built From <br />
              <span className="relative inline-block text-white">
                What We
                <span className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-white/30 hidden lg:block"></span>
              </span> <br />
              <span className="text-transparent relative" style={{ WebkitTextStroke: '1.5px white' }}>
                Survived.
              </span>
            </h1>

            <p className="mt-8 text-sm md:text-lg text-gray-400 max-w-md font-light tracking-wide border-l-2 border-altera pl-4 lg:hidden">
              "Not about perfection, but endurance."
            </p>
          </div>

          {/* CONTENT BOX (Kanan Bawah) */}
          <div className="lg:col-span-5 w-full flex flex-col lg:justify-end lg:h-full lg:pb-10">
            <div className="bg-black/90 border-t-4 border-altera p-8 md:p-12 backdrop-blur-md relative shadow-2xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <h3 className="text-altera font-mono text-[10px] uppercase tracking-widest font-bold">
                    altera._co
                  </h3>
                </div>
                <p className="text-gray-200 text-sm md:text-lg leading-relaxed uppercase tracking-wide font-medium">
                  "Built from moments that broke us. Altera is coming, carrying real stories from the streets."
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button className="bg-altera text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center shadow-lg">
                    Stay Close
                  </button>
                  <button className="border border-white/20 text-gray-400 hover:text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] transition-colors w-full sm:w-auto text-center">
                    This is just the beginning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-10 lg:absolute lg:bottom-6 lg:left-8 lg:right-8 lg:mt-0 flex justify-between text-[9px] font-mono tracking-[0.3em] text-gray-600 uppercase border-t border-white/10 pt-4 lg:border-none lg:pt-0">
          <p>© 2025. Altera. MKS.</p>
          <p className="animate-pulse text-altera">LIVE_SIGNAL</p>
        </div>

      </div>
    </main>
  );
} 