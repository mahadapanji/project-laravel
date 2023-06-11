import "./primaryButton.scss";

function PrimaryButton({ name, handleClick, handleDisable }) {
  return (
    <>
      <button
        type="button"
        className="button-primary"
        onClick={handleClick}
        disabled={handleDisable}
      >
        {name}
      </button>
    </>
  );
}

export default PrimaryButton;
