# 第一遍上次上传没有成功，为什么呢？
* 因为`dist`目录里面的`test.html`里面的<script src="/test.afa13219.js"></script>
* 这里应该把'/'去掉
* 怎么做呢？  
1.parcel build test.html --no-minify --public-url ./
2. 这里是手动打字难免会有出入，详情可以参考方方前端课41.

