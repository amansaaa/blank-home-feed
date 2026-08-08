# Blank Home Feed

A Chrome extension that hides the recommendation feed on the YouTube desktop
homepage. Search, watch pages, subscriptions, channel pages, playlists, and
history all continue to work and look exactly as they normally do — only the
`youtube.com` / `www.youtube.com` front page is blanked out, leaving a plain
dark background in place of the video grid.

This is an independent project and is not affiliated with, endorsed by, or
associated with YouTube or Google in any way.

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

## If YouTube changes its DOM

YouTube periodically renames its internal custom elements, which can cause
the blocking rules in `block.css` to stop matching. If the homepage feed
reappears, or a wrong part of the page seems affected:

1. Open `youtube.com`, open DevTools, and inspect the homepage structure.
2. Confirm `ytd-browse[page-subtype="home"]` is still the element YouTube
   sets on the homepage container — every rule in `block.css` is scoped
   under this attribute, which is what keeps search/watch/subscriptions
   pages untouched. This is also what makes SPA navigation (e.g. clicking
   the logo from a watch page) work with no JS needed.
3. Update the following selectors in `block.css` to match the current DOM:
   - the main video grid (currently `ytd-rich-grid-renderer`)
   - Shorts shelves embedded in the grid (currently `ytd-rich-shelf-renderer`)
   - the topic filter chip bar (currently `ytd-feed-filter-chip-bar-renderer`
     / `#chips-wrapper`)
4. Never widen a selector to anything that could match the masthead (search
   bar, logo, avatar) or the left sidebar — a selector that stops matching
   should only ever mean "recommendations reappear," never "YouTube breaks."

## Non-goals

This extension intentionally does not:

- Block or filter the Shorts *page* (`/shorts/...`)
- Do keyword or channel-level filtering
- Track watch time or collect any analytics/statistics
- Intercept network requests or use `declarativeNetRequest`
- Sync anything to a remote server — all state stays local via
  `chrome.storage.sync`
- Collect or transmit any telemetry whatsoever
