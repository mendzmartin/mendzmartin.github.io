---
layout: archive
title: "News"
permalink: /my_pages/news/
author_profile: true
redirect_from:
---

{% include base_path %}

<style>
  :root {
    --card-bg: #ffffff;
    --card-border: #e1e4e8;
    --card-shadow: rgba(0,0,0,0.1);
    --card-text: #333333;
    --card-date: #6a737d;
  }

  /* Colores para Dark Mode */
  @media (prefers-color-scheme: dark) {
    :root {
      --card-bg: #1d1d1d; /* Un gris muy oscuro, casi negro */
      --card-border: #30363d;
      --card-shadow: rgba(0,0,0,0.5);
      --card-text: #f0f6fc;
      --card-date: #8b949e;
    }
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .news-card {
    border: 1px solid var(--card-border);
    border-radius: 12px; /* Un poco más redondeado queda más moderno */
    overflow: hidden;
    transition: all 0.3s ease;
    background-color: var(--card-bg);
    color: var(--card-text);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px var(--card-shadow);
    border-color: #00367b; /* Resalta el borde al pasar el mouse */
  }

  .news-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-bottom: 1px solid var(--card-border);
  }

  .news-content {
    padding: 16px;
    flex-grow: 1;
  }

  .news-date {
    font-size: 0.75rem;
    color: var(--card-date);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .news-title {
    font-size: 1.2rem;
    margin: 8px 0;
    color: #00367b; /* Podés cambiarlo a var(--card-text) si querés que cambie en darkmode */
    font-weight: 600;
  }

  /* Ajuste para que el texto de descripción también cambie */
  .news-card p {
    color: var(--card-text);
    opacity: 0.9;
    line-height: 1.4;
  }
</style>

<div class="news-grid">

  <a href="{{ base_path }}/documents/news/january_2026_internship_chile.html" style="text-decoration: none; color: inherit;">
    <div class="news-card">
      <img src="{{ base_path }}/documents/news/figures/2026_summer_internship_chile_01.jpeg" class="news-image" alt="Chile Internship">
      <div class="news-content">
        <div class="news-date">JANUARY 2026</div>
        <div class="news-title">Summer Internship in Chile</div>
        <p style="font-size: 0.9em;">Research stay at the University of Chile studying intense non-Gaussian quantum light.</p>
      </div>
    </div>
  </a>

  <a href="{{ base_path }}/documents/news/april_2026_simons_balseiro.html" style="text-decoration: none; color: inherit;">
    <div class="news-card">
      <img src="{{ base_path }}/documents/news/figures/2026_simons_balseiro_07.jpeg" class="news-image" alt="Balseiro Internship">
      <div class="news-content">
        <div class="news-date">APRIL 2026</div>
        <div class="news-title">Research Stay at Instituto Balseiro</div>
        <p style="font-size: 0.9em;">Research stay at the Instituto Balseiro studying cavity quantum electrodynamics.</p>
      </div>
    </div>
  </a>

</div>