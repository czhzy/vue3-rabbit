//首页相关接口
import http from "@/utils/http";

export function getcategroyapi(){
    return http({
        url:'/home/category/head'
    })
}