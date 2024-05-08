import { getAllRecipes } from "./receipes/getRecipes.mjs";
import { getRecipesByTag } from "./receipes/getByTag.mjs";

const $ = selector => document.querySelector(selector)

const $recipes = $('#recetas')
const $btnShowRecetas = $('#show-recetas')
const $selectTag = $('#tag')
const $iniciarSesion = $('#iniciar-sesion')
const $registrarse = $('#registrarse')
const $formRegistro = $('.registro')
const $formInicio = $('.form-inicio')
const $btnFormRegistro = $('#btn-registro')
const $btnFormInicioSesion = $('#btn-iniciar-sesion')
const $home = $('.r-s')
const $btnShowProductNav = $('#show-products')
const $btnShowUsersNav = $('#show-users')
const $btnShowPostsNav = $('#show-posts')
const $btnCerrarSesion = $('#cerrar-sesion')

$registrarse.addEventListener('click', () => {
    $formInicio.classList.add('ocultar')
    $formRegistro.classList.remove('ocultar')
})

$iniciarSesion.addEventListener('click', () => {
    $formInicio.classList.remove('ocultar')
    $formRegistro.classList.add('ocultar')
}) 

$btnShowRecetas.addEventListener('click', () => {
    getAllRecipes()
})

$selectTag.addEventListener('change', (e) => {
    getRecipesByTag(e.target.value)
})

$btnFormRegistro.addEventListener('click', (e) => {
    e.preventDefault();

    alert('Registro hecho')
    $formInicio.classList.remove('ocultar')
    $formRegistro.classList.add('ocultar')
})

$btnFormInicioSesion.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Inibio hecho')
    $iniciarSesion.classList.add('ocultar')
    $registrarse.classList.add('ocultar')
    $formInicio.classList.add('ocultar')
    $home.classList.remove('ocultar')

    $btnCerrarSesion.classList.remove('ocultar')
    $btnShowPostsNav.classList.remove('ocultar')
    $btnShowProductNav.classList.remove('ocultar')
    $btnShowRecetas.classList.remove('ocultar')
    $btnShowUsersNav.classList.remove('ocultar')

})
