import { useEffect, useState } from "react";

function ReservationForm({
  hotel,
  room,
  search,
  onBack,
  onBookingComplete,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "UPI",
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sanitize name
    if (name === "name") {
      const sanitizedName = value
        .replace(/[^a-zA-Z\s]/g, "")
        .slice(0, 50);

      setForm({
        ...form,
        name: sanitizedName,
      });

      return;
    }

    // Sanitize phone
    if (name === "phone") {
      const sanitizedPhone = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setForm({
        ...form,
        phone: sanitizedPhone,
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanName = form.name.trim();

    // Validate name
    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanName)) {
      alert("Please enter a valid name.");
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone
    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Calculate number of nights
    const start = new Date(`${search.checkIn}T00:00:00`);
    const end = new Date(`${search.checkOut}T00:00:00`);

    const nights = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

    // Calculate total price
    const total = room.price * nights;

    // Generate booking ID
    const newBookingId =
      "STAY-" +
      Date.now().toString().slice(-8);

    // Reservation object
    const reservation = {
      bookingId: newBookingId,

      hotel: {
        id: hotel.id,
        name: hotel.name,
        city: hotel.city,
      },

      room: {
        type: room.type,
        price: room.price,
      },

      stay: {
        checkIn: search.checkIn,
        checkOut: search.checkOut,
        guests: search.guests,
        nights: nights,
      },

      customer: {
        name: cleanName,
        email: form.email,
        phone: form.phone,
      },

      payment: form.payment,

      totalAmount: total,

      bookedAt: new Date().toISOString(),
    };

    // Get existing reservations
    const existingReservations =
      JSON.parse(
        localStorage.getItem("hotelReservations")
      ) || [];

    // Add new reservation
    existingReservations.push(reservation);

    // Store updated reservations
    localStorage.setItem(
      "hotelReservations",
      JSON.stringify(existingReservations)
    );

    // Store current/latest reservation separately
    localStorage.setItem(
      "latestReservation",
      JSON.stringify(reservation)
    );

    // Update state
    setForm({
      ...form,
      name: cleanName,
    });

    setBookingId(newBookingId);
    setSubmitted(true);
  };

  // Automatically return to home after confirmation
  useEffect(() => {
    if (!submitted) {
      return;
    }

    const timer = setTimeout(() => {
      onBookingComplete();
    }, 10000);

    return () => clearTimeout(timer);
  }, [submitted, onBookingComplete]);

  // Confirmation screen
  if (submitted) {
    return (
      <section className="mx-auto mt-12 max-w-2xl">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">

          {/* Success icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E6FFFA] text-3xl font-black text-[#0F766E]">
            ✓
          </div>

          <p className="mt-5 text-sm font-bold tracking-wider text-[#0F766E]">
            BOOKING COMPLETE
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Reservation Confirmed
          </h2>

          <p className="mt-3 text-slate-500">
            Your stay at {hotel.name} has been successfully reserved.
          </p>

          {/* Booking ID */}
          <div className="mt-5 rounded-xl bg-[#172033] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Booking ID
            </p>

            <p className="mt-1 text-lg font-black text-[#5EEAD4]">
              {bookingId}
            </p>
          </div>

          {/* Reservation details */}
          <div className="mt-6 rounded-2xl bg-[#F4F7F9] p-5 text-left">

            <p>
              <b>Hotel:</b> {hotel.name}
            </p>

            <p className="mt-3">
              <b>Room:</b> {room.type}
            </p>

            <p className="mt-3">
              <b>Check-in:</b> {search.checkIn}
            </p>

            <p className="mt-3">
              <b>Check-out:</b> {search.checkOut}
            </p>

            <p className="mt-3">
              <b>Guests:</b> {search.guests}
            </p>

            <p className="mt-3">
              <b>Guest:</b> {form.name}
            </p>

            <p className="mt-3">
              <b>Payment:</b> {form.payment}
            </p>
          </div>

          {/* Redirect message */}
          <p className="mt-6 text-sm text-slate-400">
            Returning to the home page in 10 seconds...
          </p>

          <button
            type="button"
            onClick={onBookingComplete}
            className="mt-4 rounded-xl bg-[#0F766E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#115E59]"
          >
            Return Home Now
          </button>
        </div>
      </section>
    );
  }

  // Reservation form
  return (
    <section className="mx-auto mt-12 max-w-2xl">

      <button
        type="button"
        onClick={onBack}
        className="mb-5 font-semibold text-slate-500 transition hover:text-[#0F766E]"
      >
        ← Back to summary
      </button>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >

        <p className="text-sm font-bold tracking-wider text-[#0F766E]">
          FINAL STEP
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Complete your reservation
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Enter your details to confirm the booking.
        </p>

        <div className="mt-7 grid gap-4">

          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-semibold">
              Full Name
            </label>

            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              maxLength="50"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none transition focus:border-[#0F766E] focus:bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-semibold">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              autoComplete="email"
              maxLength="100"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none transition focus:border-[#0F766E] focus:bg-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-sm font-semibold">
              Phone Number
            </label>

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength="10"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none transition focus:border-[#0F766E] focus:bg-white"
            />
          </div>

          {/* Payment */}
          <div>
            <label className="mb-1 block text-sm font-semibold">
              Payment Method
            </label>

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-[#0F766E] focus:bg-white"
            >
              <option value="UPI">UPI</option>
              <option value="Card">
                Credit / Debit Card
              </option>
              <option value="Net Banking">
                Net Banking
              </option>
            </select>
          </div>

        </div>

        <button
          type="submit"
          className="mt-7 w-full rounded-xl bg-[#E76F51] py-3 font-bold text-white transition hover:bg-[#D95D43]"
        >
          Confirm Reservation
        </button>

      </form>
    </section>
  );
}

export default ReservationForm;