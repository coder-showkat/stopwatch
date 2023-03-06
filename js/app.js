// select element
const displayTime = document.querySelector('#time');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const btnLap = document.querySelector('.btnLap');
const lapLists1 = document.querySelector('#lap-lists1');
const lapLists2 = document.querySelector('#lap-lists2');
const lapLists3 = document.querySelector('#lap-lists3');


// variable
let count = 0;
let previousLap = 0;
let listCount = 0;


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
            btnReset.classList.remove('hidden');
            btnStop.classList.add('hidden');
            btnLap.classList.add('hidden');
        })

        // time reset time 
        btnReset.addEventListener('click', () => {
            clearInterval(timing);
            displayTime.innerText = `00:00:00:00`;
            count = 0;
            previousLap = 0;
            listCount = 0;
            lapLists1.innerHTML = '';
            lapLists2.innerHTML = '';
            lapLists3.innerHTML = '';
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
    btnLap.classList.remove('hidden');
    btnReset.classList.add('hidden');
}


btnLap.addEventListener('click', ()=>{
    listCount++;
    const li1 = document.createElement('li');
    li1.innerHTML = `<i class="fa-solid fa-flag"></i> ${String(listCount).length < 2 ? `0${listCount}`:listCount}`;
    lapLists1.insertBefore(li1, lapLists1.children[0]);
    const li2 = document.createElement('li');
    li2.innerText = timeConversion(count - previousLap);
    lapLists2.insertBefore(li2, lapLists2.children[0]);

    const li3 = document.createElement('li');
    li3.innerText = timeConversion(count);
    lapLists3.insertBefore(li3, lapLists3.children[0]);
    previousLap = count;
})

