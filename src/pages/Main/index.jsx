import { StyledMain, Attributes, Skills, Stats, Description } from './styles';
import NumberInput from '../../components/NumberInput';
import TextInput from '../../components/TextInput';
import StatBlock from '../../components/StatBlock';
import SkillRow from '../../components/SkillRow';
import DescInput from '../../components/DescInput';

function Main(){
    const skillNames = [
        'Acrobatics', 'Aim', 'Crime', 'Initiative', 'Pilotage*', 'Reflex', 'Stealth', 
        'Current Affairs*', 'Investigation', 'Medicine', 'Occultism*', 'Profession*', 
        'Science*', 'Survival', 'Tactics*', 'Technology*', 'Fortitude', 'Athletics', 
        'Fight', 'Arts*', 'Deception', 'Diplomacy', 'Animal Handling*', 'Intimidation', 
        'Intuition', 'Perception', 'Religion*', 'Will'
    ];

    {/* Estilizar e colorizar a page Main e depois iniciar as outras pages */}

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
                <div className='centerVertical'>Skills</div>
                <div className='centerHorizontal' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Skill Name</span>
                    <span>Dices</span>
                    <span>Bonus</span>
                </div>
                
                {skillNames.map((skill, index) => (
                    <SkillRow key={index} labelName={skill} />
                ))}
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
                <DescInput labelName={'Appearance'} />
                <DescInput labelName={'Backstory'} />
                <DescInput labelName={'Personality'} />
                <DescInput labelName={'Objective'} />
            </Description>
        </StyledMain>
    )
};

export default Main;