const step = 15;
const moveleft = 37;
const moveright = 39;
const moveup = 38;
const movedown = 40;

window.addEventListener('keydown', Control_nobita);
function Control_nobita(event) {
    //    alert(event.keyCode);
    switch (event.keyCode) {
        case (moveleft): {
            let a = document.getElementById('nobi');
            a.style.left = parseInt(a.style.left) - step + 'px';
            break;
        }
        case (moveright): {
            let a = document.getElementById('nobi');
            a.style.left = parseInt(a.style.left) + step + 'px';
            break;
        }
        case (moveup): {
            let a = document.getElementById('nobi');
            a.style.top = parseInt(a.style.top) - step + 'px';
            break;
        }
        case (movedown): {
            let a = document.getElementById('nobi');
            a.style.top = parseInt(a.style.top) + step + 'px';
            break;
        }
    }
}    