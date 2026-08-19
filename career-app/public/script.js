document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.options');
  const visibleItems = 3;
  let index = 0;

  function slideCarousel() {
    const offsetPercent = index * (100 / visibleItems);
    track.style.transform = `translateX(-${offsetPercent}%)`;
    index = (index + 1) % (items.length - visibleItems + 1);
  }

  setInterval(slideCarousel, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#image-wrapper img");
  let current = 0;

  function showNextImage() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }

  images[current].classList.add("active");
  setInterval(showNextImage, 3000);
});


  document.getElementById("feedbacklink").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.getElementById("feedbackPopup").style.display = "block";
  });

  function closePopup() {
    document.getElementById("feedbackPopup").style.display = "none";
  }
  document.getElementById("signin").addEventListener("click", function () {
  document.getElementById("signinPopup").style.display = "block";
});

function closeSigninPopup() {
  document.getElementById("signinPopup").style.display = "none";
}

// ✅ Sign In form submit
document.querySelector("#signinPopup form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const dob = document.getElementById("Dob").value;
  const contact = document.getElementById("contactNo").value;
  const email = document.getElementById("emailId").value;

  const res = await fetch("http://localhost:5000/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, dob, contact, email })
  });
  const data = await res.json();
  alert(data.message);
});

// ✅ Feedback form submit
document.querySelector("#feedbackPopup form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("feedbackName").value;
  const email = document.getElementById("feedbackEmail").value;
  const feedback = document.getElementById("feedbackText").value;

  const res = await fetch("http://localhost:5000/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, feedback })
  });
  const data = await res.json();
  alert(data.message);
});
// ✅ Sign In form submit handler
document.getElementById("signinForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // form reload hone se rokta hai

  const name = document.getElementById("Name").value;
  const dob = document.getElementById("Dob").value;
  const contact = document.getElementById("contactNo").value;
  const email = document.getElementById("emailId").value;

  try {
    const res = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, dob, contact, email })
    });
    const data = await res.json();
    alert(data.message); // backend ka response show karega
  } catch (err) {
    console.error("Error:", err);
    alert("Sign In failed. Check console for details.");
  }
});
const careerPages = {
  "engineering": "engine.html",
  "software engineer": "software eng.html",
  "electrical engineer": "electrical.html",
  "mechanical engineer": "mechanical.html",
  "civil engineer": "civil.html",
  "aeronautical engineer": "AERONAUTICAL.html",
  "chemical engineer": "chemical.html",
  "medical": "medical.html",
  "cardiologist": "cardio.html",
  "dentist": "dentist.html",
  "orthopaedist": "ortho.html",
  "dietician": "diet.html",
  "pharmacist": "pharma.html",
  "physiotherapist": "physio.html",
  "government": "gov.html",

  "management": "management.html",
  "public policy and law": "law.html",
  "law": "law.html",
  "commerce": "commerce.html",
  "banking and finance": "commerce.html",
 
};

document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const query = e.target.value.trim().toLowerCase();

    if (careerPages[query]) {
      window.location.href = careerPages[query]; // redirect karega
    } else {
      alert("No career option found for: " + query);
    }
  }
});
