<template>
  <main class="text-[#322D26] my-4">
    <router-view />
  </main>
</template>

<style lang="css">
body {
  cursor: url("./assets/cursors/hand-point.cur"), auto;
}

button,
a,
.cursor-pointer {
  cursor: url("./assets/cursors/hand-grab.cur"), pointer !important;
}

input[type="text"],
textarea {
  cursor: url("./assets/cursors/hand-write.cur"), text;
}

html {
  background-color: #f5f5f5;
  background-image: url("./assets/images/background.png");
  background-repeat: repeat;
}
</style>
