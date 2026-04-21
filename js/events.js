function hide_pages(page) {
    const pages = document.querySelectorAll(".pages");
    
    // para cada elemento que tem classe .pages, adicione classe .hide
    pages.forEach(p => {
        p.classList.add("hide");
    });

    document.getElementById("page_" + page).classList.remove("hide");
}