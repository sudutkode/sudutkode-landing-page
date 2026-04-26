<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/composables/useScrollToSection";

const { scrollToSection } = useScrollToSection();
</script>

<template>
  <section class="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
    <div class="max-w-3xl mx-auto text-center space-y-8">
      <!-- Eyebrow -->
      <div class="text-neutral-300 text-sm md:text-base tracking-wide">
        Software House · Indonesia
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        We build purposeful products for businesses and humans.
      </h1>

      <!-- Sub-heading -->
      <p class="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
        From mobile apps to websites — SudutKode transforms ideas into real products with an experienced team.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button size="lg" @click="scrollToSection('#contact')">
          Start a Project
        </Button>
        <Button size="lg" variant="outline" @click="scrollToSection('#products')">
          View Products
        </Button>
      </div>
    </div>
  </section>
</template>
