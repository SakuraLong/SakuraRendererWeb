<template>
  <div class="edit">
    <h2 style="text-align: center;">在线编辑</h2>
    <p style="text-align: center;">在聚焦到textarea的情况下按下ctrl + s即可渲染</p>
    <div class="edit__body">
      <div class="edit__input">
        <textarea class="edit__textarea" spellcheck="false" v-model="code" :onfocus="focus" :onblur="blur" ref="textarea"></textarea>
      </div>
      <div class="edit__shower" id="edit-shower">
        <sr-article-container ref="render" height="100%" domId="edit-shower"></sr-article-container>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'edit',
  data() {
    return {
      textareaHasChange: false,
      code: '= Hello world',
      allowCtrlS: true,
    }
  },
  mounted() {
    // window.scrollTo({ top: 0 })
    let that = this
    window.onbeforeunload = function (e) {
      let fp = that.$route.fullPath
      fp = fp.slice(0, fp.indexOf('#') === -1 ? fp.length : fp.indexOf('#'))
      if (fp === '/edit' && that.code !== '= Hello world') {  // 注意这里要替换成自己的当前页面的路由
        e.returnValue = '关闭提示'
      } else {
        window.onbeforeunload = null
      }
    }
    document.addEventListener('keydown', this.keydown)
    this.$refs.render.updateUserData({
      githubToken:'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'
    })
    this.render()
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.keydown),
    window.scrollTo(0, 0)
  },
  beforeRouteLeave(to, from, next) {
    if (this.code !== '= Hello world') {
      const answer = window.confirm('系统可能不会保存你所做的修改')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else next()
  },
  methods: {
    focus() {
      this.allowCtrlS = false
    },
    blur() {
      this.allowCtrlS = true
    },
    keydown(e) {
      const textarea = this.$refs.textarea
      if( !this.allowCtrlS && e.ctrlKey  === true && e.keyCode === 83 ){
        e.preventDefault()
        this.render()
        return false // 截取返回false就不会保存网页了
      }else if (e.key === 'Tab') {
        e.preventDefault()

        var start = textarea.selectionStart
        var end = textarea.selectionEnd

        // 插入制表符
        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end)

        // 将光标移动到插入后的位置
        textarea.selectionStart = textarea.selectionEnd = start + 1
      }
    },
    render() {
      if(this.code !== '') {
        this.$refs.render.setArticle(this.code)
        this.$refs.render.render()
      }
    }
  }
}
</script>

<style>
.edit__body {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
}

.edit__input {
  display: inline-block;
  height: calc(100% - 10px);
  width: calc(40% - 10px);
  max-width: calc(700px - 10px);
  padding: 5px;
}

.edit__shower {
  position: absolute;
  top: 0;
  display: inline-block;
  height: 100%;
  width: calc(100% - 700px - 10px);
  min-width: calc(60% - 10px);
  overflow: auto;
}

.edit__textarea {
  font-size: 18px;
  padding: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  resize: none;
}
</style>