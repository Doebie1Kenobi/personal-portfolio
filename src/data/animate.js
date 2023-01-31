const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-graphic');
            console.log('Setting to show!');
        }else {
            entry.target.classList.remove('show-graphic');
            console.log('removing show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-graphic');
hiddenElements.forEach((el) => observer.observe(el));