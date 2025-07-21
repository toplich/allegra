document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
      const response = await fetch("https://misty-cake-336e.v-stepchuk.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        feedback.style.display = "block";
        feedback.style.color = "green";
        feedback.textContent = "Vielen Dank für Ihre Nachricht!";
        form.reset();
      } else {
        const err = await response.text();
        feedback.style.display = "block";
        feedback.style.color = "red";
        feedback.textContent = "Fehler beim Senden: " + err;
      }
    } catch (error) {
      feedback.style.display = "block";
      feedback.style.color = "red";
      feedback.textContent = "Es gab ein Problem: " + error.message;
    }
  });
});

