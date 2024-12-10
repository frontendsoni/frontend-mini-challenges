const InputField = ({label, id, type, name, value, onchange, error}) => {
  return (
    <div className="form_input mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
      />
      <p className="errors">{error}</p>
    </div>
  );
};

export default InputField;
