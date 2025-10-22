
class Document {
    constructor(header, footer, pages, text) {
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }
    display() {
        console.log("Document:");
        console.log("Header:", this.header);
        console.log("Footer:", this.footer);
        console.log("Pages:", this.pages);
        console.log("Text:", this.text);
       
    }
    clone() {
        return Object.create(this);
    }
}


const originalDoc = new Document(
    "the main header",
    "the main footer",
    5,
    "This is the content of the first document."
);

originalDoc.display();


const clonedDoc = originalDoc.clone();
clonedDoc.header = "clone header";
clonedDoc.pages = 3;
clonedDoc.display();
originalDoc.display();
