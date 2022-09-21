// Header nav links change active
const linkContainer = document.getElementsByClassName("nav_header");
const links = linkContainer[0].getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Footer nav links change active
const linkContainerFooter = document.getElementsByClassName("nav_footer");
const linksFooter = linkContainerFooter[0].getElementsByClassName("link_footer");
for (let i = 0; i < linksFooter.length; i++) {
  linksFooter[i].addEventListener("click", function(e) {
    e.preventDefault()
    let current = document.getElementsByClassName("active");
    current[1].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

//Validate email
const emailField = document.getElementById("email-input");
const button = document.getElementsByClassName("footer_button");

button[0].addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {  
  } else {
    emailField.className = "error"
    button[0].className += " error"
  }
});

emailField.addEventListener("input", (e) => {
  emailField.classList.remove("error");
  button[0].classList.remove("error");
})
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//number limit
function numberLimit (number_amount, limit) {
  var t = typeof number_amount === "string" ? document.querySelector (number_amount) : number_amount,
  f = function (e) {
      var v = t.value.split ("");
      if (v.length > limit) {
            t.value = v.slice(0, limit).join("");
      }
  };
  t.addEventListener ("input", f);
}
window.addEventListener ("load", function () {
  numberLimit("#number_amount", 4);
})


