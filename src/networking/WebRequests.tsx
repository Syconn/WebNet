export async function serverStatus() {
    try {
        const res = await fetch("http://localhost:8080/status", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        return data.success;
    } catch (e) {
        console.error("Error:", e);
        return undefined;
    }
}

export async function requestPage() {
    try {
        const res = await fetch("http://localhost:8080/page", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        return data.page;
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function changePage(page: string, setPage: (page: string) => void) {
    try {
        const res = await fetch("http://localhost:8080/setPage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"body" : page})
        })
        const data = await res.json();
        if (data.success) setPage(page);
    } catch (err) {
        console.error("Error:", err);
    }
}