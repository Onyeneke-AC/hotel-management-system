export async function getBookings() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/v1/bookings");

    if (!res.ok) {
      throw Error("Error loading the data");
    }

    console.log(res);

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBooking(id) {}

export async function createBooking(newBooking) {}

export async function editBooking(editedBookingData, id) {}

export async function deleteBooking(id) {}
