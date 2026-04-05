// ===============================
// Emotion Music Player Script
// ===============================

let selectedMood = "";

// Open popup modal
function openPlayer(mood) {
    console.log("Clicked mood:", mood); // debug check

    selectedMood = mood;

    const modal = document.getElementById("musicModal");

    if (!modal) {
        console.error("musicModal not found in HTML");
        return;
    }

    modal.style.display = "flex";
}


// Close popup modal
function closePlayer() {
    document.getElementById("musicModal").style.display = "none";
    document.getElementById("playerFrame").innerHTML = "";
}


// Spotify playlists
function playSpotify() {

    const spotify = {
        happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
        sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
        relax: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
        angry: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
        love: "https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn",
        energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
        focus: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6"
    };

    document.getElementById("playerFrame").innerHTML =
        `<iframe src="${spotify[selectedMood]}" 
        width="350" height="380"
        allow="autoplay; encrypted-media">
        </iframe>`;
}


// YouTube videos (embeddable)
function playYouTube() {

    const youtube = {
        happy: "https://www.youtube.com/embed/kJQP7kiw5Fk",
        sad: "https://www.youtube.com/embed/hoNb6HuNmU0",
        relax: "https://www.youtube.com/embed/2OEL4P1Rz04",
        angry: "https://www.youtube.com/embed/tAGnKpE4NCI",
        love: "https://www.youtube.com/embed/450p7goxZqg",
        energetic: "https://www.youtube.com/embed/fLexgOxsZu0",
        focus: "https://www.youtube.com/embed/5qap5aO4i9A"
    };

    document.getElementById("playerFrame").innerHTML =
        `<iframe width="380" height="220"
        src="${youtube[selectedMood]}"
        allowfullscreen>
        </iframe>`;
}


// Close modal when clicking outside box
window.onclick = function(event) {

    const modal = document.getElementById("musicModal");

    if (event.target === modal) {
        closePlayer();
    }
};
function closeAd() {
    document.getElementById("popupAd").style.display = "none";
}
