// Add your JavaScript code here

const changingImage = document.getElementById('changing-image');
const images = [
'https://yellowmatics.ai/wp-content/uploads/2021/02/51c76b12-26e6-4f07-96b1-9a7313f5ba09.png',
  'https://yellowmatics.ai/wp-content/uploads/2021/02/51c76b12-26e6-4f07-96b1-9a7313f5ba09.png',
  // Add more image URLs
];

let imageIndex = 0;

function changeImage() {
  changingImage.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
}
changeImage();
