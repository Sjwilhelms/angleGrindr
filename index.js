// to change the text of the mode selector... more functionality to follow sjw 17.09.24
const modeSelector = document.getElementById("modeSelector");

modeSelector.addEventListener("click", event => {
    if(modeSelector.textContent === "Search mode"){
        modeSelector.textContent = "Browse mode";
    }
    else{
        modeSelector.textContent = "Search mode";
    }
    });


