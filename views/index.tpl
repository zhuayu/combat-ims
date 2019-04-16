{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
{% endblock %}

{% block content %}

<header class="header">
  <div class="container">
    <div class="logo-container">
      <img class="logo-img" src="/images/logo.png" alt=""/>
    </div>
    <nav>
      <a href="/" class="{% if classify_id == 0 %}active{% endif %}">全部</a>
      {% for val in classifys  %}
        <a class="{% if classify_id == val.id %}active{% endif %}" href="/?classify_id={{val.id}}">{{val.name}}</a>
      {% endfor %}
    </nav>
  </div>
</header>

<div class="news-list">
  <ul>
    {% for val in articles  %}
    <li class="news-item">
      <a href="/article/{{val.id}}" target="_blank">
        <p class="title">{{val.title}}</p>
        <p class="meta">{{val.created_time_display}}</p>
      </a>
    </li>
    {% else %}
      <li class="news-item">
        <p class="meta">没有数据 ～</p>
      </li>
    {% endfor %}
  </ul>
</div>
{% endblock %}

