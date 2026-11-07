const calculator = document.querySelector('#calculator-form');
const money = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

function getNumber(id) {
  return Math.max(0, Number(document.querySelector(`#${id}`).value) || 0);
}

function calculate() {
  const starting = getNumber('starting-balance');
  const monthly = getNumber('monthly-contribution');
  const annualRate = Number(document.querySelector('#annual-return').value) || 0;
  const years = Math.min(60, Math.max(1, Math.round(getNumber('years'))));
  const monthlyRate = annualRate / 100 / 12;
  let balance = starting;
  const points = [{ year: 0, balance }];
  for (let month = 1; month <= years * 12; month += 1) {
    balance = balance * (1 + monthlyRate) + monthly;
    if (month % 12 === 0) points.push({ year: month / 12, balance });
  }
  const contributions = starting + monthly * years * 12;
  document.querySelector('#projected-value').textContent = money.format(balance);
  document.querySelector('#contributions-value').textContent = money.format(contributions);
  document.querySelector('#growth-value').textContent = money.format(balance - contributions);
  document.querySelector('#projection-summary').textContent = `After ${years} year${years === 1 ? '' : 's'}, assuming a ${annualRate}% annual return.`;
  drawChart(points, contributions, balance);
}

function drawChart(points, contributions, endValue) {
  const canvas = document.querySelector('#growth-chart'); const context = canvas.getContext('2d');
  const width = canvas.clientWidth; const height = canvas.clientHeight; const scale = window.devicePixelRatio || 1;
  canvas.width = width * scale; canvas.height = height * scale; context.scale(scale, scale); context.clearRect(0, 0, width, height);
  const padding = { top: 24, right: 16, bottom: 34, left: 12 }; const graphWidth = width - padding.left - padding.right; const graphHeight = height - padding.top - padding.bottom;
  const max = Math.max(...points.map((point) => point.balance), contributions, 1) * 1.08;
  context.strokeStyle = '#d7d6cd'; context.lineWidth = 1; context.font = '10px DM Mono, monospace'; context.fillStyle = '#657069';
  for (let row = 0; row <= 3; row += 1) { const y = padding.top + graphHeight * row / 3; context.beginPath(); context.moveTo(padding.left, y); context.lineTo(width - padding.right, y); context.stroke(); if (row < 3) context.fillText(money.format(max * (1 - row / 3)), padding.left, y - 6); }
  const x = (point) => padding.left + graphWidth * point.year / points[points.length - 1].year; const y = (point) => padding.top + graphHeight - graphHeight * point.balance / max;
  context.beginPath(); points.forEach((point, index) => index ? context.lineTo(x(point), y(point)) : context.moveTo(x(point), y(point))); context.lineTo(x(points[points.length - 1]), padding.top + graphHeight); context.lineTo(padding.left, padding.top + graphHeight); context.closePath(); context.fillStyle = 'rgba(214, 233, 74, .48)'; context.fill();
  context.beginPath(); points.forEach((point, index) => index ? context.lineTo(x(point), y(point)) : context.moveTo(x(point), y(point))); context.strokeStyle = '#18201c'; context.lineWidth = 2.5; context.stroke();
  context.fillStyle = '#18201c'; context.beginPath(); context.arc(x(points[points.length - 1]), y(points[points.length - 1]), 4, 0, Math.PI * 2); context.fill();
  [points[0], points[Math.floor((points.length - 1) / 2)], points[points.length - 1]].forEach((point) => context.fillText(point.year === 0 ? 'Today' : `Year ${point.year}`, x(point) - 10, height - 10));
}

calculator.addEventListener('submit', (event) => { event.preventDefault(); calculate(); });
calculator.querySelectorAll('input').forEach((input) => input.addEventListener('input', calculate));
addEventListener('resize', calculate); calculate();

