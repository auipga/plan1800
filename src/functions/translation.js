export function trans(thing,lang='en') {
    if (thing.i10n !== undefined) {
        if (thing.i10n[lang]) {
            return thing.i10n[lang]
        }
        if (thing.i10n['en']) {
            return thing.i10n['en']
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