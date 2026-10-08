
function HotelCard({ hotel, onSelect }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-[#172033] shadow">
          ★ {hotel.rating}
        </span>
      </div>

      <div className="p-5">

        <p className="text-sm font-semibold text-[#0F766E]">
          {hotel.city}
        </p>

        <h3 className="mt-1 text-xl font-black">
          {hotel.name}
        </h3>

        {/* Amenities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {hotel.amenities.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#E6FFFA] px-3 py-1 text-xs font-medium text-[#115E59]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">

          <div>
            <span className="text-2xl font-black text-[#172033]">
              ₹{hotel.price}
            </span>

            <span className="text-sm text-slate-400">
              {" "}/ night
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelect(hotel)}
            className="rounded-xl bg-[#172033] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0F766E]"
          >
            View rooms →
          </button>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;