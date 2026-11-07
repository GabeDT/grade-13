const $ = (selector, root = document) => root.querySelector(selector);
const subjectFor = (id) => subjects.find((subject) => subject.id === id);
const articleUrl = (slug) => `article.html?slug=${encodeURIComponent(slug)}`;

function card(article) {
  const subject = subjectFor(article.subject);
  return `<a class="lesson-card" href="${articleUrl(article.slug)}"><div class="lesson-card-top"><span class="chip ${subject.tone}">${subject.name}</span><span>${article.minutes} min read</span></div><h3>${article.title}</h3><p>${article.description}</p><span class="card-link">Read lesson <b>→</b></span></a>`;
}

function renderCurriculum() {
  const app = $('#app');
  const select = $('#subject-filter');
  const search = $('#lesson-search');
  const subjectParam = new URLSearchParams(location.search).get('subject') || 'all';
  select.value = subjectParam;
  const context = $('#subject-context');
  const selectedSubject = subjectFor(subjectParam);
  if (selectedSubject) {
    context.hidden = false;
    context.innerHTML = `<div class="container subject-context-inner"><span class="subject-context-icon ${selectedSubject.tone}">${selectedSubject.icon}</span><div><p class="eyebrow">${selectedSubject.name}</p><h2>${selectedSubject.intro}</h2><p class="topic-list">Topics: ${selectedSubject.topics.join(' · ')}</p></div></div>`;
  }
  $('#featured-lessons').innerHTML = articles.filter((article) => article.featured).slice(0, 3).map(card).join('');
  const render = () => {
    const term = search.value.trim().toLowerCase();
    const selected = select.value;
    const results = articles.filter((article) => {
      const haystack = [article.title, article.description, article.topic, ...article.keywords].join(' ').toLowerCase();
      return (selected === 'all' || article.subject === selected) && (!term || haystack.includes(term));
    });
    app.innerHTML = results.length ? results.map(card).join('') : '<p class="empty-state">Nothing matched that search. Try a broader term.</p>';
    $('#result-count').textContent = `${results.length} lesson${results.length === 1 ? '' : 's'}`;
  };
  search.addEventListener('input', render);
  select.addEventListener('change', () => { location.href = `curriculum.html${select.value === 'all' ? '' : `?subject=${select.value}`}`; });
  render();
}

function renderArticle() {
  const slug = new URLSearchParams(location.search).get('slug');
  const article = articles.find((item) => item.slug === slug) || articles[0];
  const subject = subjectFor(article.subject);
  document.title = `${article.title} — Grade 13`;
  $('#article-subject').textContent = subject.name;
  $('#article-topic').textContent = article.topic;
  $('#article-time').textContent = `${article.minutes} min read`;
  $('#article-title').textContent = article.title;
  $('#article-intro').textContent = article.intro;
  $('#article-content').innerHTML = article.sections.map((section) => `<section><h2>${section.heading}</h2>${section.body}</section>`).join('') + `<aside class="takeaways"><p class="eyebrow">Key takeaways</p><ul>${article.takeaways.map((takeaway) => `<li>${takeaway}</li>`).join('')}</ul></aside>`;
  const related = articles.filter((item) => item.slug !== article.slug && item.subject === article.subject).slice(0, 3);
  $('#related-articles').innerHTML = related.map(card).join('');
  const progress = $('#reading-progress');
  addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max ? Math.min(scrollY / max, 1) : 0})`; }, { passive: true });
}

function setupMenu() {
  const button = $('.menu-button'); const links = $('.nav-links');
  if (!button || !links) return;
  button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); links.classList.toggle('is-open', !open); });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { button.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); }));
}

setupMenu();
if (document.body.dataset.page === 'curriculum') renderCurriculum();
if (document.body.dataset.page === 'article') renderArticle();

