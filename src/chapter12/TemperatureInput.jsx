
const scaleNames={
    c:"섭씨",
    f:"화씨"
}

function TemperatureInput(props){
    const handleChange=(event)=>{
        props.onTemperatureChange(event.target.value);
    };

    return(
    <div>
        <fieldset>
            <legent>
                온도 입력(단위:{scaleNames[props.scale]});
            </legent>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    </div>);
}

export default TemperatureInput;