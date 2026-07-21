import {PAYLOAD_URL} from "../services/api";

export async function getArticles() {
    
    const response = await fetch(`${PAYLOAD_URL}/articles`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Erreur récupération articles");
    }

    return data;
}