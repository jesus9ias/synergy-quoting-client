import Vue from 'vue';
import 'quasar/dist/quasar.ie.polyfills';
import '@quasar/extras/mdi-v3/mdi-v3.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import {
  QTd,
  QTh,
  QTr,
  QBtn,
  QIcon,
  QList,
  QCard,
  QItem,
  QStep,
  QMenu,
  QPage,
  QTable,
  QField,
  QInput,
  Dialog,
  Quasar,
  QSelect,
  QLayout,
  QToggle,
  QHeader,
  QDrawer,
  QStepper,
  QToolbar,
  QItemLabel,
  QCardSection,
  QItemSection,
  QToolbarTitle,
  AppFullscreen,
  QPageContainer,
  QStepperNavigation,
} from 'quasar';
import './styles/quasar.styl';

Vue.use(Quasar, {
  config: {},
  components: {
    QTr,
    QTh,
    QTd,
    QBtn,
    QItem,
    QPage,
    QIcon,
    QList,
    QCard,
    QMenu,
    QStep,
    QInput,
    QField,
    QTable,
    QSelect,
    QDrawer,
    QToggle,
    QLayout,
    QHeader,
    QToolbar,
    QStepper,
    QItemLabel,
    QCardSection,
    QItemSection,
    QToolbarTitle,
    QPageContainer,
    QStepperNavigation,
  },
  directives: {},
  plugins: {
    Dialog,
    AppFullscreen,
  },
});
