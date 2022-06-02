const home = document.getElementById('HOMEBtn');
const signUpBtn = document.getElementById('signUpBtn');
const assignments = document.getElementById('assignmentsBtn');
const verifyDiv = document.getElementById('verify');

home.click();

const scrambler = ['!', ',', '.', ';', ':', '@', '#', '$', '%', '^', '&', '*', '(', ')', ']', '}', '[', '{', 'A', 'b', 'f', 'Z', 'x'];
 
 function hide(elem){
    elem.style.display="none";
 }

function show(elem) {
    elem.style.display = 'block'
}

 function verify(evt, Tabname) {
    const vInput = document.getElementById('vInput');
    const password = scrambler[1] + scrambler[3] + scrambler[14] + scrambler[4] + scrambler[22];
    const passw0rd = scrambler[2] +scrambler[22] + scrambler[17] + scrambler[16];
    const v = document.getElementById('v');
    if (v.value == password) {
        hide(verifyDiv);
    }
    /*😂*/
    if (vInput.value == passw0rd.charAt(2) + passw0rd.charAt(4) + password.charAt(1) + password.charAt(3) + passw0rd.charAt(0)) {
        hide(verifyDiv);
    }
 }

 function createAgentId(){
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var agency = document.getElementById('agency').value;
    var codeName = document.getElementById('codeName').value;
    var country = document.getElementById('country').value;
    var birthdate = document.getElementById('birthDate').value;
    var gender = document.getElementById('gender').value;
    let agentId = firstName.charAt(0) + lastName.charAt(0) + '-' + codeName + '-' + birthdate + '.' + agency;
    alert('Your agentId is: ' + agentId + 'Save this somwhere safe and then click OK');
 }

 function load() {
    document.querySelector(".loader").classList.remove("loader--hidden");
        setTimeout(hideLoader, 2000);
        document.getElementById("pop-up").style.display = "none";
        return true;
  }

 window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    setTimeout(function() {  loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
    });}, 1000);
  });

  function hideLoader() {
    document.querySelector(".loader").classList.add("loader--hidden");
    return true;
  }

function finish() {
    if (document.getElementById('agree').checked) {
        alert('You have offically joined ' + document.getElementById('agency').value + '!');
        hide(document.getElementById('agreementDiv'));
        signUpBtn.click();
    }
    else {
        alert('Please agree and consent to the terms and conditions!')
    }
}

function openTab(evt, tabName) {
    if(tabName != 'Sign-UpTab') {
        show(verifyDiv);
        verify(evt, tabName);
    }

    else {
        hide(verifyDiv);
        var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    load();
    }
  }