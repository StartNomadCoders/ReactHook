import { useEffect, useState } from 'react';

const useTilte = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle,[title])
  return setTitle;
};

function UseTitle() {
  const titleUpdater = useTilte('Loading..');
  setTimeout(()=>titleUpdater("Home"),500)
  return (
    <div>
      <h1>USE UseTitle :: </h1>
    </div>
  );
}

export default UseTitle;
