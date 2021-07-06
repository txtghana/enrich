import getBrowserFingerprint from 'get-browser-fingerprint';
import { saveProviderData } from "../utils";

export function getFingerprint() {
    const fingerprint = getBrowserFingerprint();
    saveProviderData('fingerprint', fingerprint)
}

export function canGetFingerprint() {
    return true;
}