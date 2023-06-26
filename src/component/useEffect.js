import { useEffect, useState } from 'react';

function UseEffect() {
  const sayHello = () => console.log('HELLO');
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  useEffect(sayHello, [number]);

  return (
    <div>
      <h1>USE UseEffect :: </h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default UseEffect;
