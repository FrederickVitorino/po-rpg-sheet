import { StyledInput } from './styles';

function NumberInput({labelName, width, min=0, max=null, value=null}) {
    return(
        <div className="centerHorizontal">
            <label>{labelName}:</label>
            <StyledInput 
                type="number" 
                width={width} 
                min={min} 
                max={max} 
                value={value} 
            />
        </div>
    )
};

export default NumberInput;