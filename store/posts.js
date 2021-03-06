import axios from "axios";

export const state = () => ({
    list: [],
    post: {}
})

export const mutations = {
    SET_POSTS (state, posts) {
        state.list = posts
    },
    SET_POST (state, post) {
        state.post = post
    }
}

export const actions = {
    async GET_POSTS ({commit}) {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        commit('SET_POSTS', data)
    },
    async GET_POST ({commit}, id) {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        commit('SET_POST', data)
    }
}