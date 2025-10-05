document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const summary = document.getElementById("summary");
  const resultDiv = document.getElementById("result");

  let personality = "";
  let favColor = "";
  let likes = "";
  let dislikes = "";
  let ageRange = "";

  // 🎯 Simple logic (you can make this smarter later)
  if (q1 === "outdoors" && q3 === "mountain") {
    personality = "Nature Lover 🌿";
    favColor = "Green or earthy brown";
    likes = "Hikes, calm mornings, coffee in the woods";
    dislikes = "Noise, crowds, pollution";
    ageRange = "20-30";
  } else if (q1 === "creative" && q2 === "thoughtful") {
    personality = "Dreamy Artist 🎨";
    favColor = "Lavender or sky blue";
    likes = "Sketchbooks, sunsets, music, soft rain";
    dislikes = "Routine, deadlines";
    ageRange = "18-28";
  } else if (q1 === "social" && q2 === "energetic") {
    personality = "Social Butterfly 🦋";
    favColor = "Pink or orange";
    likes = "Parties, laughter, bright clothes";
    dislikes = "Silence, staying home too long";
    ageRange = "22-35";
  } else {
    personality = "Cozy Thinker ☕";
    favColor = "Navy blue or beige";
    likes = "Books, warm blankets, quiet time";
    dislikes = "Chaos, pressure";
    ageRange = "25-40";
  }

  summary.innerHTML = `
    <strong>Personality:</strong> ${personality}<br><br>
    <strong>Favorite Colors:</strong> ${favColor}<br>
    <strong>Likes:</strong> ${likes}<br>
    <strong>Dislikes:</strong> ${dislikes}<br>
    <strong>Guessed Age Range:</strong> ${ageRange}
  `;

  resultDiv.classList.remove("hidden");
});
