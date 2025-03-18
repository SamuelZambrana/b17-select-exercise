import "./scss/style.scss";

console.log("test");

/*
 <select name="select">
   <option value="value1">Value 1</option>
   <option value="value2" selected>Value 2</option>
   <option value="value3">Value 3</option>
 </select>
 */

function colorSelect() {
    const appElement = document.querySelector('#app');
    const selectElement = document.createElement('select');
    selectElement.setAttribute('name', 'select');
    
    ['Red', 'Blue', 'Green'].forEach(color =>{
        const optionColorElement = document.createElement('option')
        optionColorElement.setAttribute('value', color.toLowerCase())
        optionColorElement.textContent = color
        selectElement.appendChild(optionColorElement)
    })

    appElement.appendChild(selectElement)
}

colorSelect()