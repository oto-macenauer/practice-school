/**
 * Catalog helpers + lazy content loader.
 *
 * content/catalog.js holds metadata for every item (School.CATALOG);
 * the item's questions live in its own file, loaded on demand via <script>
 * injection. Content files call School.register({...}).
 */
School._registered = {};

School.register = (content) => {
  School._registered[content.id] = content;
};

School.catalog = (() => {
  const pending = {};

  const KIND_LABELS = { lesson: "Lekce", practice: "Procvičování", test: "Test" };
  const KIND_ORDER = { lesson: 0, practice: 1, test: 2 };

  function all() {
    return School.CATALOG || [];
  }

  function get(id) {
    return all().find((c) => c.id === id) || null;
  }

  function subject(id) {
    return (School.SUBJECTS || []).find((s) => s.id === id) || { id, name: id, icon: "📘", color: "#64748b", speechLang: "cs-CZ" };
  }

  function grades() {
    const set = {};
    all().forEach((c) => { set[c.grade] = true; });
    return Object.keys(set).map(Number).sort((a, b) => a - b);
  }

  function forGrade(grade) {
    return all().filter((c) => c.grade === grade);
  }

  function forSubject(grade, subjectId) {
    return forGrade(grade)
      .filter((c) => c.subject === subjectId)
      .sort((a, b) => (KIND_ORDER[a.kind] - KIND_ORDER[b.kind]) || a.title.localeCompare(b.title, "cs"));
  }

  /** Resolve with catalog entry merged with the registered file content. */
  function load(id) {
    const entry = get(id);
    if (!entry) return Promise.reject(new Error("Obsah nenalezen: " + id));
    if (School._registered[id]) return Promise.resolve(merge(entry));
    if (pending[id]) return pending[id];

    pending[id] = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = entry.file;
      script.onload = () => {
        delete pending[id];
        if (School._registered[id]) resolve(merge(entry));
        else reject(new Error("Soubor neobsahuje " + id));
      };
      script.onerror = () => {
        delete pending[id];
        script.remove();
        reject(new Error("Nepodařilo se načíst " + entry.file));
      };
      document.head.appendChild(script);
    });
    return pending[id];
  }

  function merge(entry) {
    const c = Object.assign({}, School._registered[entry.id], entry);
    c.subjectInfo = subject(entry.subject);
    return c;
  }

  function gradeLabel(g) {
    return g + ". třída";
  }

  return { all, get, subject, grades, forGrade, forSubject, load, KIND_LABELS, gradeLabel };
})();
