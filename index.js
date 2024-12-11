
// Menu Bar

document.addEventListener('DOMContentLoaded', function() {
    let sidemenu = document.querySelector(".nav-links"); 
    let isMenuOpen = false; 

    function toggleMenu() {
        if (isMenuOpen) {
            sidemenu.style.display = "none";
        } else {
            sidemenu.style.display = "block";
        }
        isMenuOpen = !isMenuOpen; 
    }

    document.querySelector(".fa-bars").onclick = toggleMenu;
});

// // Dashboard
// document.getElementById("profile-img").addEventListener("click", function() {
//     var menu = document.getElementById("profile-menu");
//     menu.classList.toggle("show");
// });

// Error MSG

const passwordInput = document.querySelector('#psd1');
const confirmPasswordInput = document.querySelector('#psd2');
const msg1 = document.querySelector('.msg1');

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        msg1.innerText = "Password do not match";
    } else {
        msg1.innerText = " ";
    }
});














