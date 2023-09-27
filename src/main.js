const searchIcon = document.querySelector(".bi-search")
const searchInput = document.querySelector(".search-container")
const searchArrow = document.querySelector(".bi-arrow-right-short")
const introImg = document.querySelector(".intro .slide")
const introHeader = document.querySelector(".intro h1")
const introText = document.querySelector(".intro p")
const root = document.querySelector(":root")
const showBtn = document.querySelector(".show-btn")
const realizationsContainer = document.querySelector(".realizations-container")
const photoContainer = document.querySelector(".photo-container")
const photos = document.querySelectorAll(".photo-container img")
const photosArr = [...photos]
const leftArrow = document.querySelector('.arrow-left-container')
const rightArrow = document.querySelector(".arrow-right-container")
const ofertContainer = document.querySelector(".ofert-title-container")
const aboutImg = document.querySelector(".about-img img")
const rowCards = document.querySelector(".row-cards")
const cards = document.querySelectorAll(".col-card")
const cardsArr = [...cards]
const aboutContent = document.querySelector(".about-right-container")
const imgCard = document.querySelectorAll(".photo-container img")
const imgCardArr = [...imgCard]
const contactContent = document.querySelector(".contact-content")
const contactTitle = document.querySelector(".contact-title-content")
const instagramBlock = document.querySelector(".instagram-block")



console.log(photoContainer)

const sliderObj = {
    sliderImgs: [
        "img/slider/slide0.jpg",
        "img/slider/slide1.jpg",
        "img/slider/slide2.jpg",
        "img/slider/slide3.jpg"
    ],
    sliderHeaders: [
        "Nowoczesna aranżacja Twojego ogrodu",
        "Przykładowy tekst 1",
        "Przykładowy tekst 2",
        "Przykładowy tekst 3"
    ],
    sliderTexts: [
        "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Przykładowy tekst.",
        "test"
    ]
}


const masonry = new Macy({
    container: '.photo-container',
    trueOrder: false,
    waitForImages: false,
    // mobileFirst: true,
    margin: 42,
    columns: 3,
    breakAt: {

        992: 2,
        400: 1,
    }
})

function search(){
    searchIcon.addEventListener("click", () => {
    searchIcon.classList.add("hidden")
    searchInput.classList.remove("hidden")
    searchArrow.style.display = "block"
    })
}

function hiddenSearchInput(){
    searchArrow.addEventListener("click", () => {
        searchIcon.classList.remove("hidden")
        searchInput.classList.add("hidden")
        searchArrow.style.display = "none"
    })
}

function slider(i){
    function resolveAfter2Seconds(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(introImg.src= sliderObj.sliderImgs[i])
            }, 250)
        });
    }

      async function asyncCall() {
        await resolveAfter2Seconds();
        introHeader.innerText = sliderObj.sliderHeaders[i]
        introText.innerText = sliderObj.sliderTexts[i]
      }
      asyncCall();
}

function onClick(){
    let i = 0
    rightArrow.addEventListener("click", () => {
        i++
        if(i >= sliderObj.sliderTexts.length){
            i = 0
        }
        slider(i)
    })

    leftArrow.addEventListener("click", () => {
        i--
        if(i < 0){
            i = sliderObj.sliderTexts.length - 1
        }
        slider(i)
    })

    showBtn.addEventListener("click", () => {
        root.style.setProperty("--pseudo-height", '0');
        showBtn.style.display = "none"
        realizationsContainer.style.overflow = "visible"
        realizationsContainer.style.height = "auto"
        photoContainer.style.marginBottom = "0"
        console.log("ok")
    })

    imgCard.forEach(img => {
        img.addEventListener("click", () => {
            createItem(img.src, img.dataset.id)
        })
    })
}

function createItem(src, id){
    const popupDiv = document.createElement('div')
    const popupImg = document.createElement('img')
    const closeIcon = document.createElement('i')
    const close = document.createElement('div')
    const prevIcon = document.createElement('i')
    const prev = document.createElement('div')
    const nextIcon = document.createElement('i')
    const next = document.createElement('div')
    const popup = document.createElement('div')

    popupImg.className = "popup-img"
    popupDiv.className = "popup-container"
    closeIcon.className = "bi bi-x-square"
    prevIcon.className = "bi bi-arrow-left-square"
    nextIcon.className = "bi bi-arrow-right-square"
    popup.className = "popup"
    popupImg.src = src
    popupImg.setAttribute('dataset', id)

    document.body.appendChild(popup)
    popup.appendChild(popupDiv)
    popupDiv.appendChild(popupImg)
    popup.appendChild(close)
    close.appendChild(closeIcon)
    popupDiv.appendChild(prev)
    prev.appendChild(prevIcon)
    popupDiv.appendChild(next)
    next.appendChild(nextIcon)

    close.addEventListener("click", () => {
        document.body.removeChild(popup)
    })

    prevIcon.addEventListener("click", () =>{
        const popupImgId = popupImg.getAttribute('dataset')
            let i = popupImgId
            i--
            if(popupImgId <= 0){
                i = imgCardArr.length - 1
            }
            popupImg.setAttribute('src', `${imgCardArr[i].src}`)
            popupImg.setAttribute('dataset', imgCardArr[i].dataset.id )
    })

    nextIcon.addEventListener("click", () =>{
        const popupImgId = popupImg.getAttribute('dataset')
            let i = popupImgId
            i++
            if(popupImgId >= imgCardArr.length - 1){
                i = 0
            }
            popupImg.setAttribute('src', `${imgCardArr[i].src}`)
            popupImg.setAttribute('dataset', imgCardArr[i].dataset.id )
    })
}

window.addEventListener("scroll", () => {
    if(window.innerWidth > 800 &&  window.innerHeight > 600){
        show();
    }
    else {
        ofertContainer.classList.add("show-container")
        cardsArr.forEach(card => {
            card.classList.add("show-card")
        });
        aboutContent.classList.add("show-container")
        aboutImg.classList.add("show-img")
        photosArr.forEach(photo => {
            photo.classList.add("show-img")
        });
        contactTitle.classList.add("show-container")
        instagramBlock.classList.add("show-instagram")
    }
})



let show = () => {
    let rowCardsPosition = rowCards.offsetTop;
    let aboutContentPosition = aboutContent.offsetTop;
    let ofertContainerPosition = ofertContainer.offsetTop;
    let photoContainerPosition = photoContainer.offsetTop;
    let contanctContetnPosition = contactContent.offsetTop;

    if(window.scrollY > ofertContainerPosition + 200){
        ofertContainer.classList.add("show-container")
    }

    if(window.scrollY > rowCardsPosition + 200){
        cardsArr.forEach(card => {
            card.classList.add("show-card")
        });
    }

    if(window.scrollY > aboutContentPosition - 600){
            aboutContent.classList.add("show-container")
            aboutImg.classList.add("show-img")
    }

    if(window.scrollY > photoContainerPosition + 1800){
        photosArr.forEach(photo => {
            photo.classList.add("show-img")
        });

    if(window.scrollY > contanctContetnPosition - 600){
        contactTitle.classList.add("show-container")
        instagramBlock.classList.add("show-instagram")
    }
}
}

search()
hiddenSearchInput()
onClick()