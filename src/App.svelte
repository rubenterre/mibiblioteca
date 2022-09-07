<script>
  import Router from 'svelte-spa-router'
  import {
    link
  } from 'svelte-spa-router'
  import routes from './routes.js'

import inicio from '/inicio.svg';  
import juegos from '/juegos.svg';
import perfil from '/perfil.svg';


</script>

<main>

  <div class="flex justify-between fixed inset-x-0 bottom-0 py-5 px-10 bg-azul-claro z-50">
    <a href="/" use:link ><div><img src={inicio}  alt="MisJuegos Icon" /></div></a>
    <a href="/Misjuegos" use:link ><div><img src={juegos} alt="MisJuegos Icon" /></div></a>
    <a href="/Perfil" use:link ><div><img src={perfil} alt="MisJuegos Icon" /></div></a>
  </div>
  
</main>
<Router {routes} />
