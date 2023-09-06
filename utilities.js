console.log('Utilities...')
function animate() {
    ctx3.clearRect(0, 0, vw(100), vw(50))
    player1.draw();
    player1.update();
    requestAnimationFrame(animate);
}

animate();

//event listeners
//window.addEventListener('keydown', function(e){
//    keys = [];
//    keys[e.keyCode] = true;
//    if (keys[37] || keys[38] || keys[39] || keys[40])(
//        player1.jump();
//    )
//});