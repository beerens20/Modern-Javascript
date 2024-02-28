//TODO Add items to list via form
//TODO Remove items from list by clicking the "X" button
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


/* Create eventListener functions */
function addItem(e){
    // prevent form submission to submitting to a file
    e.preventDefault();

    // take the value of the input when submitted and put it in a variable
    const newItem = itemInput.value;

    // validate input
    if (newItem === ''){
        alert('Please add an item');
        return;
    }
    // create list item
    const li = document.createElement('li');
    // put value from newItem into the li element
    li.appendChild(document.createTextNode(newItem));
    console.log(li);

    // call createButton function to create our button with the necessary classes
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';
}

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

/* Create event listeners */
// form submit button
itemForm.addEventListener('submit', addItem);