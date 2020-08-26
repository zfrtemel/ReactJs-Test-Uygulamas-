import React, { Component } from 'react'
import { Input } from 'reactstrap'

class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
            inputID: ""

        }

        this.stateAdd = this.stateAdd.bind(this);
    }

    inputFun = (e) => {
        this.setState({
            inputText: e.currentTarget.value,
            inputID: e.currentTarget.id
        })
        this.stateAdd()
    }
    stateAdd = () => {

        this.props.propFun(this.state.inputText, this.state.inputID);
    }
    render() {
        return (
            <div>
                <Input id={this.props.propId + "I"} placeholder={this.props.propPlace} onChange={this.inputFun} type="text" />
            </div>
        )
    }
}

export default Inputs;