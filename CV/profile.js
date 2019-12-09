$(document).ready(function() {
    var bars = document.getElementsByClassName("progress-bar");

    fillProgressBars();

    function fillProgressBars() {
        for (let i = 0; i < bars.length; i++) {
            var bar = bars[i];
            var $full = bar.parentNode.clientWidth;
            var $percentage = bar.getAttribute('value');
            var $value = $full * ($percentage / 100);
            var $step = $full / 100;

            if (bar.getAttribute('value') == $value) {
                clearInterval(progress);
                $('.progress-bar-1').parents().removeClass('active');
            } else {
                if (bar.getAttribute('value') + $step * 10 > $value) {
                    bar.style.width = $value + "px";
                } else
                    bar.style.width = ($step * 10) + "px";
            }
            bar.innerHTML = $percentage + "%";
        }
    }

});