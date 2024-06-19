export async function signup({ fullName, email, password }) {}

export async function login({ email, password }) {}

export async function getUsers() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/v1/users/get-all");

    if (!res.ok) {
      throw Error("Error loading the data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {}

// for the current user
export async function editCurrentUser({ password, fullName }) {}

// for the admin
export async function updateUser(newUserData, id) {}

export async function deleteUser(userID) {
  try {
    const res = await fetch(`http://127.0.0.1:3000/api/v1/users/${userID}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw Error("Error deleting the data");
    }
  } catch (error) {
    throw error;
  }
}

export async function logout() {}
