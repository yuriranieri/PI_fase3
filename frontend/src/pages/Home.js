import React from 'react'
import logo from "../img/logo.png"
import { Button, Jumbotron, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'


const Home = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="3">
                        <img id="logo-registro" src={logo}/>
                    </Col>
                    <Col>
                    <Jumbotron fluid>
                        <Container>
                            <br/>
                            <h1 className="display-2">Ranking</h1>
                            <h4>Bem-Vindo(a)!</h4><br/>
                            <p>Trabalhamos com Agendamento <b>a cada 30 minutos.</b><br/><br/>
                            Horário de funcionamento: <br/>
                            <b>Segunda-feira a Sexta-feira</b><br/>
                            <b>08:00 às 18:00</b><br/></p>
                        </Container>
                    </Jumbotron>
                    
                    </Col>
                </Row>


            </Container>
        </>
    )

}

export default Home