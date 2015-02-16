<ul class="post-list">
    {% for post in site.posts limit:page.postLimit %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="post-date">({{ post.date | date: "%b %-d, %Y" }})</span>
            {{ post.excerpt }}
        </li>
    {% endfor %}
</ul>
