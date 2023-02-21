const images = ["https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-6.jpg?w=800", "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-2.jpg?w=800", "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-1.jpg?w=800", "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-4.jpg?w=800", "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-3.jpg?w=800", "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-5.jpg?w=803"];
const buttonBackward = document.getElementById("botonbackward");
const buttonForward = document.getElementById("botonforward");
const imageOne = document.getElementById("imagenUno");

let indexofimage = 0;


buttonBackward.addEventListener("click", () => {
    indexofimage--
    if(indexofimage > 0 ) {
        imageOne.src = images [indexofimage]
    }else{
        indexofimage = images.length -1
        imageOne.src = images [indexofimage]
    }
})

buttonForward.addEventListener("click", () => {
    indexofimage++ 
    if (indexofimage < images.length) {
        imageOne.src = images [indexofimage]
    }else {
        indexofimage = 0
        imageOne.src = images [indexofimage]
    }
   
})
