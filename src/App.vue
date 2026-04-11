<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Products from "./components/Products.vue";
import Team from "./components/Team.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import { usePageNav } from "./composables/usePageNav";

const { currentPage } = usePageNav();

onMounted(() => {
  const path = window.location.pathname;
  if (path.startsWith("/") && path.includes("/privacy-policy")) {
    const productId = path.split("/")[1];
    currentPage.value = `${productId}/privacy-policy`;
  }
});
</script>

<template>
  <template v-if="currentPage === null">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <Team />
      <Contact />
    </main>
    <Footer />
  </template>
  <PrivacyPolicy
    v-else-if="currentPage?.includes('privacy-policy')"
    :product-id="currentPage.split('/')[0]"
  />
</template>
