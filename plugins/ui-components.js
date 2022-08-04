import Vue from 'vue'
import UiInput from '@/components/ui/BaseInput';
import UiTextarea from '@/components/ui/BaseTextarea';


const components = {UiInput, UiTextarea};



Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
