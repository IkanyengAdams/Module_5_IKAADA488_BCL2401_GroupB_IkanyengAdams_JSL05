// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Lose Some Win Some", artist: "Nasty C", genre: "Pop"},
    { title: "Carlifornia Love", artist: "Tupac", genre: "R&B"},
    { title: "Starboy", artist: "The weeknd", genre: "Rock"},
    { title: "Juicy", artist: "Chris Brown", genre: "R&B"},
    { title: "Champion", artist: "A-reece", genre: "Pop"},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    // Use the map() function to create playlists for each Guardian
    // Your code here
const playlistsDiv  = document.getElementById("playlists");

for (const guardianName in guardians) {
    const preferredGenre = guardians[guardianName];
    const filteredSongs = songs.filter((song) => song.genre === preferredGenre);

    const playlistElement = document.createElement("div");
    playlistElement.classList.add("playlist");
    playlistElement.innerHTML = `<h2>${guardianName}'s ${preferredGenre} playlist:</h2>`;

  if (filteredSongs.length > 0) {
    const playlistList = document.createElement("ul");
    filteredSongs.forEach((song) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class='song-title'> ${song.title}</span> by ${song.artist}`;
        playlistList.appendChild(listItem);   
    });
    playlistElement.appendChild(playlistList);
  }else {
    playlistElement.textContent = `${guardianName} doesn't have any songs in their preferred genre.`
  }
    playlistsDiv.appendChild(playlistElement);

 }
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


