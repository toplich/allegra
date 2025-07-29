---
title:
date: 2025-07-19
type: landing

sections:
- block: slider
  content:
    slides:
      - title: Allegra – Integration durch Begegnung
        content: Finde deinen Club, lerne neue Menschen kennen und gestalte die Schweiz von morgen mit.
        align: center
        background:
          image:
            filename: hero-slide1.png
            filters:
              brightness: 0.6
          position: center
          color: '#000'

      - title: Gemeinsam kreativ sein
        content: Ob Fotografie, Kochen oder Sprachen – entdecke unsere vielfältigen Ateliers.
        align: left
        background:
          image:
            filename: hero-slide2.png
            filters:
              brightness: 0.6
          position: center
          color: '#111'

      - title: Für Einheimische und Zugezogene
        content: Unsere Clubs verbinden Menschen unabhängig von Herkunft oder Sprache.
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
          text: Mehr erfahren
          url: atelier
  design:
    is_fullscreen: true
    interval: 5000
    loop: true

- block: markdown
  content:
    title: Was ist Allegra?
    subtitle: Allegra bringt Menschen zusammen – durch Sprache, Bewegung, Spiel und mehr.
    text: >
      {{< features-grid >}}

- block: collection
  content:
    title: Mitteilungen
    subtitle: Einblicke in unsere Begegnungen
    count: 6
    page_type: news
  design:
    view: card
    columns: "3"
---

