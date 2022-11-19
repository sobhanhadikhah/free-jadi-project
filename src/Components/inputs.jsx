const Inputs = ({ onchange, lable, value, name }) => {
    return (
        <div className="form-group" >
            <label htmlFor={name}>{lable}</label>
            <input onChange={onchange} id={name} name={name} value={value} className="form-control" type="text" />
        </div>
    );
}

export default Inputs;