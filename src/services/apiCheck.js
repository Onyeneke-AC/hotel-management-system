const API_URL = "http://127.0.0.1:3000/api/v1";

export async function bookingCheckIn(id) {
  try {
    const res = await fetch(`${API_URL}/bookings/checkin/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Booking Check In Failed");
    }
  } catch (err) {
    throw err;
  }
}

export async function bookingCheckOut(id) {
  try {
    const res = await fetch(`${API_URL}/bookings/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Booking Check Out Failed");
    }
  } catch (err) {
    throw err;
  }
}
