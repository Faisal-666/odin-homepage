import './style.css';

const projectCard = (bgColor) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
        <div class='img-wrapper'>
            <span>screenshoot of project</span>
        </div>

        <div class='desc'>
            <h3>Project name</h3>
            
            <div class='icon-wrapper'>
                <a href="#"><iconify-icon icon="akar-icons:github-fill"></iconify-icon></a>
                <a href="#"><iconify-icon icon="akar-icons:link-out"></iconify-icon></a>
            </div>
        </div>

        <p>Short description of the project. Just a couple sentences will do.</p>
    `;

    card.querySelector('.img-wrapper').style.backgroundColor = bgColor;

    return card;
};

export default projectCard;