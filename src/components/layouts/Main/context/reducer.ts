import { EMainContextConsts } from "./constants";
import type { IInitialState, IReducerActions } from "./ts";

const initialStateIsClicked = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  clicked: false,
};

export const reducer = (
  state: IInitialState,
  action: IReducerActions
): IInitialState => {
  switch (action.type) {
    case EMainContextConsts.SET_CURRENT_COLOR_MODE:
    case EMainContextConsts.SET_CURRENT_THEME_MODE:
    case EMainContextConsts.SET_THEME_SETTINGS:
    case EMainContextConsts.SET_IS_MOBILE_OR_TABLET: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case EMainContextConsts.SET_DYNAMICALLY_IMPORTED_LIB: {
      return {
        ...state,
        dynamicallyImportedLibs: {
          ...state.dynamicallyImportedLibs,
          ...action.payload,
        },
      };
    }
    // case EMainContextConsts.SET_IS_CLICKED: {
    // 	return {
    // 		...state,
    // 		isClicked: {
    // 			...initialStateIsClicked,
    // 			[action.payload.isClickedItem]: true,
    // 		},
    // 	};
    // }
    default:
      return state;
  }
};
