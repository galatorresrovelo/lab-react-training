//1. Import
import React, {Component} from "react";
import Rating from './Rating'
import "../App.css";

// 2. Function || Class & Export
export default class DriverCard extends Component {
    render({name,rating,img,car}=this.props){
      return (
     <div className="DriverCard"> 
      <div className="Image">
      <img src={img} width='150px' height='150px' />
      </div>
      <div className="Texto">
           <h3>{name}</h3>
           <Rating> {rating} </Rating>
           <h6>{car.model} - {car.licensePlate}</h6>
    </div>
    </div>
      );
     }
    }