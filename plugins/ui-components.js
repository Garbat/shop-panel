import Vue from 'vue'
import UiInput from '@/components/ui/BaseInput';
import UiTextarea from '@/components/ui/BaseTextarea';
import UiSelect from '@/components/ui/BaseSelect';


const components = {UiInput, UiTextarea, UiSelect};



Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
