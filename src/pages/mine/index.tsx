import { reactive } from 'vue'
import './index.scss'
import { useDidShow, useDidHide, useRouter, useLoad, useReady, useUnload, usePullDownRefresh, usePageScroll } from '@tarojs/taro'
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
    useDidShow(() => {
      console.log('%c [ useDidShow-mine ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', useDidShow)
    })
    useLoad(() => {
      console.log('%c [ useLoad-mine ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', useLoad)
    })
    return () => {
      return (
        <div>
          <nut-swiper init-page="0" pagination-visible="true" pagination-color="#426543" auto-play="3000">
            <nut-swiper-item>
              <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
              <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
              <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
              <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
            </nut-swiper-item>
          </nut-swiper>
        </div>
      )
    }
  }
}
