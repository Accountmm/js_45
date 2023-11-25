const birds = document.querySelector('.birds');
clouds = document.querySelectorAll('.cloud'),
    sun = document.querySelector('.sun');
    // long = document.querySelector('selector');


window.addEventListener(`scroll`, () => {
    let y = window.scrollY
    let x = y
    // let x =  window.scrollX
    // console.log(x);
    console.log(y);
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translate(${y * speed / 3}px)`
    })
    birds.style.transform = `translate(${x / 2}px, ${-y / 2}px)`;
    birds.style.transition = `ease 5s`
    sun.style.transition = `ease 5s`
    sun.style.transform = `translate(${x * 2 }px, ${-y * 2}px)`

})
// cloud.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
// birds.style.transform = `translate(${y})`
// console.log(birds);
// birds.style.transform = `translate(${y}px, ${x}) `