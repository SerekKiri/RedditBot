const TurndownService = require('turndown')
const turndownService = new TurndownService()

function redditPostToEmbed(post) {
  const text = post.data;
  const extension = [".jpg", ".png", ".svg", ".mp4", ".gif"];
  const date = new Date(text["created_utc"] * 1000);
  let image;
  let pre;
  let media;
  let des;

  if (text.selftext.length > 1000) {
    des = text.selftext.substring(0, 999) + "...";
  } else {
    des = text.selftext
  }

  if (text.preview !== undefined) {
    pre = text.preview.images[0].source.url;
  }

  if (text.media !== null) {
     media = text.thumbnail
  }

  if (extension.includes(text.url.slice(-4))) {
    image = text.url;
  } else if (pre !== null || media !== null) {
    if (media !== null) {
        image = media;
    } else {
        image = pre;
    }
  } else {
    image = null;
  }

  const embed = {
    title: `${text.title}`,
    url: `https://www.reddit.com${text.permalink}`,
    author: {
      name: text.author,
      icon_url:
        "https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png"
    },
    description: des,
    timestamp: date,
    image: {
      url: image
    },
    color: 16729344,
    footer: {
      text: "Reddit Bot by SerekKiri & MiXerek",
      icon_url:
        "https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png"
    },
    "fields": [
      {
        "name": `⬆️ Upvoted by`,
        "value": `${text.ups} people`,
        "inline": true
      },
      {
        "name": `💬 Commented by`,
        "value": `${text.num_comments} people`,
        "inline": true
      }
    ]
  };
  return embed;
};

module.exports = redditPostToEmbed
