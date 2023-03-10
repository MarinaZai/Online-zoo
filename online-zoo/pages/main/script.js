// Header nav links change active
const linkContainer = document.getElementsByClassName("nav_header");
const links = linkContainer[0].getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Footer nav links change active
const linkContainerFooter = document.getElementsByClassName("nav_footer");
const linksFooter = linkContainerFooter[0].getElementsByClassName("link_footer");
for (let i = 0; i < linksFooter.length; i++) {
  linksFooter[i].addEventListener("click", function (e) {
    e.preventDefault()
    let current = document.getElementsByClassName("active");
    current[1].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Validate email
const emailField = document.getElementById("email-input");
const button = document.getElementsByClassName("footer_button");

button[0].addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {} else {
    emailField.className = "error"
    button[0].className += " error"
  }
});

emailField.addEventListener("input", (e) => {
  emailField.classList.remove("error");
  button[0].classList.remove("error");
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


/* nav delete to click on overlay */
const menu_toggle = document.querySelector('#menu-toggle');
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', e => {
  menu_toggle.checked = false
})

/* karusel animal */
const arrAnimal = [{
    src: "../../assets/images/section_three/images_block_karusel/pandas_img1.png",
    alt: "pandas_img1",
    namePet: "giant Pandas",
    descriptionPet: "Native to Southwest China",
    imgIcon: "../../assets/icons/section_three_icons/banana-bamboo_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/sloth_img4.png",
    alt: "sloth_img4",
    namePet: "Two-toed Sloth",
    descriptionPet: "Mesoamerica, South America",
    imgIcon: "../../assets/icons/section_three_icons/banana-bamboo_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/eagles_img2.png",
    alt: "eagles_img2",
    namePet: "Eagles",
    descriptionPet: "Native to South America",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/cheetahs_img5.png",
    alt: "cheetahs_img5",
    namePet: "cheetahs",
    descriptionPet: "Native to Africa",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/gorillas_img3.png",
    alt: "gorillas_img3",
    namePet: "Gorillas",
    descriptionPet: "Native to Congo",
    imgIcon: "../../assets/icons/section_three_icons/banana-bamboo_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/penguins_img6.png",
    alt: "penguins_img6",
    namePet: "Penguins",
    descriptionPet: "Native to Antarctica",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/catNew.png",
    alt: "catNew",
    namePet: "Cat",
    descriptionPet: "Native to All World",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/coalasNew.png",
    alt: "coalasNew",
    namePet: "Coalas",
    descriptionPet: "Native to Africa",
    imgIcon: "../../assets/icons/section_three_icons/banana-bamboo_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/elephantNew.png",
    alt: "elephantNew",
    namePet: "Elephant",
    descriptionPet: "Native to Africa",
    imgIcon: "../../assets/icons/section_three_icons/banana-bamboo_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/foxNew.png",
    alt: "foxNew",
    namePet: "Fox",
    descriptionPet: "Native to Belarus",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/funNew.png",
    alt: "funNew",
    namePet: "Fun Animal",
    descriptionPet: "Native to Antarctica",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  },
  {
    src: "../../assets/images/section_three/images_block_karusel/tigerNew.png",
    alt: "tigerNew",
    namePet: "Tiger",
    descriptionPet: "Native to India",
    imgIcon: "../../assets/icons/section_three_icons/meet-fish_icon.png"
  }
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

const shuffledAnimals = shuffle(arrAnimal)

function createParentSlideElement() {
  const newDivTwoBlocks = document.createElement("div")
  newDivTwoBlocks.classList.add("two_blocks")
  return newDivTwoBlocks
}

function createSlideElement(data) {
  const newOneBlockImage = document.createElement("div")
  newOneBlockImage.classList.add("one_block_image")
  const newImage = document.createElement('img')
  newImage.src = data.src
  newImage.alt = data.alt
  newImage.classList.add("picture")
  const newDescriptionImage = document.createElement('div')
  newDescriptionImage.classList.add("description_image")
  const newTextDescriptionImage = document.createElement('div')
  newTextDescriptionImage.classList.add("text")
  const newTextNamePet = document.createElement('div')
  newTextNamePet.innerHTML = data.namePet
  newTextNamePet.classList.add("name_pet")
  const newDescriptionPet = document.createElement('div')
  newDescriptionPet.innerHTML = data.descriptionPet
  newDescriptionPet.classList.add("description_pet")
  const newImgIconDescriptionImage = document.createElement('div')
  newImgIconDescriptionImage.classList.add("img_icon")
  const newImgIcon = document.createElement('img')
  newImgIcon.src = data.imgIcon

  newOneBlockImage.appendChild(newImage);
  newOneBlockImage.appendChild(newDescriptionImage);
  newDescriptionImage.appendChild(newTextDescriptionImage)
  newTextDescriptionImage.appendChild(newTextNamePet)
  newTextDescriptionImage.appendChild(newDescriptionPet)
  newDescriptionImage.appendChild(newImgIconDescriptionImage)
  newImgIconDescriptionImage.appendChild(newImgIcon)

  return newOneBlockImage
}
const container = document.querySelector(".container_section_three")
const scrollAnimals = document.querySelector('.scroll_animals');

let parentElement

const elementsForRender = generationTwoBlocks(shuffledAnimals)
elementsForRender.forEach((item) => {
  scrollAnimals.appendChild(item)
})

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

function generationTwoBlocks(data) {
  return data.reduce((acc, card, index, arr) => {
    if (index % 2 === 0) {
      let cardElem = createSlideElement(card)
      let cardElem2 = createSlideElement(arr[index + 1])
      parentElement = createParentSlideElement()
      parentElement.appendChild(cardElem)
      parentElement.appendChild(cardElem2)
      acc.push(parentElement)
    }
    return acc
  }, [])
}
let twoBlocks = document.querySelectorAll(".two_blocks")

let isAnimateFinished = true
next.addEventListener('click', e => {
  if (isAnimateFinished) {
    isAnimateFinished = false
    scrollAnimals.innerHTML = '';
    let blocksToAppend = shuffle(arrAnimal)
    const newBlocks = generationTwoBlocks(blocksToAppend)
    newBlocks.forEach((item) => {
      scrollAnimals.append(item.cloneNode(true))
    })
    scrollAnimals.classList.add('fromRightToLeft')
    setTimeout(() => {
      scrollAnimals.classList.remove('fromRightToLeft')
      isAnimateFinished = true
    }, 700)
  }
})

prev.addEventListener('click', e => {
  if (isAnimateFinished) {
    isAnimateFinished = false
    scrollAnimals.innerHTML = '';
    let blocksToAppend = shuffle(arrAnimal)
    const newBlocks = generationTwoBlocks(blocksToAppend)
    newBlocks.forEach((item) => {
      scrollAnimals.append(item.cloneNode(true))
    })
    scrollAnimals.classList.add('fromLeftToRight')
    setTimeout(() => {
      scrollAnimals.classList.remove('fromLeftToRight')
      isAnimateFinished = true
    }, 700)
  }
})

/* testimonials karusel */
const rangeLine = document.querySelector('.section_five_line');
rangeLine.addEventListener("input", event => {
  const allBlocksSection = document.querySelector('.allBlocksSection');
  const parentWidth = allBlocksSection.offsetWidth;
  const allOneTestimonialBlocks = document.querySelectorAll('.one_testimonial_block')
  const widthOne = parentWidth / allOneTestimonialBlocks.length
  allBlocksSection.style.transform = `translateX(${widthOne * - (event.target.value)}px)`
});

//popup
const popUpParent = document.querySelector('.popup_block')
const popUpChildren = document.querySelectorAll('.one_testimonial_block');
const overlayOnPopup = document.querySelector('.overlay')
const closePopup = document.querySelector('.close_popup')
popUpChildren.forEach((item) => {
  item.addEventListener('click', e => {
    const one = e.currentTarget
    popUpParent.appendChild(one)
    const ele = document.querySelector('.testimonial_one_user')
    one.style.maxWidth = '275px'
    one.style.height = '495px'
    ele.style.width = '255px'
    popUpParent.style.display = 'block'
    overlayOnPopup.style.display = 'block'
  })
})
closePopup.addEventListener('click', e => {
  popUpParent.removeChild(popUpParent.lastChild)
  popUpParent.style.display = 'none'
  overlayOnPopup.style.display = 'none'
})
overlayOnPopup.addEventListener('click', e => {
  popUpParent.removeChild(popUpParent.lastChild)
  popUpParent.style.display = 'none'
  overlayOnPopup.style.display = 'none'
})
