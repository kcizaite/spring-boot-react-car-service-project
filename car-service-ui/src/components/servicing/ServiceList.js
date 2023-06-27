import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {useAuth} from "../context/AuthContext";
import {Container} from "semantic-ui-react";

export function ServiceListPage(props) {
    const Auth = useAuth();
    const [services, setServices] = useState([])

    function bearerAuth(user) {
        return `Bearer ${user.accessToken}`
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

    return (
        <Container>
            <Link to={'/create-service'}>
                Create New Service
            </Link>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Manager</th>
                </tr>
                </thead>
                <tbody>
                {services.map(service => (
                    <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>{service.address}</td>
                            <td>{service.manager}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}