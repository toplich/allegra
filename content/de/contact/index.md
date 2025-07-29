---
title: Kontakt
date: 2022-10-24
type: landing

sections:
  - block: markdown
    content:
      title: Kontakt
      subtitle: Haben Sie Fragen, Anregungen oder möchten Sie mitmachen? Wir freuen uns auf Ihre Nachricht!
      text: >
        <link rel="stylesheet" href="/css/contact.css">
        <div class="contact-container">
          <div class="contact-left">
            {{< contact-info >}}
          </div>
          <div class="contact-right">
            {{< simpleform >}}
          </div>
        </div>

        <script>
          window.formLang = {
            wait: "Bitte warten...",
            success: "Danke!",
            error: "Fehler beim Senden",
            errormsg: "Fehler:",
            invalid: "Ungültige Eingabe"
          };
        </script>
        <script src="/js/form.js"></script>
---


