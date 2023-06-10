const form = document.querySelector('form')
const span = document.querySelector("#contact-section")

const firstName = document.querySelector(".first-name")
const middleName = document.querySelector(".middle-name")
const lastName = document.querySelector(".last-name")
const contactNumber = document.querySelector(".contact")
const select = document.querySelector("#relation")





 
function saveContact(e) {
    e.preventDefault()

  
    if(contactNumber.value.length!=10){
        document.querySelector(".error").innerHTML = "please Enter 10 digits number"
    }
     else{
        document.querySelector(".error").innerHTML = ""
    
        const div =document.createElement("div")
    
        div.className = "savedetails"
        console.log(div);
    
        div.innerHTML = `
    
        <div class="card__content">${firstName.value} ↓ </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">Name :- ${firstName.value} ${middleName.value}  ${lastName.value}</li>
    
                <li class="list-group-item">Number :- ${contactNumber.value} </li>
    
                <li class="list-group-item">Relation :- ${select.value} </li>
            </ul>
        </div>
        <div class="icon-section">
    
            <a href="" target="_blank"><img src="./image/home-189.svg" alt=""></a>
            <a href="https://web.whatsapp.com/" target="_blank"><img src="./image/whatsapp-logo-2449.svg" alt=""></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="./image/facebook-logo-2867.svg" alt=""></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src="./image/linkedin-logo-2430.svg" alt=""></a>
    
        </div>
        <button class="btn-delete">
            DELETE
        </button>
    
                 
                 `
    
        span.appendChild(div)
    
        form.reset()
        savaData()
    }



    
}

form.addEventListener("submit" , saveContact)



function deletecard(e) {
    if (e.target.className.includes("btn-delete")) {
        e.target.parentElement.remove();
        savaData()

    }


}

span.addEventListener("click" , deletecard)



function savaData() {
    localStorage.setItem("save", span.innerHTML);
  
}
function showtask() {
    span.innerHTML = localStorage.getItem("save");

   
}
showtask()