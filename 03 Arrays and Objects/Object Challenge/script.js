// Create library array consisting of 3 book objects
const library = [
    {
        title: 'Book 1',
        author: 'John Doe',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book 2',
        author: 'Jane Doe',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book 3',
        author: 'None Ya',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }  
]

// set all read values to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// destructure the title from the first book and rename the variable to firstBook
const { title: firstBook } = library[0];
console.log(firstBook);

// turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

console.log(library);