import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Jumbotron, Container, Form } from 'reactstrap'
import { getToken } from '../../utils/auth'
import MyButton from './MyButton'
import './Questions.css'


class Question2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: [],
            resposta_usuario: '',
            redirect: false,
            disabled: true
        }

        this.setResposta = this.setResposta.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    setResposta = (resposta_usuario) => {
        this.setState({
            resposta_usuario,
            disabled: false
        })
    }

    componentDidMount() {
        fetch(`http://localhost:5000/questions`)
            .then(question =>
                question.json().then(question => this.setState({ question }))
            )
    }


    render() {
        const { redirect } = this.state
        const { question } = this.state

        if (redirect) {
            return <Redirect to="/question/3" />
        }
        else {
            return (
                <>
                    {question.slice(1, 2).map((question, index) => (
                        <div key={index}>
                            <Container>
                                <Jumbotron className="fundo-questao">
                                    <Container>
                                        <h1><br/>{question.enunciado}</h1><br/>
                                        <MyButton handleClick={this.setResposta} label={question["0"]} /><t />
                                        <MyButton handleClick={this.setResposta} label={question["1"]} />
                                        <MyButton handleClick={this.setResposta} label={question["2"]} />
                                        <MyButton handleClick={this.setResposta} label={question["3"]} />

                                        <Form onSubmit={this.handleSubmit}>
                                            <br />
                                            <h2>SUA RESPOSTA:</h2>
                                            <p id="resposta">{this.state.resposta_usuario}</p>
                                            {/* {console.log(this.state.resposta_usuario)} */}
                                            <button id="submit" type="submit" disabled={this.state.disabled} >Avançar</button>
                                        </Form>
                                    </Container>
                                </Jumbotron>

                            </Container>

                        </div>
                    ))}
                </>
            )
        }
    }// fim do render

    handleSubmit(e) {
        const token = getToken()

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:5000/questions/2", options)
            .then(res => {
                if (!res.ok && res.status === 401) {
                    alert('ERRO')
                }
                return res.json()
            }).then(data => {
                alert('deu certo')
                this.setState({ redirect: true })
            }).catch(err => console.log(err))

        e.preventDefault()
    }
}

export default Question2