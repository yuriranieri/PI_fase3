import React from 'react'
import logo from "../img/logo.png"
import { Button, Jumbotron, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'


const Questions = () => {

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
                            <h1 className="display-2">Questions</h1>
                            
                        </Container>
                    </Jumbotron>
                    
                    </Col>
                </Row>


            </Container>
        </>
    )

}

export default Questions