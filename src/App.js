import UseState from 'component/useState';
import UseInput from 'component/useInput';
import UseTaps from 'component/useTaps';
import UseEffect from 'component/useEffect';
import UseTitle from 'component/useTitle';
import UseClick from 'component/useClick';
import UseConfirm from 'component/useConfirm & usePreventLeave';


function App() {
  return (
    <div>
      {/*<div><UseState /></div>*/}
      {/*<div><UseInput /></div>*/}
      {/*<div><UseTaps /></div>*/}
      {/*<div>*/}
      {/*  <UseEffect />*/}
      {/*</div>*/}
      <div>
        {/*<UseTitle />*/}
        {/*<UseClick/>*/}
        {<UseConfirm/>}
      </div>
    </div>
  );
}

export default App;
