/* ─────────────────────────────────────────────────────────────
   i18n.js: languages. Every word a person sees should come from
   a dictionary here, by key (Dad's five i18n rules, see
   docs/LAUNCH-PLAN.md, Phase 0).

   Step 2 (13 Oct 2026): the frame (menu, footer, map controls, labels,
   placeholders, messages) now comes from the dictionary too.
   Step 1 (13 Oct 2026): only English exists, and nothing on screen
   changes. But times, dates, place search and <html lang> now follow
   I18N.lang instead of being fixed to English, so a new language is
   one more dictionary. tools/i18n-scan.mjs lists the words still
   typed straight into the page (docs/I18N-TODO.md).
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // One dictionary per language, with the same keys in each.
  var DICT = {
    en: {
      'time.justNow': 'just now',
      'time.min': '{n} min ago',
      'time.hour': '{n} hour ago',
      'time.hours': '{n} hours ago',
      'time.day': '{n} day ago',
      'time.days': '{n} days ago',
      'time.weeks': '{n} weeks ago',
      'time.months': '{n} months ago',
      'time.year': '{n} year ago',
      'time.years': '{n} years ago',
      // The frame: skip link, menu, buttons
      'frame.skip': 'Skip to content',
      'nav.map': 'Map',
      'nav.problems': 'Problems',
      'nav.projects': 'Projects',
      'nav.people': 'People',
      'nav.about': 'About',
      'btn.seeProblem': 'I see this problem',
      // Phone tab bar
      'tab.home': 'Home',
      'tab.you': 'You',
      // Home page
      'home.badge': 'Mock-up v1',
      'home.sampleNote': 'Sample data. Your changes stay on this device.',
      'home.explore': 'Explore the map',
      'home.openMap': 'Open the map',
      // Map page
      'map.srTitle': 'Map of problems',
      'map.srNote': 'The map shows each problem as a light. To hear them as a written list, use the List button below the map, or',
      'map.srNoteLink': 'open the Problems page',
      'map.nearMeTitle': 'Go to where you are',
      'map.nearMe': 'Near me',
      'map.filters': 'Filters',
      'map.zoomCap': 'ZOOM',
      'map.wholeWorld': 'The whole world',
      'map.list': 'list',
      'layer.see': 'SEE',
      'layer.connect': 'CONNECT',
      'layer.act': 'ACT',
      'zoom.world': 'World',
      'zoom.continent': 'Continent',
      'zoom.country': 'Country',
      'zoom.city': 'City',
      'zoom.street': 'Street',
      // Placing a problem on the map
      'place.help1': 'Move the map so the yellow square sits on the problem, or tap the spot. You\'re posting at',
      'place.help2': 'scale. Zoom in or out to change it.',
      'place.type': 'Type a place instead',
      'place.cancel': 'Cancel',
      'place.here': 'Put it here',
      // Footer
      'footer.explore': 'Explore',
      'footer.about': 'About',
      'footer.trust': 'Trust & safety',
      'footer.contact': 'Contact',
      'footer.you': 'You',
      'footer.join': 'Join',
      'footer.yourPage': 'Your page',
      'footer.moderation': 'Moderation',
      'footer.copyright': '© 2026 Harper Lien. All rights reserved.',
      'footer.mockup': 'Mock-up v1. Every person and problem here is a made-up sample, and anything you add is saved only in this browser.',
      'footer.credits': 'Map data © OpenStreetMap contributors · tiles by OpenFreeMap · street search by Photon (komoot) · map library MapLibre · country outlines Natural Earth.',
      // Read by screen readers (aria-label, title)
      'a11y.home': 'Home',
      'a11y.mainNav': 'Main',
      'a11y.search': 'Search places, problems, projects and people',
      'a11y.theme': 'Switch between night and day',
      'a11y.notifications': 'Notifications',
      'a11y.join': 'Join',
      'a11y.actAsNotice': 'Acting-as notice',
      'a11y.mockupNotice': 'Mock-up notice',
      'a11y.problemMap': 'Problem map',
      'a11y.layers': 'Layers',
      'a11y.zoomLevel': 'Zoom level',
      'a11y.app': 'App',
      'a11y.seeProblem': 'I see this problem',
      'a11y.cycle': 'Where this is in the cycle',
      'a11y.yourQuestion': 'Your question',
      'a11y.yourAnswer': 'Your answer',
      'a11y.searchProblems': 'Search problems',
      'a11y.scale': 'Scale',
      'a11y.stage': 'Stage',
      'a11y.topic': 'Topic',
      'a11y.sort': 'Sort',
      'a11y.searchShort': 'Search',
      'a11y.close': 'Close',
      // Placeholders in text boxes
      'ph.question': 'A question, not a solution',
      'ph.answer': 'Your answer',
      'ph.projectName': 'A short name people will remember',
      'ph.update': 'What did the team do? What happened?',
      'ph.searchProblems': 'Search problems and places',
      'ph.city': 'Start typing, e.g. Hội An',
      'ph.inviteCode': 'From your group',
      'ph.oneSentence': 'One sentence is enough.',
      'ph.problemTitle': 'For example: a bus stop with a broken roof',
      'ph.search': 'A city, a street, a problem, a person',
      // Messages that pop up
      'msg.cantSave': 'Couldn\'t save in this browser (storage full or blocked). Your changes last until you close the page.',
      'msg.joinFirst': 'Join first. It takes twenty seconds, and it stays on this device.',
      'msg.noGeo': 'This browser can\'t share your location.',
      'msg.askingGeo': 'Asking your browser where you are…',
      'msg.geoOk': 'Here\'s your area. Nothing about your location is saved.',
      'msg.geoOff': 'Location is off for this site. Use search instead.',
      'msg.zoomIn': 'Zoom in to your city or street, or use search at the top.',
      'msg.badPhoto': 'That photo couldn\'t be read. Try another one.',
      'msg.pinned': 'Pinned. Now others can find it. That was SHARE.',
      'msg.ownPost': 'It\'s your post, so it already counts you.',
      'msg.leftTeam': 'You left the team.',
      'msg.hidden': 'Hidden from the map. Only the team and the poster see it now.',
      'msg.shown': 'It shows again.',
      'msg.linkCopied': 'Link copied.',
      'msg.postHidden': 'Post hidden.',
      'msg.reportClosed': 'Report closed.',
      'msg.demoReset': 'Demo reset. Only the samples are left.',
      'msg.signedOut': 'Signed out.',
      'msg.asked': 'Asked. The poster and the team will see it.',
      'msg.resolved': 'Marked resolved. ✓',
      'msg.reported': 'Reported. The team will look at it.',
      'msg.profileSaved': 'Profile saved.',
      'msg.contactSaved': 'Saved in this browser. In the real version it would go to the team.',
      'msg.movedTo': 'Moved to {place}. Press "Put it here" if that\'s the place.',
      'msg.projectFormed': 'Project "{name}" formed. That\'s CREATE. Post an update when you do something.',
      'msg.welcome': 'Welcome, {name}.',
      'msg.cityNotFound': 'We couldn\'t find that city, so you won\'t show on the map yet.'
    }
  };

  // How each language writes dates (English keeps the site's "4 Oct 2026").
  var LOCALE = { en: 'en-GB' };
  // Languages Photon (place search) can answer in; any other gets local place names.
  var PHOTON = ['en', 'de', 'fr', 'it'];

  // Step 1: one language. Later this becomes the person's own choice.
  var lang = 'en';

  // A word by key. A missing key falls back to English, and the scan reports it.
  function t(key, vars) {
    var s = DICT[lang] && DICT[lang][key];
    if (s == null) s = DICT.en[key];
    if (s == null) return key;
    if (!vars) return s;
    return s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? String(vars[k]) : m; });
  }

  // "5 min ago": same steps and rounding as the site always used.
  function ago(t0, nowMs) {
    var s = Math.max(0, ((nowMs == null ? Date.now() : nowMs) - t0) / 1000);
    if (s < 60) return t('time.justNow');
    var m = s / 60; if (m < 60) return t('time.min', { n: Math.round(m) });
    var h = Math.round(m / 60); if (m < 60 * 24) return t(h === 1 ? 'time.hour' : 'time.hours', { n: h });
    var d = Math.round(m / 1440); if (d < 14) return t(d === 1 ? 'time.day' : 'time.days', { n: d });
    if (d < 60) return t('time.weeks', { n: Math.round(d / 7) });
    if (d < 365) return t('time.months', { n: Math.round(d / 30) });
    var y = Math.round(d / 365); return t(y === 1 ? 'time.year' : 'time.years', { n: y });
  }

  function locale() { return LOCALE[lang] || lang; }
  function date(t0) { return new Date(t0).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' }); }
  function number(n) { return Number(n).toLocaleString(locale()); }
  // The "&lang=xx" part of a Photon address, or nothing when Photon doesn't speak the language.
  function photonParam() { return PHOTON.indexOf(lang) >= 0 ? '&lang=' + lang : ''; }

  // Fill every element marked data-i18n="key" (its text) or data-i18n-attr="attr:key;attr:key" (aria-label, title,
  // placeholder) from the dictionary. The English already in the HTML stays as the fallback.
  function apply(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n'), v = t(key); if (v !== key) el.textContent = v;
    });
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':'); if (i < 0) return;
        var attr = pair.slice(0, i).trim(), key = pair.slice(i + 1).trim(), v = t(key);
        if (v !== key) el.setAttribute(attr, v);
      });
    });
  }

  // Hidden text counts too: the page's own language.
  document.documentElement.lang = lang;
  apply(document);

  window.I18N = {
    get lang() { return lang; },
    languages: Object.keys(DICT),
    t: t, apply: apply, ago: ago, date: date, number: number, locale: locale, photonParam: photonParam,
    // Keys a language is missing compared with English (rule 2: same keys in each).
    missing: function (l) { var d = DICT[l] || {}; return Object.keys(DICT.en).filter(function (k) { return !(k in d); }); }
  };
})();
