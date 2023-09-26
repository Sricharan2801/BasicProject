// const foodData = require("./food.json");



const tableData = document.querySelector("tbody");

const contents = document.getElementById("contents");


let firstLoad = true;

window.onload = function () {
    fetchData();
    firstLoad = false;
};

let foodData;

const fetchData = async () => {
    try {

        const response = await fetch("./food.json")
        foodData = await response.json();
        loadData(foodData);
    }
    catch (error) {
        console.error("Error loading data: ", error);

    }
};

const loadData = (data) => {
    let sr = 1;

    const tData = data.map((item) =>

        `
        <tr> 
     
        <td> ${sr++} </td>
        <td> ${item.foodname} </td>

        <td> ${item.calorie}</td>
        <td> ${item.category} </td>

        <td> ${item.protiens}</td>
        <td> ${item.cab}</td>
      
        `
    ).join("");

    tableData.innerHTML = tData;
};




const foodItems = (data) => {

    if (!data) {
        loadData(foodData);
    }

    else {
        loadData(foodData.filter(item => item.category === data))
    }

}


const calorieSort = (data) => {

    if (data === "above100") {
        loadData(foodData.filter(item => item.calorie > 100))
    }

    else if (data === 'below100') {
        loadData(foodData.filter(item => item.calorie < 100))
        l
    }
}




const pro_cab_sort = (data) => {


    if (data === "protien") {
        loadData(foodData.sort((a, b) => b.protiens - a.protiens))
    }

    else if (data === "cab") {
        loadData(foodData.sort((a, b) => a.cab - b.cab))
    }
}

window.loadData = loadData;
window.foodItem = foodItem;
window.calorieSort = calorieSort;
window.pro_cab_sort = pro_cab_sort;