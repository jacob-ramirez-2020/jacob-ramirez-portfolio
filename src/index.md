---
layout: base.njk
title: Home
---

<section id="home" data-aos="fade-up" class="text-center py-12">
  <h1 class="text-5xl font-bold text-primary mb-4">Jacob Ramirez</h1>
  <p class="text-xl text-accent">SCADA Developer | IIoT Architect | Automation Specialist</p>
</section>

<section id="about" data-aos="fade-up" class="py-12">
  <h2 class="text-3xl font-semibold mb-4">About Me</h2>

  <p class="text-gray-300 leading-relaxed mb-4">
    Hi, I'm Jacob Ramirez — SCADA Developer and IIoT Architect.

    I specialize in building next-generation industrial systems that are scalable, secure, and future-ready. With a foundation in Computer Science and a decade of experience in automation, networking, and cloud integration, I deliver solutions that bridge field operations and enterprise systems with cutting-edge technologies like MQTT UNS and IIoT edge devices.
  </p>
  <br>
  <p class="text-gray-300 leading-relaxed italic">
    Always building. Always learning. Always improving.
  </p>
  <div class="mt-8">
  <a href="/aboutme/" class="inline-block mt-4 px-6 py-2 bg-primary text-black font-bold rounded hover:bg-accent transition">
    Read More About Me
    <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
  </a>
  </div>


</section>


<section id="projects" data-aos="fade-up" class="py-12">
  <h2 class="text-3xl font-semibold mb-8">Projects</h2>
  <div class="space-y-6">
    <div>
      <h3 class="text-2xl text-primary font-bold">Modbus to MQTT SparkplugB Gateway</h3>
      <p class="text-gray-400">Python-based industrial gateway that reads Modbus devices and transmits SparkplugB-compliant MQTT payloads. Configurable via web UI, supports buffering and deadband.</p>
      <a href="/projects/modbus-mqtt-sparkplugb/" class="inline-block mt-4 px-6 py-2 bg-primary text-black font-bold rounded hover:bg-accent transition">
        View Project
      </a>               
    </div>
  </div>
</section>

<section id="blog" data-aos="fade-up" class="py-12">
  <h2 class="text-3xl font-semibold mb-4">Latest Blog Posts</h2>
  <div class="space-y-6">
    {% for post in collections.latestBlog %}
      <div>
        <h3 class="text-2xl text-primary font-bold">{{ post.data.title }}</h3>
        <p class="text-gray-400">{{ post.data.description }}</p>
        <a href="{{ post.url }}" class="inline-block mt-4 px-6 py-2 bg-primary text-black font-bold rounded hover:bg-accent transition">
          Read Blog Post
        </a>
      </div>
    {% endfor %}
  </div>
  <a href="/blogs/" class="inline-block mt-6 text-accent hover:underline">View All Blog Posts →</a>
</section>

<section id="resume" data-aos="fade-up" class="py-12">
  <h2 class="text-3xl font-semibold mb-4">Resume</h2>
  <a href="/Jacob_Ramirez_Resume_2025.pdf" download class="px-4 py-2 bg-primary text-black font-bold rounded hover:bg-accent transition">
    Download My Resume
  </a>
</section>

<section id="contact" data-aos="fade-up" class="py-12">
  <h2 class="text-3xl font-semibold mb-4">Contact</h2>
  <p>Email: <a href="mailto:jacob.ramirez.2020@gmail.com" class="text-primary hover:underline">jacob.ramirez.2020@gmail.com</a></p>
  <div class="flex space-x-6 mt-4">
    <a href="https://www.linkedin.com/in/jacob-ramirez-11420194/" target="_blank" class="text-primary hover:underline">LinkedIn</a>
    <a href="https://github.com/jacob-ramirez-2020" target="_blank" class="text-primary hover:underline">GitHub</a>
  </div>
</section>
