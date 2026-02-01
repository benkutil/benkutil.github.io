module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("notes",(id,content) =>`<label for="${id}" class="margin-toggle">&#8853;</label><input type="checkbox" id="${id}" class="margin-toggle"/><span class="marginnote">${content}</span>`);

	eleventyConfig.addShortcode("notesimage",(id,image,alt,content) =>`<label for="${id}" class="margin-toggle">&#8853;</label><input type="checkbox" id="${id}" class="margin-toggle"/><span class="marginnote"><img src="${image}" alt="${alt}"/>${content}`);

	eleventyConfig.addShortcode("fullimage",(image,alt) =>`<figure class="fullwidth"><img src="${image}" width="100%" alt="${alt}"/></figure>`);

	eleventyConfig.addShortcode("videos",(video,title) =>`<figure class="iframe-wrapper"><iframe width="100%" height="auto" src="${video}" title="${title}" frameborder="0" allowfullscreen></iframe><figure>`);

	eleventyConfig.addShortcode("sidenote",(id,title,sidenote,content) =>`<span class="newthought">${title}<label for="sn-${id}" class="margin-toggle sidenote-number"></label></span><input type="checkbox" id="sn-${id}" class="margin-toggle"/><span class="sidenote"><a href="#sn-${id}" class="no-deco"><em>${sidenote}</em></a></span>, ${content}`);

	eleventyConfig.addShortcode("sidenoteinternal",(id,title,sidenote,content) =>`<span class="newthought" id="sn-${id}" >${title}<label for="sn-${id}" class="margin-toggle sidenote-number"></label></span><input type="checkbox" class="margin-toggle"/><span class="sidenote"><a href="#sn-${id}" class="no-deco"><em>${sidenote}</em></a></span>, ${content}`);

	eleventyConfig.addShortcode("sidenoteexternal",(id,title,sidenote,content,content_link,url) =>`<span class="newthought">${title}<label for="sn-${id}" class="margin-toggle sidenote-number"></label></span><input type="checkbox" id="sn-${id}" class="margin-toggle"/><span class="sidenote"><em>${sidenote}</em> <a href="${url}">${content_link}</a></span>, ${content} `);

	eleventyConfig.addShortcode("epigraph",(content,footer) =>`<div class="epigraph"><blockquote><p>${content}</p><footer>${footer}</footer></blockquote></div>`);

	eleventyConfig.addShortcode("blockquote",(content,footer) =>`<blockquote><p>${content}</p><footer>${footer}</footer></blockquote>`);

	eleventyConfig.addShortcode("epigraphlink",(content,footer,info,url) =>`<div class="epigraph"><blockquote><p>${content}</p><footer>${footer} <a href="${url}">${info}</a></footer></blockquote></div>`);

	eleventyConfig.addShortcode("blockquotelink",(content,footer,info,url) =>`<blockquote><p>${content}</p><footer>${footer} <a href="${url}">${info}</a></footer></blockquote>`);
};
