// Your code goes here
console.log('something else');


// function clickEventHandler(event){
//     console.log(event.type +'!!!');
//     console.log(event.target);
//     console.log(event.currentTarget+'ct');
// }

// const img = document.createElement('img')
// // for image


// home.addEventListener('click',(clickEventHandler));
// document.body.addEventListener('click',(clickEventHandler));
// document.querySelector('nav').addEventListener('click', (clickEventHandler));
// document.querySelector('header').addEventListener('click', (clickEventHandler))
// document.addEventListener('click',(clickEventHandler)); 


window.addEventListener("load", function(event) {
    alert("The page has now loaded");
    });


    
const img = document.querySelector('.intro img');
    img.addEventListener('dblclick', function () {
    img.style.border = '5px solid black';
    img.style.filter = 'blur(5px)';
    });

    const header = document.querySelector('header');
    header.addEventListener('mouseover', function () {
    header.style.backgroundColor = 'dodgerBlue';
    });
    
    // header.addEventListener('mouseleave', function () {
    // header.style.display = 'none';
// });

const img2 = document.querySelector('.img-content img');
    img2.addEventListener('click', function () {
    img2.style.borderRadius = '100px';
    img2.style.border = '5px solid black';
});

const intro = document.querySelector('body');
    intro.addEventListener('keyup', function () {
    intro.style.backgroundColor = 'coral';
});

const h2 = document.querySelector('.content-section h2');
    h2.addEventListener('mouseover', function () {
    h2.style.color = 'yellow';
    h2.style.fontSize = "50px";
});

const destinationPick = document.querySelector('.content-pick');
    destinationPick.addEventListener('copy', function () {
    destinationPick.style.flexDirection = 'column';
    destinationPick.style.color = 'dodgerblue';
})


const navlinks = document.querySelector('nav')
    navlinks.addEventListener('mouseover', function () {
    nav.preventDefault();
    });



