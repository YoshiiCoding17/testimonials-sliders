const previous = document.querySelector(".buttons__previous");
const next = document.querySelector(".buttons__next");
const img = document.querySelector(".image")
const paragraph = document.querySelector(".quote__p")
const namePerson = document.querySelector(".quote__name");
const role = document.querySelector(".quote__rol");

let index = 0;
const people = [
    {
        name: "Tanya Sinclair",
        rol: "UX Engineer",
        quote: `“I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future.”`,
        image: "images/image-tanya.jpg",
    },
    {
        name: "John Tarkpor",
        rol: "Junior Front-end Developer",
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.”`,
        image: "images/image-john.jpg",
    }
]
previous.addEventListener("click",previousCard);
next.addEventListener("click",nextCard);

function previousCard(){
    index == 0 ? index = people.length - 1 : index--;
    change(people[index]);
}
function nextCard(){
    index == people.length - 1 ? index = 0 : index++;
    change(people[index]);
}
function change(obj){
    const {image,quote,name,rol} = obj;
    img.src = image;
    paragraph.textContent = quote;
    namePerson.textContent = name;
    role.textContent = rol;
}