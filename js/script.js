function navbarClickedOn(divString){
    switch (divString) {
        case 'about':
            showDiv(document.getElementById('bio'));
            break;
        case 'education':
            showDiv(document.getElementById('education'));
            break;
        case 'experience':
            showDiv(document.getElementById('experience'));
            break;
        case 'projects':
            showDiv(document.getElementById('projects'));
            break;
        default:
            break;
    }
}

shownDiv = document.getElementById('bio')

function showDiv(div){
    $(shownDiv).fadeOut(300, function(){
        shownDiv.style.display='none'
        shownDiv = div;
        $(div).fadeIn(300);
    })
}