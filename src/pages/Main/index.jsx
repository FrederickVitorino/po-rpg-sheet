import { StyledMain, Attributes, Skills, Stats } from './styles';
import NumberInput from '../../components/NumberInput';
import TextInput from '../../components/TextInput';
import StatGroup from '../../components/StatBlock';

function Main(){
    return(
        <StyledMain>
            <Attributes>
                <span>Attributes</span>
                <NumberInput labelName={'AGI'} width="min(5.5vw, 2.5rem)" min="1" max="10" />

                <div style={{display:'flex', gap:'min(10vw, 5rem)'}}>
                    <NumberInput labelName={'STR'} width="min(5.5vw, 2.5rem)" min="1" max="10" />
                    <NumberInput labelName={'INT'} width="min(5.5vw, 2.5rem)" min="1" max="10" />
                </div>
                
                <div style={{display:'flex', gap:'min(5vw, 2.5rem)'}}>
                    <NumberInput labelName={'STA'} width="min(5.5vw, 2.5rem)" min="1" max="10" />
                    <NumberInput labelName={'PRE'} width="min(5.5vw, 2.5rem)" min="1" max="10" />
                </div>
            </Attributes>

            <Skills>
                Skills
            </Skills>

            <Stats>
                <StatGroup labelName1={'PEXP(%)'} labelName2={'EP limit per round'} />
                <StatGroup labelName1={'DEF'} labelName2={'Movement(m)'} />
                <StatGroup labelName1={'Total HP'} labelName2={'Current HP'} width="min(6.5vw, 3rem)" max="999" />
                <StatGroup labelName1={'Total EP'} labelName2={'Current EP'} width="min(6.5vw, 3rem)" max="999" />
                <StatGroup labelName1={'Total SAN'} labelName2={'Current SAN'} width="min(6.5vw, 3rem)" max="999" />
                
                <TextInput labelName={'Proficiency'} width="min(28vw, 17.5rem)" />
                <TextInput labelName={'Protection'} width="min(28vw, 17.5rem)" />
                <TextInput labelName={'Resistances'} width="min(28vw, 17.5rem)" />
            </Stats>
        </StyledMain>
    )
};

export default Main;