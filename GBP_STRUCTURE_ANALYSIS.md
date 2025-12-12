# GBP Category & Service Structure Analysis

## Executive Summary

This analysis compares the current website structure against the required Google Business Profile (GBP) category and service silo structure. The analysis identifies gaps in category pages, service pages, title tags, and internal linking structure.

---

## Current Website Structure

### Existing Pages

**Homepage:**
- URL: `/`
- Title: "Roof Cleaning in Ayrshire | Exterior Cleaning Services | Jimbo's"

**Location Pages (5 cities):**
- `/locations/ayr/` - "Exterior Cleaning in Ayr, Ayrshire | Jimbo's Exterior Cleaning"
- `/locations/irvine/` - "Exterior Cleaning in Irvine, Ayrshire | Jimbo's Exterior Cleaning"
- `/locations/kilmarnock/` - "Exterior Cleaning in Kilmarnock, Ayrshire | Jimbo's Exterior Cleaning"
- `/locations/prestwick/` - "Exterior Cleaning in Prestwick, Ayrshire | Jimbo's Exterior Cleaning"
- `/locations/troon/` - "Exterior Cleaning in Troon, Ayrshire | Jimbo's Exterior Cleaning"

**Service Pages (6 services):**
- `/services/window-cleaning/` - "Window Cleaning in Ayrshire | Jimbo's Exterior Cleaning"
- `/services/gutter-cleaning/` - "Gutter Cleaning in Ayrshire | Jimbo's Exterior Cleaning"
- `/services/driveway-cleaning/` - "Driveway Cleaning in Ayrshire | Jimbo's Exterior Cleaning"
- `/services/pvc-white-cleaning/` - "PVC White Cleaning in Ayrshire | Jimbo's Exterior Cleaning"
- `/services/render-softwashing/` - "Render Softwashing in Ayrshire | Jimbo's Exterior Cleaning"
- `/services/roof-steam-cleaning/` - "Roof Steam Cleaning in Ayrshire | Jimbo's Exterior Cleaning"

**Category Pages:**
- ❌ **NONE EXIST** - No pages for secondary GBP categories

---

## Required GBP Structure

### Primary Category
- **Roofing Service**

### Secondary Categories (Additional)
1. **Cleaners**
2. **Gutter Cleaning Service**
3. **Window Cleaning Service**

### Services by Category

**ROOFING SERVICE (Primary):**
- Gutter cleaning
- Roof Steam Cleaning
- Render Softwashing
- Driveway Cleaning
- PVC White Cleaning
- Window Cleaning

**CLEANERS (Secondary):**
- Interior and exterior window cleaning
- Driveway Cleaning
- Window Cleaning

**GUTTER CLEANING SERVICE (Secondary):**
- Glass and mirror cleaning
- Gutter cleaning
- Interior and exterior window cleaning
- Power/pressure washing
- Rooftop/skylight cleaning

**WINDOW CLEANING SERVICE (Secondary):**
- Glass and mirror cleaning
- Gutter cleaning
- Interior and exterior window cleaning
- Power/pressure washing
- Rooftop/skylight cleaning
- Window washing

---

## Critical Gaps Identified

### 1. Missing Category Pages

**❌ CRITICAL: No secondary category pages exist**

Required pages (for each of 5 cities = 15 total pages):
- `/categories/cleaners/[city]/` - e.g., "Cleaners Ayr | Professional Cleaning Services"
- `/categories/gutter-cleaning-service/[city]/` - e.g., "Gutter Cleaning Service Ayr | Expert Installation & Repair"
- `/categories/window-cleaning-service/[city]/` - e.g., "Window Cleaning Service Ayr | Professional & Reliable"

**Cities requiring category pages:**
- Ayr
- Irvine
- Kilmarnock
- Prestwick
- Troon

**Current Status:** 0/15 category pages exist

---

### 2. Service Pages Missing City Names in Title Tags

**❌ CRITICAL: All service pages use "Ayrshire" instead of specific city names**

**Current Format (INCORRECT):**
- "Window Cleaning in Ayrshire | Jimbo's Exterior Cleaning"
- "Gutter Cleaning in Ayrshire | Jimbo's Exterior Cleaning"

**Required Format:**
- "Window Cleaning Ayr | Quick & Reliable Service"
- "Window Cleaning Irvine | Quick & Reliable Service"
- "Gutter Cleaning Ayr | Expert Installation & Repair"
- etc.

**Impact:** Need city-specific service pages for each service × each city (6 services × 5 cities = 30 pages)

**Current Status:** 0/30 city-specific service pages exist

---

### 3. Missing Service Pages

**❌ Services listed in GBP but no dedicated pages exist:**

1. **Interior and exterior window cleaning** - No page exists
2. **Glass and mirror cleaning** - No page exists
3. **Power/pressure washing** - No page exists
4. **Rooftop/skylight cleaning** - No page exists
5. **Window washing** - No page exists (different from "Window Cleaning")

