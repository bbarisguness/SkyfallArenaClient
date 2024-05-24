import apiRequest from "../request"

async function getEvents() {
    const data = await apiRequest('GET', '/events?populate[0]=photos.image')
    return data
}

async function getPastEvents() {
    const data = await apiRequest('GET', '/events?populate[0]=photos.image&filters[homepageView][$eq]=true')
    return data
}

async function getEventBySlug({ slug }) {
    const data = await apiRequest('GET', `/events?populate[0]=photos.image&populate[1]=seo&filters[slug][$eq]=${slug}`)
    return data
}

export { getEvents, getEventBySlug, getPastEvents }