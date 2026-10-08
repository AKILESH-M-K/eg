function FilterPanel() {
  return (
    <aside className="h-fit rounded-3xl bg-white p-5 shadow-sm">
      <h3 className="font-bold">Your Preferences</h3>

      <p className="mt-5 text-xs font-semibold text-slate-400">TRIP TYPE</p>

      <select className="mt-2 w-full rounded-xl border border-slate-200 p-3">
        <option>Business</option>
        <option>Family</option>
        <option>Solo</option>
        <option>Relax</option>
      </select>

      <p className="mt-6 text-xs font-semibold text-slate-400">BUDGET</p>

      <input
        type="range"
        min="2000"
        max="8000"
        className="mt-3 w-full accent-amber-500"
      />

      <p className="text-sm text-slate-500">₹2,000 — ₹8,000</p>

      <p className="mt-6 text-xs font-semibold text-slate-400">AMENITIES</p>

      <div className="mt-3 space-y-3 text-sm">
        <label className="flex gap-2">
          <input type="checkbox" /> Wi-Fi
        </label>

        <label className="flex gap-2">
          <input type="checkbox" /> Breakfast
        </label>

        <label className="flex gap-2">
          <input type="checkbox" /> Pool
        </label>

        <label className="flex gap-2">
          <input type="checkbox" /> Parking
        </label>
      </div>
    </aside>
  );
}

export default FilterPanel;
