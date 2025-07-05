
const hamburger = document.querySelector('.hamburger');
const sidebar=document.querySelector(".phoneNav");

  

// Open sidebar
hamburger.addEventListener('click', () => {
sidebar.classList.add('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
const isClickInside = sidebar.contains(e.target) || hamburger.contains(e.target);
if (!isClickInside) {
    sidebar.classList.remove('open');
}
});
const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.querySelector('input').value;
    console.log('Searching for:', query);
};

document.querySelectorAll('#desktopSearchInput, #phoneSearchInput').forEach(input => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            handleSearch(event);
        }
    });
});

function toggleDropdownFreelance() {
      document.getElementById("feature-dropdownMenu-freelance").classList.toggle("show");
}
function toggleDropdownSell() {
      document.getElementById("feature-dropdownMenu-sell").classList.toggle("show");
} 
function toggleDropdownCustom() {
      document.getElementById("feature-dropdownMenu-custom").classList.toggle("show");
}
function toggleDropdownDesign() {
      document.getElementById("feature-dropdownMenu-design").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(e) {
    if (!e.target.matches('.feature-dropdown-button') && !e.target.closest('.feature-dropdown-button')) {
    var dropdowns = document.getElementsByClassName("feature-dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("show");
        }
    }
}

 const scrollContainer = document.getElementById("categoryScroll");

  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });


function toggleMarketText(){
    const text = document.getElementById("marketplaceText");
    const arrow = document.getElementById("marketArrow");
     if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "inline";
    arrow.innerText = "^"; // You can also use ">" if you prefer
  } else {
    text.style.display = "none";
    arrow.innerText = "›";
  }
}
const marketPlaceButton=document.getElementById("marketplaceButton");

marketPlaceButton.addEventListener("click", ()=>{
    toggleMarketText();
})

