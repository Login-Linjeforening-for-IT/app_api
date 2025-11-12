export default function isVersionBelow(current: string, minimum: string) {
    const c = current.split('.').map(Number)
    const m = minimum.split('.').map(Number)

    for (let i = 0; i < 3; i++) {
        if ((c[i] || 0) < (m[i] || 0)) return true
        if ((c[i] || 0) > (m[i] || 0)) return false
    }

    return false
}
