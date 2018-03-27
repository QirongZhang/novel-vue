<template>
  <div>
    <div class="main">
      <div class="inner">
        <div class="ad">
          <img src="../assets/images/login-ad.jpg">
        </div>
        <div class="login-wrapper">
          <div class="login-title">
            <span>账号登录</span>
          </div>
          <div class="login-form">
            <form action="" id="loginForm">
              <div class="input-wrap">
                <label for="userName" class="user-icon"></label>
                <input type="text" name="reader" id="userName" placeholder="用户名">
              </div>
              <div class="input-wrap input-wrap--last">
                <label for="password" class="pass-icon"></label>
                <input type="password" name="password" id="password" placeholder="密码">
              </div>
              <input type="hidden" name="user" value="1">
              <div class="btn-wrap">
                <input type="button" value="登录" id="login">
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

  .main .inner {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }

  .main .ad {
    float: left;
  }

  .login-wrapper {
    padding: 20px 30px 30px;
    float: right;
    border: 1px solid #e2e2e2;
  }

  .login-wrapper .login-title {
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e2e2;
  }

  .login-wrapper .login-title > span {
    font-size: 0.8rem;
    line-height: 2.5em;
  }

  .login-wrapper label {
    background-color: #e2e2e2;
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .login-wrapper .user-icon {
    background-image: url(../assets/images/user.png);
  }

  .login-wrapper .pass-icon {
    background-image: url(../assets/images/pass.png);
  }

  .login-wrapper .input-wrap {
    border: 1px solid #e2e2e2;
  }

  .login-wrapper .input-wrap > input {
    border: 0;
    font-size: 14px;
    width: 220px;
  }

  .login-wrapper .input-wrap--last {
    margin-top: 20px;
  }

  .login-wrapper .btn-wrap {
    margin-top: 20px;
  }

  .login-wrapper .btn-wrap > input[type=button] {
    border: 0;
    font-size: 16px;
    background-color: #c61921;
    color: #fff;
    width: 100%;
    line-height: 30px;
    border-radius: 4px;
  }
</style>
