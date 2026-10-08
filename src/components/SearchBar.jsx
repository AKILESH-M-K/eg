import { useState } from "react";
import hotels from "../data/hotels";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const cities = [...new Set(hotels.map((hotel) => hotel.city))];

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!location.trim()) {
      alert("Please select a destination.");
      return;
    }

    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    onSearch({
      location: location.trim(),
      checkIn,
      checkOut,
      guests: Number(guests),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg"
    >
      <div className="grid gap-4 md:grid-cols-4">

        {/* Location */}
        <div>
          <label className="text-xs font-bold tracking-wider text-slate-400">
            DESTINATION
          </label>

          <input
            list="cities"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you going?"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none transition focus:border-[#0F766E] focus:bg-white"
            required
          />

          <datalist id="cities">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>

        {/* Check-in */}
        <div>
          <label className="text-xs font-bold tracking-wider text-slate-400">
            CHECK-IN
          </label>

          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-[#0F766E] focus:bg-white"
            required
          />
        </div>

        {/* Check-out */}
        <div>
          <label className="text-xs font-bold tracking-wider text-slate-400">
            CHECK-OUT
          </label>

          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-[#0F766E] focus:bg-white"
            required
          />
        </div>

        {/* Guests */}
        <div>
          <label className="text-xs font-bold tracking-wider text-slate-400">
            GUESTS
          </label>

          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-[#0F766E] focus:bg-white"
          >
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <option key={number} value={number}>
                {number} {number === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-2xl bg-[#0F766E] px-6 py-3 font-bold text-white transition hover:bg-[#115E59]"
      >
        Search Hotels →
      </button>
    </form>
  );
}

export default SearchBar;