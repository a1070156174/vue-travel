<!-- xx页面 -->
<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <router-link
      tag="li"
      class="item border-bottom" 
      v-for="(item,index) in list" 
      :key="index"
      :to="'/detail/'+item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-titlee">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    list: Array,
  },
  data() {
    // 这里存放数据
    return {};
  },
  // 方法集合
  methods: {},
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
@import "~@/assets/styles/mixins.scss";
.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
}
.item-img {
  height: 1.7rem;
  width: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}
.item-tile {
  line-height: 0.54rem;
  font-size: 0.32rem;
  @include ellipsis;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  @include ellipsis;
}
.item-button {
  line-height: 0.044rem;
  margin-top: 0.16rem;
  background-color: #ff9300;
  padding: 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>
