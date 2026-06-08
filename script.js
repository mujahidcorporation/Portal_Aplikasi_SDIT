function bukaAplikasi(url){
    document.querySelector(".container").style.display = "none";
    document.getElementById("viewer").style.display = "flex";

    // IMPORTANT: paksa reload clean URL
    document.getElementById("frame").src = "about:blank";

    setTimeout(()=>{
        document.getElementById("frame").src = url;
    },100);
}

function kembaliMenu(){
    document.querySelector(".container").style.display = "block";
    document.getElementById("viewer").style.display = "none";
    document.getElementById("frame").src = "";
}