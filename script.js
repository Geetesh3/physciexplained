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
        }, 1500); // Blink interval in milliseconds (500ms = 0.5 seconds)
    }, 1000); // Initial delay before blinking starts (3000ms = 3 seconds)
});
