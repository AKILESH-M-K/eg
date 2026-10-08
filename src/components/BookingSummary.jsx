function BookingSummary({
  hotel,
  room,
  search,
  onBack,
  onContinue,
}) {
  const start = new Date(`${search.checkIn}T00:00:00`);
  const end = new Date(`${search.checkOut}T00:00:00`);

  const nights = Math.ceil(
    (end - start) / (1000 * 60 * 60 * 24)
  );

  const total = room.price * nights;

  return (
    <section className="mx-auto mt-12 max-w-3xl">

      <button
        type="button"
        onClick={onBack}
        className="mb-5 font-semibold text-slate-500 transition hover:text-[#0F766E]"
      >
        ← Change room
      </button>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* Heading */}
        <div className="border-b border-slate-100 p-6">
          <p className="text-sm font-bold tracking-wider text-[#0F766E]">
            EXPERIMENT 3
          </p>

          <h2 className="mt-1 text-3xl font-black">
            Booking Summary
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Review your reservation before continuing.
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4 p-6">

          <div className="flex justify-between gap-4 border-b pb-4">
            <span className="text-slate-500">Hotel</span>
            <b className="text-right">{hotel.name}</b>
          </div>

          <div className="flex justify-between gap-4 border-b pb-4">
            <span className="text-slate-500">Room type</span>
            <b className="text-right">{room.type}</b>
          </div>

          <div className="flex justify-between gap-4 border-b pb-4">
            <span className="text-slate-500">Check-in</span>
            <b>{search.checkIn}</b>
          </div>

          <div className="flex justify-between gap-4 border-b pb-4">
            <span className="text-slate-500">Check-out</span>
            <b>{search.checkOut}</b>
          </div>

          <div className="flex justify-between gap-4 border-b pb-4">
            <span className="text-slate-500">Guests</span>
            <b>
              {search.guests}{" "}
              {search.guests === 1 ? "Guest" : "Guests"}
            </b>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Stay duration</span>
            <b>
              {nights} {nights === 1 ? "Night" : "Nights"}
            </b>
          </div>
        </div>

        {/* Price */}
        <div className="mx-6 mb-6 rounded-2xl bg-[#172033] p-5 text-white">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">
                Total booking cost
              </p>

              <p className="mt-1 text-xs text-slate-400">
                ₹{room.price} × {nights} nights
              </p>
            </div>

            <span className="text-2xl font-black text-[#5EEAD4]">
              ₹{total}
            </span>
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="mt-5 w-full rounded-xl bg-[#E76F51] py-3 font-bold text-white transition hover:bg-[#D95D43]"
          >
            Continue to Reservation →
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookingSummary;
