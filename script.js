const timeDisplayEl = $('#time-display');






function displayTime() {
    const rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timeDisplayEl.text(rightNow);
};

$(document).ready(function() {
    $('#btn').on("click", function (){
        const text = $('.form-control').val();
        const time = $(this).parent().attr('id');

        console.log(text);

    })

    function timeTracker() {
        const timeNow = moment().hour();

        $('.form-control').each(function (){
            const
        })
    }
});

setInterval(displayTime, 1000);
