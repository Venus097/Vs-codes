
const generalAbout = document.getElementById("generalAbout"); 
const passionAbout = document.getElementById("passionAbout"); 
const skillsAbout = document.getElementById("skillsAbout"); 
const hobbiesAbout = document.getElementById("hobbiesAbout"); 


function switchOutline(name) {
    if (name === "generalAbout") {
        generalAbout.classList.remove("hide");
        passionAbout.classList.add("hide");
        skillsAbout.classList.add("hide");
        hobbiesAbout.classList.add("hide");
    } else if (name === "passionAbout") {
        generalAbout.classList.add("hide");
        passionAbout.classList.remove("hide");
        skillsAbout.classList.add("hide");
        hobbiesAbout.classList.add("hide");
    } else if (name === "skillsAbout") {
        generalAbout.classList.add("hide");
        passionAbout.classList.add("hide");
        skillsAbout.classList.remove("hide");
        hobbiesAbout.classList.add("hide");
    } else {
        generalAbout.classList.add("hide");
        passionAbout.classList.add("hide");
        skillsAbout.classList.add("hide");
        hobbiesAbout.classList.remove("hide");
    }
}

const imgOne = document.getElementById('projectImgOne');
const imgTwo = document.getElementById('projectImgTwo');
const imgThree = document.getElementById('projectImgThree');

imgOne.addEventListener("click", function() {
    window.location.href = "https://trinket.io/python/2699e09ba894";
});

imgTwo.addEventListener("click", function() {
window.location.href = "https://wonderful-wisp-cec105.netlify.app/index.html";
});

imgThree.addEventListener("click", function() {
window.location.href = "https://trinket.io/library/trinkets/1e321a2af7fe";
});











// imgOne.addEventListener("mouseover", function() {
//     imgOne.preventDefault();
// });

