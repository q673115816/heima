<template>
  <div>
    <Header></Header>
    <Sidemenu></Sidemenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Sidemenu from "./sidemenu";
export default {
  components: {
    Header,
    Footer,
    Sidemenu
  }
};
</script>

<style></style>
