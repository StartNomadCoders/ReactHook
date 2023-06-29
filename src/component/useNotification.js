import { useEffect, useState } from 'react';
import { elementType } from 'prop-types';

const useNotification = (title,option) => {
  if(!("Notification" in window)){
    return;
  }
  const fireNotif =() => {
    if (Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if (permission === "granted"){
          new Notification(title,option)
        }else{
          return;
        }
      })
    }else {
      new Notification(title,option)
    }

  }
  return fireNotif;
}


function UseNotification() {
  const triggerNotif = useNotification("Can I steal your kimchi ? ", {body:"I love kimch"})
  return (
    <div style={{height :"100vh"}}>
      <h1>UseNotification :: </h1>
      <button onClick={triggerNotif}> hello</button>
    </div>
  );
}

export default UseNotification;
