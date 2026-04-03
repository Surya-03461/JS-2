// ### DOM :- Document Object Model
// {
// * The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

// * The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

// * Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
// }


// ## Examples of DOM

// *  document.getElementById("firstHeading")    
// -> <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​

// *  document.getElementById("firstHeading").innerHTML = "<h1>Chai Aur Code</h1>"
// -> '<h1>Chai Aur Code</h1>'[Changes the first heading to Chai Aur Code]

// *  console.log(window)
// -> VM1982:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//    undefined

// *  console.log(window.document)
// -> VM2118:1 #document (https://en.wikipedia.org/wiki/Brendan_Eich) 
//    undefined

// *  console.log(document)
// -> VM2148:1 #document (https://en.wikipedia.org/wiki/Brendan_Eich)
//   undefined


// # Links are not arrays but behaves like an array :-

// *  console.log(document.links)
// -> VM2295:1 HTMLCollection(741) [a.mw-jump-link, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-logo, a.cdx-button.cdx-button--fake-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet.cdx-…, a, a, a, a, a, a, a, a, a, a, a.image, a.extiw, a.extiw, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.      interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.           interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.wbc-editpage, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-file-description, a, a, a, a, a, a, …]
// undefined


// *  console.log(document.links[2])
// -> VM2310:1 <a href=​"/​wiki/​Wikipedia:​Contents" title=​"Guides to browsing Wikipedia">​…​</a>​flex
//    undefined   


// ## Attributes and Content Examples :-

// # Attributes Examples :-

// * document.getElementById('firstHeading')
//   <h1 id=​"firstHeading" class=​"heading">​DOM Learnig on Chai Aur Code​</h1>​ 

// * document.getElementById('firstHeading').id
//   'firstHeading'

// * document.getElementById('firstHeading').class
//   undefined
  
// * document.getElementById('firstHeading').className
//   'heading'

// * document.getElementById('firstHeading').getAttribute('id')
//   'firstHeading'

// * document.getElementById('firstHeading').getAttribute('class')
//   'heading'

// * document.getElementById('firstHeading').setAttribute('class','test')
//   undefined

// * document.getElementById('firstHeading').setAttribute('class','test heading')
//   undefined

// * document.getElementById('firstHeading').getAttribute('class')
//   'test heading'


// * const title = document.getElementById('firstHeading')
//   undefined

// * title.style.backgroundColor = "blue"
//   'blue'
 
// * title.style.padding = "15px"
//   '15px'

// * title.style.borderRadius = "5px"
//   '15px'


// ## Taking/Printing element content in DOM :-

// * const title = document.getElementById('firstHeading')
//   undefined
// * title
//   <h1 id=​"firstHeading" class=​"heading">​DOM Learnig on Chai Aur Code​</h1>​
// * title.textContent
//   'DOM Learnig on Chai Aur Code'
// * title.innerHTML
//   'DOM Learnig on Chai Aur Code'
// * title.innerText
//   'DOM Learnig on Chai Aur Code'

// # Difference between innerHTML,innertext and textContent :-(After adding 'display:none' style to heading)

// * title.innerText
//   'DOM Learning on Chai Aur Code'
// * title.textContent
//   'DOM Learning on Chai Aur Code test text'
// * title.innerHTML
//   'DOM Learning on Chai Aur Code <span style="display:none">test text</span>'

// ## Query Selector :- 

// * document.querySelector('h1')
//   <h1 id=​"firstHeading" class=​"heading">​…​</h1>​
// * document.querySelector('h2')
//   <h2>​Lorem ipsum dolor sit.​</h2>​
// * document.querySelector('#firstHeading')
//   <h1 id=​"firstHeading" class=​"heading">​…​</h1>​
// * document.querySelector('.heading')
//   <h1 id=​"firstHeading" class=​"heading">​…​</h1>​
// * document.querySelector('input[type="password"]')
//   <input type="password" name="" id="" fdprocessedid="cxzou6">
// * document.querySelector('p:first-child')
//   null

// * document.querySelector('ul')
//   <ul>​…​</ul>​
// * const MyUl = document.querySelector('ul')
//   undefined
// * MyUl.querySelector('li')
//   <li>​…​</li>​
// * const turnGreen = MyUl.querySelector('li')
//   undefined
// * turnGreen.style.backgroundColor = "red"
//   'red'
// * turnGreen.style.padding = "10px"
//   '10px'
// * turnGreen.innerText
//   'one'
// * turnGreen.innerText = 'five'
//   'five'


// ## Query Selector All :-

// * document.querySelectorAll('h1') 
//   NodeList [h1#firstHeading.heading]//NodeList is similar to that of array but not same.  
// * const myH1 = document.querySelectorAll('h1')
//   undefined
// * myH1
//   NodeList [h1#firstHeading.heading]
// * myH1[0].style.color = "red"
//   'red'


// * const myL1 = document.querySelectorAll('li')
//   undefined
// * myL1
//   NodeList(3) [li, li, li]
// * myL1[0].style.backgroundColor = "red"
//  'red'
//  * myL1[1].style.color = "green"
//  'green'

// * myL1.forEach( function(item) {
//     item.style.color = "red"
// })
//  undefined//Changes the color of item one by one using callback
 
// * document.getElementsByClassName('list-item')
//   HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// * const myList = document.getElementsByClassName('list-item')
//   undefined
// * myList
//   HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// * myList.forEach(function(li) {
//     li.style.backgroundColor = "red"
// })
//   VM2648:1 Uncaught TypeError: myList.forEach is not a function
//     at <anonymous>:1:8
// (anonymous) @ VM2648:1Understand this error

// * Array.from(myList)
//   (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// * myArr = Array.from(myList)
//   (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// * myArr.forEach(function(li) {
//     li.style.backgroundColor = "red"
// })
//   undefined