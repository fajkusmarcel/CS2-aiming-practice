
let gameArea, circle, startTime, duration, score, totalTime, circleSize, speed, width, height;
let circlePosX, circlePosY, directionX, directionY, lastTime, gameEnded;
let isMouseOverCircle = false;
let movementType, aimingType;
let timeInterval;

function startGame() {
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;
    circleSize = document.getElementById('circleSize').value;
    speed = document.getElementById('speed').value;
    duration = document.getElementById('duration').value;
    movementType = document.getElementById('movementType').value;
    aimingType = document.getElementById('aimingType').value;
    let circleColor = document.getElementById('circleColor').value;

    gameArea = document.getElementById('gameArea');
    gameArea.style.width = width + 'px';
    gameArea.style.height = height + 'px';

    // Reset scores and clear any existing circle
    document.getElementById('currentScore').innerText = '0';
    document.getElementById('finalScore').innerText = '0';
    document.getElementById('currentTime').innerText = '0 s / ' + duration + ' s';
    if (circle) {
        gameArea.removeChild(circle);
    }

    circle = document.createElement('div');
    circle.id = 'circle';
    circle.style.width = circleSize + 'px';
    circle.style.height = circleSize + 'px';
    circle.style.backgroundColor = circleColor;
    gameArea.appendChild(circle);

    score = 0;
    totalTime = 0;
    startTime = performance.now();
    gameEnded = false;

    circlePosX = Math.random() * (width - circleSize);
    circlePosY = Math.random() * (height - circleSize);
    directionX = (Math.random() < 0.5 ? -1 : 1);
    directionY = (Math.random() < 0.5 ? -1 : 1);
    lastTime = performance.now();

    circle.style.left = circlePosX + 'px';
    circle.style.top = circlePosY + 'px';

    gameArea.onmousemove = null;
    gameArea.onclick = null;

    if (aimingType === 'hold') {
        gameArea.onmousemove = trackMouse;
    } else {
        gameArea.onclick = trackClick;
        gameArea.onmousemove = trackMouseForClickMode;  // Pøidání této øádky
    }

    if (movementType === 'smooth') {
        moveCircleSmooth();
    } else {
        moveCircleJump();
    }

    timeInterval = setInterval(updateTime, 100);

    setTimeout(endGame, duration * 1000);
}

function moveCircleSmooth() {
    if (gameEnded) return;

    let currentTime = performance.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    circlePosX += directionX * speed * deltaTime;
    circlePosY += directionY * speed * deltaTime;

    if (Math.random() < 0.02) directionX *= -1;
    if (Math.random() < 0.02) directionY *= -1;

    if (circlePosX <= 0 || circlePosX >= width - circleSize) directionX *= -1;
    if (circlePosY <= 0 || circlePosY >= height - circleSize) directionY *= -1;

    circle.style.left = circlePosX + 'px';
    circle.style.top = circlePosY + 'px';

    if (aimingType === 'hold' && isMouseOverCircle) {
        score += deltaTime;
    }
    totalTime += deltaTime;
    document.getElementById('currentScore').innerText = aimingType === 'hold' ? ((score / totalTime) * 100).toFixed(2) : score;

    requestAnimationFrame(moveCircleSmooth);
}

function moveCircleJump() {
    if (gameEnded) return;

    let currentTime = performance.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (deltaTime >= 1 / speed) {
        circlePosX = Math.random() * (width - circleSize);
        circlePosY = Math.random() * (height - circleSize);
        circle.style.left = circlePosX + 'px';
        circle.style.top = circlePosY + 'px';
        lastTime = currentTime;
    }

    if (aimingType === 'hold' && isMouseOverCircle) {
        score += deltaTime;
    }
    totalTime += deltaTime;
    document.getElementById('currentScore').innerText = aimingType === 'hold' ? ((score / totalTime) * 100).toFixed(2) : score;

    requestAnimationFrame(moveCircleJump);
}

