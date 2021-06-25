import React from 'react'
import { Table, Button, Jumbotron, Container, Row, Col, Label, Form, FormGroup, Input, } from 'reactstrap'
import './Ranking.css'
import logo from "../img/logo.png"

class Ranking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            pontuacao: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/ranking`)
            .then(user =>
                user.json().then(user => this.setState({ user }))
            )
    }

    render() {
        const { user } = this.state;

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
                                        <tr>
                                            <th scope="row">1</th>
                                            {user.map((user, index) => (
                                                <div key={index}>
                                                    <td>{user.usuario.login}</td>
                                                    <td>{user.pontuacao}</td>
                                                </div>
                                            ))}

                                        </tr>
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