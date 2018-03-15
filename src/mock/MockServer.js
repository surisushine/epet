import Mock from 'mockjs'

import msite from './msite.json'

//顶部导航栏数据
Mock.mock('/headermenus', {code: 0, data: msite.menus})

//获取所有静态图片资源
const staticImgs = msite.datas.filter( item => item.type_name === "图片轮播广告")

//获取首页大轮播的图片
const lunboImgs = staticImgs.filter( item => item.index === "3160")
Mock.mock('/lunboimgs', {code: 0, data: lunboImgs[0].value})

//hotType 10个
const hotTypeMenus = msite.datas.filter( item => item.index === "3162")
Mock.mock('/hottypes', {code: 0, data: hotTypeMenus[0].menus})

//获取除轮播图片以外的图片
const otherImgsObject = staticImgs.filter(item => {
  return item.index !== "3160" && item.index !== "3171"
})
const otherImgsArr = otherImgsObject.map(item => item.value[0].image)
Mock.mock('/otherimgs', {code: 0, data:otherImgsArr})

//获取每日惊喜模块数据
const dailySale = msite.datas.filter( item => item.index === "3164")[0]
Mock.mock('/dailysale', {code: 0, data:dailySale})
console.log("otherImgs",dailySale)
