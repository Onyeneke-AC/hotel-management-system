const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getRooms() {
  try {
    const res = await fetch(`${API_URL}/rooms`);

    if (!res.ok) {
      throw Error("Error loading rooms");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoom(id) {
  try {
    const res = await fetch(`${API_URL}/rooms/${id}`);

    if (!res.ok) {
      throw Error("Error loading the room data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAndUpdateRoom(newRoomData, id) {
  try {
    if (id) {
      const res = await fetch(`${API_URL}/rooms/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoomData),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed updating user");
      }
    }

    if (!id) {
      const res = await fetch(`${API_URL}/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoomData),
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

export async function deleteRoom(id) {}
