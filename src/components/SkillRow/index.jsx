import { StyledSkillRow, SkillInput, NameColumn, InputColumn } from './styles';

function SkillRow({labelName}){
    return(
        <StyledSkillRow className='centerHorizontal'>
            <NameColumn>    
                {labelName}:
            </NameColumn>
            
            <InputColumn>
                <SkillInput type="number" min="-1" max="10" />
                <SkillInput type="number" min="-30" max="30" />
            </InputColumn>
        </StyledSkillRow>
    )
};

export default SkillRow;