const FeedbackButtons = ({ buttons }) => {
  return (
    <div>
      {buttons.map(button => (
        <button key={button} type="button">
          {button}
        </button>
      ))}
    </div>
  );
};
export default FeedbackButtons;
