// Medium RSS feed URL'iniz
const rssUrl = 'https://medium.com/feed/@atalayy56';

// rss2json API üzerinden RSS'i JSON'a çevir
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const postsContainer = document.getElementById('postsContainer');
    // Her bir yazı için kutu oluştur
    data.items.forEach(item => {
        const postBox = document.createElement('div');
        postBox.classList.add('postBox');
        postBox.innerHTML = `
            <a href="${item.link}" target="_blank">${item.title}</a>
            <div class="postSummary">${item.description}</div>
        `;
        postsContainer.appendChild(postBox);
    });
})
.catch(error => console.error('Error:', error));
