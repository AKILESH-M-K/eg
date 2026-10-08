
import RoomSelection from "./RoomSelection";

function HotelDetail({
  hotel,
  search,
  onBack,
  onRoomSelect,
}) {
  return (
    <section className="mx-auto mt-12 max-w-5xl">

      <button
        type="button"
        onClick={onBack}
        className="mb-5 font-semibold text-slate-500 transition hover:text-[#0F766E]"
      >
        ← Back to hotels
      </button>

      {/* Hotel information */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">

          <div className="flex flex-wrap items-start justify-between gap-5">

            <div>
              <p className="font-semibold text-[#0F766E]">
                {hotel.city}
              </p>

              <h2 className="mt-1 text-3xl font-black">
                {hotel.name}
              </h2>

              <p className="mt-2 max-w-2xl text-slate-500">
                A comfortable stay designed around your
                destination and travel requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E6FFFA] px-5 py-3 text-center">
              <p className="text-xl font-black text-[#0F766E]">
                ★ {hotel.rating}
              </p>

              <p className="text-xs text-slate-500">
                Guest rating
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-6 flex flex-wrap gap-2">
            {hotel.amenities.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Search details */}
          <div className="mt-6 rounded-2xl bg-[#F4F7F9] p-4 text-sm">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-600">
              <span>
                <b>Check-in:</b> {search.checkIn}
              </span>

              <span>
                <b>Check-out:</b> {search.checkOut}
              </span>

              <span>
                <b>Guests:</b> {search.guests}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Room selection */}
      <RoomSelection
        rooms={hotel.rooms}
        guests={Number(search.guests)}
        checkIn={search.checkIn}
        checkOut={search.checkOut}
        onSelect={onRoomSelect}
      />
    </section>
  );
}

export default HotelDetail;