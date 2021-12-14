import { getDatasFromStorage, initHTML } from './view/show.js';
import { bindDisplayEvent } from './controller/handlers.js';

const init = () => {
  initHTML();
  bindDisplayEvent();
  getDatasFromStorage();
};

init();
