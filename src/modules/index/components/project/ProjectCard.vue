<script setup lang="ts">
  import { ref } from "vue";
  import { calculateMousePosition } from "../../scripts.ts";
  import type { ProjectCardProps } from "../../types.ts";

  const props = defineProps<ProjectCardProps>();

  const cardRef = ref<HTMLElement | null>(null);
  const mousePosition = ref({ x: 0, y: 0 });
  const isHovering = ref(false);

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.value) return;
    const rect = cardRef.value.getBoundingClientRect();
    mousePosition.value = calculateMousePosition(e, rect);
  }
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    class="group relative overflow-hidden mb-[30px] border-2 border-white bg-[#25292e] transition-all duration-500 hover:shadow-lg hover:shadow-white/20"
    :style="{ animationDelay: `${props.index * 150}ms` }"
  >
    <!-- Hover Light Effect -->
    <div
      v-if="isHovering"
      class="pointer-events-none absolute z-10 h-32 w-32 rounded-full bg-white/15 blur-2xl transition-opacity duration-300"
      :style="{
        left: mousePosition.x - 64 + 'px',
        top: mousePosition.y - 64 + 'px'
      }"
    />

    <!-- CONTENT -->
    <div class="relative grid lg:grid-cols-[60%_40%]">

      <!-- LEFT PANEL -->
      <div class="relative overflow-hidden border-b lg:border-r lg:border-b-0 border-white/20 bg-gray-900/20 p-8 lg:p-12">
        <div class="absolute inset-0">
          <div class="before:bg-gray-800 after:bg-gray-800 relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
        </div>

        <div class="relative z-10">
          <!-- TITLE -->
          <div class="mb-6">
            <h3 class="text-3xl font-bold lg:text-4xl">{{ props.project.title }}</h3>
            <div class="flex items-center gap-2 mt-3">
              <div class="h-1 bg-white" style="width: 32px"></div>
              <div class="h-1 bg-white/60" style="width: 16px"></div>
              <div class="h-1 bg-white/30" style="width: 8px"></div>
            </div>
          </div>

          <!-- IMAGE BORDER ANIMATION -->
          <div class="mb-6">
            <div class="group/image relative">
              <div class="border-white/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all duration-300 group-hover/image:-top-3 group-hover/image:-left-3"></div>
              <div class="border-white/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all duration-300 group-hover/image:-top-3 group-hover/image:-right-3"></div>
              <div class="border-white/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all duration-300 group-hover/image:-bottom-3 group-hover/image:-left-3"></div>
              <div class="border-white/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all duration-300 group-hover/image:-right-3 group-hover/image:-bottom-3"></div>

              <div class="bg-[#25292e] relative overflow-hidden border-2 border-white">
                <div class="relative aspect-video overflow-hidden">
                  <img
                    :src="props.project.image"
                    :alt="props.project.title"
                    class="h-full w-full object-cover transition-transform duration-700 scale-[1.1] group-hover/image:scale-[1.2]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- RIGHT PANEL -->
      <div class="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">

        <!-- DATE + STATUS -->
        <div class="mb-6 flex flex-wrap items-center gap-3">
          <time class="text-white/80 font-mono text-xs">{{ props.project.date }}</time>
          <div class="bg-gray-800 h-4 w-px"></div>

          <div class="inline-flex items-center gap-1.5">
            <div
              class="h-2 w-2 rounded-full animate-pulse"
              :class="props.project.status === 'COMPLETED' ? 'bg-green-500' : 'bg-blue-500'"
            ></div>
            <span class="text-white/80 font-mono text-xs uppercase">{{ props.project.status }}</span>
          </div>
        </div>

        <p class="text-white/80 mb-6 text-sm leading-relaxed md:text-base">
          {{ props.project.description }}
        </p>

        <!-- TAGS -->
        <div class="mb-8 flex flex-wrap gap-2">
          <span
            v-for="tag in props.project.tags"
            :key="tag"
            class="border border-white/40 bg-[#25292e] font-mono text-[16px] px-3 py-1 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            {{ tag }}
          </span>
        </div>

        <!-- BUTTONS -->
        <div class="flex flex-wrap gap-3">
          <a
            v-if="props.project.url"
            :href="props.project.url"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-300 bg-[#25292e] hover:bg-gray-900 hover:scale-105 h-10 rounded-md px-6 border-2 border-white/20 font-medium"
          >
            Website
          </a>

          <a
            v-if="props.project.url2"
            :href="props.project.url2"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-300 bg-[#25292e] hover:bg-gray-900 hover:scale-105 h-10 rounded-md px-6 border-2 border-white/20 font-medium"
          >
            Website 2
          </a>
        </div>

        <!-- CORNER STYLE -->
        <div class="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg] pointer-events-none">
          <div class="border-white/80 from-white via-white/90 to-transparent -ml-[4px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1"></div>
          <div class="border-white/80 from-white via-white/90 to-transparent -ml-[8px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3"></div>
          <div class="border-white/80 from-white via-white/90 to-transparent -ml-[12px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5"></div>
          <div class="border-white/80 from-white via-white/90 to-transparent -ml-[16px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7"></div>
        </div>
      </div>
    </div>
  </div>
</template>
