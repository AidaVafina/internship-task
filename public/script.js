document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/analytics') {
        fetch('/api/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data:', data);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error.message);
            });

    }
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    const links = {
        "/": document.getElementById("home-link"),
        "/analytics": document.getElementById("analytics-link"),
    };

    if (links[currentPath]) {
        links[currentPath].classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const timeButtons = document.querySelectorAll(".time-buttons button");

    timeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            timeButtons.forEach((btn) => btn.classList.remove("active"));

            button.classList.add("active");
        });
    });
});

