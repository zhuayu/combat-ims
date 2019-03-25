{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
{% endblock %}

{% block content %}
<header class="header">
  <nav class="inner">
    <a href="/" class="{% if classify_id == 0 %}active{% endif %}">全部</a>
    {% for val in classifys  %}
      <a class="{% if classify_id == val.id %}active{% endif %}" href="/?classify_id={{val.id}}">{{val.name}}</a>
    {% endfor %}
  </nav>
</header>

<div class="article-container">
  <div class="article-title">{{article.title}}</div>
  <div class="article-meta">{{article.created_time_display}}</div>
  <div class="article-content">{{article.content | safe }}</div>
</div>
{% endblock %}

