---
seo:
  title: H2OFlows Docs
  description: Documentation for H2OFlows — streamflow data platform for whitewater paddlers.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---

#title
Streamflow data for [whitewater paddlers]{.text-primary}.

#description
H2OFlows is a free, open source gauge dashboard built by paddlers. Monitor your favorite rivers, set flow alerts, and explore reach data — all in one place.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/h2oflows-app/web
  target: _blank
  ---
  View on GitHub
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Everything you need to check the river

#features
  :::u-page-feature
  ---
  icon: i-lucide-gauge
  ---
  #title
  Live Gauge Dashboard

  #description
  CFS readings, sparklines, trend indicators, and 48-hour flow history for every gauge on your watchlist. Multi-dashboard support keeps different runs organized.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-activity
  ---
  #title
  Flow Band Labels

  #description
  Community-defined flow ranges (Too Low / Minimum / Optimal / Pushy) overlaid on live CFS. See at a glance if your run is on.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-map-pin
  ---
  #title
  Reach Pages

  #description
  Put-in and take-out coordinates, rapid inventory, access notes, and current conditions — all tied to live gauge data.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bell
  ---
  #title
  Flow Alerts

  #description
  Get notified when a gauge crosses a threshold you care about. SMS, push, and Discord alerts coming in Phase 3.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-upload
  ---
  #title
  KMZ Import

  #description
  Build a reach in Google My Maps and import it directly. The importer reads pin prefixes and folder names — no SQL required.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  Public API

  #description
  All reach and gauge data is freely accessible via API. Build your own tools on top of the H2OFlows data layer.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/h2oflows-app/web'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to check the river?
  description: H2OFlows is free and open source. Sign in with Google to save your watchlist and get personalized flow alerts.
  class: dark:bg-neutral-950
  ---
  :::
::
