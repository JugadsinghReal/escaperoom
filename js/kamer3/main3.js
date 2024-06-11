let pointer = document.documentElement;        pointer.addEventListener('mousemove', m => {
    pointer.style.setProperty('--x', m.clientX + 'px');
    pointer.style.setProperty('--y', m.clientY + 'px');
})

//deuren buttons
const deur1button = document.querySelector(".deur1")
const deur2button = document.querySelector(".deur2")
const deur3button = document.querySelector(".deur3")
const deur4button = document.querySelector(".deur4")
deur1button.addEventListener("click", function(){
    alert("er is niks in deze kamer...")
})
deur2button.addEventListener("click", function(){
    alert("er is niks in deze kamer...")
})
deur3button.addEventListener("click", function(){
    alert("gevonden!")
})
deur4button.addEventListener("click", function(){
    alert("er is niks in deze kamer...")
})