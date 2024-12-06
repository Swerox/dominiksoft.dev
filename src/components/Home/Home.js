import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesComponent from "../Particles";


function Home() {
    return (
        <section>
            <Container class="particlesComponent">
                <ParticlesComponent />
            </Container>
            <h1>HOME TAB</h1>
        </section>
    );
}

export default Home;