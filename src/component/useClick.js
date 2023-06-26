import { useEffect, useRef, useState } from 'react';

const useClick = (onClick) => {
  const el = useRef();

  useEffect(() => {
    if (el.current) {
      el.current.addEventListener("click", onClick);
    }

    return () => {
      if (el.current) {
        el.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return el;
};
function UseClick() {
  //useRef()
  // const potato = useRef()
  // setTimeout(()=> potato.current.focus(),5000)

  const seyHello = () => console.log("say Hello")
  const title =useClick(seyHello)
  return (
    <div>
      <h1 ref={title}>USE UseClick :: </h1>

    </div>
  );
}

export default UseClick;
