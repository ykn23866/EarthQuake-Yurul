// 触摸优化处理
   const map = L.map('quake-map', {
       dragging: !L.Browser.mobile, // 禁用默认拖动
       tap: false, // 禁用点击延迟
       inertia: true // 启用惯性滑动
   });

   // 双击缩放禁用
   map.doubleClickZoom.disable();
