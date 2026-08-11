# Tidy up and standardise every outbound link

All internal buttons and the special doors (bus, book, game, voice, DonaTeD, Contact TeD) already point where they should. The only work is cleaning up the social/streaming links so each service has one canonical URL used everywhere on the site.

## What changes

One shared list of official links becomes the single source of truth, and every button on the site reads from it:

- YouTube: https://youtube.com/@cannabusted (tracking code removed)
- Spotify: https://open.spotify.com/artist/5ffLruUeSIhhOxr5PdVPI5 (tracking code removed)
- Apple Music: https://music.apple.com/gb/artist/cannabusted/1592297432 (UK store instead of /ug/)
- Amazon Music: https://music.amazon.co.uk/artists/B09KJF6SFQ/cannabusted
- Facebook: https://www.facebook.com/CannaBusTeD (replaces both the /share/ link and the lowercase one)
- TikTok: https://www.tiktok.com/@cannabusted (tracking code removed)

Amazon Music and TikTok get added to the shared set so both pages can use them.

## Files touched

- `src/data/social.ts` — canonical URLs for all six services; add `amazon` and `tiktok`.
- `src/routes/listen.tsx` — replace the six hardcoded hrefs with the shared values.
- `src/components/SocialButtons.tsx` / `src/components/SocialIconButtons.tsx` — no URL changes needed (they already read from the shared file); they keep showing YouTube, Spotify, Apple, Facebook.

Nothing else moves: no layout, copy, or button placement changes.

## One thing to confirm

Your message cut off mid-way on the TikTok address. I'll use `https://www.tiktok.com/@cannabusted` unless you tell me otherwise.
