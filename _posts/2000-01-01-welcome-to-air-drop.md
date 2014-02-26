---
layout: blog
title:  "Welcome to Air-Drop!"
---
{% capture lvl %}{{ page.url | append:'index.html' | split:'/' | size }}{% endcapture %}
{% capture baseurl %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Link test: {{ baseurl }}css/screen.css
