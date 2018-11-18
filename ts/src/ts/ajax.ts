// interface AjaxOptions {
//     url: string,
//     type: string,
//     data: object,
//     success(data: object):void
// }

// function ajax(options: AjaxOptions) {

// }

// ajax({
//     url: 'http://www.baidu.com',
//     type: 'get',
//     data: {},
//     success(){

//     }
// })

interface Point {
    readonly x: number,
    y: number,
    [propName: string]: any
}

let ptt: Point = {
    x: 10,
    y: 10
}

// ptt.x = 11

let ppt1 :Point = {
    x: 10,
    y: 11,
    z: 12
}