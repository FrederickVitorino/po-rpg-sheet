import { StyledMain, Attributes, Skills, Stats, Description } from './styles';
import NumberInput from '../../components/NumberInput';
import TextInput from '../../components/TextInput';
import StatBlock from '../../components/StatBlock';
import SkillRow from '../../components/SkillRow';

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

            <Skills> {/* W.I.P: Alterar as proporções dessa grid-area para deixá-la menor em telas com width grande*/}
                <div className='centerVertical'>Skills</div>
                <div className='centerHorizontal' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Skill Name</span>
                    <span>Dices</span>
                    <span>Bonus</span>
                </div>
                
                {/* W.I.P: Criar um array com o nome das Skills e utilizar map nela para criar as 28 SkillRow */ }
                <SkillRow labelName={'Acrobatics'} />
                <SkillRow labelName={'Aim'} />
                <skillRow labelName={'Crime'} />
                <SkillRow labelName={'Initiative'} />
                <SkillRow labelName={'Pilotage*'} />
                <SkillRow labelName={'Reflex'} />
                <SkillRow labelName={'Stealth'} />
                <SkillRow labelName={'Current Affairs*'} />
                <SkillRow labelName={'Investigation'} />
                <SkillRow labelName={'Medicine'} />
                <SkillRow labelName={'Occultism*'} />
                <SkillRow labelName={'Profession*'} />
                <SkillRow labelName={'Science*'} />
                <SkillRow labelName={'Survival'} />
                <SkillRow labelName={'Tactics*'} />
                <SkillRow labelName={'Technology*'} />
                <SkillRow labelName={'Fortitude'} />
                <SkillRow labelName={'Athletics'} />
                <SkillRow labelName={'Fight'} />
                <SkillRow labelName={'Arts*'} />
                <SkillRow labelName={'Deception'} />
                <SkillRow labelName={'Diplomacy'} />
                <SkillRow labelName={'Animal Handling*'} />
                <SkillRow labelName={'Intimidation'} />
                <SkillRow labelName={'Intuition'} />
                <SkillRow labelName={'Perception'} />
                <SkillRow labelName={'Religion*'} />
                <SkillRow labelName={'Will'} />
            </Skills>

            <Stats>
                <StatBlock labelName1={'PEXP(%)'} labelName2={'EP limit'} />
                <StatBlock labelName1={'DEF'} labelName2={'Movement(m)'} />
                <StatBlock labelName1={'Total HP'} labelName2={'Current HP'} width="min(6.5vw, 3rem)" max="999" />
                <StatBlock labelName1={'Total EP'} labelName2={'Current EP'} width="min(6.5vw, 3rem)" max="999" />
                <StatBlock labelName1={'Total SAN'} labelName2={'Current SAN'} width="min(6.5vw, 3rem)" max="999" />
                
                <TextInput labelName={'Proficiency'} width="min(28vw, 17.5rem)" />
                <TextInput labelName={'Protection'} width="min(28vw, 17.5rem)" />
                <TextInput labelName={'Resistances'} width="min(28vw, 17.5rem)" />
            </Stats>

            <Description>
                {/* W.I.P: Criar um componente de TextArea para a descrição do personagem */}
            </Description>
        </StyledMain>
    )
};

export default Main;