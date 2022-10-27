//Payments tab 
function openPay(evt, payName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(payName).style.display = "block";
    evt.currentTarget.className += " active";
    
}

//Form validation
$("#validate").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 2
      },
      surname: {
        minlength: 2
      },
     number: {
        digits: true,
        minlength: 6
     },
     code: {
      digits: true,
      minlength: 3
    },
    card: {
      digits: true,
      minlength: 16
    }
      },
    messages: {
      email: {
        required: "Write your email",
        email: "Your email must be in the format of name@domain.com"
      },
      name: {
        required: "Write your name",
        minlength: jQuery.validator.format("Name should be more than 1 symbols"),
      },
      surname: {
        required: "Write your last name",
        minlength: jQuery.validator.format("Name should be more than 1 symbols"),
      }
    },
  });


  function checkEmail() {
    const email = document.getElementById("email");
    if (email.value.includes(".")) {
      document.querySelector('.error-email').innerHTML="";
      email.classList.add("valid")
    return true
      } else {
      document.querySelector('.error-email').innerHTML="Must contain .";
      email.classList.replace("valid", "error");
  }
}

$('input.name').focus(function(){
    $('label.label-name').hide();
});

$('input.surname').focus(function(){
    $('label.label-surname').hide();
});

$('input.secur').focus(function(){
    $('label.label-secur').hide();
});

$('input.email').focus(function(){
  $('label.label-email').hide();
});

$('input.card').focus(function(){
  $('label.label-card').hide();
});

$('input.phone').focus(function(){
  $('label.label-phone').hide();
});

$('input.account').focus(function(){
  $('label.label-account').hide();
});

$('input.account-name').focus(function(){
  $('label.label-account-name').hide();
});

//Dropdown with flags
function showMe(evt) {
  console.log("evt.value ",evt.value);
}
function makeDd() {
  'use strict';
  let json = new Function(`return ${document.getElementById('json_data').innerHTML}`)();

  MsDropdown.make("#json_dropdown", {
    byJson: {
      data: json, selectedIndex:0
    }
  });
}