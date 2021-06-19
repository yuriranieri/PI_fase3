import React from 'react'
import logo from "../img/logo.png"
import { Button, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'
import axios from 'axios'

const Login = () => { 

    const handleSubmit = values => {
        axios.post('http://localhost:5000', values)//colocar caminho do BackEnd
        .then(resp => console.log(resp))
    }

    return (
        <> 
            <Container>
                <div id="logo-login">
                    <img src={logo}/>
                </div>
                <Form initialValues={{}} onSubmit={handleSubmit} >
                    <FormGroup>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}> 
                            
                                <Label for="login">Login</Label><br/>
                                <Input type="text" id="user" placeholder="Usuário"/> <br/>
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
                            <Button color="warning" size="lg" type="submit" value="Entrar">Entrar</Button>
                            <div id="btnCriar">
                                <Button href="./Register"color="link">Não possuo conta</Button>
                            </div>
                        </Col>    
                        
                    </Row> 
                </Form>    
            </Container>

        </>
    )
}

export default Login