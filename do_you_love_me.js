// const questionContainer = document.querySelector(".question-container");
// const resultContainer = document.querySelector(".result-container.yes");
// const gifResult = document.querySelector(".gif-result");
// const heartLoader = document.querySelector(".cssload-main");
// const yesBtn = document.querySelector(".js-yes-btn");
// const noBtn = document.querySelector(".js-no-btn");

// // /change the postion of no button
// noBtn.addEventListener("mouseover", () => {
//   const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
//   const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

//   noBtn.style.left = `${newX}px`;
//   noBtn.style.top = `${newY}px`;
// });

// // yes button functionality

// yesBtn.addEventListener("click", () => {
//   questionContainer.style.display = "none";
//   heartLoader.style.display = "inherit";

//   const timeoutId = setTimeout(() => {
//     heartLoader.style.display = "none";
//     resultContainer.style.display = "inherit";
//     gifResult.play();
//   }, 3000);
// });
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move the "No" button randomly
noBtn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        
        gifResult.muted = true;  // Ensure autoplay works
        gifResult.play();
    }, 3000);
});
