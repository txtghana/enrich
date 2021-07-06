export function getUserActiveTime() {
    saveProviderData('duration', 1)
}

export function canGetUserActiveTime() {
    return true;
}