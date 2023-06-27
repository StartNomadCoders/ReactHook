const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault()
    e.returnValue = ""
  }
  const enablePrevent = () =>window.addEventListener("beforeunload",listener)
  const disablePrevent = () => window.addEventListener("beforeunload",listener)

  return { enablePrevent , disablePrevent}


}
const useConfirmUsePreventLeave = (msg='', onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function') {
    return ;
  }
  if (typeof onCancel !== 'function') {
    return ;
  }
  const confirmAction = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else{
      onCancel()
    }
  };
  return confirmAction;
};

function ConfirmComponent() {
  const {enablePrevent,disablePrevent} =usePreventLeave()
  const deleteWorld = () => console.log('Delete World');
  const abort = () => console.log('Abort')
  const confirmDelete = useConfirmUsePreventLeave('Are you sure', deleteWorld,abort);
  return (
    <div>
      <h1>USE useConfirm :: </h1>
      <button onClick={confirmDelete}>Delete the world</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
}

export default ConfirmComponent;