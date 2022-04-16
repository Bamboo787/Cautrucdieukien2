const step = 10;
document.getElementById('ball1').addEventListener('click',MoveToRight);
function MoveToRight() {
            let ball = document.querySelector('img');
            ball.style.left = parseInt(ball.style.left) + step + 'px';
        }
        document.getElementById('ball2').addEventListener('click',MoveToLeft);
        function MoveToLeft() {
            let ball = document.querySelector('img');
            ball.style.left = parseInt(ball.style.left) - step + 'px';
        }
        document.getElementById('ball3').addEventListener('click',MoveToUp);
        function MoveToUp() {
            let ball = document.querySelector('img');
            ball.style.top = parseInt(ball.style.top) - step + 'px';
        }
        document.getElementById('ball4').addEventListener('click',MoveToDown);
        function MoveToDown() {
            let ball = document.querySelector('img');
            ball.style.top = parseInt(ball.style.top) + step + 'px';
        }
        

        // window.addEventListener('keydown', control_ball);
        // function control_ball(event) {
        //     // alert(event.keyCode)
        //     switch (event.keyCode) {
        //         case 39: {
        //             let ball = document.getElementById('ball');
        //             if (parseInt(ball.style.left) + parseInt(ball.style.width) + step <= window.innerWidth) {
        //                 ball.style.left = parseInt(ball.style.left) + step + "px";
        //             }   
        //             break;
        //         }
        //         case 37: {
        //             let ball = document.getElementById('ball');
        //             if (parseInt(ball.style.left) - step >=0) {
        //                 ball.style.left = parseInt(ball.style.left) - step + "px";
        //             }
        //             break;
        //         }
        //         case 38: {
        //             let ball = document.getElementById('ball');
        //             if (parseInt(ball.style.left) + parseInt(ball.style.height) + step >=0) {
        //                 ball.style.top = parseInt(ball.style.top) - step + "px";
        //             }
        //             break;
        //         }
        //         case 40: {
        //             let ball = document.getElementById('ball');
        //             if (parseInt(ball.style.left) + parseInt(ball.style.height) + step <= window.innerHeight) {
        //                 ball.style.top = parseInt(ball.style.top) + step + "px";
        //             }
        //             break;
        //         }
        //     }
        // } 