import React from 'react'
import { Table, Button, Jumbotron, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'
import './Ranking.css'
import logo from "../img/logo.png"

class Ranking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: [],
            pontuacao: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/ranking`)
            .then(user =>
                user.json().then(usuario => this.setState({ usuario }))
            )
    }

    render() {
        const { usuario } = this.state;

        return (
            <>
                <header>
                    <Row>
                        <Col md="4">
                            <div id="logo-ranking">
                                <img src={logo} />
                            </div>
                        </Col>
                        <Col md="4">
                            <br />
                            <h1>Ranking</h1>
                        </Col>
                        <Col md="4">
                            <br />
                            <Button className="jogar" color="warning" size="lg">Jogar</Button>
                        </Col>
                    </Row>
                </header>

                <Container>
                    <Jumbotron>
                        <div className="jumbotron">
                            <Container>
                                <Table bordered className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Usuario</th>
                                            <th>Pontuação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {usuario.map((user, index) => (
                                        <tr>
                                            <th key={index}>{index}</th>
                                            <td>{user.usuario.login}</td>
                                            <td>{user.pontuacao}</td>
                                        </tr>
                                            ))}
                                    </tbody>

                                </Table>
                            </Container>
                        </div>
                    </Jumbotron>
                </Container>
            </>
        )//fim do return
    }
}// fim da classe Ranking

export default Ranking