// select element
const displayTime = document.querySelector('#time');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const btnLap = document.querySelector('.btnLap');
const lapLists = document.querySelector('.lap-lists');


// interval function
let microSec = 0, sec = 0, min = 0, hr = 0;
const setIntervalFunc = () => {
    
    let timing = setInterval(() => {
        microSec++
        if (microSec === 100) {
            microSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hr++;
                }
            }
        }
   
       displayTime.innerText = `${String(hr).length < 2 ? `0${hr}`:hr}:${String(min).length < 2 ? `0${min}`:min}:${String(sec).length < 2 ? `0${sec}`:sec}:${String(microSec).length < 2 ? `0${microSec}`:microSec}`;

    }, 10);

        // time stop event
        btnStop.addEventListener('click', () => {
            clearInterval(timing);
            btnStart.classList.remove('hidden');
            btnStop.classList.add('hidden');
        })

        // time reset time 
        btnReset.addEventListener('click', () => {
            clearInterval(timing);
            displayTime.innerText = `00:00:00:00`;
            hr =0;
            min =0;
            sec = 0;
            microSec = 0;
            lapLists.innerHTML = '';
            btnReset.classList.add('hidden');
            btnStop.classList.add('hidden');
            btnLap.classList.add('hidden');
            btnStart.classList.remove('hidden');
        })
    
}

// time start event
function startTiming() {
    setIntervalFunc();

    btnStart.classList.add('hidden');
    btnStop.classList.remove('hidden');
    btnReset.classList.remove('hidden');
    btnLap.classList.remove('hidden');
}

function recordTiming() {
    const li = document.createElement('li');
    li.innerText = displayTime.innerText;
    lapLists.appendChild(li);
}



