const profileImage = document.querySelector("#profileImage");
const firstNamespan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnupdateProfile = document.querySelector("#updateBtn")
const isWizard = confirm("Are you a wizard?");


if(isWizard === true){
    console.log("Welcome to hogwarts");


    }
else{
  profileImage.src ="images/image2.jpg";
firstNamespan.innerHTML = "Dudley Dursley";
ageSpan.innerHTML = "12";
statusSpan.innerHTML = "Muggle";
}

btnupdateProfile.addEventListener("click", () => {
profileImage.src ="images/image3.jpg";
firstNamespan.innerHTML = "Lara Croft";
ageSpan.innerHTML = "21";
statusSpan.innerHTML = "Tomb Raider";
});