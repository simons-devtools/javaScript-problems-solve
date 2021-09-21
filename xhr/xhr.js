const objectData = {
  name: "Mr. Simon Hembrom",
  age: 24,
  title: "Web Developer",
  sallary: 50000,
  phone: "(+880) 17xxxxxxxx",
  email: "user123@gmail.com",
};

// Varialbes declearation:
const postUrl = "https://jsonplaceholder.typicode.com/posts";
const getUrl = "https://jsonplaceholder.typicode.com/posts/1";

const getButton = document.getElementById("get-button");
const sendButton = document.getElementById("send-button");

// Send the Request func:
const sendRequest = function (method, url, data) {
  const promise = new Promise((resolve, reject) => {
    // request
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);

    // response
    xhr.onload = () => {
      resolve(xhr.response);
    };
  });
  return promise;
};

// post the data func:
const sendData = function () {
  const postData = JSON.stringify(objectData);
  sendRequest("POST", postUrl, postData).then((responseData) => {
    console.log(responseData);
  });
};

// Get the data func:
const getData = () => {
  sendRequest("GET", getUrl).then((responseData) => {
    console.log(responseData);
  });
};

// Add eventListener:
getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
