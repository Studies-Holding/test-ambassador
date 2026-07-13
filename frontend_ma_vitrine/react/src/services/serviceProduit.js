import API_URL from "./api";

export async function getProduits() {
    const response = await fetch(`${API_URL}/products`);
    if(!response.ok) {
        throw new Error("Impossible de récupérer les produits.");
    }
    return response.json();
}