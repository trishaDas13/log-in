let btn = document.querySelector('button');
let input = document.querySelectorAll('input');
let validName = document.querySelector('.usernameP');
let validPassword = document.querySelector('.passwordP');

//todo ---------- validate Username ----------
function validateUsername(text){
    
    if(text.length < 8){
        validName.innerText = "Length of Username should be greater than 8 characters"
        validName.style.color = "rgb(200,0,0)";
        validName.style.textShadow="2px 2px 8px black"
    }
    let flagNum = false;
    let flagChar = false;

    if(!(text.charCodeAt(0) >= 65 && text.charCodeAt(0) <= 90)){
        validName.innerText = "First Letter of your Username should be capital"
        validName.style.color = "rgb(200,0,0)";
        validName.style.textShadow="2px 2px 8px black"
    }

    for(let i=0; i < text.length; i++){
        let ch = text.charCodeAt(i);
        if(ch >= 48 && ch <= 57){
            flagNum = true;
        }
    }   
    for(let i=0; i < text.length; i++){
        let ch = text.charCodeAt(i);
        if((ch >= 32 && ch <= 47) || (ch >= 58 && ch <= 64) ||(ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126)){
            flagChar = true;
        }
    }  

    if(flagNum == false){
        validName.innerText = "Username should contain numbers"
        validName.style.color = "rgb(200,0,0)";
        validName.style.textShadow="2px 2px 8px black";
    }
    if(flagChar == false){
       validName.innerText = "Username should contain special characters"
        validName.style.color = "rgb(200,0,0)";
        validName.style.textShadow="2px 2px 8px black";
    }
    if(flagNum == true && flagChar == true){
        validName.innerText = "User name is valid ✔"
        validName.style.color = "rgb(97,229,41)";
        validName.style.textShadow="2px 2px 8px black"
    }
}

//todo ---------- validate Password ----------
function validatePassword(password){
    if(password.length < 8 || password.length > 20){
        validPassword.innerText = "Invalid Password - password length should be between 8 and 20 characters"
        validPassword.style.color = "rgb(200,0,0)";
        validPassword.style.textShadow="2px 2px 8px black"
    }
    else{
        for(let i=0; i < password.length; i++){
            let ch = password.charCodeAt(i);

            if(!((ch >= 32 && ch <= 47)|| (ch >= 58 && ch <= 64) || (ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126))){
                validPassword.innerText = "Invalid Password - password should contain special characters"
                validPassword.style.color = "rgb(200,0,0)";
                validPassword.style.textShadow="2px 2px 8px black"
            }
            else{
                validPassword.innerText = "Password is valid ✔"
                validPassword.style.color = "rgb(97,229,41)";
                validPassword.style.textShadow="2px 2px 8px black"
            }
        }
    }
}

//todo ---------- Activate the alert function ----------
btn.addEventListener('click', function(e){
    e.preventDefault();
    let text = input[0].value;
    let password = input[1].value;

    validateUsername(text);
    validatePassword(password);

    if(text == "" && password == ""){
        alert(`Please enter your name and password.`);
        return;
    }
    else if(text == ""){
        alert('Please enter your name.');
        return;
    }
    else if(password == ""){
        alert('Please enter your password.');
        return;
    }
    else{
        alert(`
        Your User Name is: ${text} 
        Your Password: ${password}
    `);
    return;
    }
});