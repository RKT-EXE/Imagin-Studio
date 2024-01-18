
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//working on image div that will be poped up whenever hovered on specific feature div
var elemContainer = document.querySelector('.Feature-container');
var imageCard = document.querySelector('.img-div');

//image-card only will be visible when mouse enters on Element container
elemContainer.addEventListener('mouseenter',()=>{
    imageCard.style.display = "block";
});

//image-card  wo'nt be visible when mouse leaves  Element container
elemContainer.addEventListener('mouseleave',()=>{
    imageCard.style.display = "none";
});

// ------------------Changing image accordingly list -------------------------
var elems = document.querySelectorAll('#elem');

elems.forEach(element => {   //looping through all the elmnt and getting Custom Attribute named "data-img" that have image URL 
    element.addEventListener('mouseenter',()=>{
        var imgUrl = element.getAttribute('data-img')
        imageCard.style.backgroundImage = `url(${imgUrl})`;
    });
});







