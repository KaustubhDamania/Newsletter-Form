/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")
const success = document.getElementById('success')
const button = document.getElementById('submit')
const input_group = document.getElementById('input-group')
const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("email: ", email.value)
    email.value = email.value.trim()
    if (!email_regex.test(email.value)){
        document.getElementById('error').style.visibility = "visible";
        return;
    }
    document.getElementById('error').style.visibility = "hidden";
    button.classList.add('none')
    email.classList.add('none')
    input_group.style.flexDirection = "row-reverse";
    success.classList.remove('none')
    setTimeout(() => {
        button.classList.remove('none')
        email.classList.remove('none')
        input_group.style.flexDirection = "row";
        success.classList.add('none')
    }, 2000)
})

