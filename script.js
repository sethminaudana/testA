// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the gradient background
function changeGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    const gradient = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;

    // Apply new gradient to the CTA section
    document.querySelector('.cta-section').style.background = gradient;
}

// Change gradient every 5 seconds (5000ms)
setInterval(changeGradient, 5000);

// Optional: Set a random gradient when the page loads
window.onload = changeGradient;
