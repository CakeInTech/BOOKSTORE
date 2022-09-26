const STATUS_CHEKCKED = 'STATUS_CHEKCKED';

const initialbookStatus = [];

const categoriesReducer = (state = initialbookStatus, action) => {
  switch (action.type) {
    case STATUS_CHEKCKED:
      return 'Under Construction ⚒️';

    default:
      return state;
  }
};

export const checkStatus = () => (
  {
    type: STATUS_CHEKCKED,
  });

export default categoriesReducer;
