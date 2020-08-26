import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';
import Inputs from './Inputs';

class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
            radValue: "",
            radID: "",
            inputText: "",
            inputID: ""

        }

        this.inputData = this.inputData.bind(this);
    }


    radioData = (e) => {

        this.setState({
            radValue: e.currentTarget.value,
            radID: e.currentTarget.id

        });

    }

    inputData(inputText, inputID) {
        this.setState({
            inputText: inputText,
            inputID: inputID
        });
        this.props.stateSet(this.state.radValue, this.state.radID, this.state.inputText, this.state.inputID);
    }

    render() {

        return (
            <div>

                {this.props.radioID === this.props.ID
                    ?
                    <Label check>
                        <Input checked={true} value={this.props.radioValue} id={this.props.ID} type="radio" onChange={this.radioData} name="radio1" />
                        {this.props.radioValue}
                        <Inputs propId={this.props.ID + "I"} propPlace={this.props.inputVal} propFun={this.inputData} />
                    </Label>
                    :
                    <Label check>
                        <Input value={this.props.radioValue} id={this.props.ID} type="radio" onChange={this.radioData} name="radio1" />
                        {this.props.radioValue}

                        <Inputs propId={this.props.ID + "I"} propFun={this.inputData} />
                    </Label>
                }

            </div>

        )
    }
}
export default Items