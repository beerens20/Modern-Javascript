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
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemtoDOM(item));
    checkUI();
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
    
    // Check for edit mode
    if (isEditMode){
        const itemToEdit = itemList.querySelector('.edit-mode');
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    };

    //Create item DOM element
    addItemtoDOM(newItem);

    //Add item to local storage
    addItemToStorage(newItem);

    checkUI();
    itemInput.value = '';
};

// Add items to the DOM
function addItemtoDOM(item){
    // create list item
    const li = document.createElement('li');
    // put value from newItem into the li element
    li.appendChild(document.createTextNode(item));

    // call createButton function to create our button with the necessary classes
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemList.appendChild(li);
};

// Add items to localStorage
function addItemToStorage(item){
    //Create a placeholder variable
    let itemsFromStorage = getItemsFromStorage();

    // Add new item to array
    itemsFromStorage.push(item);

    //Convert updated array to a JSON string and set it back to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

// Get items from storage
function getItemsFromStorage(){
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
    }
    return itemsFromStorage;
};

// Allows different actions depending on what part of the LI is clicked
function onClickItem(e){
    // If the X is clicked on
    if (e.target.parentElement.classList.contains('remove-item')){
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
};

function setItemToEdit(item){
    isEditMode = true;
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"</i> Update Item';
    formBtn.style.backgroundColor = '#228b22';
    itemInput.value = item.textContent;
};

// Remove an item from the list
// the list item is passed in via the onClickItem function
function removeItem(item){
    if (confirm('Are you sure?')){
        // Remove item from DOM
        item.remove();

        //Remove item from storage
        removeItemFromStorage(item.textContent); // Call funtion using the text from the target LI
        checkUI();
    };
};

// Removes the item text from localStorage
function removeItemFromStorage(item){
    // Grab the current items in storage
    let itemsFromStorage = getItemsFromStorage();
    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Re-set to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

};

// clear all items
function clearItems(){
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    };
    // 5. Clear from localStorage
    localStorage.removeItem('items');
    checkUI();
};

// Filter bar functionality
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
    itemInput.value = '';
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
    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';
    isEditMode = false;
};

/* Create event listeners */
// Initialize App
function init(){
    itemForm.addEventListener('submit', onAddItemSubmit); // submit button
    itemList.addEventListener('click', onClickItem); // 1. enables actions when you click on an item
    clearBtn.addEventListener('click', clearItems); // clear all button
    itemFilter.addEventListener('input', filterItems) // filter items input
    document.addEventListener('DOMContentLoaded', displayItems); // display storage on page load
    checkUI();
    };

init();