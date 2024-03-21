export const cacheResponse = []

export const getCacheResponse = (path, role) => {
    const cache = cacheResponse.find((item) => item.path === path && item.role === role);
    return cache;
}

export const addCacheResponse = (path, role, response) => {
    cacheResponse.push({ path, role, response });
}