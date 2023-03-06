// select element
const displayTime = document.querySelector('#time');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const btnLap = document.querySelector('.btnLap');
const lapLists1 = document.querySelector('#lap-lists1');
const lapLists2 = document.querySelector('#lap-lists2');


// variable
let count = 0;
let previousLap = 0;


// time conversion function
const timeConversion = (totalMicroSecond) => {
    const totalSecond = Math.floor(totalMicroSecond / 100);
    const microSec = totalMicroSecond % 100;
    const totalMinute = Math.floor(totalSecond / 60);
    const sec = totalSecond % 60;
    const hr = Math.floor(totalMinute / 60);
    const min = totalMinute % 60;

    const time = `${String(hr).length < 2 ? `0${hr}`:hr}:${String(min).length < 2 ? `0${min}`:min}:${String(sec).length < 2 ? `0${sec}`:sec}:${String(microSec).length < 2 ? `0${microSec}`:microSec}`;
    return time;
}


// timing function
const setIntervalFunc = () => {

    let timing = setInterval(() => {
        count++;

        const time = timeConversion(count);
        displayTime.innerText = time;
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
            count = 0;
            previousLap = 0;
            lapLists1.innerHTML = '';
            lapLists2.innerHTML = '';
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


btnLap.addEventListener('click', ()=>{

    const li1 = document.createElement('li');
    li1.innerText = timeConversion(count - previousLap);
    lapLists1.appendChild(li1);

    const li2 = document.createElement('li');
    li2.innerText = timeConversion(count);
    lapLists2.appendChild(li2);
    previousLap = count;
})

