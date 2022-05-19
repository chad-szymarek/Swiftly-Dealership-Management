import "./Switch.css";

function Switch({ toggled, onToggled }) {
  return (
    <label className='switch'>
      <input type='checkbox' onClick={onToggled} checked={toggled} />
      <span className='slider' />
    </label>
  );
}

export default Switch;
