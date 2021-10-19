const timeDisplayEl = $('#time-display');



function displayTime() {
    const rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow);
}



















setInterval(displayTime, 1000);
