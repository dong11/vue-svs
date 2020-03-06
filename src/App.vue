<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
}

.flex1 {
  flex: 1;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.flex-column {
  flex-direction: column;
}

.justify-content-flex-end {
  justify-content: flex-end;
}

.justify-content-flex-start {
  justify-content: flex-start;
}

.align-items-flex-start {
  align-items: flex-start;
}

.align-items-flex-end {
  align-items: flex-end;
}

.flex-direction-row {
  flex-direction: row;
}

.flex-direction-column {
  flex-direction: column;
}

.padding-lr15 {
  padding: 0 15px;
}

.margin-lr15 {
  margin: 0 15px;
}

.padding15 {
  padding: 15px;
}

.bg-fff {
  background-color: #fff;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ellipsis.line1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-all;
  -webkit-line-clamp: 1;
}

.ellipsis.line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-all;
  -webkit-line-clamp: 2;
}

.card-box {
  border-radius: 10px;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}
</style>
