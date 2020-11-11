<template>
  <div class="dropdown">
    <el-cascader
      v-model="value"
      :options="options"
      :show-all-levels="false"
      :placeholder="value[value.length - 1]"
      :props="{ expandTrigger: ' hover', checkStrictly : true}"
      @change="handleChange"
    >
    </el-cascader>
    <input type="text" v-model="inputvalue" />
    <!-- <img src="../../static/images/active.svg"> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      inputvalue: 0,
      aaa: false,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      // this.$router.push('/')
    }
  },
  computed: {
    value: {
      get: function () {
        console.log(this, mapState)
        return this.$store.state.item
      },
      set: function (val) {
        this.$store.state.item = val
      }
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.el-input {
  width: 150px;
  height: 32px;
  line-height: 32px;
  .el-input__inner {
    background-color: #141f26;
    border: #43575d 1px solid;
    border-radius: 0px;
    width: 150px;
    height: 32px;
    color: #5ac8fa;
    font-size: 18px;
    padding-left: 12px;
    padding-right: 32px;
  }
  .el-input__inner::-webkit-input-placeholder {
    color: #5ac8fa;
    font-size: 18px;
  }
  .el-input__suffix {
    background-image: url(../../static/images/active.svg);
    display: inline-block;
    height: 32px;
    width: 32px;
    right: 0px;
    top: 0px;
    .el-input__suffix-inner {
      display: none;
    }
  }
}

.el-cascader__dropdown {
  // top: 86px !important;
  background-color: rgba(7, 35, 50, 0.9);
  border-radius: 0px;

  &[x-placement^='bottom'] {
    margin-top: -4px;
  }
  border: 0px;
  .popper__arrow {
    display: none;
  }
  .el-cascader-panel {
    .el-cascader-menu {
      border-right: 0px;
      font-size: 16px;
      color: white;
      font-weight: normal;
      ul {
        padding: 0px;
        .el-cascader-node:not(.is-disabled):focus,
        .el-cascader-node:not(.is-disabled):hover {
          background-color: unset;
        }
        li {

          height: 40px;
          .el-cascader-node__prefix {
            display: none;
          }
          .el-cascader-node__label {
            padding: 0;
          }
          &.is-active {
            color: #2dc4f6;
            font-weight: normal;
          }
          &:hover {
            background-color: #284051 !important;
            color: #2dc4f6;
          }
          &.in-active-path {
            color: #2dc4f6;
            font-weight: normal;
          }
          //           &:not(.is-disabled):focus{
          //               background-color: rgba(60, 124, 158, 1);
          //           }
          // &:not(.is-disabled):hover {
          //   background-color: #284051;
          // }
          i {
            right: 30px;
          }
        }
      }
    }
  }
}
</style>
