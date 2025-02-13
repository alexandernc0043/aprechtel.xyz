// Initial check
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (window.innerWidth < 768) {
        footer.innerHTML = `<p>Created by Alexander Prechtel<br><a href="https://www.linkedin.com/in/alexander-prechtel-b4a0a9283/" target="_blank">LinkedIn</a> || <a href="https://github.com/alexandernc0043" target="_blank">Github</a> || <a href="https://github.com/alexandernc0043/aprechtel.xyz" target="_blank">Source Code</a></p>`
    } else {
        footer.innerHTML = `<p>Created by Alexander Prechtel || <a href="https://www.linkedin.com/in/alexander-prechtel-b4a0a9283/" target="_blank">LinkedIn</a> || <a href="https://github.com/alexandernc0043" target="_blank">Github</a> || <a href="https://github.com/alexandernc0043/aprechtel.xyz" target="_blank">Source Code</a></p>`
    }
});