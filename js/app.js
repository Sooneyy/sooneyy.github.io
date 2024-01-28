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
    
                el.classList.add("skills-item");
                document.querySelector(".skills-items").appendChild(el);
    
                el2.textContent = item.name;
                el2.classList.add("tooltip");
                el2.style.left = item.left + "px";
                el2.setAttribute("aria-hidden", "false");
                el.appendChild(el2);
    
                img.src = `./assets/${item.name}.png`;
                img.alt = item.name;
                el.appendChild(img);

                img.onmouseover = function(){
                    el2.setAttribute("aria-hidden", "true");
                }

                img.onmouseleave = function(){
                    el2.setAttribute("aria-hidden", "false");
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
