function up(scrollPos) {
    var number  = ( Math.floor((scrollPos-200 )/window.innerHeight) + 2 ) * -1 + 1 - 1;
    if (number == -1)
        number = 0;

    var page = "#" + ancres[number];
    window.location.href = page;
}

function down(scrollPos) {
    var number  = Math.floor(scrollPos/window.innerHeight) * -1 + 1 - 1;
    if (number == 0)
        number++;
    var page = "#" + ancres[number];
    
    window.location.href = page;

    
}

function progressCursor(scrollPos){

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100 + "vw";
    document.documentElement.style.setProperty('--cursor-h', scrolled)

}

function openCroix(idOpen) {

    document.getElementById(idOpen).style.display = "grid"
    document.getElementById("cont-ex1").style.display = "none"
    document.getElementById("progress-bar").style.display = "none"


}

function closeCroix(idClose) {

    document.getElementById(idClose).style.display = "none"
    document.getElementById("cont-ex1").style.display = "initial"
    document.getElementById("progress-bar").style.display = "initial"

}

var points = 0;
var scrollPos = 0;
var ancres = ["profil", "enseignement", "experience", "competences", "langues"]


window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        if (points == 20){
            points++;
            up(scrollPos);
            points = -30
        }
        else
            points++
    }
    else{
        if (points == 20){
            points++;
            down(scrollPos);
            points = -30
        }
        else
            points++
        
    }
    scrollPos = (document.body.getBoundingClientRect()).top;

    progressCursor(scrollPos);


});
