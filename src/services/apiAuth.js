export async function signup({ fullName, email, password }) {}

export async function login({ email, password }) {}

export async function getUsers() {}

export async function getCurrentUser() {}

// for the current user
export async function editCurrentUser({ password, fullName }) {}

// for the admin
export async function updateUser(newUserData, id) {}

export async function deleteUser(id) {}

export async function logout() {}
