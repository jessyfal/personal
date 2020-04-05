function up(scrollPos){
    let number  = ( Math.floor(scrollPos/window.innerHeight) + 2 ) * -1 + 1 - 1;
    let page = "#" + ancres[number];

    window.location.href = page;

    return false;
}

function down(scrollPos){
    let number  = Math.floor(scrollPos/window.innerHeight) * -1 + 1 - 1;
    if (number == 0){
        number++;
    }
    let page = "#" + ancres[number];
    
    window.location.href = page;
    
    return false;
}

var venue = true
// Initial state
var scrollPos = 0;
var ancres = ["profil", "enseignement", "experience", "competences", "langues", "interets"]
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if (venue){
    if ((document.body.getBoundingClientRect()).top > scrollPos)
		venue = up(scrollPos);
    else
        venue = down(scrollPos);
  }
  else{
      venue = true
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});
