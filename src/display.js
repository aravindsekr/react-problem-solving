const Display = ({ invokeFn, inputToFn, displayName, inputDisplayValue }) => {
  const output = invokeFn(inputToFn);

  const getDisplayValue = (val) =>
    Object.prototype.toString.call(val) === "[object Array]"
      ? val.join(", ")
      : val;

  return (
    <div>
      <hr />
      <div>
        <b>{displayName}</b>
        <p>
          <b>Input:</b> {getDisplayValue(inputDisplayValue)}
        </p>
        <p>
          <b>Output:</b> {getDisplayValue(output)}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Display;
