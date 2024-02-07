export const intialState = {
  bgImage: "",
  hoverStatus: false,
};

export const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "bgUpdate":
      return { ...state, bgImage: value };
    case "hover":
      return { ...state, hoverStatus: value };
  }
  throw Error('Unknown action: ' + action.type);
};
