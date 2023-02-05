"use strict";
let ratingValue = -1;
const valueRatingButton = document.querySelectorAll('.rating-component__rating-value');
const buttonSubmitRating = document.querySelector('.rating-component__btn');
buttonSubmitRating.addEventListener("click", () => {
    submitRating(ratingValue);
});
function submitRating(ratingValue) {
    ratingValue++;
    if (ratingValue > 0) {
        const containerThankYouState = document.querySelector(".container__rating-component--centralized");
        containerThankYouState.classList.remove("display-none");
        const containerRatingState = document.querySelector(".container__rating-component");
        containerRatingState.classList.add("display-none");
        const containerRatingResult = document.querySelector(".rating-component__rating-result-container");
        containerRatingResult.innerHTML = `You selected ${ratingValue} out of 5`;
    }
    else {
        alert("You need to choose one of the options!");
    }
}
function switchBackground(i) {
    const ratingValue01 = document.querySelector('#rating-value-1');
    const ratingValue02 = document.querySelector('#rating-value-2');
    const ratingValue03 = document.querySelector('#rating-value-3');
    const ratingValue04 = document.querySelector('#rating-value-4');
    const ratingValue05 = document.querySelector('#rating-value-5');
    switch (i) {
        case 0:
            ratingValue01.style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratingValue01.style.color = 'white';
            ratingValue02.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue02.style.color = 'var(--color-lightgrey)';
            ratingValue03.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue03.style.color = 'var(--color-lightgrey)';
            ratingValue04.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue04.style.color = 'var(--color-lightgrey)';
            ratingValue05.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue05.style.color = 'var(--color-lightgrey)';
            break;
        case 1:
            ratingValue01.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue01.style.color = 'var(--color-lightgrey)';
            ratingValue02.style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratingValue02.style.color = 'white';
            ratingValue03.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue03.style.color = 'var(--color-lightgrey)';
            ratingValue04.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue04.style.color = 'var(--color-lightgrey)';
            ratingValue05.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue05.style.color = 'var(--color-lightgrey)';
            break;
        case 2:
            ratingValue01.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue01.style.color = 'var(--color-lightgrey)';
            ratingValue02.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue02.style.color = 'var(--color-lightgrey)';
            ratingValue03.style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratingValue03.style.color = 'white';
            ratingValue04.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue04.style.color = 'var(--color-lightgrey)';
            ratingValue05.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue05.style.color = 'var(--color-lightgrey)';
            break;
        case 3:
            ratingValue01.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue01.style.color = 'var(--color-lightgrey)';
            ratingValue02.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue02.style.color = 'var(--color-lightgrey)';
            ratingValue03.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue03.style.color = 'var(--color-lightgrey)';
            ratingValue04.style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratingValue04.style.color = 'white';
            ratingValue05.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue05.style.color = 'var(--color-lightgrey)';
            break;
        case 4:
            ratingValue01.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue01.style.color = 'var(--color-lightgrey)';
            ratingValue02.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue02.style.color = 'var(--color-lightgrey)';
            ratingValue03.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue03.style.color = 'var(--color-lightgrey)';
            ratingValue04.style.backgroundColor = 'var(--color-darkblue)';
            ratingValue04.style.color = 'var(--color-lightgrey)';
            ratingValue05.style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratingValue05.style.color = 'white';
            break;
    }
}
for (let i = 0; i < valueRatingButton.length; i++) {
    valueRatingButton[i].addEventListener('click', () => {
        ratingValue = i;
        switchBackground(ratingValue);
    });
}
;
