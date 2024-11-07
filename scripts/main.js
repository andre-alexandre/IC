document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', () => {
        console.log("Image clicked");
        EXIF.getData(img, function() {
            let allMetaData = EXIF.getAllTags(this);
            console.log("Metadata:", allMetaData); 
        });
    });
});


const images = document.querySelectorAll('.photo img');

images.forEach(image => {
    image.addEventListener('click', function() {
        const imageName = image.src.split('/').pop();
        window.location.href = `images.html?image=${imageName}`;
    });
});