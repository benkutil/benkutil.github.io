---
title: "Hello Again"
description: "Starting this website over again. Again. Using 11ty, Cloudflare Pages, and CodeSpaces."
layout: layouts/content.liquid
tags: 
    - posts
    - meta
---
My new years resolution for 2020 was to publish more to my website. I started on [January 20th, 2020](https://github.com/benkutil/benkutil.github.io/pull/45/files), and made it to [March 2nd, 2020](https://github.com/benkutil/benkutil.github.io/pull/50/files). One Year later, I [tried again](https://2020.benkutil.com/meta/website/2021/03/02/day-1). It's now 2022. A lot has happened. And for better or worse, or because third time's the charm, I've dusted off the old website.

## Development challenges
I haven't professionally written code since 2017. The 2016 version of my website relied heavily on [gulp](https://gulpjs.com), [sass](https://sass-lang.com), and other popular concepts at time. In 2020, I didn't have time for that. I spent 30 minutes at a time trying to get things done and documenting the changes I made. In 2022, my environment and interest has changed even more.

### 👋 Goodbye computer
This time around, I've introduced a few new challenges. I no longer have a personal computer. I also no longer want to maintain a personal server. 

Luckily, it's been so long since I've written code that GitHub has made CodeSpaces available to all accounts. **I love CodeSpaces**. I didn't realize how much I missed having access to the command line. Getting setup and writing code took no time. Writing code from the airport, tethered to my phone, and being able to re-connect seamlessly felt amazing.

### 👋 Goodbye personal server
In 2016, I was looking for a new job after 8+ years of working for myself. I used it as an opportunity to manage and setup a very fast web server on Digital Ocean. That same instance has run for 6 years. Some time in year 2 or 3, I could no longer update the server, and I didn't care enough to rebuild its configurations. I even gave up on my intricate capistrano and [gulp configs](https://github.com/benkutil/benkutil.github.io/tree/develop-2016/config/gulp). 

In an interest limit time to first bit, I had used CloudFlare as a CDN proxy to my server. Again, thanks to not having paid attention to web development for a very long time, I could now make use of [CloudFlare Pages](https://pages.cloudflare.com). I'm now using CloudFlare pages to host both of the previous websites ({%- for item in pastSites reversed -%}
    <a href="{{item.url}}" title="Open the {{item.title}} version of this website">{{item.title}}</a> {%- if forloop.last != true -%}, {%- endif -%}
  {%- endfor -%}). It also builds and deploys this website.

  ### 👋 Goodbye Jekyll, 👋 hello 11ty.
I feel totally confident/happy about deciding to jettison a local development environment and a personal server. I feel less confident about my decision to switch to [11ty](11ty.dev). Mostly because I have to relearn a bunch of configuration commands. On the upside, I have fewer depedencies, and I'm not moving around between `ruby` and different implementations of `javascript` or `json`.

## Consistency, and low volume
Over the last couple of years, I've gotten serious about improving my endurance and performance on a bike. I've learned a lot about endurance training practices. Two concepts that I intend to transfer over are those of appropriate volume and consistency.

In an endurance sport, consistency and volume represent two of the three primary factors  of training that will help you progress in developing your endurance capacity. Consistency in training represents the most important factor. The volume of weekly training is important to progressing towards your goals. However, you shouldn't pursue volume over the consistency. For example, it is better to consistently train for three days a week over a 2 month period than it is to ride 5 days a week, but inconsistently week to week, over that same time frame.

Back in 2020, I had the goal of working on my website daily, for 30 minutes at a time. That was "high volume". And it turned out hard to execute on daily. 

This time around, I intend to apply some of the things that I've learned from training to working on this website. It's more important that I continue to work on the website year over year than it is that I work on it from day to day. Setting up a pace that enables that long term work represents something I intend to create.