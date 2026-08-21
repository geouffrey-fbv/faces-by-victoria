# Faces By Victoria — listings copy & setup

Copy and setup notes for the Google Business Profile, Fresha and the website.
Everything here is drafted to be consistent across all three.

---

## ⚠️ Read this first: naming the drug

**Botulinum toxin is a prescription-only medicine (POM), and advertising a POM
to the public is prohibited** under Part 14 of the UK's Human Medicines
Regulations 2012. The MHRA treats breaches as a criminal matter, not a
marketing infraction, and the ASA treats almost any public reference to
botulinum toxin — including brand names like Botox — as a breach.

**This applies to the website, Google, Fresha, Instagram and paid ads alike.**

Practical rules:

- Never write "Botox", "botulinum toxin", or a brand name in public-facing copy
- "Anti-wrinkle treatment" / "anti-wrinkle injections" is the accepted wording
- **Do not post before/after photos of toxin results** — the ASA treats those as
  efficacy claims for a POM
- Naming it is permitted only in the limited context of promoting a consultation

⚠️ These are UK rules. Gibraltar has its own medicines legislation, closely
modelled on the UK's, and the website is readable from the UK and Spain.
**Victoria should confirm the position with her insurer or regulator** — but the
compliant wording costs nothing, so there is no reason to take the risk.

Note: Fresha currently lists a category literally called "Botulinum Toxin". That
is her booking menu rather than an advert, and the line is blurrier there, but
it is worth asking Fresha or her insurer whether it should be retitled
"Anti-Wrinkle".

---

## 1. Google Business Profile — category

**Primary: `Medical Spa`**

**Secondary (add all that genuinely apply):**

- `Skin Care Clinic`
- `Facial Spa`

**Not `Beauty Salon`.** It pulls hair-and-nails search intent, buries her among
non-medical businesses, and contradicts the brand positioning — the site brief
explicitly says to avoid looking like a generic beauty salon.

The principle Google rewards: **the primary category should say what the
business _is_, not what it _offers_.** Individual treatments belong in the
Services section (below), not as categories.

⚠️ Two caveats:

1. `Medical Spa` implies medical oversight. Injectables require a prescriber.
   Only use it if that reflects how the practice is actually set up — if not,
   `Skin Care Clinic` is the honest primary.
2. Google has been reclassifying some aesthetic businesses to `Medical Clinic`.
   If that happens, it is a known Google behaviour, not an error to fight.

---

## 2. Google Business Profile — services

Grouped to mirror the Fresha menu, with the POM wording corrected.

**Consultations**
- Aesthetics Consultation
- Skin Consultation
- Treatment Review

**Injectables**
- Anti-Wrinkle Treatment
- Dermal Fillers
- Lip Enhancement
- Cheek Enhancement
- Facial Balancing
- Facial Contouring

**Skin**
- Skin Boosters
- Bespoke Facial Plan
- Skin Rejuvenation
- Medical-Grade Skincare

**Lifting**
- PDO Thread Lift
- Non-Surgical Facial Lifting

**Body**
- Fat Dissolving Injections
- Body Contouring
- Ultra Sculpt Body Contouring

**Hair**
- Hair Loss Treatment
- Hair Loss Consultation

Add a one-line description to each in Google — profiles with described services
rank better and convert better than bare lists.

---

## 3. Descriptions

### Google Business Profile (750 character limit — this is ~700)

> Faces By Victoria is an aesthetics and skin clinic in Gibraltar, led by
> Victoria, offering expert-led facial aesthetics, skin rejuvenation and
> age-management treatments.
>
> Every treatment begins with a proper conversation about your face, your skin
> and what you actually want to change. The focus is facial balance, skin
> quality and long-term rejuvenation rather than following trends — results
> that still look like you, never overdone.
>
> Treatments include dermal fillers for lip enhancement, cheek definition and
> facial balancing; anti-wrinkle treatments; PDO thread lifting; skin boosters
> and bespoke facial plans; fat dissolving and body contouring; and hair loss
> treatments.
>
> Treatment plans are personal, considered and paced. Based at 17–21 Cannon
> Lane, Gibraltar. Book online.

### Fresha "About" (shorter, and currently still mentions Ian — replace it)

> Faces By Victoria is an aesthetics and skin clinic in Gibraltar, led by
> Victoria.
>
> Victoria has spent years working across aesthetics and skin, building a
> practice around results that look like you — never overdone. Every treatment
> begins with a proper conversation about your face, your skin and what you
> actually want to change.
>
> Her focus is facial balance, skin quality and long-term rejuvenation rather
> than following trends. Treatment plans are personal, considered and paced, so
> your results age well with you.

### One-liner (Instagram bio, directories, meta descriptions)

> Expert-led aesthetics, skin rejuvenation and age-management in Gibraltar.
> Results that still look like you.

---

## 4. Images

### Ready to upload

- `brand/google-business/logo-720x720.png` — the V monogram on the brand's dark
  background, at Google's recommended logo size. Built from the 1254px master.

### Still needed — these require a real photographer

Google weights genuine location photography heavily for local ranking, and
reuses none of it well if it is stock. **Do not reuse the website's Instagram-grid
images** — they are generic stock, and Google can detect duplicates across the web.

Priority order:

| Shot | Why | Spec |
|---|---|---|
| **Exterior with signage** | Strongest single signal for local discovery; helps clients find the door | 1024×576, landscape |
| **Interior / treatment room** | The single biggest trust driver for aesthetics | 1024×576, landscape |
| **Victoria — portrait** | The brand is built around her | 720×720 or portrait |
| **Victoria at work** | Shows the practice is real and active | landscape |
| **Reception / waiting area** | Completes the "what will it be like" picture | landscape |

Google specs: JPG or PNG, between 10KB and 5MB, minimum 720×720 for square
photos, 250×250 absolute minimum for the logo.

⚠️ **No before/after photos of anti-wrinkle results** — see the warning at the
top. Filler and skin before/afters are lower risk but still need consent and
must not be retouched.

### Fresha images

Same shots work. Fresha's venue gallery is the first thing a client sees when
they land from Google or Instagram, so the interior and Victoria's portrait
matter most there.

---

## 5. Consistency — NAP

Keep the name, address and phone **byte-identical** across Google, Fresha, the
website and Instagram. Inconsistent listings actively suppress local ranking.

- **Name:** Faces By Victoria
- **Address:** 17–21 Cannon Lane, Gibraltar
- **Website:** https://facesbyvictoria.com
- **Booking:** the Fresha venue URL in `src/lib/site.ts`

⚠️ The site's WhatsApp number is a **UK mobile** (+44 7581 070988), not a
Gibraltar one. If Google lists a Gibraltar landline and the site shows a UK
mobile, that is an inconsistency worth resolving one way or the other.
