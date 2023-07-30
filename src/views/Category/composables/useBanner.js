import { ref,onMounted } from 'vue'
import {gethomeapi} from '@/apis/home'

export function useBanner () {
    const homeList = ref([])
    const getbanner = async () => {
    const res = await gethomeapi({distributionSite:'2'})
    homeList.value = res.result
    console.log();
    }
    onMounted(() => {
        getbanner()
    })
    return {
        homeList
      }
}