import axios from 'axios';

const root = document.getElementById("root");

function displayData(data){
    root.innerText = JSON.stringify(data);
}
axios.get("https://dog.ceo/api/breeds/image/random").then(response => displayData(response.data));

