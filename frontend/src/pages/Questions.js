import React, { useState } from 'react';
import logo from "../img/logo.png"
import { Button, ButtonGroup, Jumbotron, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'
import './Questions.css'

const Questions = () => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);
    
    return (
        <>
        <header>
            <img id="logo-perguntas" src={logo}/>
        </header>
            <Container>
                <Jumbotron>
                    <div id="fundo-questao">
                        <Container>
                            <h1 className="display-2">Quantos botões tem nesta tela?</h1>
                            <br/><br/>
                            <ButtonGroup>
                                <Button id="botao1" color="danger" onClick={() => setRSelected('vermelho')} active={rSelected === 'vermelho'}>05</Button>
                                <Button id="botao1" color="info" onClick={() => setRSelected('azul')} active={rSelected === 'azul'}>89</Button>
                                <Button id="botao1" color="warning" onClick={() => setRSelected('amarelo')} active={rSelected === 'amarelo'}>12</Button>
                                <Button id="botao1" color="success" onClick={() => setRSelected('verde')} active={rSelected === 'verde'}>01</Button>
                            </ButtonGroup>
                            <p>Você selecionou: {rSelected}</p>
                            <br/>                            
                            <Button color="primary" block>Avançar</Button>
                            <br/>
                        </Container>
                    </div>
                </Jumbotron>
                <br/>
                   
                

            </Container>
        </>
    )

}

export default Questions