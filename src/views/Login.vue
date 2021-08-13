<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <!-- logo image -->
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../../public/cookie.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          <slot name="headline">登陆到饼图站</slot>
        </h2>
      </div>
      <form @submit.prevent="submitForm" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <!-- account -->
          <div>
            <input
              required
              v-model="user_info.username"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="*账号"
            />
          </div>
          <!-- password -->
          <div>
            <input
              v-model="user_info.password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:ring-1
                focus:z-10
                sm:text-sm
              "
              placeholder="*密码"
            />
          </div>
          <!-- register code -->
          <div>
            <input
              v-model="user_info.code"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:ring-1
                focus:z-10
                sm:text-sm
              "
              placeholder="注册码"
            />
          </div>
        </div>

        <!-- remember & forget -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="
                h-4
                w-4
                text-indigo-600
                focus:ring-indigo-500
                border-gray-300
                rounded
              "
              v-model="user_info.remember"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              记住我
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              本站不提供密码找回功能，不要学UDK姐贵哦w
            </a>
          </div>
        </div>

        <!-- login button -->
        <div>
          <button
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <slot name="button">登陆</slot>
          </button>
        </div>
      </form>
    </div>
  </div>
  {{ userStatus }}
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch } from "vue";
import { showMessageBox } from "../utils/utils";
import { useStore } from "vuex";
import { GlobalProp } from "@/store/props";
import { LOGIN_ACTION, REGISTER_ACTION } from "@/store/type";
import router from "@/router";

export default defineComponent({
  setup() {
    const store = useStore<GlobalProp>();
    const userStatus = computed(() => store.state.use_status_prop);
    const user_info = reactive({
      username: "",
      password: "",
      code: "",
      remember: false,
    });
    watch(
      () => userStatus.value.isLogin,
      (n, o) => {
        if (n) {
          setTimeout(() => {
            showMessageBox(
              {
                timeout: 1000,
                type: "成功",
                message: "登陆成功！",
                show: true,
              },
              store
            );
            router.replace("/index?keyword=all&pn=1&type=all");
          }, 1100);
        }
      }
    );
    const submitForm = () => {
      if (!user_info.username || !user_info.password) {
        showMessageBox(
          {
            timeout: 1500,
            message: "请填写用户名和密码！",
            type: "错误",
            show: true,
          },
          store
        );
        return;
      }
      if (user_info.code) {
        store.dispatch(REGISTER_ACTION, user_info);
        setTimeout(() => (user_info.code = ""), 300);
      } else {
        console.log(user_info);
        store.dispatch(LOGIN_ACTION, user_info);
      }
    };
    return {
      submitForm,
      user_info,
      userStatus,
    };
  },
});
</script>

<style scoped>
</style>