import { combineReducers } from 'redux';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { CartCountInterFace } from '../interfaces/cartCount.interface';
import { HeaderReducers } from './headerReducers';
import { MenuReducers } from './menuReducers';
import { NavigatorReducers } from './navigatorReducers';
import { CartCountReducers } from './cartCountReducers';

export interface StoreState {
    menuState: MenuDataInterFace;
    headerState : HeaderDataInterFace;
    navState : NavigatorDataInterFace;
    cartCount : CartCountInterFace;
}

export const reducers = combineReducers<StoreState>({
    menuState: MenuReducers,
    headerState: HeaderReducers,
    navState : NavigatorReducers,
    cartCount : CartCountReducers,
});
