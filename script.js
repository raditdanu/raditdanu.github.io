$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Front-End Dev", "Web Designer", "Web Dev", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Front-End Dev", "Web Designer", "Web Dev", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    // owl carousel script

   

    // $('.carousel').owlCarousel({
    //     margin: 20
        
    //     // loop: true,
    //     // autoplayTimeOut: 2000,
    //     // autoplayHoverPause: true,
    //     // responsive: {
    //     //     0: {
    //     //         items: 1,
    //     //         nav: false
    //     //     },
    //     //     600: {
    //     //         items: 2,
    //     //         nav: false
    //     //     },
    //     //     1000: {
    //     //         items: 3,
    //     //         nav: false
    //     //     }
    //     // }
    // });
});

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();


    // Get input values
    let name = document.querySelector(".name1").value;
    let email = document.querySelector(".email1").value;
    let message = document.querySelector(".message").value;

    // saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}

//Send Email Info
function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "radityadanue@gmail.com",
        Password: "jsaitpsvxpzxamcf",
        To: "radityadanue@gmail.com",
        From: "radityadanue@gmail.com",
        Subject: `${name} Sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

    }).then(message => alert("Mail sent succesfully!"));
    console.log({ name })
}