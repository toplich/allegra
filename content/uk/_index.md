---
title:
date: 2025-07-19
type: landing

sections:
- block: slider
  content:
    slides:
      - title: Allegra — інтеграція через зустрічі
        content: Знайди свій клуб, познайомся з новими людьми та допоможи формувати Швейцарію майбутнього.
        align: center
        background:
          image:
            filename: hero-slide1.png
            filters:
              brightness: 0.6
          position: center
          color: '#000'

      - title: Творчість разом
        content: Фотографія, кулінарія чи мови — відкрий для себе наші різноманітні клуби.
        align: left
        background:
          image:
            filename: hero-slide2.png
            filters:
              brightness: 0.6
          position: center
          color: '#111'

      - title: Для місцевих і новоприбулих
        content: Наші клуби об'єднують людей незалежно від походження чи мови.
        align: right
        background:
          image:
            filename: hero-slide3.png
            filters:
              brightness: 0.5
          position: center
          color: '#222'
        link:
          icon: users
          icon_pack: fas
          text: Детальніше
          url: atelier
  design:
    is_fullscreen: true
    interval: 5000
    loop: true

- block: collection
  content:
    title: Unsere Ateliers
    subtitle: Kreative Clubs für alle
    text: |
      Egal ob Fotografie, Spiele, Kochen oder Sprachen – hier findest du deinen Platz.
    count: 6
    page_type: atelier
  design:
    view: card
    columns: "3"

- block: collection
  content:
    title: Impressionen
    subtitle: Einblicke in unsere Begegnungen
    count: 6
    page_type: event
  design:
    view: card
    columns: "3"
---

