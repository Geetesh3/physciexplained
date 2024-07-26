

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

    //Blog Script

});

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUaCyNkpfD9c-vjbKqxS1BINYTO3jDAuk",
  authDomain: "physci-explained.firebaseapp.com",
  projectId: "physci-explained",
  storageBucket: "physci-explained.appspot.com",
  messagingSenderId: "673274288529",
  appId: "1:673274288529:web:550fd728a803370d986230",
  measurementId: "G-3MTVET09BW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

document.addEventListener("DOMContentLoaded", () => {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Fetch blog posts from Firestore
    db.collection('posts').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const post = doc.data();
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
    }).catch(error => console.error('Error fetching blog posts:', error));
});
