//购物车模块
import {defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import {insertCartAPI,findNewCartListAPI,delCartAPI} from '@/apis/cart'

export const useCartStore = defineStore('cart' ,() => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    //定义state数据
    const cartList = ref([])
    //2.action方法
    const addCart = async (goods) => {
        const {skuId,count} = goods
        if(isLogin.value){
            //接口
            await insertCartAPI({skuId,count})
            updateNewList()
        }else{
        //添加购物车
        //添加过的数量加一，没有就push
        const item = cartList.value.find((item) => goods.skuId===item.skuId)
        if(item){
            item.count +=goods.count
        }else{
            cartList.value.push(goods)
        }
        }
    }
    const delCart = async (skuId) => {
        if(isLogin.value){
            //登录后的删除操作
            await delCartAPI([skuId])
            updateNewList()
        }else{
            const index = cartList.value.findIndex((item) =>skuId===item.id)
            cartList.value.splice(index,1)
        }
    }
    const updateNewList = async ()=>{
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    //清除购物车
    const clearCart = () =>{
        cartList.value=[]
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        console.log(selected);
        item.selected = selected
    }
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
      }
    //计算属性
    //商品总数
    const totalcount =  computed(() => cartList.value.reduce((s,n) =>s+n.count,0))
    //商品总价
    const totalprice =  computed(() => cartList.value.reduce((s,n) =>s+n.count*n.price,0))
    //全选属性
    const isAll = computed(()=>cartList.value.every((item)=> item.selected))
    //选择的数量
    const selectedCount = computed(()=>cartList.value.filter(item => item.selected).reduce((s,n) =>s+n.count,0))
    //选择的价格
    const selectedPrice = computed(()=>cartList.value.filter(item => item.selected).reduce((s,n) =>s+n.count*n.price,0))
    return {
        cartList,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart,
        updateNewList,
        totalprice,
        totalcount,
        isAll,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true,
  }
)