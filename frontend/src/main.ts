import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import { useUserStore } from './stores/user'
import { useToast } from './composables/useToast'

import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

const app = createApp(App)

const pinia = createPinia()
// 注意顺序：先装 pinia，再装 router。
// 路由守卫里要用 user store，pinia 没装会直接报 "no active pinia"。
app.use(pinia)
app.use(router)

// 请求层发现 401（登录过期）时会派发这个事件。
// 这里做两件事，缺一不可：
//  ① 清掉本地登录态——只清 token 不够，store 里的 user 还在，
//     路由守卫会认为"已登录"，把用户从登录页又弹回业务页，形成 401 死循环；
//  ② 带着原地址跳登录，登录成功后能回到刚才那一页（J089）。
window.addEventListener('app:unauthorized', () => {
  const userStore = useUserStore(pinia)
  const wasLogin = userStore.isLogin
  userStore.reset()

  const current = router.currentRoute.value
  if (current.name === 'login' || current.name === 'register') return
  if (wasLogin) useToast().toast('登录已过期，请重新登录')
  void router.replace({ name: 'login', query: { redirect: current.fullPath } })
})

app.mount('#app')
