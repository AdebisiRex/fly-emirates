//this is where I wrote all the dispaly functions

const DisplayC = document.getElementById('searchFlights');



function searchContinue(){
    
    document.getElementById('flip').className = "d-block"
    DisplayC.innerHTML = document.getElementById('afterContinue').innerHTML
}

function flightStatus(){
    document.getElementById('fs').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover seleT";
    DisplayC.innerHTML = document.getElementById('flightStatus').innerHTML
}
function browseNav(a){

    DisplayC.innerHTML = document.getElementById('beforeContinue').innerHTML;

    if(a == 1){
        document.getElementById('sf').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover";
        document.getElementById('wo').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
        document.getElementById('fs').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover"; 

        document.getElementById('mc').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover seleT";

        document.getElementById('flip').className = "d-block"
        DisplayC.innerHTML = document.getElementById('manageBooking').innerHTML

    }
    if(a == 2){
        document.getElementById('sf').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover";
        document.getElementById('mc').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
        document.getElementById('fs').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover"; 

        document.getElementById('wo').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover seleT";
        document.getElementById('flip').className = "d-block"
        DisplayC.innerHTML = document.getElementById('whatsOnYourFlight').innerHTML
    }
    if(a == 3){
        document.getElementById('sf').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover";
        document.getElementById('mc').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
        document.getElementById('wo').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
         
        document.getElementById('fs').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover seleT";
        DisplayC.innerHTML = document.getElementById('flightStatus').innerHTML
    }
    if(a==4){
        document.getElementById('mc').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
        document.getElementById('wo').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover ";
        document.getElementById('fs').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover"; 

        document.getElementById('sf').className = "col-md-3 col-6 border text-secondary fw-thin p-3 text-center sh-hover seleT";
        DisplayC.innerHTML = document.getElementById('beforeContinue').innerHTML;
    }

}

browseNav(4)

