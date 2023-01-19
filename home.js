// let locaction = "https://zomatoapi.onrender.com/location";
// let rest = "https://zomatoapi.onrender.com/restaurants?city=${cityId}"

// function getcity(){
    // alert('Hiiiiieeee')
//     fetch("https://zomatoapi.onrender.com/location",{method:"GET",})
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data)
//         data.map((item) =>{
//             let element = document.createElement('option') //to crate <option></option>
//             let text = document.createTextNode(item.state)//To Get The Value Of State
//             element.appendChild(text) // to get value In <option>Delhi</option>
//             element.value = item.state_id // to get value as selected in <option value = "1">Delhi</option>
//             document.getElementById('city').appendChild(element) //to get whole value in id="city" that is <select><option value="1">delhi</option></select>

//         })
//     })
// }

// const getcity = async() => {
//     let res = await fetch("https://zomatoapi.onrender.com/location", {method: "GET",})
//     let data = await res.json();
//     data.map((item) =>{
//         let element = document.createElement('option') ////to crate <option></option>
//         let text = document.createTextNode(item.state)////To Get The Value Of State
//         element.appendChild(text) //// to get value In <option>Delhi</option>
//         element.value = item.state_id // to get value as selected in <option value = "1">Delhi</option>
//         document.getElementById('city').appendChild(element)////to get whole value in id="city" that is <select><option value="1">delhi</option></select>

//     })
// }



async function getcity(){
    let res = await fetch("https://zomatoapi.onrender.com/location", {method: "GET",})
    let data = await res.json();
    data.map((item) =>{
        let element = document.createElement('option') ////to crate <option></option>
        let text = document.createTextNode(item.state)////To Get The Value Of State
        element.appendChild(text) //// to get value In <option>Delhi</option>
        element.value = item.state_id // to get value as selected in <option value = "1">Delhi</option>
        document.getElementById('city').appendChild(element)////to get whole value in id="city" that is <select><option value="1">delhi</option></select>

    })
}

// function getRest(){
//     let cityId = document.getElementById('city').value;
//     let rest = document.getElementById('restSelects');
//     while (rest.length > 0){
//         rest.remove(0)
//     }
//     fetch(`https://zomatoapi.onrender.com/restaurants?city=${cityId}`,{method:"Get",})
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data)
//         data.map((item) =>{
//             let element = document.createElement('option')
//             let text = document.createTextNode(`${item.restaurant_name}-${item.address}`);
//             element.appendChild(text)
//             rest.appendChild(element)
//         })
//     })
// }

function getRest(){
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelects');
    while(rest.length > 0 ){
        rest.remove(0)
    }
    fetch(`https://zomatoapi.onrender.com/restaurants?city=${cityId}`,{method: "GET",})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map((item) => {
            let element = document.createElement('option');
            let text = document.createTextNode(`${item.restaurant_name}-${item.address}`);
            element.appendChild(text)
            rest.appendChild(element)
        })
    })
}