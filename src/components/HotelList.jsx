import { useState } from "react";
import hotels from "../data/hotels";
import HotelCard from "./HotelCard";

function HotelList({
  location,
  checkIn,
  checkOut,
  guests,
  onSelect,
}) {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [rating, setRating] = useState(0);
  const [amenity, setAmenity] = useState("");

  const matches = hotels.filter((hotel) => {
    const cityMatch =
      hotel.city.toLowerCase() === location.toLowerCase();

    const priceMatch = hotel.price <= maxPrice;

    const ratingMatch = hotel.rating >= rating;

    const amenityMatch =
      !amenity || hotel.amenities.includes(amenity);

    return (
      cityMatch &&
      priceMatch &&
      ratingMatch &&
      amenityMatch
    );
  });

  return (
    <section className="mx-auto mt-12 max-w-6xl">

      {/* Search information */}
      <div className="mb-6">
        <p className="text-sm font-bold tracking-wider text-[#0F766E]">
          SEARCH RESULTS
        </p>

        <h2 className="mt-1 text-3xl font-black">
          Hotels in {location}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-500">
          <span className="rounded-full bg-white px-3 py-2 shadow-sm">
            📅 {checkIn}
          </span>

          <span className="rounded-full bg-white px-3 py-2 shadow-sm">
            📅 {checkOut}
          </span>

          <span className="rounded-full bg-white px-3 py-2 shadow-sm">
            👥 {guests} guests
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-[#172033]">
            Refine your search
          </h3>

          <p className="text-sm text-slate-500">
            Filter hotels according to your preferences.
          </p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* Price */}
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Maximum price: ₹{maxPrice}
            </label>

            <input
              type="range"
              min="2000"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className="mt-3 w-full accent-[#0F766E]"
            />

            <div className="flex justify-between text-xs text-slate-400">
              <span>₹2,000</span>
              <span>₹10,000</span>
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Star rating
            </label>

            <select
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
              className="mt-3 w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-[#0F766E]"
            >
              <option value="0">Any rating</option>
              <option value="4">4★ and above</option>
              <option value="4.5">4.5★ and above</option>
              <option value="4.8">4.8★ and above</option>
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Amenity
            </label>

            <select
              value={amenity}
              onChange={(e) => setAmenity(e.target.value)}
              className="mt-3 w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-[#0F766E]"
            >
              <option value="">Any amenity</option>
              <option value="Wi-Fi">Wi-Fi</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Pool">Pool</option>
              <option value="Parking">Parking</option>
              <option value="Gym">Gym</option>
            </select>
          </div>
        </div>
      </div>

      {/* Conditional rendering */}
      {matches.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <div className="text-5xl">🏨</div>

          <h3 className="mt-4 text-xl font-bold">
            No hotels available
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            No hotels match your selected location and filters.
            Try changing your budget, rating, or amenities.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            {matches.length} hotel
            {matches.length !== 1 ? "s" : ""} found
          </p>

          {/* Dynamic list */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onSelect={onSelect}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default HotelList;
