// EXTENSIONS VUE
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createI18n } from 'vue-i18n/index';

// APPLICATION
import App from './App.vue'
import mitt from './mitt.js';
import "./style.scss"

// =====================================================================================
// VIEWS
// =====================================================================================
import GridView from './views/GridView.vue';

// =====================================================================================
// ROUTER
// =====================================================================================
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'grid-view',
        component: GridView
      },
      { 
        path: "/:catchAll(.*)",
        redirect: '/'
      }
      
    ]
});

// =====================================================================================
// TRANSLATIONS
// =====================================================================================
const messages = {
  en: {
    caption: {
      blank: '',
      say_something_else: "Say something else",
      something_is_wrong: "Something is wrong",
    }
  },
  fr: {
    caption: {
      blank: '',
      say_something_else: "Dire autre chose",
      something_is_wrong: "Quelque chose ne va pas",
    }
  }
}


const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});


// =====================================================================================
// VUE INSTANCE AND GLOBAL OBJECTS
// =====================================================================================

const app = createApp(App).use(router).use(i18n);

const ev = mitt();

app.config.globalProperties.$eventHub = ev;

// -----------------------------   PAGE 1A -----------------------------
app.config.globalProperties.$page1a = [
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'say_something_else', next: '$page2' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
];


app.config.globalProperties.$page2 = [
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'something_is_wrong', next: '$page1a' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },

  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
  { title: 'blank', next: 'next_screen' },
];

app.mount('#app');
