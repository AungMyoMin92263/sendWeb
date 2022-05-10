import { ToggleMenuAction } from './menuAction';
import { HeaderAction } from './HeaderAction';
import { NavigatorAction } from './NavigatorAction';
import { CartCountAction } from './CartCountAction';

export enum ActionTypes {
  toggleMenu,
  headerStatus,
  navStatus,
  cartCount
}

export type Action =
  | ToggleMenuAction
  | HeaderAction
  | NavigatorAction
  | CartCountAction
