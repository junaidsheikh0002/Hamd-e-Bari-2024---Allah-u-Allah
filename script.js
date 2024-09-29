// Function to play/pause the Hamd
function playHamd() {
    var audio = document.getElementById("hamd-audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Play background music automatically (already handled with autoplay in the HTML)
