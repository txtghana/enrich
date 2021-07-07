import { saveProviderData } from "../utils";

export function getPageUrl() {
    saveProviderData('visited_url', window.location.href)
}

export function canGetPageUrl() {
    return true;
}