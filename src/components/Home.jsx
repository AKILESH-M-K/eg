
import { useState } from "react";
import SearchBar from "./SearchBar";
import HotelList from "./HotelList";
import HotelDetail from "./HotelDetail";
import BookingSummary from "./BookingSummary";
import ReservationForm from "./ReservationForm";

function Home() {
  const [search, setSearch] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking, setBooking] = useState(false);

  // Search hotels
  const handleSearch = (data) => {
    setSearch(data);
    setSelectedHotel(null);
    setSelectedRoom(null);
    setBooking(false);
  };

  // Select hotel
  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    setSelectedRoom(null);
    setBooking(false);
  };

  // Select room
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // Called after successful reservation
  const handleBookingComplete = () => {
    setSearch(null);
    setSelectedHotel(null);
    setSelectedRoom(null);
    setBooking(false);
  };

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">

        {/* Hero */}
        {!selectedHotel && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#0F766E]">
              HOTEL SEARCH & RESERVATION
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#172033] sm:text-6xl">
              Get your
              <span className="text-[#0F766E]">
                {" "}perfect room.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-500">
              Search destinations, compare hotels, choose your room,
              and complete your reservation in one simple flow.
            </p>
          </div>
        )}

        {/* Search */}
        {!selectedHotel && (
          <SearchBar onSearch={handleSearch} />
        )}

        {/* Hotel List */}
        {search && !selectedHotel && (
          <HotelList
            location={search.location}
            checkIn={search.checkIn}
            checkOut={search.checkOut}
            guests={search.guests}
            onSelect={handleHotelSelect}
          />
        )}

        {/* Hotel Details */}
        {selectedHotel && !selectedRoom && (
          <HotelDetail
            hotel={selectedHotel}
            search={search}
            onBack={() => setSelectedHotel(null)}
            onRoomSelect={handleRoomSelect}
          />
        )}

        {/* Booking Summary */}
        {selectedHotel && selectedRoom && !booking && (
          <BookingSummary
            hotel={selectedHotel}
            room={selectedRoom}
            search={search}
            onBack={() => setSelectedRoom(null)}
            onContinue={() => setBooking(true)}
          />
        )}

        {/* Reservation Form */}
        {booking && (
          <ReservationForm
            hotel={selectedHotel}
            room={selectedRoom}
            search={search}
            onBack={() => setBooking(false)}
            onBookingComplete={handleBookingComplete}
          />
        )}

      </section>
    </main>
  );
}

export default Home;
