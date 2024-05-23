//prosessoinmuuttujien luominen
const panels = document.querySelectorAll('.panel');

//luo tapahtumakäsittelijä
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();                 //funktion kutsuminen
        panel.classList.add('active');         //painetun painikkeen aktiivinen tila
    })
})

//funktio, joka poistu aktiivinen tila, jos painat joku muu kuva
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}