function moveCircleJump() {
    if (gameEnded) return;

    let currentTime = performance.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    let interval = 10 / speed;  // Interval skoku v sekundách

    if (deltaTime >= interval) {
        circlePosX = Math.random() * (width - circleSize);
        circlePosY = Math.random() * (height - circleSize);
        circle.style.left = circlePosX + 'px';
        circle.style.top = circlePosY + 'px';
        lastTime = currentTime;  // Aktualizace lastTime pouze pøi skoku
    }

    if (aimingType === 'hold' && isMouseOverCircle) {
        score += deltaTime;
    }
    totalTime += deltaTime;
    document.getElementById('currentScore').innerText = aimingType === 'hold' ? ((score / totalTime) * 100).toFixed(2) : score;

    requestAnimationFrame(moveCircleJump);
}

function trackMouse(event) {
    let rect = gameArea.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    let circleX = parseFloat(circle.style.left);
    let circleY = parseFloat(circle.style.top);
    isMouseOverCircle = (mouseX >= circleX && mouseX <= circleX + parseFloat(circle.style.width) &&
                         mouseY >= circleY && mouseY <= circleY + parseFloat(circle.style.height));
    if (isMouseOverCircle) {
        circle.classList.add('crosshair');
    } else {
        circle.classList.remove('crosshair');
    }
}

function trackClick(event) {
    let rect = gameArea.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    let circleX = parseFloat(circle.style.left);
    let circleY = parseFloat(circle.style.top);
    isMouseOverCircle = (mouseX >= circleX && mouseX <= circleX + parseFloat(circle.style.width) &&
                         mouseY >= circleY && mouseY <= circleY + parseFloat(circle.style.height));
    if (isMouseOverCircle) {
        circle.classList.add('crosshair');
        score += 1;
    } else {
        circle.classList.remove('crosshair');
    }
    document.getElementById('currentScore').innerText = score;
}

function trackMouseForClickMode(event) {
    let rect = gameArea.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    let circleX = parseFloat(circle.style.left);
    let circleY = parseFloat(circle.style.top);
    isMouseOverCircle = (mouseX >= circleX && mouseX <= circleX + parseFloat(circle.style.width) &&
                         mouseY >= circleY && mouseY <= circleY + parseFloat(circle.style.height));
    if (isMouseOverCircle) {
        circle.classList.add('crosshair');
    } else {
        circle.classList.remove('crosshair');
    }
}

function updateTime() {
    if (gameEnded) return;
    let currentTime = (performance.now() - startTime) / 1000;
    document.getElementById('currentTime').innerText = currentTime.toFixed(1) + ' s / ' + duration + ' s';
}
function endGame(endTime) {
    if (gameEnded) return;  // Kontrola, zda již hra nebyla ukonèena

    let elapsedTime = (endTime - startTime) / 1000;  // Vypoèítání uplynulého èasu v sekundách
    if (elapsedTime < duration) {
        console.error(`endGame called too early: ${elapsedTime} seconds elapsed, expected ${duration} seconds.`);
        return;
    }

    gameEnded = true;
    gameArea.onmousemove = null;
    gameArea.onclick = null;
    clearInterval(timeInterval);
    if (circle) {
        gameArea.removeChild(circle);
        circle = null;
    }

    let finalScore;
    if (aimingType === 'hold') {
        finalScore = ((score / totalTime) * 100).toFixed(2) + '%';
        document.getElementById('finalScore').innerText = finalScore;
    } else {
        finalScore = score;
        document.getElementById('finalScore').innerText = finalScore;
    }

    updateHistory(finalScore);
}
/*
function endGameBACKUP() {
    console.log('End game')
    if (gameEnded) return;
    gameEnded = true;
    gameArea.onmousemove = null;
    gameArea.onclick = null;
    clearInterval(timeInterval);
    if (circle) {
        gameArea.removeChild(circle);
        circle = null;
    }

    let finalScore;
    if (aimingType === 'hold') {
        finalScore = ((score / totalTime) * 100).toFixed(2) + '%';
        document.getElementById('finalScore').innerText = finalScore;
    } else {
        finalScore = score;
        document.getElementById('finalScore').innerText = finalScore;
    }

    updateHistory(finalScore);
}
*/

function updateHistory(finalScore) {
    const historyList = document.getElementById('historyList');
    const newEntry = document.createElement('div');
    newEntry.innerText = `Game Type: ${movementType}, Aiming Type: ${aimingType}, Circle Size: ${circleSize}px, Speed: ${speed}px/s, Score: ${finalScore}`;
    historyList.insertBefore(newEntry, historyList.firstChild);
}
function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}

