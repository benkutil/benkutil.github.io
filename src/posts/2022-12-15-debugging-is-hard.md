---
title: Debugging is hard
layout: layouts/content.njk
tags: notes
---
**Update:** It took me another hour to debug Cloudflare Page build problems. Cloudflare stalled when referencing the package using the github short code format in `package.json`. After trial an error, it seems using the full `https` based git url works well enough.
Tonight, I spent 30 minutes trying to figure out why something wasn’t working. Found out that the package I used had an issue in its **core functionality**. And it wasn’t actively maintained.
Thankful someone had [forked and fixed](https://github.com/sentience/eleventy-xml-plugin) the issue.
Anyways. I don’t miss this part of programming.
