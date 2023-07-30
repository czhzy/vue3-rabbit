import { ref,onMounted } from 'vue'
import { getTopCategoryAPI } from '@/apis/categroy'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategroy(){
    const categroyData = ref({})
    const route = useRoute()
    const getCategroy =async (id = route.params.id) => {
        const res = await getTopCategoryAPI(id)
        categroyData.value = res.result
        console.log(categroyData.value.children);
    }
    onMounted(() => getCategroy())

    onBeforeRouteUpdate((to) => {
    getCategroy(to.params.id)
    })
    return {
        categroyData
    }
}