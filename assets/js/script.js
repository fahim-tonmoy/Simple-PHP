document.addEventListener('DOMContentLoaded', () => {
    let links = document.querySelectorAll(".delete");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => {
            if(!confirm("Are you sure?")) {
                e.preventDefault();
            }
        })
        
    }
});