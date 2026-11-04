function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 7) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}

setInterval(createHeart, 500);

// Open letter
function openLetter() {
    const intro = document.getElementById("intro");
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.classList.add("flap-open");

    setTimeout(() => {
        intro.style.display = "none";
        letter.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 850);
}

// Close letter
function goBack() {
    const intro = document.getElementById("intro");
    const letter = document.getElementById("letter");

    letter.classList.remove("show");
    letter.style.display = "none";

    intro.style.display = "block";

    document.getElementById("envelope").classList.remove("flap-open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
