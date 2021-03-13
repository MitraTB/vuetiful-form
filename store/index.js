import axios from 'axios';
export const state = () => ({
  user: {
    firstName: '',
    lastName: '',
    email: '',
    love: 'fun',
    telephone: '',
    website: ''
  }
});
export const mutations = {
  updateUser(state, user) {
    state.user = user;
  }
};
export const actions = {
  getLoggedInUser({ commit }) {
    axios.get('http://localhost:8000/user')
      .then((response) => {
        console.log('-----------------------hello', response.data);
        commit('updateUser', response.data)
      })
  },
  updateUserData(context, payload) {
    const userCopy = {...context.state.user};
    userCopy[payload.property] = payload.value;
    context.commit('updateUser', userCopy);
    }
};
