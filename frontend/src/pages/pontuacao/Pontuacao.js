import React from 'react'
import { Table, Button, Jumbotron, Container, Row, Col, } from 'reactstrap'
import logo from "../../img/logo.png"
import { getToken } from '../../utils/auth'
import './Pontuacao.css'

class Pontuacao extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pontuacao: {},
            acertos: {}
        }
    }

    componentDidMount() {
        const token = getToken()
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }
        fetch(`http://localhost:5000/points`, options)
            .then(pontuacao =>
                pontuacao.json().then(pontuacao => this.setState({ pontuacao }))
            )
    }

    render() {
        const { pontuacao } = this.state;

        return (
            <>
                <Container>
                    {/* <div > */}
                        <img className="logo-pontuacao" id src={logo} />
                    {/* </div> */}
                    <Jumbotron className="fundo-pontuacao">
                        <h1><br />Você finalizou as Questões</h1>
                        <h3>Pontuação:<br /> {pontuacao.pontuacao}</h3><br />
                        <h4>Acertos:<br /> {pontuacao.acertos} / 10</h4><br />
                        <p></p>
                    </Jumbotron>
                </Container>
            </>
        )//fim do return
    }//fim do render
}// fim da classe Ranking

export default Pontuacao