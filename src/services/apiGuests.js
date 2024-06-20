const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getGuests() {
  try {
    const res = await fetch(`${API_URL}/customers`);

    if (!res.ok) {
      throw Error("Error loading the data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getGuestById(id) {
  try {
    const res = await fetch(`${API_URL}/customers/${id}`);

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
        throw new Error(errorResponse.message || "Failed updating user");
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
        throw new Error(errorResponse.message || "Failed creating user");
      }

      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw error;
  }
}

// export async function deleteGuest(id) {}
