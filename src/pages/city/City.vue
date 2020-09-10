<!-- xx页面 -->
<template>
  <div class="my_page">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter" ></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange" ></city-alphabet>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import {getCityInfo} from "@/https/api.js"
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    // 这里存放数据
    return {
      cities:{},
      hotCities:[],
      letter: ''
    };
  },
  // 方法集合
  methods: {
     handleLetterChange (letter) {
      this.letter=letter
      
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    getCityInfo({

    }).then(res=>{
    //  console.log(res.data+666)
     let data =res.data
     if(res.ret && data){
       this.cities=data.cities
       this.hotCities=data.hotCities
       
     }
    })
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
