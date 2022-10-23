import { createStore } from 'redux';

const $count = document.querySelector('.count');
const $add = document.querySelector('.add');
const $minus = document.querySelector('.minus');


const INITIAL_STATE = 0;

const COUNT_ADD = 'ADD';
const COUNT_MINUS = 'MINUS';
const COUNT_RESET = 'RESET';

const createActionType = (type) => ({ type });

const countActionMap = {
  [COUNT_ADD]: (count) => {
    return count + 1;
  },
  [COUNT_MINUS]: (count) => {
    return count - 1;
  },
  [COUNT_RESET]: () => {
    return INITIAL_STATE;
  }
}

const countReducer = (count = INITIAL_STATE, action) => countActionMap[action.type]?.(count) ?? count;

const countStore = createStore(countReducer);

const handleAdd = () => {
  countStore.dispatch(createActionType(COUNT_ADD));
}

const handleMinus = () => {
  countStore.dispatch(createActionType(COUNT_MINUS))
}

const handleReset = () => {
  countStore.dispatch(createActionType(COUNT_RESET));
}

const onChangeCount = () => {
  $count.textContent = countStore.getState();
}


$add.addEventListener('click', handleAdd);
$minus.addEventListener('click', handleMinus);

countStore.subscribe(onChangeCount);

handleReset();

