const overall = {
  state: {
    isLoading: false
  },
   mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
};


export default overall;
