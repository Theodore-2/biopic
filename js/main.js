document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("posts");
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  const categoryPosts = posts.filter(p => p.category === window.category);

  categoryPosts.reverse().forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3>${post.title}</h3>
      <small>${post.timestamp}</small>
      <p>${post.content}</p>
      ${post.media ? `<img src="${post.media}" width="300">` : ""}
    `;
    container.appendChild(div);
  });
});