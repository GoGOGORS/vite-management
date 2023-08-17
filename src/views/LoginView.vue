<script setup lang="ts">
import {reactive, ref, toRefs} from "vue";
import type {FormRules} from "element-plus";
import Axios from 'axios'


// 数据定义
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  }
})
// 解构，免得每个ruleForm之前都需要手动添加state.
let { ruleForm } = toRefs(state)

// 自定义校验
const validatePass = (rule: unknown, value: string | undefined, callback: (msg?: string | Error)=> void) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

// 校验规则
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [
    { required: true, message: '请输入正确的用户名', trigger: 'blur' },
    { min: 6, max: 15, message: 'Length should be 6 to 15', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 11, message: 'Length should be 6 to 11', trigger: 'blur' },
    // { validator: validatePass, trigger: 'blur' }
  ]
})

let ruleFormRef = ref()

// 登录
const login = () => {
  ruleFormRef.value.validate().then(()=> {
    console.log('校验通过')
    const response = Axios.get('127.0.0.1:7201/test/1')
    console.log(response)
  }).catch(()=> {
    console.log('校验不通过')
  })
}

</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="用户名：" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>

    <el-form-item label="密码：" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="login()">登录</el-button>
      <!--<el-button @click="resetForm(ruleFormRef)">Reset</el-button>-->
    </el-form-item>
  </el-form>
</template>

<style scoped lang="less">

</style>
