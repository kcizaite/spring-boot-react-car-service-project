import React from 'react';
import kitty from '../images/kitty.gif'
import {Container, Header, Image, Segment} from "semantic-ui-react";

export function Home() {
    return (
        <Container>
            <Header textAlign='center'>
                <h1>BAIGIAMASIS KAROLINOS ČIŽAITĖS DARBAS</h1>
            </Header>
            <Segment>
                <Image src={kitty} alt='kitty' centered/>
            </Segment>
        </Container>
    )
}

