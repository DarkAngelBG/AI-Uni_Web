document.addEventListener('DOMContentLoaded', function() {
    showSection(1); // Show the first section by default
});

function showSection(sectionNumber) {
    const sections = document.querySelectorAll('.story-section');
    sections.forEach(section => section.classList.remove('active'));

    const sectionToShow = document.getElementById(`part${sectionNumber}`);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }
}