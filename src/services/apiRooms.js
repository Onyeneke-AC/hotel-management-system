export async function getRooms() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/v1/rooms");

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

export async function createRooms(newRoom) {}

export async function editRoom(newRoomData, id) {}

export async function deleteRoom(id) {}
