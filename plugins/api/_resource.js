import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config.js'

Vue.use(VueResource)
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.credentials = true;

const Api = {
    get: (request) => Vue.http.get(config.apiHost + request),
    delete: (request) => Vue.http.delete(config.apiHost + request),
    put: (request, data = {}) => Vue.http.put(config.apiHost + request, data),
    post: (request, data = {}) => Vue.http.post(config.apiHost + request, data),
}

export default Api
