const masonry = new Macy({
    container: '.photo-container',
    trueOrder: false,
    waitForImages: false,
    // mobileFirst: true,
    margin: 42,
    columns: 3,
    breakAt: {

        989: 2,
        400: 1,
    }
})