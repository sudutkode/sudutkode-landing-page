# SEO Deployment & Google Search Console Guide

**Date:** April 12, 2026
**Version:** 2.0 — Bilingual Jakarta-Based Strategy
**Last Updated:** April 12, 2026

This guide walks you through submitting your **bilingual, Jakarta-based SEO-optimized** SudutKode landing page to Google and monitoring performance across English and Indonesian keywords.

---

## Bilingual Strategy Overview

**SudutKode's SEO targets TWO audiences from ONE URL:**

| Aspect            | Focus                                                 |
| ----------------- | ----------------------------------------------------- |
| **URL**           | Single: `sudutkode.web.app` (same for both languages) |
| **Visible Copy**  | English only (premium positioning)                    |
| **SEO Keywords**  | Bilingual (EN + ID in meta tags)                      |
| **Base Location** | Jakarta, Indonesia                                    |
| **Service Areas** | Indonesia, Asia Pacific, Worldwide                    |
| **Hreflang**      | Signals "en", "id", and "x-default"                   |
| **Locale Tags**   | OG locale en_US + id_ID                               |

---

## Step 1: Set Up Google Search Console

### A. Create/Verify GSC Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google Account
3. Click **"Start now"** or **"Add property"**

### B. Add Your Website

**Recommended: Domain Property**

```
Property type: Domain
Domain: sudutkode.web.app
```

**Why Domain over URL Prefix?**

- Covers all subdomains/protocols (`http://`, `https://`, `www.`, etc.)
- Better for bilingual same-URL strategy
- Single reporting dashboard

### C. Verify Ownership

**Best Method: HTML Tag**

1. In GSC, copy the `<meta name="google-site-verification">` tag
2. Add to `<head>` in `index.html` (or use robots.txt upload)
3. Return to GSC and click **"Verify"**
4. Should see ✅ **Verification successful**

**Alternative: Google Analytics**

- If you link GA4 to your GSC property, it auto-verifies

---

## Step 2: Submit Bilingual Sitemap

### Important: Sitemap Includes Hreflang Alternates

Your sitemap (`public/sitemap.xml`) includes hreflang tags for each URL:

```xml
<url>
  <loc>https://sudutkode.web.app#products</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://sudutkode.web.app#products" />
  <xhtml:link rel="alternate" hreflang="id" href="https://sudutkode.web.app#products" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://sudutkode.web.app#products" />
  <priority>0.95</priority>
</url>
```

This tells Google the same URL serves both English and Indonesian audiences.

### Submit to GSC:

1. Navigate to **Sitemaps** (left sidebar)
2. Click **"Add/Test Sitemap"**
3. Enter: `https://sudutkode.web.app/sitemap.xml`
4. Click **"Submit"**

**Expected Outcome:**

- ✅ Status: "Success"
- ✅ Pages indexed: 9 pages
- ✅ Images indexed: 1-2 images
- ✅ Hreflang tags: Processed correctly

---

## Step 3: Verify robots.txt

### GSC Automatically Crawls robots.txt

Your `robots.txt` allows all search engines:

```
User-agent: *
Allow: /
Sitemap: https://sudutkode.web.app/sitemap.xml
```

### Test in GSC:

1. Go to **Settings** > **Crawl Settings**
2. Should show ✅ "robots.txt is successfully fetched"
3. Or use **URL Inspection** tool on any page

---

## Step 4: Test Bilingual Structured Data

### A. Validate in Rich Results Test

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter: `https://sudutkode.web.app`
3. Click **"Test URL"**

**Expected Valid Results:**

- ✅ **Organization** schema
  - Shows: SudutKode, Jakarta address, bilingual languages
- ✅ **WebSite** schema
  - Shows: inLanguage: ["en", "id"]
- ✅ **LocalBusiness** schema
  - Shows: Jakarta location, service types, worldwide areaServed

**If You See Errors:**

