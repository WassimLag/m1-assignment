const images = [
    'images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg',
    'images/photo4.jpg', 'images/photo5.jpg', 'images/photo6.jpg',
    'images/photo7.jpg', 'images/photo8.jpg', 'images/photo9.jpg', 'images/photo10.jpg'
];
const captions = [
    "Photo 1: Community Event", "Photo 2: Volunteers", "Photo 3: Cleanup Effort", 
    "Photo 4: Local Park", "Photo 5: Library", "Photo 6: Town Hall",
    "Photo 7: Farmers Market", "Photo 8: Art Show", "Photo 9: Community Center", 
    "Photo 10: Local Celebration"
]; 

const descriptions = [
    "Description for Photo 1", "Description for Photo 2", "Description for Photo 3", 
    "Description for Photo 4", "Description for Photo 5", "Description for Photo 6", 
    "Description for Photo 7", "Description for Photo 8", "Description for Photo 9", "Description for Photo 10"
];

const gallery = document.getElementById('photo-gallery');

images.forEach((image, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${image}" alt="Photo ${index + 1}" class="photo">
        <p>${captions[index]}</p>
    `;
    gallery.appendChild(li);
});

// Function to show the information box
function showInfoBox(index) {
    const infoBox = document.getElementById('info-box');
    infoBox.innerHTML = `
        <h2>${captions[index]}</h2>
        <p>${descriptions[index]}</p>
        <a href="#" onclick="closeInfoBox()">Close</a>
    `;
    infoBox.style.visibility = 'visible';
}

// Function to close the information box
function closeInfoBox() {
    document.getElementById('info-box').style.visibility = 'hidden';
}