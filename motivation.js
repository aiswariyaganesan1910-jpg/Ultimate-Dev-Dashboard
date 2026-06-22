const quotes = [

        "My code doesn't have bugs, it develops unexpected features. 😎",

        "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors. 😂",

        "Programming is 10% coding and 90% wondering why it isn't working. 🤔",

        "I changed one line of code. Now I have 20 new problems. 🚀",

        "Behind every successful programmer is a long history of console.log(). 😅",

        "The code works. I don't know why. The code broke. I don't know why. 🤯",

        "Git happens. Just commit it. 😆",

        "Every expert was once a beginner. Keep learning. 🌱",

        "Small progress every day leads to big results. 🎯",

        "Success is not about being the best; it's about being better than yesterday. 💪",

        "Your future is created by what you do today, not tomorrow. ✨",

        "Don't stop when you're tired. Stop when you're done. 🔥",

        "Dream big, start small, but never stop moving forward. 🚀",

        "Difficult roads often lead to beautiful destinations. 🌄",

        "The only limit to your growth is the one you place on yourself. 🌟"


];

function getRandomQuote() {

    let randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    return quotes[randomIndex];
}

function displayQuote() {

    document.getElementById("quote")
        .textContent = getRandomQuote();
}

function refreshQuote() {

    displayQuote();
}

document.getElementById("new-quote-btn")
    .addEventListener("click", refreshQuote);

window.onload = function () {

    displayQuote();

};