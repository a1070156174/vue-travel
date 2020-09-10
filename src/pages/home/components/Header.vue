<!--
 * @Author: your name
 * @Date: 2020-08-20 22:01:02
 * @LastEditTime: 2020-08-21 20:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travle\src\pages\home\components\Header.vue
-->
<!--  -->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="{name:'City'}">
      <div class="header-right">
        {{this.$store.state.city
        }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  
  data() {
    //这里存放数据
    return {
      
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "../../../assets/styles/varibles.scss";
.header {
  line-height: 0.86rem;
  display: flex;
  background: $bgColor;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
  .back-icon {
    text-align: center;
    font-size: 0.4rem;
  }
}
.header-input {
  flex: 1;
  background: #fff;
  border-radius: 0.1rem;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
  padding-left: 0.2rem;
  margin-left: 0.2rem;
  color: #ccc;
}

.header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
  color: #fff;
  .arrow-icon {
    font-size: 0.18rem;
    margin: -0.05rem;
  }
}
</style>