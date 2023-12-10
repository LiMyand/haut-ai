<script setup>
import { onMounted, ref, nextTick } from 'vue';

const dropdowns = ref([]);

onMounted(async () => {
  // 等待DOM更新
  await nextTick();

  dropdowns.value.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    if (dropbtn && dropdownContent) {
      const btnWidth = dropbtn.width;
      dropdownContent.style.width = `${btnWidth * 5}px`;
    }
  });
});

const setDropdownRef = (el) => {
  if (el) {
    dropdowns.value.push(el);
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" ref="setDropdownRef">
            <div class="dropdown">
              <button class="dropbtn">本站</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
            </div>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

/* 按钮样式 */
.dropbtn {
  color: white;

  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* 下拉内容样式（默认隐藏） */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: 50%; /* 设置起始位置在按钮的中间 */
  transform: translateX(-50%); /* 向左移动自身宽度的一半来对齐中心 */
}

/* 下拉内容的链接样式 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 下拉内容的链接 - 鼠标悬停时的样式 */
.dropdown-content a:hover {background-color: #f1f1f1}

/* 下拉按钮 - 鼠标悬停时显示下拉内容 */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>