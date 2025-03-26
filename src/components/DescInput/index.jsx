import { StyledDescInput } from "./styles";

function DescInput({labelName}){
    return(
        <div className="centerHorizontal">
            <label>{labelName}:</label>
            <StyledDescInput rows={4} cols={40} />
        </div>
    )
};

export default DescInput;