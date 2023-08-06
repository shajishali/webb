const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "iphone SE",
    price: 399,
    colors: [
      {
        code: "white",
        img: "01.png",
      },
      {
        code: " blue",
        img: "20.png",
      },
    ],
  },
  {
    id: 2,
    title: "iphone X",
    price: 273,
    colors: [
      {
        code: "black",
        img: "02.png",
      },
      {
        code: "white",
        img: "21.png",
      },
    ],
  },
  {
    id: 3,
    title: "iphone 13",
    price: 699,
    colors: [
      {
        code: " #faea97",
        img: "03.png",
      },
      {
        code: "green",
        img: "22.png",
        
      },
    ],
  },
  {
    id: 4,
    title: "iphone 14",
    price: 799,
    colors: [
      {
        code: "white",
        img: "04.png",
      },
       {
        code: "red",
         img: "23.png",
    
       },
    ],
  },
  {
    id: 5,
    title: "iphone 14 pro",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "05.png",
      },
      {
        code: "#faea97",
        img: "25.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
