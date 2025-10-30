// بيانات الدخول الثابتة
const VALID_USER = "section info";
const VALID_PASS = "section 2025";

// التحقق من الدخول
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error-msg");

  if (user === VALID_USER && pass === VALID_PASS) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    error.textContent = "❌ معلومات الدخول غير صحيحة! | kan t7ib code insta:amen.allah.exe ";
    error.style.color = "#ff5555";
  }
}

// منع الوصول للصفحات بدون تسجيل دخول
if (!location.pathname.endsWith("index.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem("loggedIn");
  alert('al3eb al3eb w tmanyek mli7')
  window.location.href = "index.html";
}
