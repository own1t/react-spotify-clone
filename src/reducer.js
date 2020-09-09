export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   "BQDw83ZdtLfjXEC6yAtMc7wKNKgjoV7wyiYL6H_ttmY9Ub4iDmlHp9Y5uaKIcRnBSz0c8DFjBmqpvSHc2litSnPBAragcVkXuEI5UJSPFvg8OLJvp76HVR6PuWGWopNCyXsNNvh7F32XVKuKEY1zsNVAWSAkUJImL1ddWU",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
