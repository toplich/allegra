---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: markdown
    content:
      title: Kontakt
      subtitle: Haben Sie Fragen, Anregungen oder möchten Sie mitmachen? Wir freuen uns auf Ihre Nachricht!
      text: >
        <style>
          .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
          }
          .contact-left, .contact-right {
            flex: 1 1 400px;
            max-width: 500px;
          }
          .contact-left p {
            font-size: 1.1rem;
            line-height: 1.8;
          }
          .contact-left i {
            margin-right: 0.5rem;
            color: #444;
          }
          .form-group {
            margin-bottom: 1rem;
          }
          .btn-primary {
            margin-top: 0.5rem;
          }
        </style>

        <div class="contact-container">

          <div class="contact-left">
            <p>
              <i class="fas fa-envelope"></i> <a href="mailto:info@allegra-march.ch">info@allegra-march.ch</a><br>
              <i class="fas fa-phone"></i> <a href="tel:+41791234567">+41 79 123 45 67</a><br>
              <i class="fas fa-map-marker-alt"></i> Beispielstraße 1, Zürich, ZH 8000<br>
              <i class="fas fa-clock"></i> Montag 10:00 bis 13:00<br>
              <i class="fas fa-clock"></i> Mittwoch 09:00 bis 10:00
            </p>
          </div>

          <div class="contact-right">
            <form method="POST" action="https://misty-cake-336e.v-stepchuk.workers.dev/">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required class="form-control">
              </div>
              <div class="form-group">
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" required class="form-control">
              </div>
              <div class="form-group">
                <label for="message">Nachricht</label>
                <textarea id="message" name="message" rows="5" required class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Absenden</button>
            </form>
          </div>

        </div>

        <script>
        if (new URLSearchParams(window.location.search).get("sent")) {
          alert("Vielen Dank für Ihre Nachricht!");
        }
        </script>
---

