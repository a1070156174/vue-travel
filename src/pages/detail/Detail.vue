<!-- xx页面 -->
<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import { getDetailInfo } from "../../https/api.js";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    // 这里存放数据
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
    };
  },
  // 方法集合
  methods: {
    // getDetailInfo () {
    //   axios.get('/api/detail.json', {
    //     params: {
    //       id: this.$route.params.id
    //     }
    //   }).then(this.handleGetDataSucc)
    // },
    // handleGetDataSucc(res) {
      
    //   res = res.data;
    //   if (res.ret && res.data) {
    //     const data = res.data;
    //     this.sightName = data.sightName;
    //     this.bannerImg = data.bannerImg;
    //     this.gallaryImgs = data.gallaryImgs;
    //     this.list = data.categoryList;
    //   }
    // },
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    getDetailInfo({
      // id: this.$route.params.id,
    }).then((res) => {
        // console.log('res.data'+res.data.sightName)
     
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    });
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
.content {
  height: 50rem;
}
</style>
