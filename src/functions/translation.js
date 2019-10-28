export function trans(thing,lang='en') {
    if (thing.i10n !== undefined) {
        if (thing.i10n['de']) {
            return thing.i10n['de']
        }
        if (thing.i10n[lang]) {
            return thing.i10n[lang]
        }
    }
    if (thing.name) {
        return thing.name
    }
    if (thing.key) {
        return thing.key
    }
    if (thing.id) {
        return thing.id
    }

    return "untranslatable"
}