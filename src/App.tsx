import {useEffect, useState} from "react";

function App() {
    const [root, setRoot] = useState('');
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/')
            .then(res => res.text())
            .then(setRoot);

        fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then(obj => setData(obj.message));

        fetch('http://localhost:8080/status')
            .then(res => res.text())
            .then(setStatus);
    }, []);

    return (
        <div style={{ padding: 20, fontFamily: 'monospace' }}>
            <h2>React ↔ C++ Routes Demo</h2>
            <p><b>Root:</b> {root}</p>
            <p><b>Data:</b> {data}</p>
            <p><b>Status:</b> {status}</p>
        </div>
    );
}

export default App
