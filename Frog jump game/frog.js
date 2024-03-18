let croak = new Audio('sound/croak.mp3');

function jumpL(element) {

        var currentStone = element.parentElement;
        var previousStone = currentStone.previousElementSibling;
        var previous_previousStone = previousStone.previousElementSibling;
        if (previousStone && previousStone.classList.contains('stone')) {
            if (!previousStone.querySelector('.frog')) {
                previousStone.appendChild(element);
                croak.play();
                checkWin(); 
            }
            else
            {
                if (previous_previousStone && previous_previousStone.classList.contains('stone')) {
                    if (!previous_previousStone.querySelector('.frog')) {
                        previous_previousStone.appendChild(element);
                        croak.play();
                        checkWin(); 
                    }
                }
            }
        }
}

function jumpR(element) {
    var currentStone = element.parentElement;
        var nextStone = currentStone.nextElementSibling;
        var next_nextStone = nextStone.nextElementSibling;
        if (nextStone && nextStone.classList.contains('stone')) {
            if (!nextStone.querySelector('.frog')) {
                nextStone.appendChild(element);
                croak.play();
                checkWin();
            }
            else
            {
                if (next_nextStone && next_nextStone.classList.contains('stone')) {
                    if (!next_nextStone.querySelector('.frog')) {
                        next_nextStone.appendChild(element);
                        croak.play();
                        checkWin();
                    }
                }
            }
        }
}


function checkWin() {
    var s1to3 = document.querySelectorAll('#s1, #s2, #s3');
    var s5to7 = document.querySelectorAll('#s5, #s6, #s7');
    var greenTransferred = false;
    var redTransferred = false;
    if (s1to3[0].querySelector('.green') && s1to3[1].querySelector('.green') && s1to3[2].querySelector('.green')) {
        greenTransferred = true;
    }
    if (s5to7[0].querySelector('.red') && s5to7[1].querySelector('.red') && s5to7[2].querySelector('.red')) {
        redTransferred = true;
    }

    if (greenTransferred && redTransferred) {
        var winstatement = document.getElementById('win');
              winstatement.innerHTML = "You Win!";
              var lol = document.getElementById('bounce');
              lol.innerHTML = "🎮";
    }
}