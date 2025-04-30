---
layout: base.njk
title: Blog
---

<section class="py-12" data-aos="fade-up">
  <h1 class="text-4xl font-bold mb-8 text-primary">Blog Posts</h1>

  <ul class="space-y-6">
    {% for post in collections.blog %}
      <li>
        <a href="{{ post.url }}" class="text-2xl text-accent font-semibold hover:underline">{{ post.data.title }}</a>
        <p class="text-gray-400 text-sm">Published: {{ post.date | date: "%m/%d/%Y" }}</p>
      </li>
    {% endfor %}
  </ul>
</section>
