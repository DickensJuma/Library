let myLibrary=[]

function Book(author, title, pages, read) {
    this.author=author;
    this.title =title;
    this.pages=pages;
    this.read =read ;
    
}

function addBookToLibrary() {

    let book1 = new Book("moses","Genesis",34, true )

    myLibrary.push(book1)
   
    
}
addBookToLibrary()

let i;

let ul = document.createElement('ul')
myLibrary.map((obj, index)=> {
    Object.values(obj).map(t=> {
let li = document.createElement('li')

        li.innerText = t 
        ul.appendChild(li)
        
    })
})


let btn = document.createElement("button")
btn.innerHTML="New book"
document.getElementById("btn").appendChild(btn)
btn.addEventListener("click",function(){
    document.getElementById("myBooks").appendChild(ul);
},false)

// let input = document.createElement("INPUT")
// input.setAttribute("type", "text").innerText("title")
// document.getElementsById("title").appendChild(input)


console.log(myLibrary)