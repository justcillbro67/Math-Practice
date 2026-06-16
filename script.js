function handleInput() {
  const raw = document.getElementById('query').value;
  const result = document.getElementById('result');

  const num = parseFloat(raw);

  if (!raw || isNaN(num)) {
    result.innerHTML = `<p class="error">Please select a number first.</p>`;
    return;
  }

  let html = `<div class="table-title">Multiplication Table of ${num}</div><div class="table-grid">`;
  for (let i = 1; i <= 20; i++) {
    html += `
      <div class="row">
        <span>${num} × ${i}</span>
        <span class="eq">=</span>
        <span class="ans">${num * i}</span>
      </div>`;
  }
  html += '</div>';
  result.innerHTML = html;
}

function extractNumber(text) {
  const match = text.match(/\d+(\.\d+)?/);
  if (match) return parseFloat(match[0]);
  const words = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10,
                  eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15 };
  const lower = text.toLowerCase();
  for (const [word, val] of Object.entries(words)) {
    if (lower.includes(word)) return val;
  }
  return null;
}
