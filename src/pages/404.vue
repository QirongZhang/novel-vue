<template>
  <div>
    <div class="main">
      <div class="inner">
        <div class="register">
          <div class="title">
            <span>注册</span>
          </div>
          <div class="register-form">
            <form id="registerForm">
              <div class="text-wrap">
                <span for="nickname">昵称</span>
                <input type="text" id="nickname" name="nickname" placeholder="2-10个字符">
              </div>
              <div class="text-wrap">
                <span for="mailbox">邮箱</span>
                <input type="text" id="mailbox" name="mailbox" placeholder="输入邮箱地址">
              </div>
              <div class="text-wrap">
                <span for="password">密码</span>
                <input type="password" id="password" name="password" placeholder="6-20位大小写字母、数字或符号">
              </div>
              <div class="text-wrap">
                <span for="qq">QQ</span>
                <input type="text" id="qq" name="qq" placeholder="有效的QQ账号">
              </div>
              <div class="btn-wrap">
                <button type="button" id="submit">注册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  .main {
    margin-top: 40px;
  }

  .main > .inner {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }

  .title {
    border-bottom: 1px solid #ccc;
    text-align: center;
  }

  .title > span {
    color: #333;
    font-size: 1.1rem;
    border-bottom: 3px solid #ed4259;
    position: relative;
    bottom: 3px;
    right: 100px;
  }

  .register-form {
    margin-right: 400px;
  }

  .register-form .text-wrap {
    text-align: right;
    margin: 20px 0;
  }

  .register-form .text-wrap span {
    font-size: 0.8rem;
    margin-right: 20px;
  }

  .register-form .text-wrap input {
    padding: 10px;
    font-size: 0.8rem;
    border: 1px solid #ccc;
    width: 300px;
    outline: 0;
  }

  .register-form .btn-wrap {
    text-align: right;
  }

  .register-form .btn-wrap > button {
    background-color: #bf2c24;
    border: 0;
    color: #fff;
    font-size: 0.8rem;
    padding: 10px;
    width: 375px;
  }

</style>
