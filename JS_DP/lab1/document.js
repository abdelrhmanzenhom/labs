
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
        console.log("---------------------");
    }
}


const originalDoc = new Document(
    "Original Header",
    "Original Footer",
    5,
    "This is the content of the original document."
);

originalDoc.display();


const clonedDoc = Object.create(originalDoc);
clonedDoc.header = "Cloned Header";
clonedDoc.pages = 3;

clonedDoc.display();


originalDoc.display();
