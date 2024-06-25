const API_URL = "http://127.0.0.1:3000/api/v1";

// for the admin
export async function signupAndUpdate(newUserData, id) {
  try {
    if (id) {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (!res.ok) throw Error("Failed updating user");
    }

    if (!id) {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (!res.ok) throw Error("Failed creating user");

      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function login(userData) {
  try {
    const res = await fetch(`${API_URL}/users/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) throw Error("Error logging in");

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/users/get-all`);

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

// // for the admin
// export async function updateUser(userData, id) {
//   try {
//     const res = await fetch(`${API_URL}/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!res.ok) throw Error("Failed updating user");
//   } catch (error) {
//     throw error;
//   }
// }

export async function deleteUser(userID) {
  try {
    const res = await fetch(`${API_URL}/users/${userID}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw Error("Error deleting the data");
    }
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    const res = await fetch(`${API_URL}/users/auth/logout`, {
      method: "POST",
    });

    if (!res.ok) {
      throw Error("Error logging out");
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}
