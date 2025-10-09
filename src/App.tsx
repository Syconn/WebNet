import {useState} from "react";

function App() {
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/click", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            setCount(data.count);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20, fontFamily: "monospace" }}>
            <h2>React ↔ C++ Click Counter</h2>
            <button
                onClick={handleClick}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    background: "lightgreen",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                {loading ? "Processing..." : "Click Me!"}
            </button>

            <h3 style={{ marginTop: "20px" }}>Server Count: {count}</h3>
        </div>
    );
}

export default App
