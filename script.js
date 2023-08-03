const cards = document.getElementsByClassName("card");
const container = document.getElementById("carousel-container");

let fps = 30;
let cardWidth = 75;
let cardCount = 20;

let maxSpeed = 100;
let maxProximity = 400;
let maxScale = 2;
let maxPerspective = 200;

let click = false;
let drag = false;
let mouseStartX = 0;

// Array.from(cards).forEach((card) => {
//     card.setAttribute("ondragstart", "return false");
//     card.setAttribute("ondrop", "return false");
// })
container.setAttribute("ondragstart", "return false");
container.setAttribute("ondrop", "return false");

for(let i = 0; i < cardCount; i++){
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    card.setAttribute("draggable", "false");
    card.setAttribute("position", 0);
    card.setAttribute("newPosition", 0);

    // card.style.translate = "100vw 0";

    card.style.minWidth = `${cardWidth}px`;
    card.style.margin = `50px ${cardWidth/10}px`;
    // card.style.background = `url(https://source.unsplash.com/a-dirt-road-in-the-middle-of-a-desert-9MqLBJvQAL8)`

    // const image = document.createElement("img");
    // image.src = "https://source.unsplash.com/a-dirt-road-in-the-middle-of-a-desert-9MqLBJvQAL8";
    // image.width = cardWidth;
    // card.appendChild(image);

    // card.style.filter = "saturate(0) brightness(0.75)";
}

// window.addEventListener("load", () => {intro()});
// window.addEventListener("resize", () => {intro()});

container.addEventListener(
    "mousedown", (event) => {
        click = true;
        mouseStartX = event.clientX;
    }
)
document.addEventListener(
    "mouseup", () => {
        drag = false;
        click = false;
        container.style.cursor = "grab";

        Array.from(cards).forEach((card) => {
            let newPosition = card.getAttribute("newPosition");
            card.setAttribute("position", newPosition);
        })
    }
)

container.addEventListener(
    "mousemove", () => {click ? handleDrag() : drag = false}
)

const handleDrag = () => {
    drag = true;
    container.style.cursor = "grabbing";
}


let currentEvent = {
    clientX: 0,
    clientY: 0,
};
let prevEvent = currentEvent;

document.onmousemove = (event) => {
    currentEvent = event;
}

mouseInterval = setInterval(() => {
    currentCords = [currentEvent.clientX, currentEvent.clientY];
    prevCords = [prevEvent.clientX, prevEvent.clientY];
    // drag ? console.log(currentCords) : "";
    cursorSpeed = [currentCords[0] - prevCords[0], prevCords[1] - currentCords[1]];

    Array.from(cards).forEach((card, index) => {
        if(drag){
            let position = card.getBoundingClientRect().x;
            let proximity = (window.innerWidth / 2) - position;

            let scroll = mouseStartX - currentCords[0];
            let offset = card.getAttribute("position") - scroll;
            
            let [scale, rotate] = normalize(cursorSpeed[0], proximity);
            let direction = -1*Math.sign(proximity);

            card.animate(
                {
                    translate: `${offset}px 0`,
                },
                {duration: 500, fill: "forwards"});

            card.animate(
                {
                    scale: `1 ${scale}`,
                    // transform: `prespective(${maxPerspective}px) rotateY(${direction*rotate}deg)`,
                    transform: `perspective(${maxPerspective}px) rotateY(${rotate*direction}deg)`,
                },
                {duration: 120, fill: "forwards"});
            card.setAttribute("newPosition", offset);

            // console.log(`${index} Cursor speed: ${cursorSpeed[0]}, proximity: ${proximity}`);
            // console.log(`${index} Scale: ${scale}`);
        }
        else{
            card.animate(
                {
                    scale: "1",
                    transform: `perspective(${maxPerspective}px) rotateY(0deg)`,
                },
                {duration: 500});
        }
    })
    
    prevEvent = currentEvent;
}, 30);


const normalize = (speed, proximity) => {
    speed = Math.abs(speed);
    proximity = Math.abs(proximity);
    // speed = Math.min(1, speed/factor); // normalize speed from 0-factor to 0-1

    // proximity = Math.abs(proximity);
    // proximity = 1 - (Math.min(proximity, window.innerWidth)/window.innerWidth); // normalize to 0-1
    
    // let scale = speed * proximity * 4; // mouse speed * proximity to center  => (1 - 1.25)
    // scale = Math.min(Math.max(scale, 1), 1.5); // normalize to 1-1.25
    
    //mouse speed (0 - 100) => (1 - 1.25)
    // speed = speed/(4*maxSpeed) + 1;
    // speed = Math.min(1.25, speed);

    // (0 - maxSpeed) => (0 - 1)
    speed /= maxSpeed;
    speed = Math.min(1, speed); 

    // (0 - maxProximity) => (0 - 1)
    proximity /= maxProximity;
    proximity = Math.min(1, proximity);

    proximity = 1 - proximity;
    
    // scale = (bulge params) => (1 - maxScale)
    let scale = speed * proximity * (maxScale - 1);
    scale += 1;
    
    proximity = 0.5 - Math.abs(proximity - 0.5);
    let rotate = 45 * proximity * speed;

    return [scale, rotate];
}
