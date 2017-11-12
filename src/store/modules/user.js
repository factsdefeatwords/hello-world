import { login, logout, getInfo ,register,message,getPhone,realName,realNameSuccess,redBag,bankCard} from '@/api/login';
import { getToken, setToken, removeToken } from '@/fetch/auth';

const user = {
  state: {
    token: getToken(),
    login: '',
    userInfo:[],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_LOGIN: (state,login) => {
      state.login = login;
    },
    SET_USER_INFO: (state,userInfo) => {
      state.userInfo = userInfo;
    }

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {

      return new Promise((resolve, reject) => {
        login(userInfo.phoneNumber,userInfo.passWord,userInfo.captch).then(response => {
          const data = response;
          if(response.code !=-1){
            setToken(data.msg);
          }

          resolve(response);
        }).catch(error => {
          reject(error);

        });
      });
    },



    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          commit('SET_USER_INFO', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_USER_INFO', []);
          commit('SET_TOKEN', '');
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER_INFO', []);
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },


  }
};

export default user;
