import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        storedUser: localStorage.getItem('user') || null
    }),
    getters: {
        user: state => {
            if (!!state.storedUser) {
                return JSON.parse(state.storedUser);
            }
            return state.storedUser;
        },
        userIsAuth: state => !!state.accessToken
    },
    actions: {
        storeLoggedInUser(token, user) {
            const _this = this;

            // Save the token to localStorage
            localStorage.setItem('accessToken', token.accessToken);

            // Save the token to localStorage
            localStorage.setItem('refreshToken', token.refreshToken);

            // Save the user to localStorage
            const stringifiedUser = JSON.stringify(user);
            localStorage.setItem('user', stringifiedUser);

            // Save the token and user to the store ktate
            _this.accessToken = token.accessToken;
            _this.refreshToken = token.refreshToken;
            _this.storedUser = stringifiedUser;
        },
        logout() {
            const _this = this;
            // Remove the token to localStorage
            localStorage.removeItem('accessToken');

            // Remove the token to localStorage
            localStorage.removeItem('refreshToken');

            localStorage.removeItem('user')
            _this.accessToken = null;
            _this.refreshToken = null;
            _this.storedUser = null;
        }
    }
});