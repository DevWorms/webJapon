function openContent(evt, name) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(name).style.display = "block";

    evt.currentTarget.className += " active";
}

var url = document.location.toString();
if (url.match('#')) {
    document.getElementById(url.split('#')[1]).click();
} else {
    // Default Tab
    document.getElementById("defaultOpen").click();
}