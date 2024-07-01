// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const postsSection = document.getElementById('posts');

    const posts = [
        {
            title: 'Мой первый пост',
            content: 'Это содержимое моего первого поста.'
        },
        {
            title: 'Еще один пост',
            content: 'Вот еще немного контента для моего блога.'
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        postsSection.appendChild(postElement);
    });
});
