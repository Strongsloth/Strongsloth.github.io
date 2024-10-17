let kgValue;
let priceValue;
let markdownValue;
let currency="₱";

document.getElementById("submit").onclick = function () {
  kgValue = document.getElementById("kgInput").value;
  priceValue = document.getElementById("priceInput").value;
  markdownValue = document.getElementById("markdownInput").value;
  if (kgValue.trim() === "" || priceValue.trim() === ""){
    document.getElementById("Total").textContent = `Input Invalid. Try again`;
    return;
  }

  document.getElementById("Total").textContent = `${currency} ${((kgValue * priceValue) - markdownValue).toFixed(2)} `;
};

document.getElementById("Total").textContent = `${currency}0.00`;