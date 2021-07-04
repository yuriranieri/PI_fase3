import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './Questions.css'


class MyButton extends Component {
    render() {
        return <Button className="btn" color="warning"  onClick={() => { this.props.handleClick(this.props.label); }}>{this.props.label}</Button>
    }
}

export default MyButton
