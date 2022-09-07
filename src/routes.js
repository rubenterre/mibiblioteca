import Inicio from './lib/Inicio.svelte'
import Misjuegos from './lib/Misjuegos.svelte'
import Perfil from './lib/Perfil.svelte'
import ErroRuta from './lib/ErroRuta.svelte'

const routes = {
    '/':Inicio,
    '/Misjuegos':Misjuegos,
    '/Perfil':Perfil,
    '*':ErroRuta
}

export default routes