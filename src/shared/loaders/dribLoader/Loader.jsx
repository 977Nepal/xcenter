import "./loader.css";

const Loader = (props) => {
  let { color, width, height, only } = props;
  return (
    <div
      className={`loader mx-auto ${only ? "" : "dots"}`}
      style={{ "--path": color ? color : "", width: width, height: height }}
    >
      <svg className="svg" viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32"></circle>
      </svg>
    </div>
  );
};

export { Loader };
