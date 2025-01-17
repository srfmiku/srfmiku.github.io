var posts=["2025/01/17/好物/","2025/01/16/日记/","2025/01/16/hello-world/","2025/01/17/开发过程遇到的问题与解决/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };