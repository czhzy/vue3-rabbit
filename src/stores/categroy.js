import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getcategroyapi } from '@/apis/layout'

export const useCategroyStore = defineStore('categroy', () => {
    //state数据
    const categroyList = ref([])
    //action方法
    const getcategroy =async () => {
      const res = await getcategroyapi()
      categroyList.value = res.result
    }

    return { categroyList,getcategroy }
})
