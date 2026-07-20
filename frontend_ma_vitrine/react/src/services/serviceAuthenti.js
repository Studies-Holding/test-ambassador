import API_URL from "./api";

export async function signUp(user) {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message);
    }
    return data;
}

export async function login(user) {

    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message);
    }
    
    return data;
}

export async function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
}

export async function getMe() {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/auth/me`, {

        method: "GET",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message);

    }

    return data;

}