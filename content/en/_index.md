---
title:
date: 2025-07-19
type: landing

sections:
- block: slider
  content:
    slides:
      - title: Allegra – Integration through Connection
        content: Find your club, meet new people, and help shape the Switzerland of tomorrow.
        align: center
        background:
          image:
            filename: hero-slide1.png
            filters:
              brightness: 0.6
          position: center
          color: '#000'

      - title: Be creative together
        content: Whether photography, cooking or languages – discover our diverse clubs.
        align: left
        background:
          image:
            filename: hero-slide2.png
            filters:
              brightness: 0.6
          position: center
          color: '#111'

      - title: For locals and newcomers
        content: Our clubs connect people regardless of origin or language.
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
          text: Learn more
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

