import React, { Component } from 'react'
import { Label, FormGroup, Input } from 'reactstrap';
class Radios extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.radioFunc = this.radioFunc.bind(this);
    }


    radioFunc = (e) => {
        this.props.propFun(e.currentTarget.value,e.currentTarget.id)
    }
   
    render() {
        return (
            <div>
                <FormGroup check>
                 {
                     this.props.checkeds===this.props.idProp?< Label check>
                     <Input checked={true} value={this.props.valueProp} id={this.props.idProp} type="radio" onChange={this.radioFunc} name="radio1" />
                     {this.props.valueProp}

                 </Label>:
                 < Label check>
                 <Input value={this.props.valueProp} id={this.props.idProp} type="radio" onChange={this.radioFunc} name="radio1" />
                 {this.props.valueProp}

             </Label>
                 }
                        
                       
                </FormGroup>

            </div>
        )
    }
}
export default Radios;