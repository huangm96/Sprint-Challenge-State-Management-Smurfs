import React from "react";


const Villager = (props)=> {
 console.log(props.villager);
    return (
      <div className="VillagerContainer">
        <h3>Name: {props.villager.name}</h3>
        <h3>Age: {props.villager.age}</h3>
        <h3>Height: {props.villager.height}</h3>
      </div>
    );
  }

  

export default Villager;



