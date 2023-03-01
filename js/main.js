let inptSearch = document.querySelector("#inptSearch");

let temp = document.querySelector("#temp");
let dayOne = document.querySelector("#dayOne");
let sts = document.querySelector("#status");
let imgCloud = document.querySelector("#img-cloud");

let dayTwo = document.querySelector("#dayTwo");
let tempDayTwoMax = document.querySelector("#tempDayTwoMax");
let tempDayTwoMin = document.querySelector("#tempDayTwoMin");
let statusDayTwo = document.querySelector("#statusDayTwo");
let imgDayTwo = document.querySelector("#imgDayTwo");

let dayThree = document.querySelector("#dayThree");
let tempDayThreeMax = document.querySelector("#tempDayThreeMax");
let tempDayThreeMin = document.querySelector("#tempDayThreeMin");
let statusDayThree = document.querySelector("#statusDayThree");
let imgDayThree = document.querySelector("#imgDayThree");




async function getWether(cun){
    let myReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f8442f9925ae43b383b223509231902&q=${cun}&days=7`);
    let getData = await myReq.json();
    getNames();
    document.querySelector("#city").innerHTML = getData.location.name
    temp.innerHTML = getData.current.temp_c;
    sts.innerHTML = getData.current.condition.text
    imgCloud.setAttribute("src" , getData.current.condition.icon )
    
    function degresData(dayMax , dayMin , stus , img ,ind){
        
        dayMax.innerHTML = getData.forecast.forecastday[ind].day.maxtemp_c; 
        dayMin.innerHTML = getData.forecast.forecastday[ind].day.mintemp_c
        stus.innerHTML = getData.forecast.forecastday[ind].day.condition.text
        img.setAttribute("src" , getData.forecast.forecastday[ind].day.condition.icon);

    }

    degresData(tempDayTwoMax , tempDayTwoMin , statusDayTwo , imgDayTwo , 1 );
    degresData(tempDayThreeMax , tempDayThreeMin , statusDayThree , imgDayThree , 2 );
}
getWether("egypt")
inptSearch.oninput = () =>{
    getWether(inptSearch.value);
}


function getNames(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    dayOne.innerHTML = days[d.getDay()];
    dayTwo.innerHTML = days[d.getDay() + 1];
    dayThree.innerHTML = days[d.getDay() + 2];
    let nameMounth = d.toString().split(" ")[1];
    document.querySelector("#dayMounth").innerHTML = `${d.getDate()} ${nameMounth}`;
}



