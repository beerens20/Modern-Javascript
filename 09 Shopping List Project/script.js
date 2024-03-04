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

    // Add li to the DOM
    itemList.appendChild(li);
    checkUI();
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
itemForm.addEventListener('submit', addItem);

// delete item event listener (target UL for event delegation)
itemList.addEventListener('click', removeItem);

// clear all items
clearBtn.addEventListener('click', clearItems);

// check UI when page loads
checkUI();