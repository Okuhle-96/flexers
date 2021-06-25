//labels on the x-axis
var doctors = ["Dr Mendu", "Dr Odingwe", "Dr Sahzman", "Dr Michaelson"];
var doctor = ["Dr Mendu", "Dr Odingwe", "Dr Sahzman", "Dr Michaelson"];
// data on the y-axis
var fees = [500, 380, 350, 400];
fees.color = "pink";
var rates = [4.5, 2.3, 3.5, 5];
var ctx = document.getElementById("theGraph");
var ptx = document.getElementById("reviews");
var graph = new Chart(ctx, {
    type: 'bar',
    data: {
            labels: doctors,
            datasets: [
                {
                    data: fees,
                    label: "Doctors",
                    // backgroundColor: [
                    //     'rgba(255, 255, 247, 1)'
                    // ]
                }
            ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var alreadyExisting;
 if(localStorage['ratings']){
    alreadyExisting = JSON.parse(localStorage['ratings'])
 }
 var ratings = alreadyExisting || [];
function rateDocters() {
    const drRatings = ratings.reduce(function(map, rating){
        //  map = map1;
        if (!map[rating.doctor]) {
            map[rating.doctor] =  [] ;
        }
        map[rating.doctor].push(rating.rating);
        return map;
    }, {});
    return Object
        .keys(drRatings)
        .map(function(name) {
            const ratings = drRatings[name];
            const average = ratings.reduce((total, val) => {
                total += val;
                return total;
            }, 0)/ratings.length;
            return {
                name,
                average
            }
        });
}
const theRatings =  rateDocters(); //JSON.parse(localStorage['ratings']);
const doctorNames = theRatings.map(rating => rating.name)
const doctorRatings = theRatings.map(rating => rating.average)
var theGraph = new Chart(ptx, {
    type: 'bar',
    data: {
            labels: doctorNames,
            datasets: [
                {
                    data: doctorRatings,
                    label: "Doctors"
                }
            ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// Send a message to Athandile
















// sSlack needs your permission to enable notificati