window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelectorAll(".info > .buttons > .button-bg > button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".skills-items").innerHTML = "";

            const type = button.dataset.skill;
            const skills = data[type];

            for(let item of skills){
                const el = document.createElement("div");
                const el2 = document.createElement("div");
                const img = document.createElement("img");

                const tooltip = document.querySelector(".tooltip");
    
                el.classList.add("skills-item");
                document.querySelector(".skills-items").appendChild(el);
    
                img.src = `assets/${item}.png`;
                img.alt = item;
                el.appendChild(img);

                img.onmouseover = function(e){
                    document.querySelector(".tooltip").textContent = item;

                    tooltip.setAttribute("aria-hidden", "true");

                    const rect = el.getBoundingClientRect();
                    const x = rect.left - ((tooltip.offsetWidth - rect.width) / 2);
                    const y = rect.top - rect.height + 5;

                    tooltip.style.left = x + "px";
                    tooltip.style.top = y + "px";
                }

                img.onmouseleave = function(){
                    tooltip.setAttribute("aria-hidden", "false");
                }
            }
        })
    })

    document.querySelector("a[data-button='discord']").onclick = () => {
        navigator.clipboard.writeText("sooney");
        document.getElementById("copy").textContent = "Copied!";
    }

    document.querySelector("a[data-button='discord']").onmouseenter = () => {
        document.getElementById("copy").setAttribute("aria-hidden", "true");
        document.getElementById("copy").textContent = "Copy";
    }

    document.querySelector("a[data-button='discord']").onmouseleave = () => document.getElementById("copy").setAttribute("aria-hidden", "false");
});