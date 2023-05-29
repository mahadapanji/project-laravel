import "./primaryButton.scss";

function PrimaryButton({ name, handleClick, handleDisable }) {
    console.log(handleDisable)
  return (
    <>
      <button
        type="button"
        class="button-primary"
        onClick={handleClick}
        disabled={handleDisable}
      >
        {name}
      </button>
    </>
  );
}

export default PrimaryButton;
