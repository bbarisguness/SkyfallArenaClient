import apiRequest from "../request"

async function getEventAndParties() {
    const data = await apiRequest('GET', '/partis?populate[0]=photos.image')
    return data
}

async function getPartiesBySlug({ slug }) {
    const data = await apiRequest('GET', `/partis?populate[0]=photos.image&filters[slug][$eq]=${slug}`)
    return data
}
export { getEventAndParties, getPartiesBySlug }