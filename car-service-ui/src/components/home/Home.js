import React from 'react';
import {Container, Header, Segment} from "semantic-ui-react";

export function Home() {
    return (
        <Container>
            <Header textAlign='center'>
                <h1>Car Service Mechanincs</h1>
            </Header>
            <Segment>
                {/*<Image src={kitty} alt='kitty' centered/>*/}
            </Segment>
        </Container>
    )
}