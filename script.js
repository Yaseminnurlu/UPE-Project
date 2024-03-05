const name = document.getElementById("name");
name.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/yasemin-nurluoglu-a32b70264/")
})
const buttonbio = document.getElementById("biography");
buttonbio.addEventListener("click", function(){
    document.getElementById("main").innerHTML = `
    <img src = "Photo_me.png" height = "400"/>
    <p id="intro"> Hi, my name is Yasemin. I am Turkish student at Boston University and am a sophomore. 
    I am a double major in Pure Mathematics and Computer Science and minoring in Women, 
    Gender, and Sexuality studies. My preference of math topics are probability and calculus and 
    learning Java for computer science.
    </p> `;
})
const buttonextra = document.getElementById("Extracurricular");
buttonextra.addEventListener("click", function(){
    document.getElementById("main").innerHTML = `
    <img src = "AWM_profile.png" height = "300"/>
    <p id="extracur"> I am the current secretary for Association for Women in Mathematics chapter at
     BU. I am also a member of Students for Reproductive Freedom club and WICS (Women in Computer Science). 
     I am a sister at OPHIA, a community service sorority. I also volunteer independently at Rosie’s place,
    a local homeless women’s shelter at Boston, and Chinatown Main Street, an NGO at Boston.
    </p>  `;
})
const buttonexp = document.getElementById("Experience");
buttonexp.addEventListener("click", function(){
    document.getElementById("main").innerHTML = `
    <p id="Exp"> I have experience with Python and Java. I am currently learning the coding languages; assembly and C. 
    I am also a substitute teacher at Rosie’s place working at the Computer Lab, teaching people 
    how to use basic computer functions.
    </p>  `;
})

const buttonpro = document.getElementById("Project");
buttonpro.addEventListener("click", function(){
    document.getElementById("main").innerHTML = `
    <img src = "GitHub-logo.png" height = "200" id = "GitPic"/>

    <p id="Pro"> A project that I have made is for the final of my CS111 class (python coding). 
    This project was to create a board game of 8 puzzles. We were given the constructor for eight_puzzle but we 
    made our own process file function. We used a skeleton code and our own functions to create our game.

    You can acces my github SSH code by clicking on the GitHub logo!
     `;
     const pic =  document.getElementById("GitPic");
pic.addEventListener("click", function(){
    window.open("git@github.com:Yaseminnurlu/Project.git");
})


})


