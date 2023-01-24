var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radious = canvas.height / 2;
ctx.translate(radious, radious);
radious = radious * 0.90;
drawClock()
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radious);
    drawNumber(ctx, radious);
    drawTime(ctx, radious)
}

function drawFace(ctx, radious) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radious, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radious * 0.95, 0, 0, radious * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, '#fff');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radious * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radious * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumber(ctx, radious) {
    var ang;
    var num;
    ctx.font = radious * 0.15 + 'px arial';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radious * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radious * 0.85);
        ctx.rotate(-ang)
    }
}

function drawTime(ctx, radious) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radious * 0.5, radious * 0.07);
    // minutes
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radious * 0.8, radious * 0.05);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radious * 0.9, radious * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}