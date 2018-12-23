window.addEventListener("load", function () {
    const s = [...document.getElementsByTagName("section")];
    s.forEach(section => section.addEventListener("click", function () {
        s.forEach(section => section.removeAttribute("aria-pressed"));
        section.setAttribute("aria-pressed", "true");
    }));
});
