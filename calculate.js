



function calcTriangleArea() {
    const a = document.getElementById('triangle-input-a');
    const b = document.getElementById('triangle-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value) * 0.5;
    const Ans = document.getElementById('tAns');
    Ans.innerText = area;


}


function calcRectangleArea() {
    const a = document.getElementById('rectangle-input-a');
    const b = document.getElementById('rectangle-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value);
    const Ans = document.getElementById('rAns');
    Ans.innerText = area;


}
function calcParallelogram() {
    const a = document.getElementById('parallelogram-input-a');
    const b = document.getElementById('parallelogram-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value);
    const Ans = document.getElementById('pAns');
    Ans.innerText = area;


}

function calcRhombusArea() {
    const a = document.getElementById('rhombus-input-a');
    const b = document.getElementById('rhombus-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value) * 0.5;
    const Ans = document.getElementById('rhAns');
    Ans.innerText = area;


}

function calcPentagonArea() {
    const a = document.getElementById('pentagon-input-a');
    const b = document.getElementById('pentagon-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value) * 0.5;
    const Ans = document.getElementById('pnAns');
    Ans.innerText = area;


}
function calcEllipseArea() {
    const a = document.getElementById('ellipse-input-a');
    const b = document.getElementById('ellipse-input-b');
    const area = parseFloat(a.value) * parseFloat(b.value) * 3.141;
    const Ans = document.getElementById('eAns');
    Ans.innerText = area;


}