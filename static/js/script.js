document.addEventListener('DOMContentLoaded', function() {
    // Select all skill elements
    const skills = document.querySelectorAll('.skill');

    // Function to set the width of the progress bar
    function updateSkillBar(skill) {
        const progressBar = skill.querySelector('div');
        const percentage = skill.getAttribute('data-skill');
        progressBar.style.width = percentage;
    }

    // Mouse enter event to start the animation
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            updateSkillBar(skill);
        });

        // Optionally reset the bar width when mouse leaves
        skill.addEventListener('mouseleave', () => {
            skill.querySelector('div').style.width = '0';
        });
    });
});
