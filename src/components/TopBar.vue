<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}"
        >MediumClone</router-link
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{name: 'home'}"
            exact
            active-class="active"
            >Home</router-link
          >
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'createArticle'}"
              ><i class="ion-compose"></i>&nbsp;New article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'settings'}"
              ><i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'userProfile', params: {slug: currentUser.username}}"
            >
              <img :src="currentUser.image" class="user-pic" /> &nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{name: 'login'}"
              >Sing In</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{name: 'register'}"
              >Sing Up</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth';
export default {
  name: 'McvTopBar',
  
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
};
</script>
