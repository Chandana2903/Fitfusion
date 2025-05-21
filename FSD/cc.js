const quotes = [
    "Counting calories, not regrets 🍕💪",
    "Because abs are made in the kitchen... allegedly 😅",
    "One slice won’t hurt... or will it? 🤔",
    "Track it before you snack it 😎",
    "I lift... pizza slices. Now I count them too 🍕📊",
    "Burning calories? First, let’s find them! 🔍🔥",
    "You’re not overeating, you’re just under-tracking 😜"
  ];

  let quoteIndex = 0;

  function rotateQuote() {
    const quoteElement = document.getElementById("quote");
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.textContent = `"${quotes[quoteIndex]}"`;
  }

  setInterval(rotateQuote, 4500); // Change every 10 seconds