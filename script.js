

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
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const blogPostsContainer = document.getElementById('class-Xi-Notes');

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
const firebaseConfig = {
    apiKey: "AIzaSyDcwiDVr2jyTBuxs4tQu6OHvaUfL6NdJFI",
    authDomain: "physciexplained-40f47.firebaseapp.com",
    databaseURL: "https://physciexplained-40f47-default-rtdb.firebaseio.com",
    projectId: "physciexplained-40f47",
    storageBucket: "physciexplained-40f47.appspot.com",
    messagingSenderId: "724802637102",
    appId: "1:724802637102:web:6e796aa81beb6d78113ebf",
    measurementId: "G-VY64VRCS3Z"
  };
// Initialize Firebase
// Book Section Start
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

const form = document.getElementById('new-Book-form');
const postsList = document.getElementById('Book-list');

function renderPosts() {
    postsList.innerHTML = '';
    database.ref('Books').once('value', (snapshot) => {
        const posts = snapshot.val();
        for (let id in posts) {
            const post = posts[id];
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                 ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Image" style="max-width: 100%; height: 320px;">` : ''}<br>
                <p>${post.content}</p><br>
                ${post.fileUrl ? `<a href="${post.fileUrl}" download="file">Download attached file</a>` : ''}
            `;
            postsList.appendChild(postDiv);
        }
    });
}

renderPosts();
// Book Section end

// Marquee Notification 
firebase.initializeApp(firebaseConfig);
// function showNotification(notification, key) {
//     const notificationElement = document.createElement('div');
//     notificationElement.className = 'notification';
//     const date = new Date(notification.date);
//     const formattedDate = date.toLocaleDateString(); // Format date without time
//     notificationElement.innerHTML = `
//              <p>${formattedDate }</p><br>
//         <p> ${ notification.text}</p>
//         ${notification.fileURL ? `<a href="${notification.fileURL}" download="${notification.fileURL.split('/').pop()}">Download Attachment</a>` : ''}
//     `;
//     document.getElementById('notification-area').appendChild(notificationElement);
// }


function showNotification(notification, key) {
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification';
    const date = new Date(notification.date);
    const formattedDate = date.toLocaleDateString(); // Format date without time
    notificationElement.className = 'notification';
        notificationElement.innerHTML = ` <li>${formattedDate}) ${notification.text} `;
    if (notification.fileURL) {
        const fileLink = document.createElement('a');
        fileLink.href = notification.fileURL;
        fileLink.textContent = 'Download Attachment';
        fileLink.download = notification.fileURL.split('/').pop(); // Set the download attribute
        notificationElement.appendChild(fileLink);
    }
    document.getElementById('notification-area').appendChild(notificationElement);
}

database.ref('notifications').on('child_added', function (snapshot) {
    const notification = snapshot.val();
    showNotification(notification);
});

// New Notification 
