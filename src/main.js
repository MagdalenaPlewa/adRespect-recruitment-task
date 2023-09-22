const searchIcon = document.querySelector(".bi-search")
const searchInput = document.querySelector(".search-container")
const searchArrow = document.querySelector(".bi-arrow-right-short")

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

search()
hiddenSearchInput()