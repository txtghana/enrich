import { saveProviderData } from "../utils";

export function getCurrentPageUrl() {
    saveProviderData('visited_url', window.location.href)
}

export function canGetCurrentPageUrl() {
    return true;
}