document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");

    toggle.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
           });

           const currentMode = localStorage.getItem("mode");
           if (currentMode === "dark") {
            document.body.classList.add("dark-mode");
           }
});