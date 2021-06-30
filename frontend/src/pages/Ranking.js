import React from 'react'
import { Table, Button, Jumbotron, Container, Row, Col, } from 'reactstrap'
import './Ranking.css'
import logo from "../img/logo.png"
import { getToken } from '../utils/auth'

class Ranking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            pontuacao: []
        }
    }

    componentDidMount() {
        const token = getToken();
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        fetch(`http://localhost:5000/ranking?orderBy=pontuacao`, options)
            .then(user =>
                user.json().then(user => this.setState({ user }))
            )
    }

    render() {
        const { usuario } = this.state;
        console.log("backend retorna: ", usuario)

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
                                            {usuario.map((user, index) => {
                                        return (
                                        <tr>
                                            <th key={index}>{index+1}</th>
                                            <td>{user.usuario}</td>
                                            <td>{user.pontuacao}</td>
                                        </tr>
                                                )
                                        })}
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