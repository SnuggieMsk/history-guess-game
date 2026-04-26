# Species Photo Drop-In

Drop licensed species photos here to override the SVG illustrations
in the Produce Catalog (`/v2/produce`).

## File naming convention

Match the species `id` in `src/data/v2ProduceCatalog.js`:

| Species id           | Expected file                  | Recommended source            |
|----------------------|--------------------------------|-------------------------------|
| vannamei             | `vannamei.jpg`                 | MPEDA, FAO FishBase, or stock |
| pomfret-silver       | `pomfret-silver.jpg`           | MPEDA, CMFRI                  |
| lobster-spiny        | `lobster-spiny.jpg`            | iNaturalist, Wikimedia        |
| mudcrab              | `mudcrab.jpg`                  | iNaturalist, Wikimedia        |
| octopus              | `octopus.jpg`                  | iNaturalist, Wikimedia        |
| tuna-yellowfin       | `tuna-yellowfin.jpg`           | NOAA, iNaturalist             |
| cuttlefish           | `cuttlefish.jpg`               | iNaturalist, Wikimedia        |

## Recommended specs

- Format: JPEG (or WebP for better compression)
- Width: 800-1200 px (aspect ratio ~16:10 or 4:3)
- Subject: side view, clean background, well-lit
- Size: < 200 KB per image (use `mozjpeg -quality 82` or similar)

## Licensing notes

For investor / commercial deployment, ensure each image is:
1. Owned (you commissioned the photo), OR
2. CC0 / Public Domain (verify via Wikimedia Commons + iNaturalist), OR
3. Licensed (Shutterstock, Adobe Stock, iStock; budget ₹3-5K for 7 photos)

Avoid Google Image search results — most are copyright-restricted.

## Fallback behavior

If a file is missing, the SpeciesImage component automatically falls back
to an inline SVG illustration. The dashboard always renders something —
no broken-image icons.

## After dropping files

No code change needed. The component looks for `${PUBLIC_URL}/species/${id}.jpg`
on every render. CRA serves `public/` at the root in dev + production builds.
