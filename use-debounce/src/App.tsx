import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

function App() {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState<any>(null);
    const debouncedPassword = useDebounce<string>(password);

    useEffect(() => {
        if (password === "" || regex.test(password)) {
            setError(null);
        } else {
            setError("password should contains at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character.");
        }
    }, [debouncedPassword]);

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <form
                onSubmit={(e: any) => {
                    e.preventDefault();
                }}>
                <label>
                    Password:
                    <input type={show ? "text" : "password"} value={password} onChange={(e: any) => setPassword(e.target.value)} />
                </label>
                <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
            </form>
            <div className="error">{error && error}</div>
        </div>
    );
}

export default App;
