const list = document.querySelectorAll(".faq-item");
list.forEach((item) => {
    item.addEventListener("click", () => {
        const icon = item.querySelector(".icon");
        if (item.classList.contains("active")) {
            item.classList.remove("active")
            icon.textContent = "+"
        }else {
            item.classList.add("active")
            icon.textContent = "-"
        }
    })
})