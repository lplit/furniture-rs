# Image Assets — Prompts

Where to place generated files:

```
public/products/og/
```

Replace the empty placeholder files after generating.

---

## Required visuals

### 1. `og-hero.jpg` — Social share / Open Graph card

- **Size:** 1200×630
- **Prompt:**
  > Premium product photography of a walnut credenza-style 8U ATX computer rack standing in a sunlit modern living room, mid-century tapered legs, soft-close tempered glass doors slightly open revealing brass server rails inside, no visible screws, warm afternoon light from a large window, shallow depth of field, interior design magazine aesthetic, 4K, photorealistic —ar 1200:630

---

### 2. `lifestyle-wide.jpg` — Lifestyle banner

- **Size:** 1920×1080
- **Prompt:**
  > Wide interior photograph: minimalist Scandinavian living room, low walnut credenza against a white plaster wall, the credenza is a high-end 8U ATX rack with smoked glass doors and brass feet, a single Monstera plant nearby, morning light, clean lines, no cables visible, architectural digest style, photorealistic, 4K —ar 16:9

---

### 3. `detail-craftsmanship.jpg` — Detail shot

- **Size:** 1024×768
- **Prompt:**
  > Macro product detail of a walnut cabinet corner with traditional joinery, brass hinge, and smoked glass door edge, wood grain visible, soft studio lighting, dark background, luxury furniture photography, no visible fasteners, photorealistic, 4K —ar 4:3

---

### 4. `interior-rails.jpg` — Interior rails

- **Size:** 1024×768
- **Prompt:**
  > Interior view of an open walnut cabinet showing black 19-inch server rails, cable management channels, and a single quiet Noctua-style fan, clean technical aesthetic, soft internal LED lighting, no clutter, premium PC case photography, photorealistic, 4K —ar 4:3

---

### 5. `cable-management.jpg` — Cable management

- **Size:** 1024×768
- **Prompt:**
  > Rear view of a walnut ATX rack cabinet with removable back panel open, integrated cable channels and grommeted pass-throughs, all cables neatly routed, brass hardware, dark background, product photography, photorealistic, 4K —ar 4:3

---

### 6. `watercooling-detail.jpg` — Water cooling detail

- **Size:** 1024×1024
- **Prompt:**
  > Close-up of a walnut PC rack interior showing a radiator mount bracket and rubber grommet tube pass-through, brass fittings, soft studio light, dark moody background, high-end product photography, photorealistic, 4K —ar 1:1

---

### 7. `lifestyle-vertical.jpg` — Mobile lifestyle

- **Size:** 1080×1920
- **Prompt:**
  > Tall lifestyle shot of the walnut ATX credenza rack centered in a cozy modern living room, warm lamplight, glass doors reflecting the room, tapered legs, no people, aspirational interior design, photorealistic, 4K —ar 9:16

---

### 8. `newsletter-waitlist.jpg` — Waitlist emotional shot

- **Size:** 1920×1080
- **Prompt:**
  > Over-the-shoulder lifestyle shot of a person’s hand resting on a walnut credenza that is a premium ATX rack, living room with soft evening light, warm and calm mood, focus on craftsmanship and wood texture, no face visible, photorealistic, 4K —ar 16:9

---

## Generation tools

| Tool | Best for | Notes |
|---|---|---|
| **Midjourney** | Editorial, premium furniture look | Requires Discord |
| **FLUX (Black Forest Labs)** | Sharp photorealism | Best current open-source realism |
| **DALL·E 3** | Fast iteration, literal interpretation | Via OpenAI API or ChatGPT Plus |
| **Adobe Firefly** | Commercial-safe output | Good if you have Creative Cloud |

Recommended workflow:
1. Generate raw images in Midjourney or FLUX.
2. Upscale if needed (Topaz Gigapixel, Magnific, or built-in upscalers).
3. Export to the exact sizes above and drop into `public/products/og/`.
4. Run `pnpm build` to verify file references resolve.
