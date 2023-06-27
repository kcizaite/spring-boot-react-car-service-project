import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react';
import {useAuth} from '../context/AuthContext';
import {demoApi} from '../misc/DemoApi';
import {handleLogError, parseJwt} from '../misc/Helpers';

export function Login() {
    const Auth = useAuth();

    useEffect(() => {
        const isLoggedIn = Auth.userIsAuthenticated();
        setIsLoggedIn(isLoggedIn);
    }, [Auth]);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const isLoggedIn = Auth.userIsAuthenticated();
        setIsLoggedIn(isLoggedIn);
    }, [Auth]);

    const handleInputChange = (e, {name, value}) => {
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(username && password)) {
            setIsError(true);
            return;
        }

        demoApi
            .authenticate(username, password)
            .then((response) => {
                const {accessToken} = response.data;
                const data = parseJwt(accessToken);
                const user = {data, accessToken};

                Auth.userLogin(user);

                setUsername('');
                setPassword('');
                setIsLoggedIn(true);
                setIsError(false);
            })
            .catch((error) => {
                handleLogError(error);
                setIsError(true);
            });
    };

    if (isLoggedIn) {
        return <Navigate to="/"/>;
    } else {
        return (
            <Grid textAlign="center">
                <Grid.Column style={{maxWidth: 450}}>
                    <Form size="large" onSubmit={handleSubmit}>
                        <Segment>
                            <Form.Input
                                fluid
                                autoFocus
                                name="username"
                                icon="user"
                                iconPosition="left"
                                placeholder="Username"
                                value={username}
                                onChange={handleInputChange}
                            />
                            <Form.Input
                                fluid
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            <Button color="violet" fluid size="large">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    {isError && (
                        <Message negative>
                            The username or password provided are incorrect!
                        </Message>
                    )}
                </Grid.Column>
            </Grid>
        );
    }
}

