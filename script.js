document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;


    function adjustLayout() {
        if (window.innerWidth >= 768) {

            body.classList.add("desktop-layout");
        } else {

            body.classList.remove("desktop-layout");
        }
    }


    adjustLayout();


    window.addEventListener("resize", adjustLayout);

    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
