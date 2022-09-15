const dicebox = document.getElementById("dice")
const dice = document.getElementById("imgDice")
const pl1btn = document.getElementById("pl1btn")
const pl2btn = document.getElementById("pl2btn")
const rstbtn = document.getElementById("rstbtn")
const game = document.getElementById("game")
const pl1rll = document.getElementById("pl1rll")
const pl1scr = document.getElementById("pl1scr")
const pl1win = document.getElementById("pl1win")
const pl2win = document.getElementById("pl2win")
const pl2rll = document.getElementById("pl2rll")
const pl2scr = document.getElementById("pl2scr")
const pl2 = document.getElementById("pl2")
const para = document.getElementById("para")

function win1() {
    if (parseInt(pl1scr.textContent) >= 20) {
        pl1scr.textContent = "Winner!";
        pl1win.textContent = (parseInt(pl1win.textContent) + 1);
        pl1rll.textContent = "Play Again?";
        pl2rll.textContent = "Play Again?"
    }
}
function win2() {
    if (parseInt(pl2scr.textContent) >= 20) {
        pl2scr.textContent = "Winner!";
        pl2win.textContent = (parseInt(pl2win.textContent) + 1);
        pl1rll.textContent = "Play Again?";
        pl2rll.textContent = "Play Again?"
    }
}
function diceCycle() {
    let num = Math.floor(Math.random() * 6) +1;
    dice.src = ("images/dice" + num + ".png");
}
function preRoll1() {
    let counter = 0;
    setInterval(function() {
        if (counter < 10) {
            counter += 1;
            diceCycle();
            console.log(counter)
        }
        else if (counter >= 10) {
            clearInterval()
        }
    }, 30)
    setTimeout(diceRollOne(), 550)
}
function preRoll2() {
    let counter = 0;
    setInterval(function() {
        if (counter < 10) {
            counter += 1;
            diceCycle();
            console.log(counter)
        }
        else if (counter >= 10) {
            clearInterval()
        }
    }, 30)
    setTimeout(diceRollTwo(), 550)
}
function diceRollOne() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    if (num === 1) {
        setTimeout(function(){dice.src = ("images/dice" + num + ".png")}, 550);
        setTimeout(function(){pl1scr.textContent = 0;}, 550);
        setTimeout(function(){win1()}, 600);
    }
    else {
        setTimeout(function(){dice.src = ("images/dice" + num + ".png")}, 550);
        setTimeout(function(){pl1scr.textContent = (parseInt(pl1scr.textContent) + num)}, 550);
        setTimeout(function(){win1()}, 550);
    }
}
function diceRollTwo() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    if (num === 1) {
        setTimeout(function(){dice.src = ("images/dice" + num + ".png")}, 550);
        setTimeout(function(){pl2scr.textContent = 0;}, 550);
        setTimeout(function(){win1()}, 550);
    }
    else {
        setTimeout(function(){dice.src = ("images/dice" + num + ".png")}, 550);
        setTimeout(function(){pl2scr.textContent = (parseInt(pl2scr.textContent) + num)}, 550);
        setTimeout(function(){win1()}, 550);
    }
}
function reset() {
    if ((pl1scr.textContent === "Winner!") || (pl2scr.textContent === "Winner!")) {
        pl1scr.textContent = "0";
        pl2scr.textContent = "0"
    }
    else {
        return
    }
}
function singleplayer() {
    if (pl2.style.display === "none") {
        return
    }
    else {
        pl1rll.style.display = "none";
        pl2rll.style.display = "block"
    }
}

rstbtn.addEventListener("click", () => {
    dicebox.style.display = "none"
    game.style.display = "none";
    pl2.style.display = "none";
    pl1btn.style.display = "block";
    pl2btn.style.display = "block";
    rstbtn.style.display = "none";
    pl1scr.textContent = "0";
    pl1win.textContent = "0"
    pl2scr.textContent = "0";
    pl2win.textContent = "0";
    dice.src = "images/dice6.png";
    para.style.display = "flex"
})
pl1btn.addEventListener("click", () => {
    dicebox.style.display = "flex"
    pl1btn.style.display = "none";
    pl2btn.style.display = "none";
    pl1rll.style.display = "block";
    game.style.display = "flex";
    pl2.style.display = "none";
    rstbtn.style.display = "block";
    pl1rll.textContent = "Roll";
    pl2rll.textContent = "Roll";
    para.style.display = "none";
    singleplayer();
})
pl2btn.addEventListener("click", () => {
    dicebox.style.display = "flex"
    pl1btn.style.display = "none";
    pl2btn.style.display = "none";
    game.style.display = "flex";
    pl2.style.display = "block";
    pl2rll.style.display = "none";
    rstbtn.style.display = "block";
    pl1rll.textContent = "Roll";
    pl2rll.textContent = "Roll";
    para.style.display = "none"
})
pl1rll.addEventListener("click", () => {
    dice.classList.add("shake");
    pl1rll.textContent = "Roll";
    pl2rll.textContent = "Roll";
    reset();
    setTimeout(function(){singleplayer();}, 550);
    setTimeout(function(){dice.classList.remove("shake");}, 550);
    preRoll1()
})
pl2rll.addEventListener("click", () => {
    dice.classList.add("shake");
    pl1rll.textContent = "Roll";
    pl2rll.textContent = "Roll";
    setTimeout(function(){pl2rll.style.display = "none";}, 550);
    setTimeout(function(){pl1rll.style.display = "block";}, 550);
    setTimeout(function(){dice.classList.remove("shake");}, 550);
    preRoll2()
})