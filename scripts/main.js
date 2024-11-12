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


const imports = document.querySelectorAll('.imports img');
imports.forEach(image => {
    image.addEventListener('click', function() {
        const importName = image.src.split('/').pop();

        // Calculate width and height as a percentage of the screen size
        const width = window.screen.width * 0.4; // 40% of screen width
        const height = window.screen.height * 0.6; // 40% of screen height

        // Calculate position for top left corner (0% left and top)
        const left = window.screen.width * 0.3; // 5% from the left
        const top = window.screen.height * 0.2; // 5% from the top
        window.open(`import-app.html?import=${importName}`, 'newwindow', `width=${width},height=${height},left=${left},top=${top}`);
    });
});
