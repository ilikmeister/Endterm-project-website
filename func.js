// registration

const email = document.getElementById('email');
const password = document.getElementById('password');
const password_repeat = document.getElementById('password_repeat');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password_repeatValue = password_repeat.value.trim();

    if (emailValue === '') {
        errorMessage(email, 'The line cannot be empty');
    } else if (!isEmail(emailValue)) {
        errorMessage(email, 'Email is invalid');
    } else {
        return true;
    }

    if (passwordValue === '') {
        errorMessage(password, 'The line cannot be empty');
    } else if (!isPassword(passwordValue)) {

    } else {
        return true;
    }

    if (password_repeatValue === '') {
        errorMessage(password_repeat, 'The line cannot be empty');
    } else if (passwordValue !== password_repeatValue) {
        errorMessage(password_repeat, 'Passwords do not match');
    } else {
        errorMessage(password_repeat);
    }
}

function errorMessage(input, message) {
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function isEmail(email) {
    return /[\w-\.]+@+(gmail.com|yandex.ru|yahoo.com|mail.ru|outlook.com)/gi.test(email);
}

function isPassword(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}/gi.test(password);
}

// sending the data

function postRequest() {
    var http = new XMLHttpRequest();

    var user_email = email.value;
    var user_password = password.value;

    var userObj = {
        email: user_email,
        password: user_password
    }

    http.open("POST", 'https://my-json-server.typicode.com/ilikmeister/mockjson/posts', false);

    http.onreadystatechange = function () {
        console.log(http.status);
        if (http.readyState === 4 && http.status === 201) {
            window.alert("You were successfully registered!");
        }
    }

    var data = JSON.stringify(user);
    http.send(data);
}

// check the registered user during sign in

function getRequest() {
    var http = new XMLHttpRequest();

    var user_email = email.value;
    var user_password = password.value;

    var userObj = {
        email: user_email,
        password: user_password
    }

    var postsObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/posts', false);
    var json = JSON.parse(postsObj);

    if (userObj.email == json.email && userObj.password == json.password) {
        return true;
    } else {
        window.alert("Your input is incorrect");
        return false;
    }
    
}

// searching for car models

function getCar() {
    const car = document.getElementById('car');

    var http = new XMLHttpRequest();

    var toyotaObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/toyota', false);
    var json1 = JSON.parse(toyotaObj);

    var lexusObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/lexus', false);
    var json2 = JSON.parse(lexusObj);

    var bmwObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/bmw', false);
    var json3 = JSON.parse(bmwObj);

    var kiaObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/kia', false);
    var json4 = JSON.parse(kiaObj);

    var mercedesObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/mockjson/mercedes', false);
    var json5 = JSON.parse(mercedesObj);

    if (car.value == "Toyota" || car.value == "toyota") {
        document.getElementById("car_text").innerHTML == json1;
    }

    if (car.value == "Lexus" || car.value == "lexus") {
        document.getElementById("car_text").innerHTML == json2;
    }

    if (car.value == "BMW" || car.value == "bmw") {
        document.getElementById("car_text").innerHTML == json3;
    }

    if (car.value == "Kia" || car.value == "kia") {
        document.getElementById("car_text").innerHTML == json4;
    }

    if (car.value == "Mercedes" || car.value == "mercedes") {
        document.getElementById("car_text").innerHTML == json5;
    }

    return document.getElementById("car_text").innerHTML;
}