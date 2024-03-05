//TODO Clear all items with "clear" button
//TODO Filter the items by typing in the filter field
//TODO Add localStorage to persist items
//TODO Click on an item to put into "edit mode" and add to form
//TODO Update item
//TODO Deploy to netlify

// Bring in all of the things we will ned for global funcionality
/* Grab form elements */
// id of the form container
const itemForm = document.getElementById('item-form');
// id of the input field
const itemInput = document.getElementById('item-input');
// id ul for the list of items
const itemList = document.getElementById('item-list');
// id for the clear button
const clearBtn = document.getElementById('clear');
// id for filter field
const itemFilter = document.getElementById('filter');

/* Create eventListener functions */
function onAddItemSubmit(e){
    // prevent form submission to submitting to a file
    e.preventDefault();

    // take the value of the input when submitted and put it in a variable
    const newItem = itemInput.value;

    // validate input
    if (newItem === ''){
        alert('Please add an item');
        return;
    }
    
    //Create item DOM element
    addItemtoDOM(newItem);

    //Add item to local storage
    addItemToStorage(newItem);

    checkUI();
    itemInput.value = '';
}



function addItemtoDOM(item){
    // create list item
    const li = document.createElement('li');
    // put value from newItem into the li element
    li.appendChild(document.createTextNode(item));
    console.log(li);

    // call createButton function to create our button with the necessary classes
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemList.appendChild(li);
};

function addItemToStorage(item){
    //Create a placeholder variable
    let itemsFromStorage;

    //Check to see if there are already items in localStorage
    if (localStorage.getItem('items') === null){
        //If localStorage is empty set itemsFromStorage to an empty array
        itemsFromStorage = [];
    }else {
        //If localStorage is NOT empty parse localStorage back into an array
        //and put new item into the array
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    };
    itemsFromStorage.push(item);

    //Convert updated array to a JSON string and set it back to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    // append icon
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
};

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
};

function removeItem(e){
    // target the parent element of the x icon using class on the button
    if (e.target.parentElement.classList.contains('remove-item')){
        if (confirm('Are you sure?')){
        // target the x -> button -> li then remove it
        e.target.parentElement.parentElement.remove();
        checkUI();
        }
    }
};

function clearItems(){
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    };
    checkUI();
};

function filterItems(e){
    // captures all li's in itemList (creates node list (array))
    const items = itemList.querySelectorAll('li');
    //capture text being typed
    const text = e.target.value.toLowerCase();

    //Loop through items node list (which is an array)
    items.forEach(item => {
        //Return the first child of the item element which is the text node
        const itemName = item.firstChild.textContent.toLowerCase();

        //Match the filter input to the list items
        if (itemName.indexOf(text) != -1){
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    
};

// Clear UI state (hide filter and clear button when list is empty)
function checkUI(){
    // captures all li's in itemList (creates node list (array))
    const items = itemList.querySelectorAll('li');
    if (items.length === 0){
        // no items in list
        clearBtn.style.display = 'none'; //hide clear button
        itemFilter.style.display = 'none'; //hide filter input
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
};

/* Create event listeners */
// form submit button
itemForm.addEventListener('submit', onAddItemSubmit);

// delete item event listener (target UL for event delegation)
itemList.addEventListener('click', removeItem);

// clear all items
clearBtn.addEventListener('click', clearItems);

// filter list items
itemFilter.addEventListener('input', filterItems)

// check UI when page loads
checkUI();