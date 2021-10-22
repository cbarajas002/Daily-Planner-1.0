const timeDisplayEl = $('#time-display');
const formControlTextEl = $('#form-control-text');
const SaveBtnEl = $('#btn');





function displayTime() {
    const rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timeDisplayEl.text(rightNow);
}

function displayText() {
    formControlTextEl = $('#form-control-text')
    formControlTextEl.text();
}

function handleSaveBtn() {
    
}



















setInterval(displayTime, 1000);
