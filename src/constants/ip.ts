export const ipAddresses = []

export const addCountToIp = (ip: string) => {
    const ipFound = ipAddresses.find((item) => item.ip === ip);
    if (ipFound) {
        ipFound.count++
    }
}

export const resetIpCount = (ip: string) => {
    const ipFound = ipAddresses.find((item) => item.ip === ip);
    if (ipFound) {
        ipFound.count = 0
    }
}