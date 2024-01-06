let form = document.querySelector(".myForm");

let emp_id = document.querySelector("#emp_id");
let emp_name = document.querySelector("#emp_name");
let emp_email = document.querySelector("#emp_email");
let emp_contact = document.querySelector("#emp_contact");
let emp_experience = document.querySelector("#emp_experience");
let emp_role = document.querySelector("#emp_role");

let arr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let experience = '';
    

    // check employe experience based on this 

    if (emp_experience.value <= 2) {
        experience = "fresher";
    }else if(emp_experience.value <= 5){
        experience = "junior"
    }else{
        experience = "senior"
    }
    
    const userInformation = {
        emp_id:emp_id.value,
        emp_name:emp_name.value,
        emp_email:emp_email.value,
        emp_contact:emp_contact.value,
        emp_experience:experience,
        emp_role:emp_role.value
    }


    arr.push(userInformation);

    showData(arr)

    emp_id.value = ""
    emp_name.value=""
    emp_email.value=""
    emp_contact.value=""
    emp_experience.value=""
})


function showData(arr) {
    
    let tbody = document.querySelector("tbody");

    let row = document.createElement("tr")
    let emp_id = document.createElement("td")
    let emp_name = document.createElement("td")
    let emp_email = document.createElement("td")
    let emp_contact = document.createElement("td")
    let emp_role = document.createElement("td")
    let emp_experience = document.createElement("td")

    let more = document.createElement("td");
    let moreButton = document.createElement("button");
    
    moreButton.innerText = "delete"
    moreButton.classList.add("deleteClass");
    more.append(moreButton);

    arr.forEach(e => {
        emp_id.innerHTML = e.emp_id
        emp_name.innerHTML = e.emp_name
        emp_email.innerHTML = e.emp_email
        emp_contact.innerHTML = e.emp_contact
        emp_experience.innerHTML = e.emp_experience
        emp_role.innerHTML = e.emp_role


        row.append(emp_id, emp_name, emp_email, emp_contact, emp_experience, emp_role, more)

        tbody.append(row)
    })
}