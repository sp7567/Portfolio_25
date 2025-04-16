$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
    
        // Create a new FormData object
        var formData = new FormData(document.getElementById("contact-form"));
        
        // Add the recipient email to the form data
        formData.append("to_email", "shreyash.padase@mitaoe.ac.in");
    
        emailjs.sendForm('contact_service', 'template_contact', formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    
        event.preventDefault();
    });
    
    
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Shreyash Padase";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "PCB designing", "robotics enthusiasts", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });








// // 
// let isVerified = false;
// const encodedAdminMobile = btoa("7709472811");

// // Functionality for Update Resume Button
// document.getElementById('updateResumeBtn').addEventListener('click', function() {
//   document.getElementById('registerSection').style.display = "block";  // Show registration box after clicking the update button
// });

// function registerUser() {
//   const username = document.getElementById("regUsername").value;
//   const password = document.getElementById("regPassword").value;

//   if (username && password) {
//     localStorage.setItem("validUsername", username);
//     localStorage.setItem("validPassword", password);
//     alert("User registered! Now login.");
//     document.getElementById("registerSection").style.display = "none";
//     document.getElementById("loginSection").style.display = "block";
//   } else {
//     alert("Please enter both username and password.");
//   }
// }

// function verifyUser() {
//   const storedUser = localStorage.getItem("validUsername");
//   const storedPass = localStorage.getItem("validPassword");
//   const inputUser = document.getElementById("username").value;
//   const inputPass = document.getElementById("password").value;

//   if (inputUser === storedUser && inputPass === storedPass) {
//     if (!isVerified) {
//       document.getElementById("adminVerifyModal").style.display = "block";
//     } else {
//       showResumePanel();
//     }
//   } else {
//     alert("Invalid credentials ❌");
//   }
// }

// function checkAdminMobile() {
//   const enteredMobile = document.getElementById("adminMobileInput").value;
//   if (btoa(enteredMobile) === encodedAdminMobile) {
//     isVerified = true;
//     alert("Admin verified ✅");
//     document.getElementById("adminVerifyModal").style.display = "none";
//     showResumePanel();
//   } else {
//     alert("Incorrect admin number ❌");
//   }
// }

// function showResumePanel() {
//   document.getElementById("registerSection").style.display = "none";
//   document.getElementById("loginSection").style.display = "none";
//   document.getElementById("adminVerifyModal").style.display = "none";
//   document.getElementById("resumeSection").style.display = "block";
//   document.getElementById("resumeButtonsSection").style.display = "block";
// }

// function viewResume() {
//   const fileInput = document.getElementById("resumeUpload");
//   const resumeView = document.getElementById("resumeView");
//   const file = fileInput.files[0];

//   if (file) {
//     // Check if the file is a PDF
//     if (file.type === "application/pdf") {
//       const reader = new FileReader();
//       reader.onload = function(event) {
//         const fileURL = event.target.result;
//         resumeView.innerHTML = `<iframe src="${fileURL}" width="100%" height="500px"></iframe>`;
//       };
//       reader.readAsDataURL(file);  // Convert the file to a data URL
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   } else {
//     alert("No file uploaded.");
//   }
// }

// function deleteResume() {
//   document.getElementById("resumeUpload").value = "";
//   document.getElementById("resumeView").innerHTML = "";
//   alert("Resume deleted.");
// }