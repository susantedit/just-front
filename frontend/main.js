$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        seed: 1500,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        }
    });

    $('.siri-message').textillate({
        loop: true,
        seed: 1500,
        sync: true,
        in: {
            effect: "fadeInUP",
            sync: true,
        },
        out: {
            effect: "fadeOutUP",
            sync: true,
        }
    });

    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 640,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        height: 200,
        autostart: true,
        wavecolor: "#ff0000",
        waveOffset: 0,
        rippleEffect: true,
        rippleColor: "#ffffff",
        height: 200,
    });

    $("#MicBtn").click(function () {
        eel.playAssistantSound(); // Correct function call

        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
    });
});