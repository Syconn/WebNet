export async function requestPage() {
    try {
        const res = await fetch("http://localhost:8080/page", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        return data.page;
    } catch (err) {
        console.error("Error:", err);
    }
}