# Blank Home Feed

A Chrome extension that hides the recommendation feed on the YouTube desktop
homepage. Search, watch pages, subscriptions, channel pages, playlists, and
history all continue to work and look exactly as they normally do — only the
`youtube.com` / `www.youtube.com` front page is blanked out, leaving a plain
dark background in place of the video grid.

## Install (unpacked)

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select this folder.
4. Visit `youtube.com` — the homepage feed should be blank.

## Toggling on/off

Click the extension's toolbar icon to open the popup, then check/uncheck
**Blank home feed**. This takes effect immediately on any open YouTube tabs —
no reload needed. The setting is stored with `chrome.storage.sync`, so it
follows you across Chrome installs where you're signed in.
