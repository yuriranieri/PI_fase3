import React from 'react'

class Ranking extends React.Component{
    constructor(props){
    super(props)

        this.state = {
            user: [],
            pontuacao: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:5000/ranking`)
        .then(user =>
            user.json().then(user => this.setState({user}))
            )
    }

    render(){
        const {user} = this.state;

        return user.map((user, index) => (
            <div className="usuario-list">
                <div key={index}>
                    <br></br>
                    <strong>{user.usuario.login}</strong><br></br>
                    <strong>{user.pontuacao}</strong>
                </div>
            </div>
        ))
        
    }


}// fim da classe Ranking

export default Ranking
    

/*
const Ranking = () => {

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
                <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button href="./Questions" color="warning" size="lg" type="submit" value="Enviar">Começar</Button>
                        </Col>    
                        
                    </Row> 

            </Container>
        </>
    )

}

export default Ranking*/