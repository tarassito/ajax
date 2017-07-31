document.getElementById('loaded').innerHTML =
  (new Date()).toLocaleTimeString();
  
//document.getElementById('btn-get-data').addEventListener('click', getData);

setInterval(getData, 5000);


function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.gender === "male"){
            document.getElementById('gender').innerHTML = "Mister";}
            else document.getElementById('gender').innerHTML = "Miss";
            
            document.getElementById('name').innerHTML = data.name;
            document.getElementById('address').innerHTML = data.address;
            document.getElementById('salary').innerHTML = data.salary;
        }
    }
    const url = 'data.json?t=' + Math.random();
    xhr.open('get', 'data.json', true);
    xhr.send();
}
