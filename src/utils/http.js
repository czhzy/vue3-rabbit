//axios的基础封装
import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router  from '@/router'
//配置基地址
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})


//拦截器

// axios请求拦截器
http.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401错误拦截
  //清楚数据
  //跳转登录页
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }
    return Promise.reject(e)

    //错误提示由响应式拦截器实现

  })


export default http