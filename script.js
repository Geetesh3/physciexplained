

document.oncontextmenu = document.body.oncontextmenu = function () { return true; }

document.addEventListener("DOMContentLoaded", () => {
    const wishMessage = document.getElementById("wishMessage");
    const wishText = document.getElementById("wishText");
    const wishIcon = document.getElementById("wishIcon");
    const hours = new Date().getHours();
    let message, iconClass, colorClass;

    if (hours >= 5 && hours < 12) {
        message = "Good Morning!";
        iconClass = "fas fa-sun";
        colorClass = "morning";
    } else if (hours >= 12 && hours < 18) {
        message = "Good Afternoon!";
        iconClass = "fas fa-cloud-sun";
        colorClass = "afternoon";
    } else if (hours >= 18 && hours < 21) {
        message = "Good Evening!";
        iconClass = "fas fa-cloud-moon";
        colorClass = "evening";
    } else {
        message = "Good Night!";
        iconClass = "fas fa-moon";
        colorClass = "night";
    }

    wishText.textContent = message;
    wishIcon.className = `wish-icon ${iconClass}`;
    wishMessage.classList.add(colorClass);

    setTimeout(() => {
        setInterval(() => {
            wishMessage.classList.toggle("visible");
        }, 2000); // Blink interval in milliseconds (500ms = 0.5 seconds)
    }, 1000); // Initial delay before blinking starts (3000ms = 3 seconds)


});

document.addEventListener("DOMContentLoaded", () => {
    const blogPostsContainer = document.getElementById('blog-posts');

    fetch('classxinotes.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('blog-post');

                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;

                const postContent = document.createElement('p');
                postContent.textContent = post.content;

                const downloadLink = document.createElement('a');
                downloadLink.href = post.download_link;
                downloadLink.textContent = 'Download';
                downloadLink.classList.add('download-link');

                postElement.appendChild(postTitle);
                postElement.appendChild(postContent);
                postElement.appendChild(downloadLink);

                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const blogPostsContainer = document.getElementById('class-Xii-Notes');

    fetch('classxiinotes.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('blog-post');

                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;

                const postContent = document.createElement('p');
                postContent.textContent = post.content;

                const downloadLink = document.createElement('a');
                downloadLink.href = post.download_link;
                downloadLink.textContent = 'Download';
                downloadLink.classList.add('download-link');

                postElement.appendChild(postTitle);
                postElement.appendChild(postContent);
                postElement.appendChild(downloadLink);

                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});
function openTab(event, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content-item");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add 'active' class to the corresponding tab link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Set default active tab
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-link').click();
});