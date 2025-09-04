function showToast(msg, type="info") {
  const existing = document.querySelector('.rg-toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'rg-toast rg-toast--' + type;
  t.textContent = msg;
  t.style.background = type === 'error' ? '#ffdede' : (type==='success' ? '#eaffef' : '#fff8e6');
  document.body.appendChild(t);
  setTimeout(()=>t.classList.add('rg-toast--visible'),20);
  setTimeout(()=>{ t.classList.remove('rg-toast--visible'); setTimeout(()=>t.remove(),300); },3500);
}
function isValidEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function saveSubmission(key,obj){
  const arr=JSON.parse(localStorage.getItem(key)||"[]");
  arr.push({...obj,createdAt:new Date().toISOString()});
  localStorage.setItem(key,JSON.stringify(arr));
}

window.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Donate form
 // script.js

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle Donate Form
const donateForm = document.getElementById("donateForm");

if (donateForm) {
  donateForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const name = donateForm.name.value.trim();
    const email = donateForm.email.value.trim();
    const phone = donateForm.phone.value.trim();
    const address = donateForm.address.value.trim();
    const details = donateForm.details.value.trim();

    // Validate phone number (10 digits only)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate address (minimum 5 characters for meaningful input)
    if (address.length < 5) {
      alert("Please enter a valid address.");
      return;
    }

    // Validate item details
    if (details.length < 3) {
      alert("Please provide more details about the item.");
      return;
    }

    // If everything is fine
    alert(Thank you, ${name}! Your donation has been submitted.);
    donateForm.reset(); // clear the form
  });
}

  // Request form
  const requestForm = document.getElementById("requestForm");
  if(requestForm){
    requestForm.addEventListener("submit", e=>{
      e.preventDefault();
      const f=e.target, name=f.name.value.trim(), email=f.email.value.trim(), req=f.request.value.trim();
      if(!name){showToast("Enter your name","error");return;}
      if(!isValidEmail(email)){showToast("Invalid email","error");return;}
      saveSubmission("requests",{name,email,req});
      f.reset(); showToast("Request submitted!","success");
    });
  }

  // Contact form
// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default submit

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const age = form.age.value.trim();

  // Simple phone validation: must be 10 digits
  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Age validation: must be between 1 and 120
  if (age < 1 || age > 120) {
    alert("Please enter a valid age between 1 and 120.");
    return;
  }

  // If all checks pass
  alert(Thank you, ${name}! Your message has been sent.);
  form.reset(); // clear form
});
});
