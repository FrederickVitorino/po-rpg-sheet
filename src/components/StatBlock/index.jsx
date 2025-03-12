import NumberInput from '../NumberInput';

function StatGroup({labelName1, labelName2, width="min(5.5vw, 2.5rem)", max=99}) {
    return(
        <div style={{display:'flex', gap:'0.5rem'}}>
            <NumberInput labelName={labelName1} width={width} max={max} />
            <NumberInput labelName={labelName2} width={width} max={max} />
        </div>
    )
};

export default StatGroup;