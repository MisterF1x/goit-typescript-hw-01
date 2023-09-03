import { concatenation } from "./concatenation";

const input = document.querySelector('input');
const btn = document.querySelector('button');
const app = document.querySelector('#app');
let title: null | HTMLHeadingElement  = null;

if (input && btn) {
    btn.addEventListener('click', ()=>{
        if (input.value.trim() === '') {
            return;
        }        
        if (title) {
            app?.removeChild(title);
          }
        title = document.createElement('h2');
        title.textContent= concatenation(input.value, 'hello!');
        app?.append(title);        
        input.value = '';
    })
}