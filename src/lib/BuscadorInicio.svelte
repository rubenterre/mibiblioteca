<script>
    import juegos from '../assets/juegos.json'

  import buscar from '/buscar.svg'
</script>

<div class="container mx-auto px-5 pb-3">
  <div class="flex justify-center w-full
  bg-azul-claro bg-clip-padding
 border border-solid border-blanco-leve
 rounded-xl">
             <img class="px-2" src="{buscar}" alt="">
       <input
         type="search"
         class="
           form-control
           w-full
           px-3
           py-3
           text-base
           font-normal
           text-gray-700
           bg-azul-claro bg-clip-padding
           transition
           ease-in-out
           m-1
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
         "
         id="buscador"
         placeholder="Buscar"
       />
   </div>
</div>

{#each juegos as juego (juego.id)}
<div class="flex justify-center">
  <img src="/{juego.ruta}.png" alt="">
</div>
{/each}