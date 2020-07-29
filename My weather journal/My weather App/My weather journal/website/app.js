// personal Web API
const baseUrl='http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey='&appid=57d8704d83b47e11e5115af0dc5cff52';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
//creatin function to get data from the api
function performAction() {
    console.log("click");
    let userResponse = document.getElementById('feelings').value;
    let zipcode = document.getElementById('zip').value;
    if (zipcode && feelings) {
        let urlConstruct = baseUrl + zipcode.toString() + apiKey;
        console.log(urlConstruct);
        getweatherApi(urlConstruct)
        .then(function(data){
            if (data.cod == 200) {
                let date = new Date(data.dt * 1000)
                let date_str = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
                postData('/addWeatherData', {date: date_str, temp: data.main.temp, content: userResponse})
                // Updare your UI
            } else {
                console.log("Something went wrong");
            }
        }, reason => {
            console.error(reason);
        })
    }
};

/* Function to GET Web API Data*/
const getweatherApi = async ( url = '') =>{ 

    const res = await fetch(url);

    try {
        // Transform into JSON
        let data = await res.json()
        return data;
        
    }
    catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
};


/* Function to POST data */
// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(`${baseUrl}?zip=${zip}&units=metric&APPID=${apiKey}`, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        let newData = await response.json();
    }catch(error) {
        console.log("error", error);
    }
};
/* Function to GET Project Data */
const updateUI = async ( ) => {

    const request = await fetch('/all');

    try {
        const weatherData = await request.json();
        console.log(weatherData)
        document.getElementById('date').innerHTML = weatherData[0].date;
        document.getElementById('temp').innerHTML = weatherData[0].temp;
        document.getElementById('content').innerHTML = weatherData[0].feeling;
    } catch(error) {
        console.log('error', error);
    }
}
