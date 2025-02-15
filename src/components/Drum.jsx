import Heater_1 from '../assets/Heater-1.mp3'
import Heater_2 from '../assets/Heater-2.mp3'
import Heater_3 from '../assets/Heater-3.mp3'
import Heater_4 from '../assets/Heater-4.mp3'
import Clap from '../assets/Clap.mp3'
import Open_HH from '../assets/Open HH.mp3'
import Kick_N_Hat from '../assets/Kick_n_Hat.mp3'
import Kick from '../assets/KICK.mp3'
import Close_HH from '../assets/Close HH.mp3'
import './Drum.css'



const Drum = () => {

    const play = (str) => {
        
        if (str === 'Q' || str === 'q') {
            document.getElementById('display').innerHTML = "Heater-1";
        } else if(str === 'W' || str === 'w') {
            document.getElementById('display').innerHTML = "Heater-2";
        } else if(str === 'E' || str === 'e') {
            document.getElementById('display').innerHTML = "Heater-3";
        } else if(str === 'A' || str === 'a') {
            document.getElementById('display').innerHTML = "Heater-4";
        } else if(str === 'S' || str === 's') {
            document.getElementById('display').innerHTML = "Clap";
        } else if(str === 'D' || str === 'd') {
            document.getElementById('display').innerHTML = "Open-HH";
        } else if(str === 'Z' || str === 'z') {
            document.getElementById('display').innerHTML = "Kick-n'-Hat";
        } else if(str === 'X' || str === 'x') {
            document.getElementById('display').innerHTML = "Kick";
        } else if(str === 'C' || str === 'c') {
            document.getElementById('display').innerHTML = "Closed-HH";
        }

        let audio = document.getElementById(str);
        audio.play();
    }
    window.document.onkeyup = function(e) {
        let keystroke = e.key
        if (keystroke === 'Q' || keystroke === 'q') {
            play('Q');
        } else if(keystroke === 'W' || keystroke === 'w') {
            play('W');
        } else if(keystroke === 'E' || keystroke === 'e') {
            play('E');
        } else if(keystroke === 'A' || keystroke === 'a') {
            play('A');
        } else if(keystroke === 'S' || keystroke === 's') {
            play('S');
        } else if(keystroke === 'D' || keystroke === 'd') {
            play('D');
        } else if(keystroke === 'Z' || keystroke === 'z') {
            play('Z');
        } else if(keystroke === 'X' || keystroke === 'x') {
            play('X');
        } else if(keystroke === 'C' || keystroke === 'c') {
            play('C');
        }
    }

    return (
        <div className='whole-drum'>
            <button className="drum-pad" id='drum-0' onClick={() => play("Q")}>
                Q
                <audio src={Heater_1} className='clip' id='Q' />
            </button>
            <button className="drum-pad" id='drum-1' onClick={() => play("W")}>
                W
                <audio src={Heater_2} className='clip' id='W' />
            </button>
            <button className="drum-pad" id='drum-2' onClick={() => play("E")}>
                E
                <audio src={Heater_3} className='clip' id='E' />
            </button>
            <button className="drum-pad" id='drum-3'onClick={() => play("A")}>
                A
                <audio src={Heater_4} className='clip' id='A' />
            </button>
            <button className="drum-pad" id='drum-4' onClick={() => play("S")}>
                S
                <audio src={Clap} className='clip' id='S' />
            </button>
            <button className="drum-pad" id='drum-5' onClick={() => play("D")}>
                D
                <audio src={Open_HH} className='clip' id='D' />
            </button>
            <button className="drum-pad" id='drum-6' onClick={() => play("Z")}>
                Z
                <audio src={Kick_N_Hat} className='clip' id='Z' />
            </button>
            <button className="drum-pad" id='drum-7' onClick={() => play("X")}>
                X
                <audio src={Kick} className='clip' id='X' />
            </button>
            <button className="drum-pad" id='drum-8' onClick={() => play("C")}>
                C
                <audio src={Close_HH} className='clip' id='C' />
            </button>
        </div>
    )
}

export default Drum
