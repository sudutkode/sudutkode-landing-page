<script setup lang="ts">
import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";

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

const socialLinks = [
  {
    icon: LinkedInIcon,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: GithubIcon,
    href: "#",
    label: "GitHub",
  },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <footer
    id="footer"
    class="border-t border-border"
  >
    <div class="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-lg font-semibold mb-2">SudutKode</h2>
            <p class="text-sm text-muted-foreground">
              Indonesian software house building digital products that work.
            </p>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-col justify-center">
          <nav class="flex flex-col space-y-3">
            <button
              v-for="link in navLinks"
              :key="link.href"
              @click="scrollToSection(link.href)"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {{ link.label }}
            </button>
          </nav>
        </div>

        <!-- Social Links -->
        <div class="flex flex-col justify-center">
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-foreground transition-colors"
              :aria-label="social.label"
            >
              <component
                :is="social.icon"
                class="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-border pt-8">
        <!-- Copyright -->
        <p class="text-sm text-muted-foreground text-center">
          © 2025 SudutKode. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
