import React, { Component } from 'react'
import { FormGroup, Button } from 'reactstrap';
import Items from './Items'


class Scene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radData: "",
            textData: "",
            radID: "",
            inputID: ""

        }

        this.hanldeSubmit = this.hanldeSubmit.bind(this);
        this.stateSet = this.stateSet.bind(this);
    }

    inputData = (inputText, inputID) => {
        this.setState({
            textData: inputText,
            inputID: inputID
        });

    }


    stateSet = (radData, radioID, inputData, inputID) => {
        this.setState({
            radData: radData,
            radID: radioID,
            inputID: inputID,
            textData: inputData
        });
        this.hanldeSubmit()
    }
    hanldeSubmit(e) {
        if (e !== undefined) {
            this.props.handleInput(e.currentTarget.id, this.state.radData + this.state.textData + "  ", "scene1", this.state.radID, this.state.inputID, this.state.textData);

        }
        else {
            this.props.handleInput("", this.state.radData + this.state.textData + "  ", "scene1", this.state.radID, this.state.inputID, this.state.textData);

        }

    }

    render() {


        const { baslik, combo1, combo2, combo3 } = this.props.scene[0];
        // console.log("boş"+this.state.radData+this.state.textData)
        return (

            <div className="col-md-12" >
                <nav style={{ marginTop: "2500" }} aria-label=".....">
                    <ul style={{ flexDirection: "row-reverse" }} className="pagination">
                        <li className="page-item">
                            <Button id="next" onClick={this.hanldeSubmit} className="page-link">Sonraki</Button>
                        </li>

                    </ul>
                </nav>

                <div className="card">
                    <div className="card text-center">

                        <h5 className="card-title"> {baslik}</h5>
                    </div>
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">
                            <i className="fas fa-trash-alt"></i>
                        </h4>
                    </div>
                    <div className="card-body">


                        <FormGroup check>
                            <Items stateSet={this.stateSet} radioValue={combo1} inputVal={this.props.inputVal} radioID={this.props.radioID} ID={"iyi"} />

                            <Items stateSet={this.stateSet} radioValue={combo2} inputVal={this.props.inputVal} radioID={this.props.radioID} ID={"orta"} />




                            <Items stateSet={this.stateSet} radioValue={combo3} inputVal={this.props.inputVal} radioID={this.props.radioID} ID={"kotu"} />


                        </FormGroup>
                    </div>

                </div>

            </div>
        )
    }

}

export default Scene



