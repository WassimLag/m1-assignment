// Image and caption arrays
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
    "Description for Photo 1: Community Event details", "Description for Photo 2: Volunteers effort details", 
    "Description for Photo 3: Cleanup Effort details", "Description for Photo 4: Local Park details", 
    "Description for Photo 5: Library activities", "Description for Photo 6: Town Hall meeting details", 
    "Description for Photo 7: Farmers Market offerings", "Description for Photo 8: Art Show details", 
    "Description for Photo 9: Community Center activities", "Description for Photo 10: Local Celebration event details"
];

// Populate gallery with images and captions
const gallery = document.getElementById('photo-gallery');

images.forEach((image, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${image}" alt="Photo ${index + 1}" class="photo" onclick="openLightbox('${image}')">
        <p>${captions[index]}</p>
        <p class="description" onclick="showInfoBox(${index})">Click here for more info</p>
    `;
    gallery.appendChild(li);
});

// Function to show the information box
function showInfoBox(index) {
    console.log("Showing info box for image: ", index); // Debug log
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

// Move openLightbox function outside $(document).ready() to make it globally accessible
function openLightbox(imageSrc) {
    $('#lightbox').show();
    $('#lightbox-img').attr('src', imageSrc);
}

// jQuery code inside document ready
$(document).ready(function() {
    // jQuery handler to close the lightbox
    $('.close').click(function() {
        $('#lightbox').hide();
    });
});
