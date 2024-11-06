document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', () => {
        console.log("Image clicked"); // Check if click event is firing
        EXIF.getData(img, function() {
            let allMetaData = EXIF.getAllTags(this);
            console.log("Metadata:", allMetaData); // Check the extracted metadata
        });
    });
});
