
const SelectField = ({label, id, value, name, onchange, defaultOption, options }) => {

return (
    <div className="form_input mb-3">
        <label htmlFor={id}>{label}</label>
        <select  id={id} value={value} name={name} onChange={onchange}>
          <option value="" hidden>{defaultOption}</option>

        {options?.map( (option, i) => {
            return  <option key={i} value={option}>{option}</option>             
        })}
        </select>
</div>
)

}


export default SelectField;