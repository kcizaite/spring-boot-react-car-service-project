import {useEffect, useState} from "react"
import {Link, useParams} from 'react-router-dom'
import {useAuth} from "../context/AuthContext";
import {Container} from "semantic-ui-react";

export function MechanicListPage(props) {

    const Auth = useAuth();

    function bearerAuth(user) {
        return `Bearer ${user.accessToken}`
    }

    const [mechanics, setMechanics] = useState([])


    const fetchMechanincs = () => {
        fetch("/api/v1/mechanics", {
            headers: {
                'Authorization': `Bearer ${bearerAuth(Auth.getUser())}`,
            }
        })
            .then((response) => response.json())
            .then((jsonResponse) => setMechanics(jsonResponse))
    };


    useEffect(() => {
        fetchMechanincs();
    }, []);

    return (
        <Container>
            <Link to={'/create-mechanic'}>
                Create New Mechanic
            </Link>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Specialisation</th>
                    <th>City</th>
                    <th>Rating</th>
                    <th>Service</th>
                </tr>
                </thead>
                <tbody>
                {mechanics.map(mechanic => (
                    <tr key={mechanic.id}>
                        <td>{mechanic.name}</td>
                        <td>{mechanic.surname}</td>
                        <td>{mechanic.specialisation}</td>
                        <td>{mechanic.city}</td>
                        <td>{mechanic.rating}</td>
                        <td>{mechanic.servicing}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}