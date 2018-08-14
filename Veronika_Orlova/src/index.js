import User from './user';
import './style.scss';

startProgram();

function startProgram() {
    const user = new User('First','User');
    const userElement = `<div class="user">${user.sayHi()}</div>`;
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = userElement;
}