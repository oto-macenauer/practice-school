/**
 * Hash router + boot. Routes are listed in docs/PLAN.md §6.
 */
(() => {
  const V = School.views;

  async function route() {
    const parts = (location.hash || "#/").replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const [page, a, b] = parts;

    if (page === "profiles") {
      V.applyProfile(await V.activeProfile());
      return V.profiles();
    }

    const profile = await V.activeProfile();
    V.applyProfile(profile);
    if (!profile) {
      location.replace("#/profiles");
      return;
    }

    window.scrollTo(0, 0);
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    switch (page) {
      case "g":
        if (a && b) return V.subject(profile, parseInt(a, 10), b);
        if (a) return V.home(profile, parseInt(a, 10));
        break;
      case "run":
        return V.run(profile, a, b === "mistakes" ? "mistakes" : "normal");
      case "lesson":
        return V.lesson(profile, a);
      case "print":
        return V.print(profile, a);
      case "settings":
        return V.settings(profile);
    }
    return V.home(profile, profile.grade);
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);

  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => { /* offline support is optional */ });
    });
  }
})();
