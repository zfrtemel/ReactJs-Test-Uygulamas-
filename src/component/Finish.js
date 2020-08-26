import React, { Component } from 'react'

import { Button } from 'reactstrap';

class Finish extends Component {
    
    
    
    hanldeSubmit=(e)=> {
        this.props.handleInput(e.currentTarget.id);
      }
    render() {
        const {hikaye1,hikaye2,hikaye3} = this.props;
        
        return (
         
            <div className="col-md-12" >
  <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <Button id="back" onClick={this.hanldeSubmit} className="page-link">Önceki</Button>
            </li>

          </ul>
        </nav>
           
                    <div className="card">
                        <div className="card text-center">
                        <h5 className="card-title"> Hayat Hikayeniz </h5>
                        </div>
                        <div className="card-header d-flex justify-content-between">
                        </div>
                        <div className="card-body">
                         {hikaye1}
                         {hikaye2}
                         {hikaye3}
                        </div>
                    </div>
                
            </div>
        )
    }
}
export default Finish