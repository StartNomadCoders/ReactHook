import UseState from 'component/useState';
import UseInput from 'component/useInput';
import UseTaps from 'component/useTaps';
import UseEffect from 'component/useEffect';
import UseTitle from 'component/useTitle';
import UseClick from 'component/useClick';
import UseConfirm from 'component/useConfirm & usePreventLeave';
import UseBeforeLeave from 'component/useBeforeLeave';


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
        <UseBeforeLeave/>
      </div>
    </div>
  );
}

export default App;
