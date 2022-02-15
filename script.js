// Event Handling
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// Dom Traversal
const close = document.querySelectorAll('.close');

// Method 1
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', (event) => {
//         event.target.parentElement.style.display = 'none';
//     })
// }

// Method 2
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});

// parentElement : return node
// parentNode : return element
// nextSibling : return node
// nextElementSibling : return element
// previousSibling : return node
// previousElementSibling : return element

