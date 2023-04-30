import React, { useState, useEffect } from "react";

  function App () {
  
  const [products , setProducts] = useState({
    coffe : 0 ,
    sugar : 0
  })
  const [tooMinSugar, setTooMinSugar] = useState(false);
  const [tooMinCoffe, setTooMinCoffe] = useState(false);
const addCoffe = () => setProducts((prevState)=>{
  return{
    ...prevState ,
    coffe: prevState.coffe +1
  }
})
const addSugar = () => setProducts((prevState)=>{
  return{
    ...prevState ,
    sugar: prevState.sugar +1
  }
})
const removeCoffe = () => setProducts((prevState)=>{
  return{
    ...prevState ,
   coffe: tooMinCoffe ? false :  prevState.coffe - 1
    
  }
})
const removeSugar = () => setProducts((prevState)=>{
  return{
    ...prevState ,
    sugar : tooMinSugar ? false : prevState.sugar - 1
  }
})


useEffect(()=>{setTooMinSugar(products.sugar <= 0)}, [products.sugar]);
useEffect(()=>{setTooMinCoffe(products.coffe <= 0)}, [products.coffe]);

const save = () => {
  localStorage.setItem('coffe',products.coffe);
  localStorage.setItem('sugar',products.sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setCoffe(0);
    setSugar(0);
}


useEffect(()=>{
  if (localStorage.getItem('coffe')){
    setCoffe(+localStorage.getItem('coffe'));
    setSugar(+localStorage.getItem('sugar'));
  }
}, []);

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${products.coffe}`}</span>
      <button onClick={addCoffe}>Add</button>
      {tooMinCoffe ? false :<button onClick={removeCoffe}>Remove</button>}
      </div>
      <div className='product'>
      <span>{`Sugar: ${products.sugar}`}</span>
        <button onClick={addSugar}>Add</button>
        { tooMinSugar ? false : <button onClick={removeSugar}>Remove</button>}
      </div>
      <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
}

export default App;
