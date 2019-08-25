import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.teal.base, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.teal.base, // #3F51B5
      },
      dark: {
        primary: colors.teal.base, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.teal.base, // #3F51B5
      }
    }
  },
  
});
