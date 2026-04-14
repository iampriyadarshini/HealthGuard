function checkHealth() {
  document.getElementById("bp").value = "";
  document.getElementById("sugar").value = "";

  
 if (bp > 140 || sugar > 180) {
  document.getElementById("result").innerText = "⚠️ High Risk 🚨";
  document.getElementById("result").style.color = "red";
} else {
  document.getElementById("result").innerText = "✅ Normal";
  document.getElementById("result").style.color = "green";
}
}