**Current Status:** 5 services missing from website

---

### 4. Homepage Gaps

**❌ Homepage does NOT mention secondary categories:**

- No mention of "Cleaners" category
- No mention of "Gutter Cleaning Service" category
- No mention of "Window Cleaning Service" category

**❌ Homepage does NOT link to category pages:**

- No internal links to `/categories/cleaners/` pages
- No internal links to `/categories/gutter-cleaning-service/` pages
- No internal links to `/categories/window-cleaning-service/` pages

**Current Status:** Homepage mentions services but not categories, and has no category page links

---

### 5. Category-to-Service Linking Gaps

**❌ Cannot verify category-to-service links because category pages don't exist**

**Required Structure:**
- Cleaners category pages should link to:
  - Interior and exterior window cleaning pages
  - Driveway Cleaning pages
  - Window Cleaning pages

- Gutter Cleaning Service category pages should link to:
  - Glass and mirror cleaning pages
  - Gutter cleaning pages
  - Interior and exterior window cleaning pages
  - Power/pressure washing pages
  - Rooftop/skylight cleaning pages

- Window Cleaning Service category pages should link to:
  - Glass and mirror cleaning pages
  - Gutter cleaning pages
  - Interior and exterior window cleaning pages
  - Power/pressure washing pages
  - Rooftop/skylight cleaning pages
  - Window washing pages

**Current Status:** Cannot be verified - category pages don't exist

---

## Detailed Gap Analysis by Requirement

### Requirement 1: Secondary Category Pages with City Names

**Required Format:** "GBP Category" + "City Name" + additional context

**Example:** "Gutter Cleaning Service Ayr | Expert Installation & Repair"

**Missing Pages:**
- ❌ Cleaners Ayr
- ❌ Cleaners Irvine
- ❌ Cleaners Kilmarnock
- ❌ Cleaners Prestwick
- ❌ Cleaners Troon
- ❌ Gutter Cleaning Service Ayr
- ❌ Gutter Cleaning Service Irvine
- ❌ Gutter Cleaning Service Kilmarnock
- ❌ Gutter Cleaning Service Prestwick
- ❌ Gutter Cleaning Service Troon
- ❌ Window Cleaning Service Ayr
- ❌ Window Cleaning Service Irvine
- ❌ Window Cleaning Service Kilmarnock
- ❌ Window Cleaning Service Prestwick
- ❌ Window Cleaning Service Troon

**Total Missing:** 15 category pages

---

### Requirement 2: Homepage Mentions & Links

**Current Homepage Content Analysis:**

✅ **Mentions services:** Yes (Roof Steam Cleaning, Driveway Cleaning mentioned in hero)
✅ **Links to service pages:** Yes (via Services component)
❌ **Mentions secondary categories:** No
❌ **Links to category pages:** No

**Required Actions:**
1. Add text mentioning "Cleaners", "Gutter Cleaning Service", and "Window Cleaning Service" categories
2. Add internal links to category pages (once created)

---

### Requirement 3: Service Pages with City Names

**Current Format:** "Service in Ayrshire | Jimbo's Exterior Cleaning"
**Required Format:** "Service City Name | Additional words"

**Missing City-Specific Service Pages:**

**Window Cleaning:**
- ❌ Window Cleaning Ayr
- ❌ Window Cleaning Irvine
- ❌ Window Cleaning Kilmarnock
- ❌ Window Cleaning Prestwick
- ❌ Window Cleaning Troon

**Gutter Cleaning:**
- ❌ Gutter Cleaning Ayr
- ❌ Gutter Cleaning Irvine
- ❌ Gutter Cleaning Kilmarnock
- ❌ Gutter Cleaning Prestwick
- ❌ Gutter Cleaning Troon

**Driveway Cleaning:**
- ❌ Driveway Cleaning Ayr
- ❌ Driveway Cleaning Irvine
- ❌ Driveway Cleaning Kilmarnock
- ❌ Driveway Cleaning Prestwick
- ❌ Driveway Cleaning Troon

**PVC White Cleaning:**
- ❌ PVC White Cleaning Ayr
- ❌ PVC White Cleaning Irvine
- ❌ PVC White Cleaning Kilmarnock
- ❌ PVC White Cleaning Prestwick
- ❌ PVC White Cleaning Troon

**Render Softwashing:**
- ❌ Render Softwashing Ayr
- ❌ Render Softwashing Irvine
- ❌ Render Softwashing Kilmarnock
- ❌ Render Softwashing Prestwick
- ❌ Render Softwashing Troon

**Roof Steam Cleaning:**
- ❌ Roof Steam Cleaning Ayr
- ❌ Roof Steam Cleaning Irvine
- ❌ Roof Steam Cleaning Kilmarnock
- ❌ Roof Steam Cleaning Prestwick
- ❌ Roof Steam Cleaning Troon

**Total Missing:** 30 city-specific service pages (6 services × 5 cities)

---

### Requirement 4: Category-to-Service Links

