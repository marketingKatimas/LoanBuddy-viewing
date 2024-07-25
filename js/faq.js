const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


function toggleDiv() {
  var div = document.getElementById("faqMoreDiv");
  if (div.style.display === "none") {
      div.style.display = "block";
  } else {
      div.style.display = "none";
  }
}

