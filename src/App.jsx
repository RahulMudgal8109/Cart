import { useEffect, useState } from "react";
import data from "./data";
import Card from "./Card";
import "./App.css";
import { FaCartPlus } from "react-icons/fa";


function App() {
  const [newdata, setNewdata] = useState(data);
   console.log(newdata)
  const [total, setTotal] = useState(0);
  const[cart,setCart]=useState(0);

  newdata &&
    useEffect(() => {
      const totalPrice = newdata.reduce((accumulator, item) => {
        return (accumulator = Math.ceil(
          Number(accumulator) + Number(item.price) * Number(item.quantity)
        ));
      }, 0);

      const totatCart = newdata.reduce((accumulator, item) => {
        return (accumulator = Math.ceil(
          Number(accumulator) + Number(item.quantity) 
        ));
      }, 0);
      setTotal(totalPrice);
      setCart(totatCart)
    }, [newdata]);

  const handlePlusMinus = (value, index) => {
   
    const data2 = [...newdata];
    
    if (value === "+") {
      data2.forEach((item)=>{
        //alert(item.id)
        if(item.id===index)
        {
          
          item.quantity=Number(item.quantity)+Number(1);
        }
      })


      
      //data2[index].quantity = Number(data2[index].quantity) + 1;
      setNewdata(data2);
    } else if (value === "-") {
      
      

        data2.forEach((item)=>{
          //alert("Item-Id"+"--"+item.id)
          if(item.id===index )
          {
            if(item.quantity>1)
            {
              item.quantity=Number(item.quantity)-Number(1);
              setNewdata(data2);

            }
            
            else {
      
              setNewdata(data2.filter((item)=>{
                console.log(index,item.id)
                return item.id!=index;
              }))
            }
          }
        })
        //data2[index].quantity = Number(data2[index].quantity) - 1;
        
      
    }
  };
  const remove = (index) => {
   
    
    const data2 = newdata.filter((item) => item.id !== index);

    setNewdata(data2);
  };

  return (
    <>
    <div className="navbar">
      <div class="iconAndvalue">
    <FaCartPlus className="rightIcon"/>
    <span className="value">{cart}</span>
    </div>
    </div>
    
      {newdata.length > 0
        ? newdata.map((item, index) => {
            return (
              <Card
                data={item}
                index={index}
                id={item.id}
                handlePlusMinus={handlePlusMinus}
                remove={remove}
                key={item.id}
              />
            );
          })
        : "No Items In the Cart"}
      <hr />
      <div className="total">
        <p>Total</p>
        <p className="totalPrice">${total}</p>
      </div>
      <button
        className="clearCart"
        onClick={() => {
          setNewdata([]);
        }}
      >
        Clear Cart
      </button>
    </>
  );
}

export default App;
