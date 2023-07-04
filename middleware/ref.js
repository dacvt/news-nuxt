export default defineNuxtRouteMiddleware((to, from) => {
    const query = from.query
    const slug = from.params.id;
    if (query["fbclid"] != undefined && slug) {
        return navigateTo('https://movingworl.com/' + slug, { external: true })
    }
})