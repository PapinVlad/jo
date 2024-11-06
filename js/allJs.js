 const elements = document.querySelectorAll('b');

 
 //
 //The function of the appearance and disappearance of a word
 //
setInterval(() => {
    elements.forEach((element) => {
        if (element.classList.contains('is-visible')) {
            element.classList.remove('is-visible');
            element.classList.add('is-hidden');
        } 
        else {
            element.classList.remove('is-hidden');
            element.classList.add('is-visible');
        }
    });
}, 5000);


//
//slider
//
//
const slider = document.querySelector(".slides");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("pointerdown", (e) => {
	isDown = true;
	slider.classList.add("dragging");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener("pointerleave", () => {
	isDown = false;
	slider.classList.remove("dragging");
});
slider.addEventListener("pointerup", () => {
	isDown = false;
	slider.classList.remove("dragging");
});
slider.addEventListener("pointermove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#services-nav .nav-link');
    const tabPanes = document.querySelectorAll('#services-content .tab-pane');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target').substring(1);

            // Remove active classes from all links and panes
            navLinks.forEach(function(nav) {
                nav.classList.remove('active');
                nav.setAttribute('aria-selected', 'false');
            });

            tabPanes.forEach(function(pane) {
                pane.classList.remove('active', 'show');
            });

            // Add active class to the clicked link
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Add active class to the target pane
            const targetPane = document.getElementById(targetId);
            targetPane.classList.add('active', 'show');
        });
    });
});


//
//modal iframe google maps (jQuery)
//
//

const openModalBtn = document.getElementById('open-modal');
const modalOverlay = document.getElementById('modal-overlay');

openModalBtn.addEventListener('click', function() {
  modalOverlay.classList.add('show');
});



$(document).ready(function() {
    $('#open-modal').on('click', function() {
        $('#modal-overlay').addClass('show');
    });

    $('#modal-overlay').on('click', function(event) {
        if (event.target === this) {
            $(this).removeClass('show');
        }
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });
});


//
// emailJS API
//
//
function sendEmail(e) {
    e.preventDefault(); 
  
    
    var templateParams = {
      from_name: document.querySelector('input[name="name"]').value,
      telephone: document.querySelector('input[name="telephone"]').value,
      package: document.querySelector('select[name="nubexSelect"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };
  
    
    emailjs.send('service_4iovkfb', 'template_2wzrzmg', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been sent successfully!');
       document.getElementById('contactform').reset(); 
    }, function(error) {
       console.log('FAILED...', error);
       alert('An error occurred while sending the message. Please try again later.');
    });
  }
  
  