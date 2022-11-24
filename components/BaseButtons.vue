<script>
import { h, defineComponent } from "vue";

export default defineComponent({
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

  data() {
    return {};
  },
  render() {
    // console.log(this.slots());

    // console.log(this.$slots.default);

    // const hasSlot = this.$slots && this.$slots.default()

    const hasSlot = true;

    const parentClass = [
      "flex",
      "items-center",
      this.type,
      this.noWrap ? "flex-nowrap" : "flex-wrap",
    ];

    if (this.mb) {
      parentClass.push(this.mb);
    }

    // debugger;

    console.log(this.$slots, this.$slots.default);

    return h(
      "div",
      { class: parentClass },

      // hasSlot
      this.$slots && this.$slots.default
        ? this.$slots.default.map((element) => {
            console.log(element.context.$children);
            const x = Boolean(element && element.context.$children);
            console.log(x);

            //

            if (x) {
              // return h("div", {}, "Eleme");
              return h(
                "div",
                {},

                element.context.$children.map((child) => {
                  //   debugger;
                  console.log("Inner Return", child);
                  // h(Component, {}, () => {}) // default slot
                  // return h(child, { class: [this.classAddon] }, () => {});
                  return h(
                    element.context.$children[0],
                    { class: [this.classAddon] },
                    "Inner Return"
                  );
                  // return h("div", { class: [this.classAddon] }, () => {});
                  // return h("div", {}, "Eleme");

                  //   // return h(child, { class: [this.classAddon] });
                })
              );
            }

            return h(element, { class: [this.classAddon] });
          })
        : // return h(element, { class: [this.classAddon] });

          // if (
          //   element &&
          //   element.children &&
          //   typeof element.children === "object"
          // ) {
          //   return h(
          //     element,
          //     {},
          //     element.children.map((child) => {
          //       return h(child, { class: [this.classAddon] });
          //     })
          //   );
          // }

          // return h(element, { class: [this.classAddon] });

          //  return h("div", {}, "Inside HasSlot");

          null
    );
  },
});
</script>
