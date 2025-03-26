import React, { useState } from "react";
import TextInput from './components/TextInput';
import NavButton from './components/NavButton';
import Main from './pages/Main';
import AttInv from './pages/Attacks-Inventory';
import PowRit from './pages/Powers-Rituals';

function App(){
    const [currentPage, setCurrentPage] = useState("Main");
    
    const pages = {
        Main: <Main />,
        AttInv: <AttInv />,
        PowRit: <PowRit />,
    };

    return(
        <main>
            <div className="nav">
                <NavButton buttonName="Main" page="Main" setCurrentPage={setCurrentPage} />
                <NavButton buttonName="Attacks/Inventory" page="AttInv" setCurrentPage={setCurrentPage} />
                <NavButton buttonName="Powers/Rituals" page="PowRit" setCurrentPage={setCurrentPage} />            
            </div>

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

            <div id="section" className="section">
                {pages[currentPage]}
            </div>
        </main>
    );
}

export default App