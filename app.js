const containers = document.querySelectorAll(".container");
containers.forEach((container)=>{
    container.addEventListener("click",(e)=>{
        containers.forEach((cont)=>{
            cont.classList.remove("expanded");
        })
        e.target.parentNode.classList.add("expanded");
        e.target.parentNode.querySelector("h2").style.opacity = "1";

    })

})