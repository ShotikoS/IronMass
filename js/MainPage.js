var Navbar = [
    {
        Link: "#",
        Text: "Home"
    },
    {
        Link: "#",
        Text: "Classes"
    },
    {
        Link: "#",
        Text: "Coaches"
    },
    {
        Link: "#",
        Text: "Blog"
    },
    {
        Link: "#",
        Text: "Contacts"
    }
]

var AboutPrograms = [
    {
        LiClassName: "BasicCrossfit",
        ProgramTitle: "Basic Crossfit",
        ProgramDetailsBTN: "Program Details" 
    },
    {
        LiClassName: "FitnessStudio",
        ProgramTitle: "Fitness Studio",
        ProgramDetailsBTN: "Program Details" 
    },
    {
        LiClassName: "Yoga",
        ProgramTitle: "Yoga Classes",
        ProgramDetailsBTN: "Program Details" 
    },
    {
        LiClassName: "PersonalTraining",
        ProgramTitle: "Personal Training ",
        ProgramDetailsBTN: "Program Details" 
    }
]

var CoachesARRAy = [
    {
        ImageClass: "DominicSnyder",
        trainerinfo: "trainerinfo",
        trainerName: "Steven Ayokee",
        TrainerPosition: "OWNER/HEAD COACH",
        AboutTrainer: "12 Years ago I lost 80lbs with the help of a personal coach and it completely changed my way of life. Since then, it’s been my mission to sway other people to do CrossFit.",
        socialLink: "#",
        socialLogoFB: '<a href="#"><i class="fab fa-facebook-f"></i></a>',
        socialLogoTWT: '<a href="#"><i class="fab fa-twitter"></i></a>',
        socialLogoINST: '<a href="#"><i class="fab fa-instagram"></i></a>'
    },
    {
        ImageClass: "StevenAyokee",
        trainerinfo: "trainerinfo",
        trainerName: "DOMINIC SNYDER",
        TrainerPosition: "COACH",
        AboutTrainer: "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury will serving in Iraq.",
        socialLink: "#",
        socialLogoFB: '<a href="#"><i class="fab fa-facebook-f"></i></a>',
        socialLogoTWT: '<a href="#"><i class="fab fa-twitter"></i></a>',
        socialLogoINST: '<a href="#"><i class="fab fa-instagram"></i></a>'
    },
    {
        ImageClass: "JulieCollins",
        trainerinfo: "trainerinfo",
        trainerName: "Julie Collins",
        TrainerPosition: "COACH",
        AboutTrainer: "I initially took on CrossFit trainings after a spending a lifetime in professional athletics. The fact that I loved sports so much contributed a lot to my decision.",
        socialLink: "#",
        socialLogoFB: '<a href="#"><i class="fab fa-facebook-f"></i></a>',
        socialLogoTWT: '<a href="#"><i class="fab fa-twitter"></i></a>',
        socialLogoINST: '<a href="#"><i class="fab fa-instagram"></i></a>'
    },
    {
        ImageClass: "VirgilCook",
        trainerinfo: "trainerinfo",
        trainerName: "VIRGIL COOK",
        TrainerPosition: "COACH",
        AboutTrainer: "Virgil has been training amateur and professional combat athletes since 1995. His skill-set expands to the following combat styles: MMA fighting, Brazilian…",
        socialLink: "#",
        socialLogoFB: '<a href="#"><i class="fab fa-facebook-f"></i></a>',
        socialLogoTWT: '<a href="#"><i class="fab fa-twitter"></i></a>',
        socialLogoINST: '<a href="#"><i class="fab fa-instagram"></i></a>'
    }  
];

function CoachesLi(){
    for(let i = 0; i < 4; i++){
        let coacherLi = document.createElement("li");
        let coacherInfo = document.createElement("div");
        let coacherImg = document.createElement("img")
        let coacherInfo__container = document.createElement("div")
        //Coacher container paragraphs
        let coacherName = document.createElement("p");
        let coacherPosition = document.createElement("p");
        let aboutCoacher = document.createElement("p");
        let coacherSocialUl = document.createElement("ul");
        let coacherFB = document.createElement("li");
        let coacherTWT = document.createElement("li");
        let coacherINST = document.createElement("li");
        //innertext
        coacherName.innerText = CoachesARRAy[i].trainerName;
        coacherPosition.innerText = CoachesARRAy[i].TrainerPosition;
        aboutCoacher.innerText = CoachesARRAy[i].AboutTrainer;
        //append child elements
        coacherSocialUl.className = "Social";
        coacherFB.innerHTML = CoachesARRAy[i].socialLogoFB;
        coacherTWT.innerHTML = CoachesARRAy[i].socialLogoTWT;
        coacherINST.innerHTML = CoachesARRAy[i].socialLogoINST;
        coacherSocialUl.appendChild(coacherFB);
        coacherSocialUl.appendChild(coacherTWT);
        coacherSocialUl.appendChild(coacherINST);
        //add classnames
        coacherInfo.className = "trainerinfo";
        coacherName.className = "trainerName";
        coacherImg.className = CoachesARRAy[i].ImageClass;
        coacherPosition.className = "TrainerPosition";
        aboutCoacher.className = "AboutTrainer";
        coacherInfo__container.className = "trainerInfo__container dark";
        coacherInfo.appendChild(coacherName);
        coacherInfo.appendChild(coacherPosition);
        coacherInfo.appendChild(aboutCoacher);
        coacherInfo.appendChild(coacherSocialUl);
        coacherInfo__container.appendChild(coacherInfo);
        coacherLi.appendChild(coacherImg);
        coacherLi.appendChild(coacherInfo__container);
        document.getElementById("coaches").appendChild(coacherLi);
    }
}


//function for navbar Ul li
function Fill__UlList(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let create_Li = document.createElement("li");
        let create_a = document.createElement("a");
        create_a.href = arr[i].Link;
        create_a.innerText = arr[i].Text;
        document.getElementById(ID__Name).appendChild(create_Li).appendChild(create_a);
    }
};

function FillProgramList(Arr, ID__Name){
    for(let i = 0; i < Arr.length; i++){
        let create_Li = document.createElement("li");
        let ProgramTitle = document.createElement("p");
        let ProgramDetails = document.createElement("button");
        ProgramTitle.className = "ProgramTitle";
        ProgramDetails.className = "ProgramDetails";
        create_Li.className = Arr[i].LiClassName;
        ProgramDetails.innerText = Arr[i].ProgramDetailsBTN;
        ProgramTitle.innerText = Arr[i].ProgramTitle;
        create_Li.appendChild(ProgramTitle);
        create_Li.appendChild(ProgramDetails);
        document.getElementById(ID__Name).appendChild(create_Li)
    }
}

//search box show hide function
$(document).ready(function(ClickID, ResultID){
    $(".ShowHideSearch").click(function(){
        $(".searchContainer").animate({
            width: "toggle"
        })
    })
})

$(document).ready(function(ClickID, ResultID){
    $(".bar").click(function(){
        $(".navigation").animate({
            height: "toggle"
        })
    })
})



Fill__UlList(Navbar, "Navigation");

FillProgramList(AboutPrograms, "AboutPrograms");

CoachesLi();