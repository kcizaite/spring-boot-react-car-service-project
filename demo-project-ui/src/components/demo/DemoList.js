import {useEffect, useState} from "react"
import {Link, useParams} from 'react-router-dom'
import {useAuth} from "../context/AuthContext";

export function DemoListPage(props) {

    const Auth = useAuth();

    // function bearerAuth(user) {
    //     return `Bearer ${user.accessToken}`
    // }

    const [demos, setDemos] = useState([])
    const params = useParams();


    const fetchDemos = () => {
        fetch("/api/v1/demos", {
            headers: {
                // 'Authorization': `Bearer ${bearerAuth(Auth.getUser())}`,
                'Authorization': `Bearer ${Auth.getUser().accessToken}`,
            }
        })
            .then((response) => response.json())
            .then((jsonResponse) => setDemos(jsonResponse))
    };


    useEffect(() => {
        fetchDemos();
    }, []);

    return (
        <div>
            <Link to={'/create-demo'}>
                Create New
            </Link>
            <div>
                <div>
                    {demos.map(demo => (
                        <div key={demo.id}>
                            <div>
                                <h1>{demo.name}</h1>
                            </div>
                            <div>
                                <p>{demo.number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}