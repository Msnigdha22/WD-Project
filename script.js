document.addEventListener("DOMContentLoaded", function () {
 
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.background = "#d84315";
            navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        } else {
            navbar.style.background = "#ff5733"; 
            navbar.style.boxShadow = "none";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector("input[type='text']").value.trim();
        let email = document.querySelector("input[type='email']").value.trim();
        if (name === "" || email === "") {
            alert("Please fill in all fields!");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
        } else {
            alert("Thank you for signing up! We'll contact you soon.");
            this.reset(); 
        }
    });

    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});