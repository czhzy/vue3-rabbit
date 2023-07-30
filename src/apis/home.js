//主页相关接口
import http from "@/utils/http";

export function gethomeapi(params = {}){
   const { distributionSite = '1' } = params
    return http({
        url:'/home/banner',
        params: {
          distributionSite
        }
    }
    )
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return http({
      url:'/home/new'
    })
  }

  export const getHotAPI = () => {
    return  http({
        url: 'home/hot'
    })
  }

  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}