// Method 1 - listen to window
// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
//     `;
// })

// Method 2
function showKeyCodes(e){
    // assign the #insert div to a const for access
    const insert = document.getElementById('insert');
    // clear the existing page in preperation for new divs
    insert.innerHTML = '';

    // create an object containing the dynmaic data we want to include 
    // in the new divs
    const keyCodes = {
        'e-key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    // loop through every element in the keyCodes object
    for(let key in keyCodes){
    // create a new div and assign it to a const
        const div = document.createElement('div');
    // set the class of the new div to .key
        div.className = 'key';
    // create the small element to be placed in the div
        const small = document.createElement('small');
    
    // Assigning the key:value pair to new text nodes
        // grab the key property from the object and assign it to keyText
        const keyText = document.createTextNode(key);
        // grab the corresponding value and assign it to keyValue
        const keyValue = document.createTextNode(keyCodes[key]);
        
    // Creating the new div with the dynamic info
        // place the keyText inside small tags
        small.appendChild(keyText);
        // place the keyValue inside the div
        div.appendChild(keyValue);
        // place the small element inside the div
        div.appendChild(small);

    // place the new div into the #insert div
        insert.appendChild(div);
    }
};

// Listen to the window for key presses
window.addEventListener('keydown', showKeyCodes);