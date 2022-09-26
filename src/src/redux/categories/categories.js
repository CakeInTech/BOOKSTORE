const STATUS_CHEKCKED = 'STATUS_CHEKCKED';

const categoriesReducer = (state = initialbookStatus, action) => {
    switch (action.type) {
      case CHECK_STATUS:
        return 'Under Construction ⚒️';

      default:
        return state;
    }
  };

export const checkStatus = () => (
    { 
        type: STATUS_CHEKCKED 
    });

export default categoriesReducer;