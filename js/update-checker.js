/**
 * Polls version.json and shows a toast when a new version is deployed.
 * Bump version.json on every deploy.
 */
(() => {
  const CHECK_INTERVAL = 60 * 1000;
  let loadedVersion = null;

  async function fetchVersion() {
    try {
      const res = await fetch("version.json?_=" + Date.now(), { cache: "no-store" });
      if (!res.ok) return null;
      return (await res.json()).version || null;
    } catch (_) {
      return null;
    }
  }

  function showToast() {
    if (document.getElementById("update-toast")) return;
    const toast = document.createElement("div");
    toast.id = "update-toast";
    toast.className = "update-toast";
    toast.innerHTML =
      '<span>K dispozici je nová verze!</span>' +
      '<button class="btn btn-small btn-primary" id="update-refresh">Obnovit</button>' +
      '<button class="update-dismiss" id="update-dismiss" aria-label="Zavřít">&times;</button>';
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    toast.querySelector("#update-refresh").addEventListener("click", () => location.reload());
    toast.querySelector("#update-dismiss").addEventListener("click", () => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    });
  }

  async function check() {
    const v = await fetchVersion();
    if (!v) return;
    if (loadedVersion === null) loadedVersion = v;
    else if (v !== loadedVersion) showToast();
  }

  if (location.protocol.indexOf("http") === 0) {
    check();
    setInterval(check, CHECK_INTERVAL);
  }
})();
