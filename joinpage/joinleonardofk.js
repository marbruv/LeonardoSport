
  var nextStep = document.getElementById("submit");
  nextStep.addEventListener('click', function(evt){
    evt.preventDefault();
    document.getElementById('form_id').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';
})

