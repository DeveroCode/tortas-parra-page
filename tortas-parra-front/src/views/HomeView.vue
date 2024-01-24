<script setup>
import tortaImg from '../../public/delivery.png'
</script>

<template>
  <section class="flex flex-col md:flex-row container md:mx-auto md:justify-between max-w-7xl py-20 px-3 md:px-0">
    <div class="flex flex-col my-auto">
      <div>
        <h1 class="text-3xl text-center md:text-start md:text-5xl font-ibm-plex-sans md:w-[500px] font-medium">
          Del horno a tu corazón Tortas <span class="text-red-600"> Parra</span>.
        </h1>
        <p class="text-center md:text-start md:w-[500px] mt-10 mb-5 text-gray-600">
          Utilizamos recetas tradicionales, ingredientes frescos y un toque de cariño en cada creación. En Tortas Parra,
          no
          solo ofrecemos tortas excepcionales, sino también una experiencia que celebra la alegría de compartir momentos
          especiales.
        </p>
      </div> <!-- End Slogan and Title -->

      <div id="button" class="flex items-center justify-center md:items-start md:justify-start md:space-x-10 mt-4">
        <a href="#" class="px-4 py-2 bg-red-600 rounded-sm text-white capitalize">
          ordena ahora!
        </a>
      </div> <!-- End buttons -->
    </div>
    <div class="mt-10 md:mt-0">
      <img :src="tortaImg" alt="Example delivery">
    </div>
  </section>
</template>
