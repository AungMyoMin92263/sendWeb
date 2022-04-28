import { ToggleMenuAction } from './menuAction';
import { HeaderAction } from './HeaderAction';
import { NavigatorAction } from './NavigatorAction';

export enum ActionTypes {
  toggleMenu,
  headerStatus,
  navStatus
}

export type Action =
  | ToggleMenuAction
  | HeaderAction
  | NavigatorAction
