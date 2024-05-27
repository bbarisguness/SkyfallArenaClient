import apiRequest from "../request"

async function getGalleries() {
    const data = await apiRequest('GET', '/galleries?populate[0]=photos.image')
    return data
}

async function getGalleryBySlug({ slug }) {
    const data = await apiRequest('GET', `/galleries?populate[0]=photos.image&populate[1]=seo&filters[slug][$eq]=${slug}`)
    return data
}

async function getHomePageGallery() {
    const data = await apiRequest('GET', `/home-page-galleries?pagination[page]=1&pagination[pageSize]=8&populate[0]=image&sort[0]=line:asc`)
    return data
}

export { getGalleries, getGalleryBySlug, getHomePageGallery }