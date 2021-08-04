<template>
    <div>
        <valid-input :rules="[ { type: 'email', msg: '请检查邮箱格式!' }, { type: 'required', msg: '请填写该字段!' } ]" placeholder="请输入账号" v-model="account" />
        <valid-input :rules="[ { type: 'required', msg: '请填写该字段!' }, { type: 'length', msg: '请检查字段长度!' } ]" placeholder="请输入密码" v-model="password" />
        <p>
            <button @click="submitForm">submit</button>
            <span>{{ result }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import ValidInput from './ValidInput.vue'

import mitt from 'mitt'
export const mitter = mitt();

type vaildFunc = () => Boolean;

export default defineComponent({
  components: { ValidInput },
    setup () {
        let result = ref(false);
        let funcArr: vaildFunc[] = [];

        const callback = (func: any) => {
            funcArr.push(func);
        }

        mitter.on('vaild-input', callback);

        onUnmounted(() => {
            mitter.off('vaild-input', callback);
        })

        const submitForm = () => {
            result.value = funcArr.map(func => func()).every(item => item);
        }

        return {
            account: ref(''),
            password: ref(''),
            submitForm,
            result,
        }
    }
})
</script>

<style scoped>

</style>