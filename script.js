//your JS code here. If required.
let openbtn=document.getElementById("openModal")
        let modal=document.getElementById("myModal")
        let closebtn=document.querySelector(".close-modal")


        openbtn.addEventListener("click",()=>{
            modal.style.display="block";
        });

        closebtn.addEventListener("click",()=>{
            modal.style.display="none"
        });

        window.addEventListener("click",(e)=>{
            if(e.target === modal){
                modal.style.display="none";
            }
        })