
var users = [ // מערך של יוזרים שיש במערכת
  { username: "Noad", score: 1000, date: "20.07.2020"},
  { username: "Orel", score: 900, date: "17.07.2020"},
  { username: "Meir", score: 150, date: "13.07.2020"},
  { username: "Rivka", score: 100, date: "10.07.2020"},
  { username: "Tal", score: 50, date: "01.07.2020"}
];


var h1 = document.querySelector("h1"); // תופס את תגית איץ1 
var spinners = document.querySelector("#spinner"); // תופס את תגית ספינר
var points = document.querySelector("#points"); // תופס את תגית נקודות
var background = document.querySelector("#background"); // תופס את תגית איץ1 
var miss = document.querySelector("#miss");
var levelLVL = document.querySelector("#level");
var Nlevel = document.querySelector("#nextlvl");
var score1 = 0; // ניקוד שלך מתחיל באפס
var timer = 60;
var clicks = 0;
var level = 1;
var i = 0;
var n = 300;
var num = 2;


h1.addEventListener("click", startGame);   // אם אתה לוחץ על איץ1 תשלח לפונקציה התחלת משחק

function startGame() { // פונקצית תחילת משחק
  h1.textContent = 'STOP GAME' // שינוי של הכותרת לסטוף
  spinner.style.animationDuration = num + "s"; // באיזה מהירות הסתובב הדיב
  spinners.addEventListener("mouseover", escape); // אם אתה עובר על הדיב תשלח לפונקצית בריחה
  background.addEventListener("click", reducePoint);
  spinner.addEventListener("click", addPoint); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד
  background.addEventListener("click", addMiss); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד

}

function escape() { // פונקצית בריחה של הדיב
  setTimeout(function () {
    spinner.style.top = Math.floor(Math.random() * 700 + 10) + "px";  // מוקומות רנדומלי שהוא קופץ אליהם
    spinner.style.left = Math.floor(Math.random() * 1100 + 10) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
  }, n); // כל ריחוף מעל הדיב זה יברח אחרי 300 מילי שניות 
}

function reducePoint() {  // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
  score1 = score1 - (level * 1); // תוסיף 10 נקודות
  points.innerHTML = `<h2>Score:<br>${score1}</h2>`; // מכניס את הערך שיש בציון לנקודות
}

  function addPoint(e) {
    e.stopPropagation(); // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
    score1 = score1 + (level * 10); // תוסיף 10 נקודות  
  points.innerHTML = `<h2>Score:<br>${score1}</h2>`; // מכניס את הערך שיש בציון לנקודות
  i++;
  if (i == 10) {
    levelup();
  }
  console.log(999999999);
  if (level != 5 && i != 20) {
    NextLevel();
  }
}

function addMiss() {  // פונקציה להוספה נקודות אם הצלחתי ללחוץ על הדיב
  clicks = clicks + 1; // תוסיף 10 נקודות
  miss.innerHTML = `<h2><i class="fas fa-bomb"></i>missed clicks:${clicks}</h2>`; // מכניס את הערך שיש בציון לנקודות
}



function levelup() {
  if (level == 5 && i == 10) {
    alert("COngratrs, you win \n your score is: " + score1);
    gameOver();
    background.removeEventListener("click", addMiss); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד
    spinners.style.top = Math.floor(Math.random() * 0) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
    spinners.style.left = Math.floor(Math.random() * 0) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
    i = 20;
  } else if (i == 10) {
    level++;
    levelLVL.innerHTML = `<h2>level:<br> ${level}</h2>`; // מכניס את הערך שיש בציון לנקודות    num = num - 0.25;
    sec = sec + 10;
    n = (n - 50)
    i = 0;
  }
}

function NextLevel() {
  var j = (10 - i);
  Nlevel.innerHTML = `<h2><i class="fas fa-dungeon"></i>points for next level :<br>${j}</h2>`; // מכניס את הערך שיש בציון לנקודות
}



var leaderBoard = document.getElementById("highscore"); // לתפוס את המקום של הטופ שחקנים
var leadJSON = localStorage.getItem("users"); // לקבל מהאיחסון את המערך אובייקטים שהוא עכשיו סטרינג
if (leadJSON != null) { // תכנס אם האיחסון לא ריק
  users = JSON.parse(leadJSON); // משנה את המערך מסטרינג לאובייקט
}
leaderBoard.innerHTML = createleaderBoard();

function createleaderBoard() { // ליצור רשימה של אלופים 
  var toAppend = `<h2>High Score:</h2>`; // ליצור סיטרינג ריק
  users.forEach(function (x) {  // מערך יוזר.לעבור על המערך
  toAppend += `<h4>${x.username} - ${x.score} -${x.date}</h4>`;}); // הוספת נתונים
  return toAppend; // תשלח חזרה את הסטרינג
}

class User { //  c-tor יצירת 
  constructor(_name, _score, _date) { // מגיעים 3 נתונים
    this.username = _name;
    this.score = _score;
    this.date = _date;
  }
}

function stopGame() {
  h1.textContent = 'START GAME' // שינוי של הכותרת להתחיל את המשחק
  score1 = 0;
  points.innerHTML = `<h2>Score:<br>${score1}</h2>`;
  clicks = 0;
  miss.innerHTML = `<h2><i class="fas fa-bomb"></i>missed clicks:${clicks}</h2>`;
  level = 1;
  levelLVL.innerHTML = `<h2>level:<br> ${level}</h2>`;
  sec = 60; // שווה ל60 שניות
  secDOM.innerHTML = `<h2><i class="fas fa-stopwatch"> </i>Time :${sec}</h2>`;
  j = 0;
  Nlevel.innerHTML = `<h2><i class="fas fa-dungeon"></i>points for next level :<br>${j}</h2>`;
  i = 0;
  n = 300;
  spinner.style.animationDuration = "0s"; // באיזה מהירות הסתובב הדיב
  spinners.style.top = Math.floor(Math.random() * 0) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
  spinners.style.left = Math.floor(Math.random() * 0) + "px"; // מוקומות רנדומלי שהוא קופץ אליהם
  spinners.removeEventListener("mouseover", escape); // אם אתה עובר על הדיב תשלח לפונקצית בריחה
  background.removeEventListener("click", reducePoint);
  spinner.removeEventListener("click", addPoint); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד
  background.removeEventListener("click", addMiss); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד
};