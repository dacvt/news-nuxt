export default defineNuxtRouteMiddleware((to, from) => {
    const query = from.query
    const slug = from.params.id;
    if (query["fbclid"] != undefined && slug) {
        return navigateTo('http://amazingdailynews.com/' + slug, { external: true })
    }
})