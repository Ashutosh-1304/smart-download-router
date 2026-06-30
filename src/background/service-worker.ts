import { logDebug } from '../shared/logger';

chrome.runtime.onInstalled.addListener(() => {
  logDebug('Smart Download Router installed.');
});

