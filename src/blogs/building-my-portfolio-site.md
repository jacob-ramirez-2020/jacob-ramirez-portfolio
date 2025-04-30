---
layout: base.njk
title: "Building My Portfolio Site"
description: "A behind-the-scenes look at how I built nextgenscadaprogrammer.com using Eleventy and Vercel to showcase my projects and technical journey."
tags: 
  - SCADA
  - IIoT
  - Portfolio
  - Web Development
  - Vercel
  - GitHub
  - Personal Projects
  - Eleventy
category: "Projects"
date: "2025-04-30"
---

<section class="py-12" data-aos="fade-up">
  <h1 class="text-4xl font-bold mb-2 text-primary">{{ title }}</h1>
  <p class="text-sm text-gray-400 mb-8">
    Published on {{ page.date | date: "%B %-d, %Y" }}
  </p>
  <p class="text-gray-300 mb-6 leading-relaxed">
    As a SCADA developer and IIoT architect, I’ve worked on large-scale systems and edge-to-cloud solutions — but I never had a proper platform to share those projects publicly. That changed when I launched <a href="https://nextgenscadaprogrammer.com" class="text-primary underline">nextgenscadaprogrammer.com</a>, a portfolio site built specifically to showcase the work I’ve done, the problems I’ve solved, and the tools I’ve built along the way.
  </p>

  <p class="text-gray-300 mb-6 leading-relaxed">
    I didn’t want anything overly complicated. I needed a site that was fast, clean, and developer-friendly. One where I could write in markdown, version control everything in Git, and have full control over deployment and layout. I chose <a href="https://www.11ty.dev/" class="text-primary underline">Eleventy (11ty)</a> as my static site generator and Vercel for deployment.
  </p>

  <p class="text-gray-300 mb-6 leading-relaxed">
    Vercel handles my builds automatically every time I push to GitHub. I also run pre-deploy checks like linters and broken link detection to keep everything clean. The result is a reliable and fast publishing pipeline that feels like a proper CI/CD workflow, without the overhead.
  </p>

  <p class="text-gray-300 mb-6 leading-relaxed">
    The content is organized around three main areas:
  </p>
  <ul class="text-gray-300 mb-6 leading-relaxed list-disc ml-6">
    <li><strong>Projects</strong> – Showcasing what I’ve built, starting with my Modbus to MQTT SparkplugB device</li>
    <li><strong>Blogs</strong> – Technical articles and insights from the field</li>
    <li><strong>About Me</strong> – My background in SCADA and industrial automation</li>
  </ul>

  <p class="text-gray-300 mb-6 leading-relaxed">
    Design-wise, I kept it dark-themed with subtle colors and a mobile-first layout. I added a custom favicon, modern styling, and responsive layouts that work across devices. It’s professional but not flashy — and that’s the point.
  </p>

  <p class="text-gray-300 mb-6 leading-relaxed">
    One of the things I like most is that everything is markdown-based. I can spin up a new blog post or update a project page using a consistent structure, preview locally, and push to GitHub — it’s live in seconds thanks to Vercel.
  </p>

  <p class="text-gray-300 mb-6 leading-relaxed">
    This site isn’t just a portfolio — it’s part of a larger effort to show how modern SCADA development blends software engineering with real-world automation. I want this platform to reflect not just what I’ve done, but where I’m heading.
  </p>

  <h2 class="text-2xl font-bold mt-10 mb-4 text-primary">What’s Next</h2>

  <ul class="text-gray-300 mb-6 leading-relaxed list-disc ml-6">
    <li>Complete my Modbus to MQTT SparkplugB device with:</li>
    <ul class="list-disc ml-6">
      <li>Buffered publishing (store-and-forward)</li>
      <li>TLS cert upload + live config reload</li>
      <li>Encrypted credential handling</li>
    </ul>
    <li>Write more blog posts — aiming for one every 1–2 weeks</li>
    <li>Develop and document more SCADA-related tools and projects</li>
    <li>Enhance the site with better filtering, tagging, and navigation</li>
  </ul>

  <p class="text-gray-300 leading-relaxed">
    I’m excited to continue using this site as a way to share not just finished work, but ideas in progress. If you’re in the SCADA, IIoT, or automation world, I hope it gives you something valuable — or at least sparks an idea.
  </p>

  <p class="text-gray-300 mt-6 italic">
    Until next time, continue coding.
  </p>
</section>
