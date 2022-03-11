<template>
  <div class="bg-blue-800 text-blue-200">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-3xl font-thin">
        Carlos <span class="font-normal">Router</span>
      </h1>
      <nav>
        <ul class="flex space-x-4 text-xl">
          <router-link to="/">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-orange-500 hover:text-orange-200
              "
            >
              Home
            </li>
          </router-link>
          <router-link :to="{ name: 'About' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-orange-500 hover:text-orange-200
              "
            >
              About
            </li>
          </router-link>
          <router-link :to="{ path: '/hello', name: 'Hello' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-orange-500 hover:text-orange-200
              "
            >
              Hello
            </li>
          </router-link>
            <router-link :to="{ path: '/shop', name: 'Shop' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-orange-500 hover:text-orange-200
              "
            >
              Shop
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>