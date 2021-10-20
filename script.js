const timeDisplayEl = $('#time-display');
const formControlTextEl = $('#form-control-text')
const formControlText1El = $('#form-control-text1')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')
const formControlTextEl = $('#form-control-text')




function displayTime() {
    const rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow);
}



















setInterval(displayTime, 1000);
