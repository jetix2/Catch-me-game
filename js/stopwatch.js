var h1 = document.querySelector("h1"); // תופס את תגית איץ1 
var secDOM = document.querySelector("#timer"); // תופס את תגית טיימר
var sec = 60; // שווה ל60 שניות
var timer = null; // יצירת משתנה חדש בשום טיימר מצביע לריק
h1.addEventListener("click", start); // אם לוחצים על איץ1 תפעיל את הפונקציה סטארט

function start() {
    startTimer();
} // תפעיל את הפונקציה סטארט טיימר

function startTimer() { // פונקציה סטארט טיימר
    timer = setInterval(function () { // 
        if (sec == 0) { // אם הזמן הוא אפס
            alert("game over!! \n your score is: " + score1);
            gameOver(); // תשלח לפונקצית משחק נגמר
        } else { // אם הזמן הוא עוד לא אפס
            sec--; // תוריד את הזמן באחד
            secDOM.innerHTML = `<h2><i class="fas fa-stopwatch"> </i>Time :${sec}</h2>`;
        }
    }, 1000); // כמות זמן בין כל איטרציות
}



function gameOver() {
    clearInterval(timer);
   if (score1 > users[4].score) {
    if (score1 > users[3].score) { // נקודות שהוא מקבל מהשחקן החדש גדול מהשחקן בתחתית של הטבלה
        var name = prompt("Enter your name"); // תכניס את השם
        users.pop(); // להוציא / למחוק את האחרון ברשימה
        for (let i = 0; i < users.length; i++) { // לולאת פור שעוברת על כל המערך
            if (score1 > users[i].score) { // אם הניקוד שקיבל השחקן עכשיו יותר גדול מה5 השחקנים האלופים
                var dateNow = new Date().toLocaleDateString(); // תכניס לתוך משתנה זמן עכשיו את התאריך של עכשיו
                var winner = new User(name, score1, dateNow); //  יוצר אבייקט של השחקן החדש ע"י כאונסטראקטור
                users.splice(i, 0, winner); // תכנס במקום איי תמחוק אפס סטרינג ותכניס את המנצח
                break; // צא מהלולאה
            }
        }
    }else { // נקודות שהוא מקבל מהשחקן החדש גדול מהשחקן בתחתית של הטבלה
        users.pop(); // להוציא / למחוק את האחרון ברשימה
        var name = prompt("Enter your name"); // תכניס את השם
        var dateNow = new Date().toLocaleDateString(); // תכניס לתוך משתנה זמן עכשיו את התאריך של עכשיו
        var winner = new User(name, score1, dateNow); //  יוצר אבייקט של השחקן החדש ע"י כאונסטראקטור
        users.push(winner);
    }
}
    localStorage.setItem("users", JSON.stringify(users)); // 
    leaderBoard.innerHTML = createleaderBoard(); // תכניס לדייב של האלופים . תרשום את זה שווה לפונקציה יצירת אלופים

    stopGame();
    h1.addEventListener("click", startGame); // אם אתה לוחץ על איץ1 תשלח לפונקציה התחלת משחק
    background.addEventListener("click", addMiss); // אם לוחצים על הדיב שולח אותי לפונקציה הוספת ניקוד

}