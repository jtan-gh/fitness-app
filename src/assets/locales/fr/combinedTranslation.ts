import home from './home/hero.json';
import homesection from './home/sections.json';
import contact from './contact/contact.json';
import footer from './footer/footer.json'


const homeTranslations = { ...home, ...homesection, ...contact, ...footer };
export default homeTranslations;