import { useState } from 'react';

function UseInput() {
  const useInput = (initialValue, vaildator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target : {value}
      } = event
      console.log(event.target);
      let willUpdate = true
      if(typeof vaildator === "function"){
        willUpdate = vaildator(value)
      }
      if( willUpdate) {
        setValue(value)
      }
    };

    return { value, onChange };

  }
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr .",maxLen)
  const email = useInput("@")

  return (
    <div>
      <h1>USE INPUT :: </h1>
      <input placeholder='Name..' {...name} />
    </div>
  );
}

export default UseInput;
