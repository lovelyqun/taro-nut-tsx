import { reactive } from 'vue'
import './index.scss'

export default {
  name: 'Index',
  setup() {
    const items = [1, 2, 3, 4, 5, 6, 7]
    const state = reactive({
      showPick: false,
      currentDate: '请选择',
      defaultDate: new Date(),
    })
    const minDate = new Date(1800, 0, 1)
    const maxDate = new Date(2199, 12, 31)

    return () => {
      return (
        <div>
          {items.map((item, index) => (
            <div class="date-picker-box" >
              <div class="date-picker-desc" onClick={() => { state.showPick = true }} >
                <nut-input
                  border={false}
                  readonly={true}
                  v-model={state.currentDate}
                />
              </div>
              <nut-popup position="bottom" v-model:visible={state.showPick}>
                <nut-date-picker
                  type="date"
                  v-model={state.defaultDate}
                  min-date={minDate}
                  max-date={maxDate}
                  is-show-chinese={false}
                  three-dimensional={false}
                  onConfirm={confirm}
                  onCancel={() => { state.showPick = false }}
                  option-height="44"
                  visible-option-num="5"
                  minute-step={1}
                >
                </nut-date-picker>
              </nut-popup>
            </div >
          ))}
        </div>
      )
    }
  }
}
