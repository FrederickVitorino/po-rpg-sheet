import TextInput from './components/TextInput';
import Main from './pages/Main';

function App(){
    return(
        <main>
            <div className="info">
                <TextInput labelName="Player" width="min(28vw, 17.5rem)" />
                <TextInput labelName="Character" width="min(28vw, 17.5rem)" />
                <TextInput labelName="Origin" width="min(28vw, 17.5rem)" />
                <TextInput labelName="Class" width="min(28vw, 17.5rem)" />
            </div>

            <div className="title">
                <span><b>Paranormal Order - RPG</b></span>
                <img style={{width: "min(14vw, 7rem"}} 
                    src="/assets/images/fear.png" 
                    alt="Paranormal Order RPG Logo" />
            </div>

            <div className="section">
                <Main />
            </div>
        </main>
    );
}

export default App