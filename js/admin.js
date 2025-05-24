document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value;
  const content = form.content.value;
  const category = form.category.value;
  const timestamp = new Date().toLocaleString("tr-TR");
  let media = "";

  const fileInput = form.media;
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    media = URL.createObjectURL(file); // geçici gösterim için
  }

  const post = { title, content, category, timestamp, media };

  const existing = JSON.parse(localStorage.getItem("posts") || "[]");
  existing.push(post);
  localStorage.setItem("posts", JSON.stringify(existing));

  alert("İçerik başarıyla eklendi!");
  form.reset();
});