let score = prompt("Enter your obtained Exam Score ::");

if (score < 0 || score > 100) {
  document.getElementById("demo").innerHTML = "INVALID";
} else if (score >= 90 && score <= 100) {
  document.getElementById("demo").innerHTML = "A+ grade";
} else if (score >= 80 && score <= 89) {
  document.getElementById("demo").innerHTML = "A grade";
} else if (score >= 70 && score <= 79) {
  document.getElementById("demo").innerHTML = "B grade";
} else if (score >= 60 && score <= 69) {
  document.getElementById("demo").innerHTML = "C grade";
} else if (score >= 50 && score <= 59) {
  document.getElementById("demo").innerHTML = "D grade";
} else {
  document.getElementById("demo").innerHTML = "F grade";
}
