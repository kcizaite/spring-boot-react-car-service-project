import {useState} from "react";
import {useAuth} from "../context/AuthContext";
import {Container} from "semantic-ui-react";

export function ServiceCreatePage(props) {
    const Auth = useAuth();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [manager, setManager] = useState("");
    const [error, setError] = useState(false);


    function bearerAuth(user) {
        return `Bearer ${user.accessToken}`
    }

    const clear = () => {
        setName("")
        setAddress("")
        setManager("")
        setError("")
    }

    const applyResult = (result) => {
        if (result.ok) {
            clear();
        } else {
            result.text().then(text => {
                const response = JSON.parse(text);
                setError(response.message)
            }).catch(error => {
                setError("Something bad happened: ", error);
            });
        }
    }

    const createService = () => {
        setError(false);
        fetch('/api/v1/services/create-service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerAuth(Auth.getUser())}`
            },
            body: JSON.stringify({
                name,
                address,
                manager
            })
        }).then(applyResult)
    }

    return (
        <Container>
            <h1>New Service</h1>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="name">Name </label>
                    <input
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={
                            (e) => setName(e.target.value)
                        }/>
                </div>
                <div className="field">
                    <label htmlFor="adress">Address </label>
                    <input
                        id="address"
                        value={address}
                        placeholder="Address"
                        onChange={
                            (e) => setAddress(e.target.value)
                        }/>
                </div>
                <div className="field">
                    <label htmlFor="manager">Manager </label>
                    <input
                        id="manager"
                        placeholder="Manager"
                        value={manager}
                        onChange={
                            (e) => setManager(e.target.value)
                        }/>
                </div>
                <div>
                    <button onClick={createService}>Create</button>
                </div>
            </form>
        </Container>
    )
}