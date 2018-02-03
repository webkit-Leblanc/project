require.config({
   /* 给予main-data文件路径*/
    paths:{
        'keCarousel':'../lib/jquery_keCarousel/jquery.keCarousel',
        'gdsZoom':'../lib/jquery_gdsZoom/jquery_gdsZoom',
        'jquery':'../lib/jquery-3.2.1'
    },
   /* 设置好依赖*/
   shim:{
        'keCarousel':['jquery'],
        'gdsZoom':['jquery']
   }
});