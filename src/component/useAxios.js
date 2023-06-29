import { useEffect, useState } from 'react';
import deFaultAxios from 'axios';
import axios from 'axios';

const useAxios = (opts, axiosInstance = deFaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  if (!opts) {
    return;
  }
  const [trigger,setTrigger] = setState(0)
  const reFetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now())
  }
  useEffect(() => {
    axiosInstance(
      opts
        .then((data) => {
          setState({
            ...state,
            loading: true,
            data,
          });
        })
        .cache((e) => {
          setState({ ...state, loading: false, e });
        })
    );
  }, [trigger]);
  return { ...state,reFetch };
};

function UseAxios() {
  const { loading, data, error,reFetch } = useAxios({
    url: 'https://yts.am/api/v2/list_movies.json',
  });

  return (
    <div>
      <h1>UseAxios :: </h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={reFetch}>ReFetch</button>
    </div>
  );
}

export default UseAxios;
