<template>
<div class="logistics">
    <h3>物流情况</h3>
    <img src="https://cdn.nlark.com/yuque/0/2018/png/92616/1544641813074-244e459d-85b9-42dd-b3fa-56056a958862.png" alt="">
    <h4>快递公司</h4>
    <p>
        <el-tag type="success">顺丰快递</el-tag>
    </p>
    <h4>运单号</h4>
    <p>
        <el-alert
            title="176936367"
            type="success">
        </el-alert>
    </p>
    <h4>送货员</h4>
    <p>
        <el-tag type="info">王安</el-tag>
    </p>
    <h4>送货员电话</h4>
    <p>
        <el-button type="success" plain>17610705501 <i class="el-icon-phone-outline el-icon--right"></i></el-button>
    </p>

    <div class="c-t">
        <router-link to="/Home/6">
            <el-button type="success"  icon="el-icon-arrow-left">药品详情</el-button>
        </router-link>
    </div>


</div>
</template>

<script>

export default {
  name: 'logistics',
  data() {
    return {
       
    }
  },
  components: {

  },
  methods: {
     

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
    .logistics{
        h3:after {
            content: " ";
            width: 14px;
            height: 6px;
            background-color: #f56c6c;
            display: block;
            margin: 12px 0 20px;
        }
        h4{
            font-size: 15px;
            color: #123;
            font-weight: 600;
            margin-top: 20px;
            margin-bottom: 1px;
        }
        p{
            font-size: 14px;
            // font-weight: 300;
            color: #231f20;
            padding: 5px 0;  
            margin:7px 0 0 0;
        }
        .c-t{
            margin:  30px 0 15px 0;
        }
    }
}
@media screen and (min-width:900px) {
    .logistics{
        
    }
}
</style>


