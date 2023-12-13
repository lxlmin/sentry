import Vue from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: "https://21da16202224cf22967383bef5198a29@o4506386918932480.ingest.sentry.io/4506386975490051",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


new Vue({
  render: h => h(App),
}).$mount('#app')
