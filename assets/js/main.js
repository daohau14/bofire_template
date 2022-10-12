function blog() {
    var blog = document.querySelector(".blog-item-more");
    console.log(blog);
      if (blog.style.display === "flex") {
        blog.style.display = "none";
      } else {
        blog.style.display = "flex";
      }
  }