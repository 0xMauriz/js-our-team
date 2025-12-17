const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },

  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },

  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },

  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },

  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },

  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }

];

const firstDiv = document.getElementById("firstDiv");
const secondDiv = document.getElementById("secondDiv");

for (let i = 0; i < teamMembers.length; i++) {

  const names = teamMembers[i].name;
  const roles = teamMembers[i].role;
  const emails = teamMembers[i].email;
  const images = teamMembers[i].img;

  const compilerHTML = `
            <div class="d-flex flex-wrap w-30 my-3 gap-3">
                <img class="" src="./${images}" alt="">
                <h3 class="w-100 my-0">${names}</h3>
                <p class="w-100 my-0">${roles}</p>
                <p>${emails}</p>
            </div>`

        secondDiv.innerHTML += compilerHTML;
  
}
