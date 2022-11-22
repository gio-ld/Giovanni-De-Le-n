document.getElementById("ejercicio1").style.display = "none";
document.getElementById("ejercicio2").style.display = "none";
document.getElementById("ejercicio3").style.display = "none";
document.getElementById("ejercicio4").style.display = "none";
document.getElementById("ejercicio5").style.display = "none";
vermenu();
function vermenu() {
  let menu = document.getElementById("menu").value;
  if (menu == "gt") {
    document.getElementById("ejercicio1").style.display = "block";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
  } else if (menu == "in") {
    document.getElementById("ejercicio2").style.display = "block";
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
  } else if (menu == "pb") {
    document.getElementById("ejercicio3").style.display = "block";
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
  } else if (menu == "sc") {
    document.getElementById("ejercicio4").style.display = "block";
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
  } else if (menu == "sz") {
    document.getElementById("ejercicio5").style.display = "block";
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
  } else if (menu == "h") {
    document.getElementById("ejercicio5").style.display = "none";
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
  }
}