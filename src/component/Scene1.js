import React, { Component } from 'react'
import { FormGroup,Label, Button } from 'reactstrap';


class Scene1 extends Component {

    constructor(props) {
        super(props);
        this.state = { val: "" };
  
        this.hanldeSubmit = this.hanldeSubmit.bind(this);
    }

    changeData = (e) => {
        this.setState({ val: e.target.value+"  " })
    }
    hanldeSubmit=(e)=> {
        this.props.handleInput(e.currentTarget.id,this.state.val,"scene2");
      }
    
    render() {

        const{baslik}=this.props.scene[1];
        return (
           
            <div className="col-md-12" style={{ minHeight: "150px" }}>
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
              <Button id="next" onClick={this.hanldeSubmit} className="page-link" href="#">Sonraki</Button>
            </li>
          </ul>
        </nav>
                    <div className="card">
                    <div className="card text-center">
                        <h5 className="card-title">{baslik} </h5>
                        </div>
                        <div className="card-header d-flex justify-content-between">
                            <h4 className="d-inline">
                                <i className="fas fa-trash-alt"></i>
                            </h4>
                        </div>
                        <div className="card-body">
                        <FormGroup check>
                                <Label check>
                                   Özellik Giriniz:
                                    <input onChange={this.changeData} placeholder={this.props.value3} type="text"  />
                                </Label>
                           
                            </FormGroup>
                        </div>
                    </div>
            </div>
        )
    }
}
 export default Scene1;



