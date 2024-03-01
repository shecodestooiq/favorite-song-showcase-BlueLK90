
function displaySongInfo(event) {
    event.preventDefault();
    document.getElementById("mainForm").classList.add("hide");
    document.getElementById("showSharedSong").classList.remove("hide")
     const formData = document.getElementById("songForm")
     const songTitle = formData.elements["title"].value
     const artist = formData.elements["artist"].value
     const link = formData.elements["songLink"].value
     const yearListen = formData.elements["year"].value
     const desc = formData.elements["description"].value

     document.getElementById("video").setAttribute("src", link)
     document.querySelector("#para1").innerHTML += songTitle
     document.querySelector("#para2").innerHTML += artist
     document.querySelector("#para3").innerHTML += yearListen
     document.querySelector("#para4").innerHTML += desc

}

module.exports = {
    displaySongInfo: displaySongInfo,
};

