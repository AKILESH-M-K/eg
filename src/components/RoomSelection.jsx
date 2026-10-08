function RoomSelection({
  rooms,
  guests,
  checkIn,
  checkOut,
  onSelect,
}) {
  const availableRooms = rooms.filter(
    (room) => room.guests >= guests
  );

  return (
    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-wrap items-end justify-between gap-3">

        <div>
          <p className="text-sm font-bold tracking-wider text-[#0F766E]">
            ROOM SELECTION
          </p>

          <h3 className="mt-1 text-2xl font-black">
            Choose your room
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Rooms shown below can accommodate your group.
          </p>
        </div>

        <div className="rounded-xl bg-[#E6FFFA] px-4 py-2 text-sm font-semibold text-[#115E59]">
          {guests} {guests === 1 ? "Guest" : "Guests"}
        </div>
      </div>

      {/* Stay information */}
      <div className="mt-5 rounded-2xl bg-[#F4F7F9] p-4 text-sm text-slate-600">
        <b>Stay:</b> {checkIn} → {checkOut}
      </div>

      {/* No rooms */}
      {availableRooms.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

          <div className="text-4xl">🛏️</div>

          <h4 className="mt-3 font-bold">
            No rooms available for selected guests
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            Try reducing the number of guests or choose another hotel.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">

          {availableRooms.map((room) => (
            <div
              key={room.type}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#0F766E] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">

                <div>
                  <h4 className="font-bold">
                    {room.type}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Maximum {room.guests} guests
                  </p>
                </div>

                <span className="rounded-full bg-[#E6FFFA] px-3 py-1 text-xs font-bold text-[#0F766E]">
                  Available
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">

                <div>
                  <p className="text-2xl font-black">
                    ₹{room.price}
                  </p>

                  <p className="text-xs text-slate-400">
                    per night
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelect(room)}
                  className="rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#115E59]"
                >
                  Select room
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RoomSelection;