const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getBookings() {
  try {
    const res = await fetch(`${API_URL}/bookings`);

    if (!res.ok) {
      throw Error("Error loading the data");
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
      throw Error("Error loading the data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAndUpdateBooking(newBookingData, id) {
  try {
    if (id) {
      const res = await fetch(`${API_URL}/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookingData),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed updating booking");
      }
    }

    if (!id) {
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

// export async function editBooking(editedBookingData, id) {}

export async function deleteBooking(id) {}
