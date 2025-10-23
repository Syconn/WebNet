import type {CardData} from "../pages/gameLoopPage/Card.tsx";

export async function serverStatus() {
    try {
        const res = await fetch("http://localhost:8080/status", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json()
        return data.success
    } catch (e) {
        console.error("Error:", e)
        return undefined
    }
}

export async function requestPage() {
    try {
        const res = await fetch("http://localhost:8080/page", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json()
        return data.page
    } catch (err) {
        console.error("Error:", err)
    }
}

export async function arrayState()  {
    try {
        const res = await fetch("http://localhost:8080/array", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json()
        return data.array
    } catch (e) {
        console.error("Error:", e)
        return []
    }
}

export async function deckState() {
    try {
        const res = await fetch("http://localhost:8080/deck", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        return (await res.json()).cards as CardData[]
    } catch (e) {
        console.error("Error:", e)
        return []
    }
}

export async function sortCard(index: number) {
    try {
        const res = await fetch("http://localhost:8080/cardClicked", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"body": index}),
        })
        const data = await res.json()
        return data.success
    } catch (e) {
        console.error("Error:", e)
        return false
    }
}

export async function changePage(page: string, setPage: (page: string) => void) {
    try {
        const res = await fetch("http://localhost:8080/setPage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"body": page})
        })
        const data = await res.json()
        if (data.success) setPage(page)
    } catch (err) {
        console.error("Error:", err)
    }
}