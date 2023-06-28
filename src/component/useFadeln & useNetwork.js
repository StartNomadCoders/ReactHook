import { useEffect, useRef, useState } from 'react';

const useNetwork = (onChange) => {
  const [status,setStatus] = useState(navigator.onLine);
  const handleChange =()=>{
    if(typeof onChange ==='function'){
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine);
  }
  useEffect(()=> {
    window.addEventListener("online",handleChange);
    window.addEventListener("offline",handleChange);
    () => {
      window.removeEventListener("online",handleChange);
      window.removeEventListener("offline",handleChange);
    };
  })
  return status;
}
const useFadein = (duration =1) => {
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      const {current      } = element;
      element.current.style.transition = `opecity ${duration}s`;
      element.current.style.opacity = 1;
    }
  },[])
  return { ref: element, style: {opacity:0} };
};

function UseFadein() {
  const onLine = useNetwork()
  const fadeInH3 = useFadein(5);
  return (
    <div>
      <h1>UseFadein & UseNetwork :: </h1>
      <div>
        <h3 {...fadeInH3}>Hello</h3>
      </div>
    </div>
  );
}

export default UseFadein;
