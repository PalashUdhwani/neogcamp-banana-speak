var btntranslate = document.querySelector("#btn-translate");
var txtinp = document.querySelector("#txt-inp");

//read more on document 



function clickHandler() {
        //browser events 
        console.log("clicked");
        console.log("input",txtinp.value);
        
    };

//read more on syntax ...events

btntranslate.addEventListener("click",clickHandler())
