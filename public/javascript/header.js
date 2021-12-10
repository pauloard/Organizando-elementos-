/* Capturo los elementos del DOM */
let main1 = document.getElementById("main-1");
let main2 = document.getElementById("main-2");
let banner = document.getElementById("banner");

function dropLogin(){    
    if (main1.style.display === "block") {
        main1.style.display = "none";
        banner.style.display = "none";
        main2.style.display = "block";
    } else {
        main1.style.display = "block";
        banner.style.display = "block";
        main2.style.display = "none";
    }
}