/* eslint-disable */
// declare let ruleForm:any;
// declare let submitForm:any;
// declare let rules:any;

// export {}

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     ruleForm:any,
//     // submitForm:any,
//     // rules:any
//   }
// }




declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
