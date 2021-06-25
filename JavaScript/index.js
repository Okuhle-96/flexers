var formNumberEl = document.querySelector(".formNo");
var nameElement = document.querySelector(".name");
var ageElement = document.querySelector(".age");
var numberElement = document.querySelector(".number");
var emailEleement = document.querySelector(".email");
var dateElement = document.querySelector(".date");
var reasonElement = document.querySelector(".reason");
var addAppElement = document.querySelector(".button");
var headerElement = document.querySelector(".header")

var error = document.querySelector('.error');
var success = document.querySelector('.success');

var appointments = [];

function bookAppointments(){

  var name = nameElement.value;
  var email = emailEleement.value;
  var age = ageElement.value;
  var number = numberElement.value;
  
  if(name == "" || email == "" || age == "" || number == ""){
      alert("Please fill the appropriate fields");
  }else {
      alert("Hi " + name + " your appointement has been scheduled for " + dateElement)
  }
}

addAppElement.addEventListener('click', bookAppointments)



