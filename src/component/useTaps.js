import { useState } from 'react';

function UseTaps() {
  const content = [
    {
      tab: 'Section 1',
      content: "I'm the content of the  Section 1",
    },
    {
      tab: 'Section 2',
      content: "I'm the content of the  Section 2",
    },
  ];
  const useTabs = (init, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIdx, setCurrentIdx] = useState(init);
    return {
      currentItem: allTabs[currentIdx],
      changeItem: setCurrentIdx,
    };
  };
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h1>USE TAPS :: </h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}> {section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTaps;
