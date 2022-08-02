const startSchool = '28 Sept 2022'

const daysText = document.getElementById('days')
const hoursText = document.getElementById('hours')
const minutesText = document.getElementById('minutes')
const secondsText = document.getElementById('seconds')


function countDown () {
    const startSchoolDate = new Date(startSchool)
    const currentDate = new Date()

    //console.log(startSchoolDate - currentDate)
    //Prostia asta e in miliseconds

    // Store the number of milisecond
    let miliseconds = startSchoolDate - currentDate

    // convert in days
    const days = Math.floor(miliseconds / 1000 / 60 / 60 / 24)
    miliseconds = miliseconds - (days * 24 * 60 * 60 * 1000)

    // convert in hours
    const hours = Math.floor(miliseconds / 1000 / 60 / 60)
    miliseconds = miliseconds - (hours * 60 * 60 * 1000)

    // conert in minutes
    const minutes = Math.floor(miliseconds / 1000 / 60)
    miliseconds = miliseconds - (minutes * 60 * 1000)

    // convert in seconds
    const seconds = Math.floor(miliseconds / 1000)
    
    daysText.innerText = days;
    hoursText.innerText = hours;
    minutesText.innerText = minutes;
    secondsText.innerText = seconds;

    // Repeat the procces
    setTimeout(countDown, 1000)
}

countDown()
