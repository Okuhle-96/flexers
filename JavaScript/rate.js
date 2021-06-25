
var inputElement = document.querySelector(".rate");
var doctorInputRElem = document.querySelector(".docRate");
var submitButton = document.querySelector(".reviewButton");
var doctorName = document.querySelector(".doctorNames");
var alreadyExisting;
 if(localStorage['ratings']){
    alreadyExisting = JSON.parse(localStorage['ratings'])
 }
 var ratings = alreadyExisting || [];
console.log(ratings +"xvcvccvcv");
function ratingEvent() {
    var rating = Number(document.querySelector("input[type='radio']:checked").value);
    // alert(selectAll.value)
    ratings.push({
        doctor: doctorName.value,
        rating
    })
    // console.log(rateDocters())
    
    localStorage.setItem("ratings", JSON.stringify(ratings))
    alert("Thank you for your feedback!")

    

    doctorName.value = "";
}
submitButton.addEventListener('click', ratingEvent)