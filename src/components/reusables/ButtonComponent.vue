<template>
  <v-btn
      :class="isOutlined ? 'whiteButton' : 'blueButton'"
      :width="width || 174"
      :type="type"
      :block="block"
      :depressed="depressed"
      :outlined="outlined"
      :color="color"
      :disabled="disabled"
      :text="text"
      @click="$emit('click')"
      class="text-capitalize  tw-rounded-lg button"
      :loading="loading"
  >{{ buttonText }}</v-btn
  >
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    buttonText: [String],
    isOutlined: Boolean,
    height: [Number],
    width: [String || Number],
    block: [Boolean],
    outlined: [Boolean],
    depressed: [Boolean],
    text: [Boolean],
    disabled: [Boolean],
    loading: [Boolean],
    type: {
      type: String,
      default: "submit",
    },
    color: {
      type: String,
      default: "",
    },
    textClass: String,
  },
};
</script>

<style scoped lang="scss">
.button {
  height: 48px !important;
  @media screen and (min-width: 1024px) {
    height: 52px !important;
  }
}

.whiteButton {
  background: #bcc5f2;
  border: 1px solid rgba(0, 74, 173, 0.3);
  border-radius: 40px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #004aad;
}
.blueButton {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: none;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
  background: #004aac;
  border-radius: 8px;
}
.blueButton:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  #004aac;
  border-radius: 8px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}

// .blueButton:disabled,
// .blueButton[disabled]{
//   // border: 1px solid #999999;
//   // background-color: none !important;
//   background: #004AAC !important;
//   opacity: 0.4 !important;
//   color: red;
// }
</style>