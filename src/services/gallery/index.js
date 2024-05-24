import apiRequest from "../request"

async function getGalleries() {
    const data = await apiRequest('GET', '/galleries?populate[0]=photos.image')
    return data
}

async function getGalleryBySlug({ slug }) {
    const data = await apiRequest('GET', `/galleries?populate[0]=photos.image&populate[1]=seo&filters[slug][$eq]=${slug}`)
    return data
}

export { getGalleries, getGalleryBySlug }