const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getGuests() {
  try {
    const res = await fetch(`${API_URL}/customers`);

    if (!res.ok) {
      throw Error("Error loading guests");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getGuestById(guestId) {
  try {
    const res = await fetch(`${API_URL}/customers/${guestId}`);

    if (!res.ok) {
      throw Error("Error loading the guest data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAndUpdateGuest(newGuestData, id) {
  try {
    if (id) {
      const res = await fetch(`${API_URL}/customers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGuestData),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed updating guest");
      }
    }

    if (!id) {
      const res = await fetch(`${API_URL}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGuestData),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed creating guest");
      }

      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw error;
  }
}

// export async function deleteGuest(id) {}
