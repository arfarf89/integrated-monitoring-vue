<template>
  <div id="app">
    <el-menu mode="horizontal" :router="useRouter">
      <el-menu-item index="/" class="brand">통합관제 VueJS</el-menu-item>

      <el-submenu index="/auth">
        <template slot="title">권한관리</template>
        <el-menu-item index="/auth/account">계정관리</el-menu-item>
        <el-menu-item index="/auth/group">권한그룹관리</el-menu-item>
      </el-submenu>

      <el-submenu index="/fee">
        <template slot="title">배송비관리</template>
        <el-menu-item index="/fee/share">요금분배관리</el-menu-item>
        <el-menu-item index="/fee/distancepricing">거리별요금관리</el-menu-item>
        <el-menu-item index="/fee/extra">할증관리</el-menu-item>
      </el-submenu>

      <el-submenu index="/business">
        <template slot="title">업체관리</template>
        <el-menu-item index="/business/partner">파트너관리</el-menu-item>
        <el-menu-item index="/business/agent">라이더관리</el-menu-item>
        <el-menu-item index="/business/company">본사/상점관리</el-menu-item>
      </el-submenu>

      <el-submenu index="/monitoring">
        <template slot="title">관제/관리</template>
        <el-menu-item index="/business/company">할증관리</el-menu-item>
      </el-submenu>

      <el-submenu index="/payment">
        <template slot="title">결제관리</template>
        <el-menu-item index="/business/company">할증관리</el-menu-item>
      </el-submenu>

      <el-submenu index="/bootake">
        <template slot="title">부탁해!</template>
        <el-menu-item index="/bootake-a"><a href="http://live.bootake.com/" target="_blank">부탁해! Live</a></el-menu-item>
        <el-menu-item index="/bootake-b"><a href="http://bootake.com/member" target="_blank">부탁해! 멤버</a></el-menu-item>
        <el-menu-item index="/bootake-c"><a href="http://bootake.com/seller" target="_blank">부탁해! 셀러</a></el-menu-item>
        <el-menu-item index="/bootake-d"><a href="http://bootake.com/admin" target="_blank">부탁해! 어드민</a></el-menu-item>
      </el-submenu>

    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      useRouter: true,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
