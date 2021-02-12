
//Top node of rendering elements
const root = document.getElementById("body");

//create image element
const imageHeader = document.createElement("img");

//create h1 element
const h1 = document.createElement("h1");

//create text node for h1 element
const h1Text = document.createTextNode("Hello World");

//create variable for header element
const header = document.querySelector("header");

//append image to body node
header.appendChild(imageHeader)
//append image to the dom as FIRST child node to render on top of the browser
header.insertBefore(imageHeader, header.firstChild);

//append h1 element to head node
root.appendChild(h1);

//setting attriubte to image to render image from url
imageHeader.setAttribute("src", "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg");
//set attribute to image tag for screen reading softwares
imageHeader.setAttribute("alt", "panda");
//set id attribute to h1 element
h1.setAttribute("id", "title");
//append text to h1 tag
h1.appendChild(h1Text);

