use hotel_bookings;
db.dropDatabase();

db.hotelBookings.insertMany([
  {
    name: "Raquel",
    eMail: "raquel@hotmail.com",
    isCheckedIn: true
  },
  {
    name: "Ben",
    eMail: "ben@hotmail.com",
    isCheckedIn: true
    },
  {
    name: "Peter",
    eMail: "peter@hotmail.com",
    isCheckedIn: false
    }
]);