<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor, Smartphone, Palette, MessageSquare } from "lucide-vue-next";

interface ServiceProps {
  icon: any;
  title: string;
  description: string;
}

const services: ServiceProps[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Company profiles, landing pages, e-commerce platforms, and responsive modern web portals.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native-performing Android and iOS applications built with React Native.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive interface design — from wireframes to consistent design systems.",
  },
  {
    icon: MessageSquare,
    title: "Technology Consulting",
    description:
      "Help you choose the right tech stack, system architecture, and product roadmap.",
  },
];
</script>

<template>
  <section id="services" class="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        Our Services
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      <Card v-for="{ icon: Icon, title, description } in services" :key="title"
        class="border-border hover:bg-card/80 transition-colors">
        <CardHeader>
          <div class="mb-4">
            <Icon class="h-8 w-8 text-foreground" />
          </div>
          <CardTitle>{{ title }}</CardTitle>
          <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
