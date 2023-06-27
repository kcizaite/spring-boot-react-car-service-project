import {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext";
import {Container} from "semantic-ui-react";

export function MechanincsCreatePage(props) {
    const Auth = useAuth();
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [specialisation, setSpecialisation] = useState("");
    const [city, setCity] = useState("");
    const [rating, setRating] = useState();
    const [servicing, setServicing] = useState([])
    const [error, setError] = useState(false);
    const [services, setServices] = useState([])


    function bearerAuth(user) {
        return `Bearer ${user.accessToken}`
    }

    const clear = () => {
        setName("")
        setSurname("")
        setCity("")
        setRating("")
        setServicing("")
        setError("")
    }

    const fetchServices = () => {
        fetch("/api/v1/services", {
            headers: {
                'Authorization': `Bearer ${bearerAuth(Auth.getUser())}`
            }
        })
            .then((response) => response.json())
            .then((jsonResponse) => setServices(jsonResponse))
    };


    useEffect(() => {
        fetchServices();
    }, []);

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

    const createMechanic = () => {
        setError(false);
        fetch('/api/v1/services/create-mechanic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerAuth(Auth.getUser())}`
            },
            body: JSON.stringify({
                name,
                surname,
                specialisation,
                city,
                rating,
                servicing
            })
        }).then(applyResult)
    }

    return (
        <Container>
            <h1>New Mechanic</h1>
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
                    <label htmlFor="surname">Surname </label>
                    <input
                        id="surname"
                        value={surname}
                        placeholder="Surname"
                        onChange={
                            (e) => setSurname(e.target.value)
                        }/>
                </div>
                <div className="field">
                    <label htmlFor="specialisation">Specialisation </label>
                    <input
                        id="specialisation"
                        placeholder="Specialisation"
                        value={specialisation}
                        onChange={
                            (e) => setSpecialisation(e.target.value)
                        }/>
                </div>
                <div className="field">
                    <label htmlFor="city">City </label>
                    <input
                        id="city"
                        placeholder="City"
                        value={city}
                        onChange={
                            (e) => setCity(e.target.value)
                        }/>
                </div>
                <select name="Rating" className="ui dropdown" id="rating">
                    <option value="">Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div className="field">
                    <label htmlFor="services">Services </label>
                    <select
                        id="services"
                        value={servicing}
                        onChange={(e) => setServicing(Array.from(e.target.selectedOptions, (option) => option.value))}
                    >
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
            <div>
                <button onClick={createMechanic}>Create</button>
            </div>
        </Container>
    )
}