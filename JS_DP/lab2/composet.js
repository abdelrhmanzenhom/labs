/* class Thing{
    display=()=>{

    }
    printPages=()=>{}
}

class Book extends Thing{
    constructor(pages){
        super()
        this.pages=pages

    }
display=()=>{
    console.log(``)
}
printPages=()=>{
    console.log(`number of pages: ${this.pages}`)
}
}
class Box extends Thing{
   constructor(pages){
        super()
        this.books=[];

    }
   addBook=(book)=>{
    this.books.push(book)
   } 
display=()=>{
    console.log(``)
}
printPages=()=>{
    console.log(`number of pages: ${this.pages}`)
}
} */
class Thing {
    display(indent = 0) {}
    printPages() {}
}

// Leaf class
class Book extends Thing {
    constructor(name, pages) {
        super();
        this.name = name;
        this.pages = pages;
    }

    display(indent = 0) {
        console.log(`${" ".repeat(indent)}📘 Book: ${this.name}`);
    }

    printPages() {
        return this.pages;
    }
}

// Composite class
class Box extends Thing {
    constructor(name) {
        super();
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    display(indent = 0) {
        console.log(`${" ".repeat(indent)}📦 Box: ${this.name}`);
        this.books.forEach(b => b.display(indent + 2));
    }

    printPages() {
        // Sum all pages inside the box (including inner boxes)
        return this.books.reduce((total, b) => total + b.printPages(), 0);
    }
}
// Create books
const b1 = new Book("JavaScript Basics", 200);
const b2 = new Book("Python Crash", 300);
const b3 = new Book("C# Advanced", 250);
const b4 = new Book("Java Core", 400);

// Create inner box
const smallBox = new Box("Small Box");
smallBox.addBook(b3);
smallBox.addBook(b4);

// Create main box
const mainBox = new Box("Main Box");
mainBox.addBook(b1);
mainBox.addBook(b2);
mainBox.addBook(smallBox);

// Show structure
mainBox.display(2);
console.log(`\n📄 Total pages in "${mainBox.name}": ${mainBox.printPages()}`);
