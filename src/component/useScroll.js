import { useEffect, useState } from 'react';


const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y:0
  })
  const onScroll = (e) => {
    setState({y : window.scrollY ,x : window.scrollX});
  }
  useEffect(()=> {
    window.addEventListener("scroll",onScroll)
    return () => window.removeEventListener("scroll",onScroll)
  }, [])
    return state
}
function UseScroll() {
  const {y} = useScroll()
  return (
    <div style={{height:"100vh"}}>
      <h1>UseScroll :: </h1>
      <div>
        <h2 style={{position: 'fixed' , color: y > 100 ? 'red' : 'blue'}}></h2>
      </div>
    </div>
  );
}

export default UseScroll;
