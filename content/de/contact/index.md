---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Kontakt
      text: |-
        Haben Sie Fragen, Anregungen oder möchten Sie mitmachen? Wir freuen uns auf Ihre Nachricht!
      email: info@allegra-march.ch
      phone: +41 79 123 45 67
      address:
        street: Beispielstraße 1
        city: Zürich
        region: ZH
        postcode: '8000'
        country: Schweiz
        country_code: CH
#      coordinates:
#        latitude: '47.3769'
#        longitude: '8.5417'
#      directions: Besuche nur nach Vereinbarung. Bitte kontaktieren Sie uns im Voraus.
      office_hours:
        - 'Montag 10:00 bis 13:00'
        - 'Mittwoch 09:00 bis 10:00'
#      appointment_url: 'https://calendly.com/allegra'
      autolink: true

  - block: markdown
    content:
      title: Kontaktformular
      subtitle: "Besuche nur nach Vereinbarung. Bitte kontaktieren Sie uns im Voraus."
      text: >
        <div class="centered-form">
          <form method="POST" action="/api/contact">
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
        <script>
        if (new URLSearchParams(window.location.search).get("sent")) {
          alert("Vielen Dank für Ihre Nachricht!");
        }
        </script>
---
