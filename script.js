const images = [
    {
        src: "Zlatibor.png",
        title: "Zlatibor",
        description: "A beautiful mountain resort in Serbia."
    },
    {
        src: "Banjaluka.png",
        title: "Banjaluka",
        description: "The second largest city in Bosnia and Herzegovina."
    },
    {
        src: "Beograd.png",
        title: "Beograd",
        description: "The capital city of Serbia, rich in history."
    }
];

let currentIndex = 0;

function updateCard() {
    const cardImage = document.getElementById('card-image');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');

    cardImage.src = images[currentIndex].src;
    cardTitle.textContent = images[currentIndex].title;
    cardDescription.textContent = images[currentIndex].description;

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateCard, 10000); // Change image every 3 seconds
updateCard(); // Initial call to set the first image
