import API_URL from "./api";

export async function login(user) {

    const response = await fetch(`${API_URL}/users?email=${user.email}`);

    if(!response.ok) {
        throw new Error("Impossible de contacter le serveur.");
    }
    const users = await response.json();
    const foundUser = users.find((currentUser) => 
        currentUser.password === user.password);
    return foundUser || null;
}