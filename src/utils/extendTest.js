import Vue from 'vue'

// 可以动态创建组件实例并挂载至body
export function extendTest(Component, props) {

  // 构造函数
  const ExtendTest = Vue.extend(Component);
  // 创建组件实例
  const comp = new ExtendTest({propsData: props});
  console.log(comp)
  // 进行挂载
  comp.$mount();
  // 插入到body
  document.body.appendChild(comp.$el)
  
  // 淘汰机制
  comp.remove = () => {
    // 删除dom
    document.body.removeChild(comp.$el)

    // 销毁组件
    comp.$destroy()
  }
  // 返回Component组件实例
  return comp
}