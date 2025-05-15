
function convert() {
    const c = parseFloat(document.getElementById("celsius").value);
    const f = (c * 9/5) + 32;
    document.getElementById("result").innerText = `${c}°C = ${f.toFixed(1)}°F`;
  }
  