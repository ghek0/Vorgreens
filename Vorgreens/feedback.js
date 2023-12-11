function validate(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var messages=document.getElementById("messages");
    var subs=document.getElementById("subs");



    if(name.value.length<3){
        alert("Name must be atleat 3 characters!");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Your email must be ends with @gmail.com");
    }
    else if(!male.checked&&!female.checked){
        alert("Gender must be selected!");
    }
    else if(messages.value.length<4){
        alert("Messages must be more than 8 characters!");
    }
    else if(!subs.checked){
        alert("You must subscribe to receive notifications!");
    }
    
    else{
        alert("Thank you for your feedback >_<, we will reach you ASAP!");
        window.location.reload(true);
        window.location.href=''
    }
}
