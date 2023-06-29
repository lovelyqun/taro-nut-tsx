
import { h, reactive, watch, computed, ref } from "vue";
import { View, ScrollView } from "@tarojs/components";
export default {
  name: "MwCtn",
  props: {
    attrs: {
      type: Object,
      default: () => { }
    }
  },
  setup(props, { slots }) {
    const state = reactive({
      refresherEnabled: true,
      refresherTriggered: false
    })
    const onPullDownRefresh = () => {
      state.refresherTriggered = true
      setTimeout(() => { state.refresherTriggered = false }, 1000)
    }

    return () => (
      <ScrollView
        scroll-y={true}
        refresherTriggered={state.refresherTriggered}
        refresherEnabled={state.refresherEnabled}
        onRefresherrefresh={onPullDownRefresh}
      >
        <div style="height:80vh">
          <div style="height:200px;overflow:auto">
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
            <div style='height:50px'>dddd</div>
          </div>
        </div>
      </ScrollView >
    );
  }
};


