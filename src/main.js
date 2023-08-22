const searchIcon = document.querySelector(".bi-search")
const searchInput = document.querySelector(".search-input")
const searchArrow = document.querySelector(".bi-arrow-right-short")
const leftArrow = document.querySelector('.arrow-left-container')
const rightArrow = document.querySelector(".arrow-right-container")
const introImg = document.querySelector(".intro .slide")
const introHeader = document.querySelector(".intro h1")
const introText = document.querySelector(".intro p")
const root = document.querySelector(":root")
const showBtn = document.querySelector(".realizations-btn")
const realizationsGallery = document.querySelector(".photo-gallery")
const imgCard = document.querySelectorAll(".img img")
const imgCardArr = [...imgCard]

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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Przykładowy tekst.",
        "test"
    ]

}

function search(){
    searchIcon.addEventListener("click", () => {
    searchInput.classList.remove("hidden")
    searchArrow.style.display = "block"
    })
}

function hiddenSearchInput(){
    searchArrow.addEventListener("click", () => {
        searchInput.classList.add("hidden")
        searchArrow.style.display = "none"
    })
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
        realizationsGallery.classList.remove("realizations-hidden")
        root.style.setProperty("--pseudo-height", '0');
        root.style.setProperty("--pseudo-display", 'none');
    })

    imgCard.forEach(img => {
        img.addEventListener("click", () => {
            createItem(img.src, img.dataset.id)
        })
    })
}

function slider(i, popupImg){
    introImg.src = sliderObj.sliderImgs[i]
    introHeader.innerText = sliderObj.sliderHeaders[i]
    introText.innerText = sliderObj.sliderTexts[i]
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

search()
hiddenSearchInput()
onClick()


