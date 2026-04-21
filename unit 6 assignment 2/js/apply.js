document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let message = document.getElementById("message");
  
    if (username.length < 3) {
      message.style.color = "red";
      message.textContent = "Username must be at least 3 characters.";
      return;
    }
  
    if (password.length < 6) {
      message.style.color = "red";
      message.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    message.style.color = "green";
    message.textContent = "Application submitted successfully!";
  });
  const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});