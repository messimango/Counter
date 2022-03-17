const number = document.querySelector(".number");

const buttons = document.querySelectorAll("#button");

let x = 0;

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const butt = e.currentTarget.classList;
        
        if (butt.contains("mthousand")) {
            x = x - 1000;
            number.textContent = x;
        } else if (butt.contains("mhundred")) {
            x = x - 100;
            number.textContent = x;
        } else if (butt.contains("mten")) {
            x = x - 10;
            number.textContent = x;
        } else if (butt.contains("mone")) {
            x = x - 1;
            number.textContent = x;
        } else if (butt.contains("reset")) {
            x = 0;
            number.textContent = x;
        }else if (butt.contains("one")) {
            x = x + 1;
            number.textContent = x;
        }else if (butt.contains("ten")) {
            x = x + 10;
            number.textContent = x;
        }else if (butt.contains("hundred")) {
            x = x + 100;
            number.textContent = x;
        }else if (butt.contains("thousand")) {
            x = x + 1000;
            number.textContent = x;
        }
    });
});




// toggle dark mode

const toggleicon = document.getElementById("toggle");
const togglebutton = document.querySelector(".toggle-mode");
const footerBox = document.querySelector(".footer-box");
const icont = document.querySelector(".icont");
const iconf = document.querySelector(".iconf");

toggleicon.onclick = function() {
    if (toggleicon.classList.contains("fa-moon-o")) {
        toggleicon.className = "fa fa-sun-o";
        document.body.classList.add("dark-mode");
        footerBox.classList.add("footer-dark");
        icont.classList.add("white");
        iconf.classList.add("white");
        return
    }

    else if (toggleicon.classList.contains("fa-sun-o")) {
        toggleicon.className = "fa fa-moon-o";
        document.body.classList.remove("dark-mode")
        footerBox.classList.remove("footer-dark")
        iconf.classList.remove("white")
        return
    }
};