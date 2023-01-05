export default function TextArea(props) {
  return (
    <div>
      <label>Enter value : </label>
      <div>
        <textarea
          className="inout"
          id="iput"
          value={props.values}
          type="textarea"
          name="in"
          onChange={props.handleChange}
        />
        <textarea
          className="inout"
          type="textarea"
          value={props.setvalues}
          name="out"
          onChange={props.outs}
        />
      </div>
      <button
        value={props.buttontype}
        name="submit"
        onClick={props.buttonhandle}
      >
        {props.buttontype}{" "}
      </button>
    </div>
  );
}
