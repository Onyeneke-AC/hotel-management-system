export async function getGuests() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/v1/customers");

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
    const res = await fetch(`http://127.0.0.1:3000/api/v1/customers/${id}`);

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

export async function createGuest(newGuest) {}

export async function editGuest(editedGuestData, id) {}

// export async function deleteGuest(id) {}
