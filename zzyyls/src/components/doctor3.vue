<template>
<div class="doctor3">
    <h3>王安安 <el-tag  type="success">男</el-tag>  <el-tag>23岁</el-tag></h3>
    <img src="../assets/yao.jpg" alt="">
    <h4>历史疾病</h4>
    <div class="jb-list">
        <el-tag size="medium" >脑膜炎</el-tag>
        <el-tag size="medium" type="success">感冒</el-tag>
        <el-tag size="medium" type="warning">拉肚子</el-tag>
        <el-tag size="medium" type="info">胃炎</el-tag>
        <el-tag size="medium" type="danger">胃病</el-tag>
    </div>
    <h4>疾病详情</h4>

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign1">
        
        <!-- <el-form-item label="公司">
            <el-input v-model="formLabelAlign1.gs" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="formLabelAlign1.dz" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item> -->

        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
            <el-tab-pane label="治疗" name="first">
                <el-form-item label="">
            <el-input v-model="formLabelAlign1.name1" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            <el-tag
                :key="tag"
                size="medium"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="medium"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="症状" name="second">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.name" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="病因" name="third">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.region" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="诊断" name="fourth">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.type" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="生活" name="five">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.hun" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="预防" name="six">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.mz" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
        </el-tabs>
        
    </el-form>

    <div class="c-t">
        <el-button type="success" plain icon="el-icon-arrow-left">患者信息</el-button>
        <el-button type="success">诊疗完成<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </div>

</div>
</template>

<script>

export default {
  name: 'doctor3',
  data() {
    return {
       labelPosition: 'top',
        formLabelAlign1: {
            name1:'请输入',
            name: '请输入',
            region: '请输入',
            type: '请输入',
            hun:'请输入',
            mz:'请输入',
            gs:'请输入',
            dz:'请输入'
        },
        dynamicTags: ['感冒', '胃病'],
        inputVisible: false,
        inputValue: '',
        activeName: 'first'
    }
  },
  components: {
  },
  methods: {
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
    });
    },
    handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
            this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
    .doctor3{
        .el-form-item {
            margin-bottom: 9px;
        }
        .el-form-item__content{
            .el-tag{
                margin-right: 5px;
            }
            .el-button--small{
                padding: 7px 9px;
            }
        }
        .el-button--primary{
            margin-top: 20px;
        }
        .c-t{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 15px;
        }
        
    }
}
.el-tabs__nav-wrap::after{
    background-color: #fff !important;
}
@media screen and (min-width:900px) {
    
}
</style>


