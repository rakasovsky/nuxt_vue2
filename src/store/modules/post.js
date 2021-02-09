export default {
    actions: {
        // в actions первым параметром всегда является некий контекст, а второй это те данные которые мы передаем.
        // можно так же вместо контекста вызывать различные методы  например async fetchPosts({ commit }), что бы получить в action getter нужно fetchPosts({ commit, getters }),
        // а еще можно вызвать еще один action внутри экшена fetchPosts({ commit, getters, dispatch }) ... dispatch('<название action'a>')
       async fetchPosts(ctx, limit = 3) {
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const posts = await response.json()

            ctx.commit('updatePosts', posts)
        },
        // <название action'a>()
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPost(state){
            return state.posts.filter(post => {
                return post.title && post.body
            })
        },
        allPosts(state) {
            return state.posts
        },
        // внутри getter'a можно принять объект другого getter'a
        // postsCount(state) {
        //     return state.posts.length
        // }
        postsCount(state, getters) {
            return getters.validPost.length
        }
    },
}