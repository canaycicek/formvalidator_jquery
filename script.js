const isEmail = function(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return pattern.test(email)
}

const alertText = function(email, telephone, password, rePassword) {
    var errormessage = ""

    if($(email).val() == ""){
        errormessage += "<p>Email alanı zorunlu alan</p>"
    }

    if(isEmail($(email).val()) == false){
        errormessage += "<p>E-mail alanı düzgün girilmedi</p>"
    }

    if($.isNumeric($(telephone).val()) == false || $(telephone).val().length < 11){
        errormessage += "<p>Geçerli telefon numarası girilmedi</p>"
    }

    if($(telephone).val() == ""){
        errormessage += "<p>Telefon alanı zorunlu alan</p>"
    }

    if($(password).val() == ""){
        errormessage += "<p>Password alanı zorunlu alan</p>"
    }

    if($(rePassword).val() == ""){
        errormessage += "<p>Re-Password alanı zorunlu alan</p>"
    }else{
        if($(rePassword).val() == $(password).val()){
            errormessage += " "
        }else{
            errormessage += "<p>Parola alanları eşleşmiyor</p>"
        }
    }

    if(errormessage !== ""){
        $("#error").html(errormessage)
    }
}



$(function () {
    $("#save").click(function () { 
        alertText("#email", "#phone", "#password", "#repassword")
    });
});