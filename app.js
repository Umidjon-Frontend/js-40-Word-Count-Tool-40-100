const input = document.querySelector(".input");
const character = document.querySelector(".character");
const word = document.querySelector(".word");
const wordLimit = document.querySelector(".word-limit");
const readingTime = document.querySelector(".reading-time");
const WORD_LIMIT = 200;

wordLimit.innerHTML = WORD_LIMIT;

input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
  let words = input.value.split(" ");

  const newWords = words.filter((item) => {
    return item !== "";
  });

  word.innerHTML = newWords.length;

  let newWordLimit = WORD_LIMIT - newWords.length;

  if (newWordLimit < 0) {
    wordLimit.style.color = "red";
  } else {
    wordLimit.style.color = "black";
  }
  wordLimit.innerHTML = newWordLimit;

  if (newWords) {
    let secund = Math.floor((newWords.length * 60) / WORD_LIMIT);

    if (secund > 59) {
      let minutes = Math.floor(secund / 60);
      secund = secund - minutes * 60;
      readingTime.innerHTML = minutes + "m" + secund + "s";
    } else {
      readingTime.innerHTML = "0s";
    }
  }else{
    readingTime.innerHTML = "0s";
  }
}
