
function Header() {
  return (
    <header className="border-b border-slate-200 bg-[#172033] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            STAY<span className="text-[#2DD4BF]">MATCH</span>
          </h1>

          <p className="text-xs text-slate-300">
            Smart stays for every journey
          </p>
        </div>

        <div className="hidden text-sm font-semibold text-slate-300 sm:block">
          Explore • Select • Stay
        </div>
      </div>
    </header>
  );
}

export default Header;

