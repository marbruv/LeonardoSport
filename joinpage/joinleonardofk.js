
var nextStep = document.getElementById("submit");

nextStep.addEventListener('click', function(evt){ /* henter inn takk melding */
    evt.preventDefault();
    document.getElementById('form_id').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';
})

const closeBtn = document.getElementById("close");

closeBtn.onclick = function() { /* sender brukeren tilbake til hovedsiden etter registrering */
  location.href = "../homepage.html";
};

