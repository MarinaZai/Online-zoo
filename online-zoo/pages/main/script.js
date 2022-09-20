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
  linksFooter[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 
