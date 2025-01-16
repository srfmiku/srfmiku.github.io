var posts=["2025/01/16/hello-world/","2025/01/16/start/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };