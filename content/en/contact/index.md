---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: >-
        Do you have questions, suggestions, or would you like to get involved? We look forward to hearing from you!
      email: info@allegra-march.ch
      phone: +41 79 123 45 67
      address:
        street: Example Street 1
        city: Zurich
        region: ZH
        postcode: '8000'
        country: Switzerland
        country_code: CH
#      coordinates:
#        latitude: '47.3769'
#        longitude: '8.5417'
#      directions: Visits by appointment only. Please contact us in advance.
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
#      appointment_url: 'https://calendly.com/allegra'
      autolink: true

  - block: markdown
    content:
      title: Contact Form
      subtitle: "Visits by appointment only. Please contact us in advance."
      text: >
        <div class="centered-form">
          <form method="POST" action="/api/contact">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required class="form-control">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
        <script>
        if (new URLSearchParams(window.location.search).get("sent")) {
          alert("Thank you for your message!");
        }
        </script>
---

