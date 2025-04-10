const textareas = document.querySelectorAll('.text-input');

textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'; // Expand up to 200px
    });
});
