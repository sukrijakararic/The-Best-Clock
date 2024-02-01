
const showTime = () => { // first we declare the function
    const today = new Date(); // we use new Date() to get todays date

    /* The variables below are basically pulling out the hours, minutes, and seconds from todays date from above. The variable ampm just specifies am or pm */
    let h = today.getHours(); 
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = "AM"

    // Here we make some changes to the time. When we run get.Hours, we get 24 hours. These if statements will convert that to am pm or 12am to 12pm.
    // so if h is equal to the hour 0, make h 12am.
    if (h == 0) {
        h = 12;
    }
    // and if h is greater than the hour 12, subtract 12. For example, if it is 13o'clock, it will subract 12 from 13 and make it 1PM.
    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    /* here we use ternerary if statements to make it so that there will always be two digits in the h,m,and s displayed sice js would only display one number if it can.
     instead of it just displaying 1 it would display 01.
    */
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    // her we put it all together and include the ":" between each h,m, and s
    let trueTime = h + ":" + m + ":" + s + " " + ampm;

    // here we inject it into our html doc
    document.getElementById("time"). innerHTML = trueTime;

    // here we call the built-in setTimeout function to run our function every second
    setTimeout(showTime, 1000)
}

// finally we call the function
showTime();