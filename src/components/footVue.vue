<template>
  <div class="container-box">
    <img src="../assets/myphoto.png" alt="Image">
    <div class="content">
      <div class="font-style-title">Haut-Ai</div>
      <div class="font-style-saying">九月露湿，待君之前</div>
      <div class="icons">
        <i class="bi bi-github icon"></i>
        <i class="bi bi-tencent-qq icon"></i>
        <i class="bi bi-wechat icon"></i>
        <i class="bi bi-envelope-fill icon"></i>
        <i class="bi bi-chat-left-dots-fill icon"></i>
      </div>
      <div class="button-box d-flex justify-content-around">
        <button type="button" class="btn btn-danger button-style"><i class="bi bi-box-arrow-up-right icon"></i>了解更多</button>
        <button type="button" class="btn btn-info button-style">Info</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-box {
  width: 80%;
  height: 300px;
  background-color: lightblue;
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* 添加居中对齐 */
  top: 4em;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
}

.container-box img {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  position: absolute;
  top: -2em;
  left: 50%;
  transform: translateX(-50%);
}
.font-style-title {
  position: relative;
  top: -1em;
  font-size: 2em;
  font-weight: bold;
}
.font-style-saying {
  position: relative;
  top: -1em;
  font-size: 1.2em;
  color: #d98686;
  margin-bottom: 0.5em;
}
.content {
  margin-top: 4em; /* 为内容添加上边距 */
}

.icons {
  position: relative;
  top: -1em;
  display: flex;
  justify-content: center; /* 图标水平居中 */
  margin-top: 1em; /* 为图标添加上边距 */
}
.icon {
  font-size: 1.5em;
  height: 2em;
  width: 3em;
}
.icon:hover {
  transform: scale(1.2);
}
@media (max-width: 1200px) {
  .container-box {
    width: 96%;
  }
}
.button-box {
  width: 320px;
  position: relative;
  top: -1em;
  left: 50%;
  transform: translateX(-50%);
}
.button-style {
  border-radius: 3em;
  width: 9em;
  height: 3em;
  text-align: center;
  line-height: 2em;
  font-weight: bolder;
}
</style>