1. Go to [Schema.org Validator](https://validator.schema.org/)
2. Copy source from your website
3. Identify issues
4. Fix in `index.html` JSON-LD sections
5. Re-test

### B. Common Schema Issues & Fixes

| Issue                 | Fix                             |
| --------------------- | ------------------------------- |
| Missing addressRegion | Already included (Jakarta)      |
| Invalid language code | Using "en", "id" — both correct |
| Duplicate @context    | Each schema has one @context    |

---

## Step 5: Monitor Initial Bilingual Indexing

### Track Indexing in GSC Coverage Report

1. Go to **Coverage** (left sidebar)
2. Monitor:
   - ✅ **Valid** — Pages indexed successfully
   - ⚠️ **Valid with warnings** — Minor issues (non-blocking)
   - ❌ **Excluded** — Not indexed (check reasons)
   - ❌ **Error** — Fix immediately

### Expected Timeline for Bilingual Site:

```
Day 1:        GSC crawls sitemap + hreflang tags
Day 1-3:      First pages indexed (both language signals detected)
Day 7-14:     All 9 pages indexed
Day 14-30:    Keywords start appearing (EN + ID mixed)
Week 6-8:     Indonesian keywords rank (lower competition)
Week 12+:     English keywords rank (higher competition)
```

### What to Look For:

- **Language Coverage:** GSC should show you're serving both English and Indonesian
- **Hreflang:** All alternate links processed correctly
- **Canonical:** Should show single canonical per URL

---

## Step 6: Set Up Google Analytics 4 (Bilingual Tracking)

### A. Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. **Create** > **New Property**
3. Property name: `SudutKode — Bilingual`
4. Country: Indonesia
5. Timezone: Asia/Jakarta
6. Currency: USD
7. Create

### B. Add Tracking Code

Add this to `index.html` `<head>`:

```html
<!-- Google Analytics 4 -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 Measurement ID.

### C. Link GA4 to GSC

1. In Google Analytics: **Admin** > **Property** > **Property Settings**
2. Scroll to **Google Search Console links**
3. Click **"Link Search Console"**
4. Select: `sudutkode.web.app`
5. Save

**Benefits:**

- See search queries in GA4
- Track which keywords drive conversions
- Identify low-CTR keywords
- Monitor bilingual traffic separately

---

## Step 7: Monitor Search Performance (Bilingual)

### Key Metrics to Track

#### A. Performance Dashboard in GSC

1. Go to **Performance** (left sidebar)
2. Default view shows all traffic (EN + ID combined)
3. Key metrics:
   - **Clicks:** Users who clicked your result
   - **Impressions:** Times you appeared in SERP
   - **CTR:** Click-through rate
   - **Position:** Average ranking

#### B. Filter by Language (via Search Analytics)

Unfortunately, GSC doesn't natively filter by language. Instead:

**Workaround: Set up GA4 segments**

1. In GA4, create segment: "Organic traffic from Google"
2. Add dimension: "Page location" (contains keywords)
3. Compare:
   - Indonesian keywords (e.g., "Jakarta", "jasa")
   - English keywords (e.g., "app dev", "studio")

#### C. Expected Performance Curve

```
Month 1:  Weak impressions (~20-100/month)
          Position: 30+

Month 2:  Growing impressions (100-300/month)
          Position: 15-25, Indonesian keywords improve

Month 3:  Strong ID keywords (Position 5-10)
          English still weak (Position 20+)

Month 4-6: ID keywords page 1, EN keywords improving
          Mixed traffic from both languages
```

### Example Performance Report:

```
Query                          Language  Clicks  Impressions  Position  Trend
"software house jakarta"       ID        8       180          6.2       ↑
"jasa pembuatan aplikasi"      ID        5       120          8.5       ↑
"software house"               EN        2       45           28.1      ➡️
"mobile app development"       EN        1       20           35.2      ➡️
"react native development"     EN        3       65           14.8      ↑
```

---

## Step 8: Fix Indexing Issues

### Common Bilingual Issues & Fixes:

#### Issue: "Alternate links not recognized"

**Cause:** Hreflang syntax error
**Fix:** Validate sitemap at [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
**Check:**

```xml
<!-- CORRECT -->
<xhtml:link rel="alternate" hreflang="en" href="..." />
<xhtml:link rel="alternate" hreflang="id" href="..." />
<xhtml:link rel="alternate" hreflang="x-default" href="..." />

<!-- WRONG (underscores) -->
<xhtml_link rel="alternate" hreflang_en href="..." />
```

#### Issue: "Only one language detected"

**Cause:** Missing hreflang alternates
**Fix:** Ensure sitemap includes all three hreflang variants
**Action:** Regenerate sitemap.xml with correct namespace

#### Issue: "Excluded by robots.txt"

**Cause:** Robots.txt blocking crawl
**Fix:** Check `public/robots.txt` allows `/`
**Action:** Verify `Allow: /` is set

#### Issue: "No mobile-friendly version detected"

**Cause:** Responsive design issue
**Fix:** Test in [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
**Action:** Verify `<meta name="viewport">` present (already is)

---

## Step 9: Enable Rich Snippets (Bilingual)

### Knowledge Panel for Indonesian Queries

Your LocalBusiness schema is perfect for this:

```json
{
  "@type": "LocalBusiness",
  "address": {"addressLocality": "Jakarta", "addressCountry": "ID"},
  "areaServed": ["Indonesia", "Asia Pacific", "Worldwide"]
}
```

**Expected to appear in:**

- Google Maps results (search: "software house jakarta")
- Knowledge Panel (search: "SudutKode")
- Local 3-pack (if enough reviews)

### Improve Rich Snippet Chances:

1. **Get Business Reviews** (Google My Business)
2. **Add FAQPage Schema** (if Q&A section added)
3. **Add Video Schema** (if product demos added)
4. **Optimize Images** (for image-rich results)

Currently implemented:

- ✅ Organization schema
- ✅ LocalBusiness schema
- ✅ Image references in sitemap

---

## Step 10: Monitor International Ranking Trends

### Track Bilingual Performance Over Time

**Create GSC Dashboard:**

1. Go to **Performance** report
2. Click **"New"** > **Comparison**
3. Dimension: **Query**
4. Add filter: Contains ID keywords OR EN keywords
5. Track separately

**Monthly Checklist:**

- [ ] Compare Indonesian vs English keyword performance
- [ ] Monitor position changes (both languages)
- [ ] Check for new keywords appearing (both languages)
- [ ] Validate CTR improvements
- [ ] Review new search opportunities

**Use Tools:**

- **GSC:** Free, native data
- **Google Keyword Planner:** Free, volume estimates
- **Google Trends:** Free, trend analysis

**Paid Tools (optional):**

- Semrush (bilingual keyword tracking)
- Ahrefs (competitive analysis)
- Moz (authority monitoring)

---

## Step 11: Optimize Based on Data

### Monthly Optimization Cycle:

**Week 1:** Analyze GSC data

- Which keywords bring most traffic?
- Which have low CTR despite ranking?
- Which languages dominate?

**Week 2:** Optimize underperformers

- Improve meta descriptions for low-CTR queries
- Add internal links to undervisited pages
- Update content if off-topic traffic found

**Week 3:** Plan content additions

- Blog posts on high-volume keywords
- Case studies with bilingual copy
- Localized content for Indonesian market

**Week 4:** Monitor changes

- Re-test structured data if changes made
- Verify no new errors
- Plan next month optimizations

---

## Bilingual-Specific Optimization Tips

### 1. Content Expansion (Future)

**Option A:** Keep English visible, add Indonesian toggle

- Pro: Clean, minimal UI
- Con: Requires JavaScript language switching

**Option B:** Add Indonesian resource page

- Pro: Separate ranking potential
- Con: More maintenance

**Option C:** Blog with bilingual posts

- Pro: Multiple keyword opportunities
- Con: Content effort required

### 2. Link Building (Both Languages)

**For Indonesian Keywords:**

- Partner with Indonesian tech blogs
- Guest posts on Indonesian business sites
- Backlinks from `.id` domains

**For English Keywords:**

- Product demo on international platforms
- BackLinks from tech communities (Dev.to, HackerNews)
- Founder interviews in English

### 3. Local SEO (Jakarta Focus)

- Register on Google My Business (if not done)
- Get Jakarta-specific reviews
- Create "Software House in Jakarta" landing page (future)

---

## Deployment Readiness Checklist

Before submitting to GSC:

- [x] All meta tags bilingual
- [x] Hreflang alternates in sitemap
- [x] All three JSON-LD schemas present
- [x] robots.txt allows crawling
- [x] Canonical tag self-referential
- [x] OG tags bilingual (en_US + id_ID)
- [x] No console errors
- [x] Mobile responsive verified
- [x] Images optimized

**Status:** 🟢 **Ready for deployment**

## Step 11: Implement Continuous Monitoring

### Weekly Checklist:

- [ ] Check GSC **Coverage** for new errors
- [ ] Review **Performance** metrics
- [ ] Check **Crawl Stats** to ensure healthy crawl rate
- [ ] Monitor top 5 keywords' positions

### Monthly Checklist:

- [ ] **Comprehensive Performance Analysis:**
  - CTR trends
  - Position changes
  - Traffic patterns

- [ ] **Backlink Monitoring:**
  - Check if new backlinks added
  - Remove bad links (if any appear)
  - Monitor competitor backlinks

- [ ] **Keyword Ranking Audit:**
  - Rank top 20 keywords
  - Identify opportunities
  - Find content gaps

### Quarterly Checklist:

- [ ] **Full SEO Audit:**
  - Technical SEO scan
  - Content quality review
  - Structural data validation
  - Mobile usability check

- [ ] **Reporting & Planning:**
  - Create SEO report
  - Set new keyword targets
  - Plan content updates

---

## Expected Results Timeline

### Month 1 (April 2026)

- Sitemap submitted ✅
- Pages indexed (90% of pages)
- Search Console data flowing
- Initial impressions begin (~100-500/month)

### Month 2-3 (May-June 2026)

- All pages indexed (95-99%)
- Cumulative clicks increased
- Long-tail keyword rankings appear
- Estimated clicks: 200-800/month

### Month 4-6 (July-September 2026)

- Primary keyword positions improve
- Average position: ~10-15 → ~5-8
- Significant click increase
- Monthly clicks: 800-3000+

### Month 6-12 (September 2026+)

- Establish authority
- Target position: 1-5 for primary keywords
- Sustained organic traffic growth
- Monthly clicks: 3000-10000+

---

## Security & Best Practices

### Robots.txt Best Practices:

✅ Configured correctly
✅ Allows Googlebot (crawl-delay: 0)
✅ Sitemap included
✅ Admin directories blocked

### Sitemap Best Practices:

✅ XML format (not HTML)
✅ Valid URLs (no query parameters)
✅ Images included
✅ Priority weights set correctly

### Meta Tags Best Practices:

✅ Canonical tag present
✅ Language alternates (hreflang) defined
✅ Robots meta: "index, follow"
✅ Viewport configured for mobile

### Structured Data Best Practices:

✅ Valid JSON-LD format ✅ Multiple schema types
✅ LocalBusiness includes address
✅ Organization includes social links
✅ No invalid properties

---

## Troubleshooting Guide

### "My pages aren't showing in search results"

**Diagnostic Steps:**

1. Check GSC **Coverage** — Are pages indexed?
2. Test in **URL Inspection** — Can Google access?
3. Check **Mobile Usability** — Any errors?
4. Review **Core Web Vitals** — Good, needs improvement?

**Common Fixes:**

- Remove robots.txt block
- Add canonical tag
- Fix mobile usability issues
- Improve page speed (Mobile-first)

### "Why aren't I ranking for my keywords?"

**Check:**

1. Keyword difficulty (too competitive?)
2. Page relevance (content matches keyword?)
3. Backlink profile (enough authority?)
4. Page speed (>2.5s load time?)

**Solutions:**

- Create more targeted content
- Build high-quality backlinks
- Improve on-page SEO
- Optimize for Core Web Vitals

### "My rankings dropped"

**Investigation:**

1. Check for algorithm updates
2. Review recent changes to site
3. Check for indexing issues
4. Analyze competitor movements

**Recovery Steps:**

- Check GSC coverage and errors
- Remove bad backlinks
- Update stale content
- Improve E-E-A-T signals

---

## Contact & Support

For GSC support:

- [Google Search Central](https://developers.google.com/search)
- [GSC Help Center](https://support.google.com/webmasters)
- [Google Search Community](https://www.seroundtable.com)

---

## Checklist — Before Initial Submission

- [ ] index.html meta tags verified
- [ ] robots.txt file created (`public/robots.txt`)
- [ ] sitemap.xml file created (`public/sitemap.xml`)
- [ ] Structured data valid in Rich Results Test
- [ ] Website accessible at `https://sudutkode.web.app`
- [ ] Mobile responsive (test via Google Mobile-Friendly Test)
- [ ] Page load speed acceptable (<3 seconds)
- [ ] No critical errors in Console
- [ ] GSC account created
- [ ] Website property added in GSC
- [ ] Ownership verified via preferred method
- [ ] Sitemap submitted to GSC

---

**Next Action:** Submit to Google Search Console → [search.google.com/search-console](https://search.google.com/search-console)
