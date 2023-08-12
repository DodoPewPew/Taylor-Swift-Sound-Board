var numberOfDrums = document.querySelectorAll(".drum").length;

// Create an object to keep track of the sound state
var soundState = {
    "w": { audio: new Audio("sounds/blank_space.mp3"), isPlaying: false },
    "a": { audio: new Audio("sounds/you_belong_with_me.mp3"), isPlaying: false },
    "s": { audio: new Audio("sounds/lover.mp3"), isPlaying: false },
    "d": { audio: new Audio("sounds/lavender_haze.mp3"), isPlaying: false },
    "j": { audio: new Audio("sounds/red.mp3"), isPlaying: false },
    "k": { audio: new Audio("sounds/lwymmd.mp3"), isPlaying: false },
    "l": { audio: new Audio("sounds/sparks_fly.mp3"), isPlaying: false }
};

for (var i = 0; i < numberOfDrums; i++) {
    var button = document.querySelectorAll(".drum")[i];

    // Click event listener to play the sound
    button.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playOrStopSound(buttonInnerHTML);
    });

    // Mouseover and mouseout event listeners for visual effects
    button.addEventListener("mouseover", function () {
        this.style.color = "#ffffff";
    });

    button.addEventListener("mouseout", function () {
        this.style.color = "#aec0fc";
    });

    // Keydown and keyup event listeners to play/stop the sound
    document.addEventListener("keydown", function (event) {
        var key = event.key.toLowerCase();
        if (soundState[key]) {
            playOrStopSound(key);
        }
    });
}

// Function to play or stop the sound based on the key
function playOrStopSound(key) {
    if (soundState[key]) {
        if (soundState[key].isPlaying) {
            soundState[key].audio.pause();
            soundState[key].audio.currentTime = 0; // Reset audio to the beginning
            soundState[key].isPlaying = false;
        } else {
            soundState[key].audio.play();
            soundState[key].isPlaying = true;
        }
    }
}
