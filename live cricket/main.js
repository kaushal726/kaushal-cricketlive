let showHindi = document.querySelector(".showhindi")
let showEnglish = document.querySelector(".showenglish")
let hindiBtn = document.querySelector(".btnHindi")
let englishBtn = document.querySelector(".btnEnglish")
let showText = document.querySelector(".Showtext")
showHindi.style.display = "none";
showEnglish.style.display = "none";
function showMatchHindi() {
  showHindi.style.display = "block";
  showEnglish.style.display = "none";
  showText.innerHTML="Match in Hindi"
}
function showMatchEnglish() {
  showHindi.style.display = "none";
  showText.innerHTML="Match in English"
  showEnglish.style.display = "block";
}