<script>
// import { log } from "console";
import { h } from "vue";
import Index3Component from '~/components/index3Component.vue';

export default {
  name: "BaseButtons",
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: "justify-start",
    },
    classAddon: {
      type: String,
      default: "mr-3 last:mr-0 mb-3",
    },
    mb: {
      type: String,
      default: "-mb-3",
    },
  },

  setup(props, { slots }) {

    console.log(slots.default());

    const hasSlot = slots && slots.default();

    console.log(Boolean(hasSlot));

    const parentClass = [
      "flex",
      "items-center",
      props.type,
      props.noWrap ? "flex-nowrap" : "flex-wrap",
    ];
    if (props.mb) {
      parentClass.push(props.mb);
    }

    // debugger;

    // console.log(this.$slots, this.$slots.default);

    debugger;
    return h(
      "div",
      { class: parentClass },
      hasSlot
        ? this.$slots.default.map((element) => {
            console.log(element.context.$children);
            // const x = Boolean(element && element.context.$children);
            // console.log(x);

            const childClass = true;

            if (Boolean(element && element.context.$children)) {
              // return h("div", {}, "Eleme");
              return h(
                element,
                {},
                element.children.map((child) => {
                  return h(child, { class: [this.classAddon] });
                })
              );
            }
            return h(element, { class: [this.classAddon] });
          })
        : null
    );
  },

// < script > 
// import { h, defineComponent } from "vue";

// export default defineComponent({
//   name: "BaseButtons",
//   props: {
//     noWrap: Boolean,
//     type: {
//       type: String,
//       default: "justify-start",
//     },
//     classAddon: {
//       type: String,
//       default: "mr-3 last:mr-0 mb-3",
//     },
//     mb: {
//       type: String,
//       default: "-mb-3",
//     },
//   },

//   data() {
//     return {};
//   },
//   render() {
//     // console.log(this.slots());

//     // console.log(this.$slots.default);

//     // const hasSlot = this.$slots && this.$slots.default()

//     const hasSlot = this.$slots && this.$slots.default;

//     const parentClass = [
//       "flex",
//       "items-center",
//       this.type,
//       this.noWrap ? "flex-nowrap" : "flex-wrap",
//     ];

//     if (this.mb) {
//       parentClass.push(this.mb);
//     }

//     // debugger;

//     // console.log(this.$slots, this.$slots.default);

//     return h(
//       "div",
//       { class: parentClass },

//       hasSlot
//         ? this.$slots.default.map((element) => {
//             console.log(element.context.$children);
//             // const x = Boolean(element && element.context.$children);
//             // console.log(x);

//             const childClass = true;

//             if (Boolean(element && element.context.$children)) {
//               // return h("div", {}, "Eleme");
//               return h(
//                 "div",
//                 {},

//                 element.context.$children.map((child) => {
//                   //   debugger;
//                   console.log("Inside if & Child:", child);
//                   // h(Component, {}, () => {}) // default slot
//                   // return h(child, {}, () => {});
//                   //return h(child, { class: [this.classAddon] });
//                   // return h("div", { class: [this.classAddon] }, h(child)); // vnode
//                   return h("div", { class: [this.classAddon] }, "something");
//                   // return h("div", { class: [this.classAddon] }, () => {});
//                   // return h("div", {}, "Eleme");

//                   //   // return h(child, { class: [this.classAddon] });
//                 })
//               );
//             }
//             // return h(element, { class: [this.classAddon] });
//             return h("div", { class: [this.classAddon] }, "MyDiv");
//           })
//         : null
//     );
//   },
// });
// </>
