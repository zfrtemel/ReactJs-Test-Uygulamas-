import React, { Component } from 'react';
import {Progress } from 'reactstrap';
import Scene from './component/Scene';
import Scene2 from './component/Scene2';
import Scene1 from './component/Scene1';
import Finish from './component/Finish';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputID:"Items",
      radioID:"",
      inputVal:"",
      scene3Radio:"",
      scene1: "",
      scene2: "",
      scene3: "",
      sceneNumber: 0,
      scene: [{
        baslik: "hayatının ilk yılı",
        combo1: "istanbul'da doğdun ailen orta halli insanlar ve adın da  ",
        combo2: "Almanya Berlinde dünyaya geldin ailen türk asıllı olmasına rağmen orada yaşıyorlar ve senin adın da ",
        combo3: "Bursa da olan ailenin ilk evladı ailen ise kıt kanaat geçiniyor ve senin adın da  ",

      },
      {
        baslik: ["En Belirgin Özelliğin ise"]
      },
      {
        baslik: "Gençlik Yıllarında Uğraştığın meslek'de ",
        combo1: "Eli kalem tutan bir öğrenci ",
        combo2: "Bir ustanın yanında çırak ",
        combo3: "Kamuda vakit geçirdin "
      }
      ]
    }
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue(islemTip,val, sc, rad,data,inData) {
    if (sc === "scene1") {
      if(val!==""&&rad!==""&&data!==""&&inData!==""){
      this.setState({ scene1: val ,radioID:rad,inputID:data,inputVal:inData})
      // this.setState({ hikaye1: [val] })
    }}
    else if (sc === "scene2") {
      if(val!==""){
      this.setState({ scene2: val })
      // this.setState({ hikaye2: [val] })
    }}
    else if(sc==="scene3") {
      if(val!==""&&rad!==""){
      this.setState({ scene3: val , scene3Radio:rad })
      // this.setState({ hikaye3: [val] })
    }}
    else{
      console.log("son sahne")
    }
    if (islemTip==="next") {
      if (this.state.sceneNumber < 5) {
        this.setState({ sceneNumber: this.state.sceneNumber + 1 })
      }
    }
    if (islemTip==="back"){
      if (this.state.sceneNumber > 0) {
        this.setState({ sceneNumber: this.state.sceneNumber - 1 })
      }
    }
    
    
  }
  render() {
    
    return (
      
   <div className="container " style={{ marginTop: "150px" }}>
        <div className="less">
        {this.state.sceneNumber === 0? 
        (<div>
        <div className="text-center">25%</div>  <Progress value="25"/>
        </div> ) :null}
        {this.state.sceneNumber === 1? 
        (<div>
        <div className="text-center">50%</div>  <Progress value="50"/>
        </div> ) :null}
        {this.state.sceneNumber === 2? 
        (<div>
        <div className="text-center">75%</div>  <Progress value="75" />
        </div> ) :null}
        {this.state.sceneNumber === 3? 
        (<div>
        <div className="text-center">100%</div>  <Progress value="100"/>
        </div> ) :null}




        <div className="less">

          {this.state.sceneNumber === 0 ? (<Scene  handleInput={this.handleInputValue} 
          inputVal={this.state.inputVal} 
          radioID={this.state.radioID} 
          scene={this.state.scene} />) : null}
   
   
          {this.state.sceneNumber === 1 ? (<Scene1 handleInput={this.handleInputValue}
           value3={this.state.scene2}
            scene={this.state.scene} />) : null}
   
   
          {this.state.sceneNumber === 2 ? (<Scene2 handleInput={this.handleInputValue}
           radioID3={this.state.scene3Radio}
            scene={this.state.scene} />) : null} 
   
   
          {this.state.sceneNumber === 3 ? (<Finish handleInput={this.handleInputValue}
           hikaye1={this.state.scene1}
           hikaye2={this.state.scene[1].baslik+this.state.scene2}
            hikaye3={this.state.scene[2].baslik+""+this.state.scene3} />) : null}



        </div>
        </div>

      </div>
    )
  }
}

export default App;
