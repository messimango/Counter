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
