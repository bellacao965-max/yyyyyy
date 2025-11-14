const videos = [
  "https://www.youtube.com/embed/ktvTqknDobU",
  "https://www.youtube.com/embed/5qap5aO4i9A",
  "https://www.youtube.com/embed/fLexgOxsZu0"
];

function randomVideo() {
  document.getElementById("ytFrame").src = videos[Math.floor(Math.random()*videos.length)];
}

function searchYT() {
  let q = document.getElementById("ytSearchInput").value;
  window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(q));
}

function aiReply() {
  let text = document.getElementById("aiInput").value;
  document.getElementById("aiOutput").innerHTML = "AI menjawab: " + text;
}
