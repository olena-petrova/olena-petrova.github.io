document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "block";
    } else {
        document.getElementById("kirjautumis_lomake").style.display = "block";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
    }
}

function kirjaudu() {
    const nimi = document.getElementById("nimi").value.trim();
    if (nimi) {
        localStorage.setItem("nimi", nimi);
        localStorage.setItem("kirjautunut", "kylla");
    } else {
        alert("Syötä Nimesi");
    }
}

function kirjauduUlos() {
    localStorage.clear();
    document.getElementById("tervetulo_teksti").textContent = "Tervetuloa ";
    onkoKirjautunut();
}