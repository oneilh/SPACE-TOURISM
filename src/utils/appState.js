export const initialState = {
  bgImage: "",
  hoverStatus: false,
  navBtn: false,
};

export const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "bgUpdate":
      return { ...state, bgImage: value };
    case "hover":
      return { ...state, hoverStatus: value };
    case "btn":
      return { ...state, navBtn: !state.navBtn};
  }
  throw Error("Unknown action: " + action.type);
};
