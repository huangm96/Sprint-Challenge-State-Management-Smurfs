import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Villager from './Villager'
import{getVillagers} from '../store/actions'
const Villagers = (props)=> {
 
 
    useEffect(() => {
   props.getVillagers();
 }, []);
    return (
      <div className="villagersContainer">
        <h2>Villagers:</h2>
        <div className="villagersList">
            {props.smurfs.map((villager) => {
                return <Villager villager={villager}/>
            })}
          </div>
      </div>
    );
  }

  const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs:state.smurfs,
    
  };
};

export default connect(
  mapStateToProps,
  { getVillagers }
)(Villagers);



