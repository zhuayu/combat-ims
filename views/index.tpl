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

<div class="news-list">
  <ul>
    {% for val in articles  %}
    <li class="news-item">
      <span class="score">{{loop.index}}</span>
      <span class="title"><a href="/article/{{val.id}}" target="_blank">{{val.title}}</a></span>
      <br/>
      <span class="meta">{{val.created_time_display}}</span>
    </li>
    {% endfor %}
  </ul>
</div>
{% endblock %}

