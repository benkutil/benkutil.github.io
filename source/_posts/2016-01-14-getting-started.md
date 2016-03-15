---
layout: post
title:  "Getting Started"
tagline: >
    I haven’t had a website in 6 years, and haven't baked bread in 6 months. It’s time to change that.
published: true
date: 2016-01-14
categories: update bread

---

{% assign starter = site.recipes | where: id, bread-starter-apiece | first %}


My story sounds familiar. Make some New Years resolutions with good intentions,
then forget about them, or, allow them to nag in the back of your mind
as you push it off to the “next day”.

I needed to create a personal website. I’ve thought about doing it since November.
I had no problem finding excuses not to work on it.

I could say the same about baking bread. I enjoy doing it, but had found excuses not to.

I’ve started today, with a simple site, and a new starter.

{% picture bread/bread-starter-new-top.jpg alt="Started, Day 2" %}

In the past, I’ve followed Chad Robertson’s starter process from his [Country Bread recipe](http://cooking.nytimes.com/recipes/1016277-tartines-country-bread). This time, I’ve [used a recipe](https://www.dropbox.com/sh/9qinzbju8ihqy22/AADvBda8-wy6Otxq73_nNlvNa/GET%20STARTER'ED.pdf?dl=0) from [@apieceofbread](https://instagram.com/apieceofbread). He has also put his [bread formulae up on Dropbox](https://www.dropbox.com/sh/9qinzbju8ihqy22/AACjVcSIkHGDAAPQTRClXsjya?dl=0).

## Bread Formulae

I find bread so interesting because at its simplest, it consists of flour, water, time, and heat. A starter makes use of those ingredients. In the beginning, you “feed” or replenish a starter each day. During that day, you want to keep you starter between 86°F and 104°F. My house does not get that warm, so my starter hangs out on top of my Mac Pro. The exhaust of my computer hovers around 100°F.

{% picture bread/bread-starter-new-location.jpg alt="Keep warm little starter" %}

Bread recipes represent all other ingredients as percentages of the total flour weight.

With this starter, you begin with `100% Flour`, and `200% Water`. That means, if you began with `30g flour`, you would use `60g water`.

{% include recipe-card.html recipe=starter %}
