// import { format } from "date-fns";

const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getBookings(startDate, endDate) {
  try {
    const res = await fetch(
      `${API_URL}/bookings?start=${new Date(
        startDate
      ).toISOString()}&end=${new Date(endDate).toISOString()}`
    );
    // const res = await fetch(`${API_URL}/bookings`);

    if (!res.ok) {
      throw Error("Error loading the bookings");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBooking(id) {
  try {
    const res = await fetch(`${API_URL}/bookings/${id}`);

    if (!res.ok) {
      throw Error("Error loading the booking data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoomBooking(bookingId, roomBookingId) {
  try {
    const res = await fetch(
      `${API_URL}/bookings/booking/${bookingId}/roomBooking/${roomBookingId}`
    );

    if (!res.ok) {
      throw Error("Error loading the booking data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAndUpdateBooking(
  newBookingData,
  bookingId,
  roomBookingId
) {
  try {
    if (bookingId) {
      const res = await fetch(
        `${API_URL}/bookings/booking/${bookingId}/roomBooking/${roomBookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBookingData),
        }
      );

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed updating booking");
      }
    }

    if (!bookingId) {
      const res = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookingData),
      });

      if (!res.ok) {
        const errorResponse = await res.json();

        throw new Error(errorResponse.message || "Failed Creating Booking");
      }

      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function deleteBooking(bookingId) {
  try {
    const res = await fetch(`${API_URL}/bookings/${bookingId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw Error("Error deleting the booking");
    }
  } catch (error) {
    throw error;
  }
}
