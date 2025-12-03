function calculate() {
  let P = parseFloat(document.getElementById("principal").value);
  let R = parseFloat(document.getElementById("rate").value);
  let T = parseFloat(document.getElementById("time").value);
  let type = document.getElementById("type").value;
  let N = parseInt(document.getElementById("frequency").value);

  if (!P || !R || !T) {
    alert("Please fill all fields");
    return;
  }

  let interest = 0;
  let total = 0;

  if (type === "simple") {
    interest = (P * R * T) / 100;
    total = P + interest;
  } else {
    total = P * Math.pow((1 + R / (100 * N)), (N * T));
    interest = total - P;
  }

  document.getElementById("interest").innerText = "₹ " + interest.toFixed(2);
  document.getElementById("total").innerText = "₹ " + total.toFixed(2);
}
