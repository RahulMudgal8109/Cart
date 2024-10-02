import React from "react";

const Card = (props) => {
//   console.log(props.id)
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={props.data.imageSrc} />
          <div className="phoneDescription">
            <h3>{props.data.productName}</h3>
            <p>${props.data.price}</p>
            <button onClick={()=>{props.remove(props.id)}}>Remove</button>
          </div>
        </div>
        <div className="right">
            <button className="plus" value="+" onClick={(e)=>{props.handlePlusMinus(e.target.value,props.id)}}>+</button>
            {props.data.quantity}
            <button className="minus" value="-" onClick={(e)=>{props.handlePlusMinus(e.target.value,props.id)}}>-</button>
        </div>
      </div>
    </>
  );
};

export default Card;
