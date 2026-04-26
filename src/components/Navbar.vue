<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-vue-next";
import { useScrollToSection } from "@/composables/useScrollToSection";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
];

const isOpen = ref<boolean>(false);
const { scrollToSection: scroll } = useScrollToSection();

const scrollToSection = (href: string) => {
  isOpen.value = false;
  scroll(href);
};

onMounted(() => {
  if (window.location.hash) {
    // Small delay to ensure DOM is fully rendered before scrolling
    setTimeout(() => scroll(window.location.hash), 100);
  }
});
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
    <div class="flex justify-between items-center px-4 md:px-6 h-16 max-w-screen-xl mx-auto">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/sudut-kode-logo.png" alt="SudutKode" class="h-8 w-auto" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <button v-for="link in navLinks" :key="link.href" @click="scrollToSection(link.href)"
          class="text-sm hover:text-foreground text-neutral-400 transition-colors">
          {{ link.label }}
        </button>
      </nav>

      <!-- Desktop CTA Button -->
      <Button class="hidden md:inline-flex" size="sm" @click="scrollToSection('#contact')">
        Contact Us
      </Button>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu class="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" class="w-[250px] flex flex-col">
            <nav class="flex flex-col gap-4 mt-8">
              <button v-for="link in navLinks" :key="link.href" @click="scrollToSection(link.href)"
                class="text-left text-sm hover:text-foreground text-neutral-400 transition-colors">
                {{ link.label }}
              </button>
            </nav>

            <Button class="mt-auto w-full" @click="scrollToSection('#contact')">
              Contact Us
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
