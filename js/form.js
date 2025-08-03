document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const fb = document.getElementById("form-feedback");
  const start = performance.timing.navigationStart;

  // Fallback to German if formLang not defined
  const t = window.formLang || {
    wait: "Bitte warten...",
    success: "Danke!",
    error: "Fehler beim Senden",
    errormsg: "Fehler:"
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();

    if (document.getElementById("honeypot").value) return;

    if (Date.now() - start < 1000) {
      alert(t.wait);
      return;
    }

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const payload = {
      name: data.name,
      email: data.email,
      telefon: data.telefon,
      message: data.message,
      from_name: data.from_name,
      from_email: data.from_email,
      to_email: data.to_email,
      subject: data.subject,
    };

    try {
      const resp = await fetch("https://misty-cake-336e.v-stepchuk.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const text = await resp.text();
      fb.style.display = "block";
      fb.textContent = resp.ok ? t.success : `${t.errormsg} ${text}`;
      fb.style.color = resp.ok ? "green" : "red";
      if (resp.ok) form.reset();
    } catch (err) {
      fb.style.display = "block";
      fb.style.color = "red";
      fb.textContent = `${t.errormsg} ${err.message}`;
    }
  });
});

