export const initialState = {
  bgImage: "home",
  navBtn: true,
};

export const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "BG_HOME":
      return { ...state, bgImage: value };
    case "BG_CREW":
      return { ...state, bgImage: value };
    case "BG_DESTINATION":
      return { ...state, bgImage: value };
    case "BG_TECHNOLOGY":
      return { ...state, bgImage: value };
    case "BTN":
      return { ...state, navBtn: !state.navBtn};
  }
  throw Error("Unknown action: " + action.type);
};
