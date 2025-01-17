// const images = document.querySelectorAll('.image');
// const shadows = document.querySelectorAll('.shadow');

// images.forEach((image, index) => {
//     image.addEventListener('click', () => {
//         const shadow = shadows[index];
//         if (shadow.classList.contains('matched')) {
//             return;
//         }
//         shadow.classList.add('matched');
//         image.classList.add('matched');
//         checkWin();
//     });
// });

// function checkWin() {
//     const matchedImages = document.querySelectorAll('.image.matched');
//     const matchedShadows = document.querySelectorAll('.shadow.matched');
//     if (matchedImages.length === images.length && matchedShadows.length === shadows.length) {
//         alert('Congratulations! You won!');
//     }
// }

// script.js
// const images = document.querySelectorAll('.image');
// const shadows = document.querySelectorAll('.shadow');
// const ctxImages = [];
// const ctxShadows = [];

// images.forEach((image, index) => {
//     ctxImages[index] = image.getContext('2d');
//     ctxImages[index].drawImage(image, 0, 0, 100, 100);

//     image.addEventListener('mousedown', () => {
//         draw(ctxImages[index], event);
//     });

//     image.addEventListener('mousemove', (event) => {
//         if (event.buttons === 1) {
//             draw(ctxImages[index], event);
//         }
//     });

//     image.addEventListener('mouseup', () => {
//         checkMatch(ctxImages[index], shadows[index]);
//     });
// });

// shadows.forEach((shadow, index) => {
//     ctxShadows[index] = shadow.getContext('2d');
//     ctxShadows[index].drawImage(shadow, 0, 0, 100, 100);
// });

// function draw(ctx, event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     ctx.lineWidth = 5;
//     ctx.lineCap = 'round';
//     ctx.lineJoin = 'round';
//     ctx.strokeStyle = '#000';
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x, y);
//     ctx.stroke();
// }

// function checkMatch(ctxImage, ctxShadow) {
//     ctxImage.beginPath();
//     ctxImage.moveTo(0, 0);
//     ctxImage.lineTo(ctxImage.canvas.width, ctxImage.canvas.height);
//     ctxImage.stroke();

//     ctxShadow.beginPath();
//     ctxShadow.moveTo(0, 0);
//     ctxShadow.lineTo(ctxShadow.canvas.width, ctxShadow.canvas.height);
//     ctxShadow.stroke();

//     const imageData = ctxImage.getImageData(0, 0, 100, 100);
//     const shadowData = ctxShadow.getImageData(0, 0, 100, 100);

//     let


function checkMatch(ctxImage, ctxShadow) {
  // Get the image data for the drawn lines on both the image and the shadow
  const imageData = ctxImage.getImageData(0, 0, 100, 100);
  const shadowData = ctxShadow.getImageData(0, 0, 100, 100);

  // Compare the image data pixel by pixel to determine if they match
  let match = true;
  for (let i = 0; i < imageData.data.length; i += 4) {
      // Compare RGB values (ignoring alpha channel)
      if (
          imageData.data[i] !== shadowData.data[i] ||
          imageData.data[i + 1] !== shadowData.data[i + 1] ||
          imageData.data[i + 2] !== shadowData.data[i + 2]
      ) {
          match = false;
          break;
      }
  }

  // Highlight the matched images if they match
  if (match) {
      ctxImage.strokeStyle = 'green';
      ctxImage.beginPath();
      ctxImage.moveTo(0, 0);
      ctxImage.lineTo(ctxImage.canvas.width, ctxImage.canvas.height);
      ctxImage.stroke();

      ctxShadow.strokeStyle = 'green';
      ctxShadow.beginPath();
      ctxShadow.moveTo(0, 0);
      ctxShadow.lineTo(ctxShadow.canvas.width, ctxShadow.canvas.height);
      ctxShadow.stroke();
  }
}
