---
title: Контакти
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Контакти
      text: >-
        Маєте запитання, ідеї чи хочете долучитися до нашої діяльності? Ми будемо раді вашому повідомленню!
      email: info@allegra-march.ch
      phone: +41 79 123 45 67
      address:
        street: Вулиця Прикладна 1
        city: Цюрих
        region: ZH
        postcode: '8000'
        country: Швейцарія
        country_code: CH
#      coordinates:
#        latitude: '47.3769'
#        longitude: '8.5417'
#      directions: Відвідування лише за попередньою домовленістю. Зв’яжіться з нами заздалегідь.
      office_hours:
        - 'Понеділок 10:00 – 13:00'
        - 'Середа 09:00 – 10:00'
#      appointment_url: 'https://calendly.com/allegra'
      autolink: true

  - block: markdown
    content:
      title: Форма зворотного зв’язку
      subtitle: "Відвідування лише за попереднім записом. Зв’яжіться з нами заздалегідь."
      text: >
        <div class="centered-form">
          <form method="POST" action="/api/contact">
            <div class="form-group">
              <label for="name">Ім’я</label>
              <input type="text" id="name" name="name" required class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Електронна пошта</label>
              <input type="email" id="email" name="email" required class="form-control">
            </div>
            <div class="form-group">
              <label for="message">Повідомлення</label>
              <textarea id="message" name="message" rows="5" required class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Надіслати</button>
          </form>
        </div>
        <script>
        if (new URLSearchParams(window.location.search).get("sent")) {
          alert("Дякуємо за ваше повідомлення!");
        }
        </script>
---