**Cannot be verified** - category pages don't exist yet.

**Once category pages are created, they must link to:**

**Cleaners Category Pages should link to:**
- Interior and exterior window cleaning [city] pages
- Driveway Cleaning [city] pages
- Window Cleaning [city] pages

**Gutter Cleaning Service Category Pages should link to:**
- Glass and mirror cleaning [city] pages
- Gutter cleaning [city] pages
- Interior and exterior window cleaning [city] pages
- Power/pressure washing [city] pages
- Rooftop/skylight cleaning [city] pages

**Window Cleaning Service Category Pages should link to:**
- Glass and mirror cleaning [city] pages
- Gutter cleaning [city] pages
- Interior and exterior window cleaning [city] pages
- Power/pressure washing [city] pages
- Rooftop/skylight cleaning [city] pages
- Window washing [city] pages

---

## Summary of All Gaps

### Missing Pages (Total: 50+ pages)

1. **Category Pages:** 15 missing
   - 3 categories × 5 cities = 15 pages

2. **City-Specific Service Pages:** 30 missing
   - 6 existing services × 5 cities = 30 pages

3. **New Service Pages:** 25 missing (if city-specific)
   - 5 new services × 5 cities = 25 pages
   - OR 5 general service pages if not city-specific

**Total Minimum:** 45-50 new pages required

### Title Tag Issues

1. **All 6 existing service pages** have incorrect title format (missing city names)
2. **All 15 category pages** don't exist (so no title tags)

### Internal Linking Issues

1. **Homepage:** Missing links to category pages
2. **Homepage:** Missing mentions of secondary categories
3. **Category pages:** Don't exist, so cannot link to service pages
4. **Service pages:** Currently link to locations but not to category pages

---

## Recommendations

### Priority 1: Create Category Pages (15 pages)

Create category pages for each secondary category × each city:

**URL Structure:**
- `/categories/cleaners/[city]/`
- `/categories/gutter-cleaning-service/[city]/`
- `/categories/window-cleaning-service/[city]/`

**Title Tag Format:**
- "Cleaners [City] | Professional Cleaning Services"
- "Gutter Cleaning Service [City] | Expert Installation & Repair"
- "Window Cleaning Service [City] | Professional & Reliable"

### Priority 2: Create City-Specific Service Pages (30 pages)

Create city-specific versions of existing services:

**URL Structure:**
- `/services/[service]/[city]/` OR
- `/services/[service]-[city]/`

**Title Tag Format:**
- "[Service] [City] | [Additional Context]"
- Example: "Window Cleaning Ayr | Quick & Reliable Service"

### Priority 3: Create Missing Service Pages (5 services)

Create pages for services listed in GBP but not on website:
1. Interior and exterior window cleaning
2. Glass and mirror cleaning
3. Power/pressure washing
4. Rooftop/skylight cleaning
5. Window washing

**Decision needed:** Should these be city-specific (25 pages) or general (5 pages)?

### Priority 4: Update Homepage

1. Add section mentioning secondary categories
2. Add internal links to category pages
3. Maintain existing service links

### Priority 5: Implement Category-to-Service Links

Once category pages exist, ensure each links to relevant service pages as outlined in Requirement 4.

---

## Example Fixes

### Example 1: Category Page

**Create:** `/categories/gutter-cleaning-service/ayr/`

**Title Tag:** "Gutter Cleaning Service Ayr | Expert Installation & Repair"

**Content Should Include:**
- Introduction to gutter cleaning services in Ayr
- Links to:
  - Glass and mirror cleaning Ayr
  - Gutter cleaning Ayr
  - Interior and exterior window cleaning Ayr
  - Power/pressure washing Ayr
  - Rooftop/skylight cleaning Ayr

### Example 2: City-Specific Service Page

**Create:** `/services/window-cleaning/ayr/`

**Title Tag:** "Window Cleaning Ayr | Quick & Reliable Service"

**Content Should Include:**
- Window cleaning services specific to Ayr
- Local information about Ayr
- Link back to Window Cleaning Service Ayr category page

### Example 3: Homepage Update

**Add Section:**
```html
<h2>Our Service Categories</h2>
<ul>
  <li><a href="/categories/cleaners/ayr">Cleaners in Ayrshire</a></li>
  <li><a href="/categories/gutter-cleaning-service/ayr">Gutter Cleaning Service in Ayrshire</a></li>
  <li><a href="/categories/window-cleaning-service/ayr">Window Cleaning Service in Ayrshire</a></li>
</ul>
```

---

## Next Steps

1. **Review and approve** this gap analysis
2. **Decide on URL structure** for city-specific pages
3. **Prioritize page creation** (suggest starting with category pages)
4. **Create content templates** for category and service pages
5. **Implement internal linking strategy** across all pages
6. **Update homepage** with category mentions and links
7. **Test and verify** all title tags match required format

---

*Analysis completed: Based on current codebase structure and GBP requirements*
*Date: 2025-01-27*


