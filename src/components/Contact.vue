<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const form = reactive<ContactFormData>({
  name: "",
  email: "",
  message: "",
});

const errors = ref<Partial<ContactFormData>>({});

const validateForm = () => {
  errors.value = {};

  if (!form.name.trim()) {
    errors.value.name = "Name is required";
  }

  if (!form.email.trim()) {
    errors.value.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value.email = "Invalid email address";
  }

  if (!form.message.trim()) {
    errors.value.message = "Message is required";
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log("Form submitted:", form);
    // TODO: Send form data to backend or email service
    alert("Thank you! Your message has been sent.");
    form.name = "";
    form.email = "";
    form.message = "";
  }
};
</script>

<template>
  <section
    id="contact"
    class="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40"
  >
    <div class="max-w-2xl mx-auto text-center">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-12">
        Start a Project With Us
      </h2>

      <!-- Contact Form -->
      <form
        @submit.prevent="handleSubmit"
        class="space-y-6"
      >
        <!-- Name Field -->
        <div class="space-y-2">
          <Label
            for="name"
            class="text-left block"
          >
            Name
          </Label>
          <Input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full"
          />
          <p
            v-if="errors.name"
            class="text-sm text-destructive"
          >
            {{ errors.name }}
          </p>
        </div>

        <!-- Email Field -->
        <div class="space-y-2">
          <Label
            for="email"
            class="text-left block"
          >
            Email
          </Label>
          <Input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="email@example.com"
            class="w-full"
          />
          <p
            v-if="errors.email"
            class="text-sm text-destructive"
          >
            {{ errors.email }}
          </p>
        </div>

        <!-- Message Field -->
        <div class="space-y-2">
          <Label
            for="message"
            class="text-left block"
          >
            Message
          </Label>
          <Textarea
            id="message"
            v-model="form.message"
            placeholder="Describe your project or question..."
            rows="5"
            class="w-full resize-none"
          />
          <p
            v-if="errors.message"
            class="text-sm text-destructive"
          >
            {{ errors.message }}
          </p>
        </div>

        <!-- Submit Button -->
        <Button
          type="submit"
          size="lg"
          class="w-full md:w-auto"
        >
          Send Message
        </Button>
      </form>
    </div>
  </section>
</template>
