import React from 'react'

import logo from "../img/logo.png"
import { Button, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'

const Register = () => { 
    return (
        <> 
            <Container>
                <Row>
                    <Col xs="3">
                        <img id="logo-registro" src={logo}/>
                    </Col>
                    <Col xs="auto">
                        <Label id="txtCriar">Criar Conta</Label>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}> 
                                <Label for="usuario">Usuário</Label><br/>
                                <Input type="text" id="user" placeholder="Digite um nome de usuário"/> <br/>
                            </Col>    
                        </Row>                   
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Label for="password">Senha</Label><br/>
                                <Input type="password" id="password" placeholder="Digite sua senha"/> 
                            </Col>    
                        </Row>                   
                    </FormGroup>     
                    <br/>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button color="warning" size="lg" type="submit" value="Enviar">Enviar</Button>
                        </Col>    
                        
                    </Row> 
                </Form>    
            </Container>

        </>
    )
}

export default Register