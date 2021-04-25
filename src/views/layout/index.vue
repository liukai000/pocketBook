<template>
  <el-container>
    <el-aside width="200px" class="menuCon">
      <el-menu :default-active="menuIndex" @select="select" class="el-menu-vertical-demo">
        <el-menu-item index="0">
          <i class="el-icon-user-solid"></i>
          <template #title>用户管理</template>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <template #title>统计大盘</template>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <template #title>收入/支出管理</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main{{menuIndex}}</el-main>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    let menuIndex = ref('0');
    const select = (index: any) => {
        menuIndex.value = index
    }
    return {
        select,
        menuIndex,
    }
  },
});
</script>
<style scoped>
.menuCon {
  width: 200px;
  height: 100%;
  background-color: #e5e5e5;
  text-align: center;
  color: #333333;
}
.el-container {
  height: 100%;
}

</style>
