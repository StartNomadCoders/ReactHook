import { useState } from 'react';

function UseState() {
  const [item,setItem] = useState(1)
  const incrementItem = () => setItem(()=>item+1)
  const decrementItem = () => setItem(()=>item-1)
  return (
    <div>
      <h1>USE STATE :: [ item : {item} ] </h1>
      <button onClick={incrementItem}> Plus</button>
      <button onClick={decrementItem}> Minus</button>
    </div>
  );
}

export default UseState;
