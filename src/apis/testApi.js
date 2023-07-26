import http from "@/utils/http";

export function test(){
    return http({
        url: 'home/category/head'
    })
}

