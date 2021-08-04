<template>
    <div>
        <input v-bind="$attrs" :value="modelValue" @blur="emitModelValue" />
        <span v-show="!inputRef.passed" style="color: red;">{{ inputRef.msg }}</span>
    </div>
</template>

<script lang="ts">
import mitt from 'mitt'
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { mitter } from './VaildForm.vue'

interface RulesProp {
    type: 'required' | 'email' | 'length',
    msg: string
}

export default defineComponent({
    inheritAttrs: false,
    props: {
        modelValue: String,
        rules: Array as PropType<RulesProp[]>,
    },
    emits: {
        'update:modelValue': null
    },
    setup (props, context) {
        const inputRef = reactive({
            value: '',
            passed: true,
            msg: ''
        })
        const validInput = () => {
            if (props.rules) {
                let passed = true;
                let allPassed = props.rules.every(item => {
                    inputRef.msg = item.msg;
                    switch(item.type) {
                        case 'required':
                            passed = inputRef.value.length > 0;
                            break;
                        case 'length':
                            passed = inputRef.value.length > 5;
                            break;
                        case 'email':
                            passed = inputRef.value.includes('@');
                            break;
                        default: break;
                    }
                    return passed;
                });
                inputRef.passed = allPassed;
            }
        }

        onMounted(() => {
            mitter.emit('vaild-input', validInput);
        })
        
        const emitModelValue = (e: any) => {
            const val = e.target.value;
            inputRef.value = val;
            validInput();
            context.emit('update:modelValue', val);
        }
        
        return {
            emitModelValue,
            inputRef,
        }
    }
})
</script>

<style scoped>

</style>