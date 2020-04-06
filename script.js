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
    var max = window.scrollMaxY;

    var pourcentage = scrollPos * -1 / max * 100 + "vh"
    print(pourcentage)
    document.documentElement.style.setProperty('--h', pourcentage)

}

var points = 0;
var scrollPos = 0;
var ancres = ["profil", "enseignement", "experience", "competences", "langues", "interets"]


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
