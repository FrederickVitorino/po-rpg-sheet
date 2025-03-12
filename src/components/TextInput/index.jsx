import { StyledInput } from './styles';

function TextInput({labelName, width}){
    return(
        <div className='centerHorizontal'>
            <label>{labelName}:</label>
            <StyledInput type="text" width={width} />
        </div>    
    )
};

export default TextInput;