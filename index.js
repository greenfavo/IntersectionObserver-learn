/**
 * 参数配置
 * @type {Object}
 * @param {Array} threshold 定义触发回调函数的条件，当 intersectionRatio 满足这些条件的时候就会触发，默认是 [0, 0.5, 1]
 * @param {DOM} root 定义目标元素所参考的根元素，根元素必须是目标元素的祖先元素
 * @param {string} rootMargin 定义根元素的margin，用来扩展或缩小 rootBounds 这个矩形的大小，从而影响 intersectionRect 交叉区域的大小
 */
var options = {}
/**
 * @param {Function} callback 可见性变化时的回调函数
 * @param {Object} options 配置对象
 * 
 * @return {Object} 观察器实例
 */
var io = new IntersectionObserver(callback, options)

// 观察器实例使用方法
// 1. 确定观察的 DOM 元素后开始观察
var target = document.querySelector('.target')
io.observe(target)
// 2. 如果还有其他需要观察的 DOM 元素并且回调执行的函数相同，则多次调用 .observe 方法即可
var another = document.querySelector('.another')
io.observe(another)


/**
 * 回调函数
 * @param {Array} args
 * @param {Array} args[0] IntersectionObserverEntry 对象列表，如果同时有 n 个元素可见性发生变化，那么这个数组就有 n 个对象
 * @param {number} args[0][].time 可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
 * @param {DOM} args[0][].target 被观察的目标元素，是一个 DOM 节点对象
 * @param {Object} args[0][].rootBounds 根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，即 ClientRect 对象，如果没有根元素（即直接相对于视口滚动），则返回 null ？
 * @param {Object} args[0][].boundingClientRect 目标元素的矩形区域的信息，和上面类似
 * @param {Object} args[0][].intersectionRect 目标元素与视口（或根元素）的交叉区域的信息
 * @param {number} args[0][].intersectionRatio 目标元素的可见比例，即 intersectionRect 占 boundingClientRect 的比例，完全可见时为 1，完全不可见时为 0
 * @param {boolean} args[0][].isIntersecting 是否有交叉
 * 
 */
function callback (...args) {
  console.log('回调参数', args)
}






