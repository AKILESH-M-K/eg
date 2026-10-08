
const hotels = [
  // ---------------- CHENNAI ----------------

  {
    id: 1,
    name: "Marina Grand Hotel",
    city: "Chennai",
    price: 4500,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Pool",
      "Parking",
    ],
    rooms: [
      {
        type: "Deluxe Room",
        price: 4500,
        guests: 2,
      },
      {
        type: "Family Suite",
        price: 6500,
        guests: 4,
      },
    ],
  },

  {
    id: 2,
    name: "Bay View Residency",
    city: "Chennai",
    price: 3200,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Standard Room",
        price: 3200,
        guests: 2,
      },
      {
        type: "Executive Room",
        price: 4200,
        guests: 3,
      },
    ],
  },

  {
    id: 3,
    name: "The Coral Chennai",
    city: "Chennai",
    price: 5800,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Gym",
      "Breakfast",
    ],
    rooms: [
      {
        type: "Premium Room",
        price: 5800,
        guests: 2,
      },
      {
        type: "Luxury Suite",
        price: 8200,
        guests: 4,
      },
    ],
  },

  {
    id: 4,
    name: "Urban Nest Chennai",
    city: "Chennai",
    price: 2800,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    amenities: [
      "Wi-Fi",
      "Parking",
    ],
    rooms: [
      {
        type: "Comfort Room",
        price: 2800,
        guests: 2,
      },
      {
        type: "Family Room",
        price: 3900,
        guests: 4,
      },
    ],
  },

  // ---------------- COIMBATORE ----------------

  {
    id: 5,
    name: "Coimbatore Central Suites",
    city: "Coimbatore",
    price: 3800,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "Parking",
    ],
    rooms: [
      {
        type: "Deluxe Room",
        price: 3800,
        guests: 2,
      },
      {
        type: "Business Suite",
        price: 5200,
        guests: 3,
      },
    ],
  },

  {
    id: 6,
    name: "Brookfield Retreat",
    city: "Coimbatore",
    price: 4700,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Garden Room",
        price: 4700,
        guests: 2,
      },
      {
        type: "Family Suite",
        price: 6800,
        guests: 5,
      },
    ],
  },

  {
    id: 7,
    name: "Ivy Park Hotel",
    city: "Coimbatore",
    price: 2900,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    amenities: [
      "Wi-Fi",
      "Breakfast",
    ],
    rooms: [
      {
        type: "Standard Room",
        price: 2900,
        guests: 2,
      },
      {
        type: "Triple Room",
        price: 3700,
        guests: 3,
      },
    ],
  },

  // ---------------- BANGALORE ----------------

  {
    id: 8,
    name: "Bangalore Skyline",
    city: "Bangalore",
    price: 5200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Gym",
      "Breakfast",
    ],
    rooms: [
      {
        type: "City View Room",
        price: 5200,
        guests: 2,
      },
      {
        type: "Executive Suite",
        price: 7200,
        guests: 4,
      },
    ],
  },

  {
    id: 9,
    name: "Silicon Valley Stay",
    city: "Bangalore",
    price: 4100,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    amenities: [
      "Wi-Fi",
      "Gym",
      "Parking",
    ],
    rooms: [
      {
        type: "Business Room",
        price: 4100,
        guests: 2,
      },
      {
        type: "Premium Suite",
        price: 5900,
        guests: 3,
      },
    ],
  },

  {
    id: 10,
    name: "Garden City Residency",
    city: "Bangalore",
    price: 3300,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Standard Room",
        price: 3300,
        guests: 2,
      },
      {
        type: "Family Room",
        price: 4600,
        guests: 4,
      },
    ],
  },

  // ---------------- OOTY ----------------

  {
    id: 11,
    name: "Ooty Mist Resort",
    city: "Ooty",
    price: 4900,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Mountain View Room",
        price: 4900,
        guests: 2,
      },
      {
        type: "Cottage Suite",
        price: 7000,
        guests: 4,
      },
    ],
  },

  {
    id: 12,
    name: "Blue Hills Retreat",
    city: "Ooty",
    price: 3600,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Hill Room",
        price: 3600,
        guests: 2,
      },
      {
        type: "Family Cottage",
        price: 5200,
        guests: 4,
      },
    ],
  },

  {
    id: 13,
    name: "Pine Forest Lodge",
    city: "Ooty",
    price: 2700,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    amenities: [
      "Wi-Fi",
      "Parking",
    ],
    rooms: [
      {
        type: "Cozy Room",
        price: 2700,
        guests: 2,
      },
      {
        type: "Family Room",
        price: 3900,
        guests: 4,
      },
    ],
  },

  // ---------------- MADURAI ----------------

  {
    id: 14,
    name: "Madurai Heritage Hotel",
    city: "Madurai",
    price: 3400,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Pool",
    ],
    rooms: [
      {
        type: "Heritage Room",
        price: 3400,
        guests: 2,
      },
      {
        type: "Royal Suite",
        price: 5600,
        guests: 4,
      },
    ],
  },

  {
    id: 15,
    name: "Temple View Residency",
    city: "Madurai",
    price: 2400,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    amenities: [
      "Wi-Fi",
      "Parking",
    ],
    rooms: [
      {
        type: "Standard Room",
        price: 2400,
        guests: 2,
      },
      {
        type: "Triple Room",
        price: 3200,
        guests: 3,
      },
    ],
  },

  {
    id: 16,
    name: "Vaigai Comfort Suites",
    city: "Madurai",
    price: 4200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "Parking",
    ],
    rooms: [
      {
        type: "Deluxe Room",
        price: 4200,
        guests: 2,
      },
      {
        type: "Family Suite",
        price: 6100,
        guests: 5,
      },
    ],
  },

  // ---------------- PONDICHERRY ----------------

  {
    id: 17,
    name: "White Town Retreat",
    city: "Pondicherry",
    price: 5100,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Gym",
    ],
    rooms: [
      {
        type: "Sea View Room",
        price: 5100,
        guests: 2,
      },
      {
        type: "Premium Suite",
        price: 7600,
        guests: 4,
      },
    ],
  },

  {
    id: 18,
    name: "French Quarter Stay",
    city: "Pondicherry",
    price: 3900,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    amenities: [
      "Wi-Fi",
      "Breakfast",
      "Parking",
    ],
    rooms: [
      {
        type: "Classic Room",
        price: 3900,
        guests: 2,
      },
      {
        type: "Family Suite",
        price: 5700,
        guests: 4,
      },
    ],
  },

  {
    id: 19,
    name: "Coral Bay Pondicherry",
    city: "Pondicherry",
    price: 6200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Gym",
      "Parking",
    ],
    rooms: [
      {
        type: "Ocean View Room",
        price: 6200,
        guests: 2,
      },
      {
        type: "Luxury Villa",
        price: 9000,
        guests: 5,
      },
    ],
  },

  {
    id: 20,
    name: "Auroville Garden Resort",
    city: "Pondicherry",
    price: 3000,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    amenities: [
      "Wi-Fi",
      "Pool",
      "Parking",
    ],
    rooms: [
      {
        type: "Garden Room",
        price: 3000,
        guests: 2,
      },
      {
        type: "Family Cottage",
        price: 4500,
        guests: 4,
      },
    ],
  },
];

export default hotels;