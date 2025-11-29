import {cartList} from './components/cartList.js';
import {RenderHome} from './components/home.js';
import {optionsCategories} from './components/navbar.js';
import {initLocalstorage} from './utils/storage.js';

initLocalstorage();

optionsCategories();
RenderHome();

cartList();
