<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sing Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Have an account?</router-link>
          </p>
          <McvValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></McvValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                v-model="user.username"
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import McvValidationErrors from '@/components/ValidationErrors';
import {actionTypes} from '@/store/modules/auth';
export default {
  components: {
    McvValidationErrors,
  },
  name: 'McvRegister',
  data() {
    return {
      user: {
        email: '',
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(actionTypes.register, this.user).then((user) => {
        console.log('New user', user);
        this.$router.push({name: 'home'});
      });
    },
  },
};
</script>
