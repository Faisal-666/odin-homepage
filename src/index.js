import './global.css';
import 'iconify-icon';
import projectCard from './component/project_card/projectCard.js';

const colorList = ['#9E1C1C', '#7C75CA', '#5E8F4D', '#C363B4', '#D88F39', '#4BA2D2'];
const projectContainer = document.querySelector('main');

colorList.forEach(color => {
    projectContainer.appendChild(projectCard(color));
});