import React, { Component } from 'react'
import {Button } from 'reactstrap';
import Radios from './Radios';


class Scene2 extends Component {

    constructor(props) {
        super(props);
        this.state = { 
        ID: "",
        radioValue: ""
     };

        this.radioData = this.radioData.bind(this);
        this.hanldeSubmit = this.hanldeSubmit.bind(this);
    }

    radioData = (radVal,radID) => {

        this.props.handleInput("", radVal + "  ", "scene3", radID);
    }
    hanldeSubmit =(e)=> {
        this.props.handleInput(e.currentTarget.id, "" , "scene3", "");
    }

    render() {

        const { baslik, combo1, combo2, combo3 } = this.props.scene[2];
        return (

            <div className="col-md-12" >
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item">
                            <Button id="back" onClick={this.hanldeSubmit} className="page-link">Önceki</Button>
                        </li>

                    </ul>
                </nav>
                <nav style={{ marginTop: "-58px" }} aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item">
                            <Button  id="next" onClick={this.hanldeSubmit} className="page-link" href="#">Sonraki</Button>
                        </li>
                    </ul>
                </nav>
                <form >
                    <div className="card">
                        <div className="card text-center">
                            <h5 className="card-title"> {baslik}</h5>
                        </div>
                        <div className="card-header d-flex justify-content-between">
                            <h4 className="d-inline">
                                <i  className="fas fa-trash-alt"></i>
                            </h4>
                        </div>
                        <div className="card-body">

                            <Radios idProp="radio1" checkeds={this.props.radioID3} propFun={this.radioData}  valueProp={combo1} />
                            <Radios idProp="radio2" checkeds={this.props.radioID3} propFun={this.radioData} valueProp={combo2} />
                            <Radios idProp="radio3"checkeds={this.props.radioID3} propFun={this.radioData} valueProp={combo3} />
                           

                        </div>
                    </div>
                </form>


            </div>
        )
    }

}

export default Scene2;



