/* Mostafa HR Hub — shared company profiles (stored only in this browser). */
(function (g) {
  'use strict';
  var KEY = 'mhh-companies', ACT = 'mhh-company-active';
  function read(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function uid() { return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  var SAMPLE = {
    id: 'sample', est_name: 'شركة مثال للتجارة (بيانات تجريبية)', est_name_en: 'Example Trading Co. (sample)',
    est_address: '١٠ شارع المثال، القاهرة', est_address_en: '10 Example St., Cairo',
    est_no: '123456789', office: '[اسم مكتب التأمينات]', phone: '0220000000', email: 'hr@example.com',
    cr_no: '[رقم السجل التجاري]', tax_no: '[رقم البطاقة الضريبية]',
    applicant_name: 'أحمد محمد علي', applicant_role: 'مدير الموارد البشرية', applicant_ins: '987654321',
    applicant_nid: '28501010101234', applicant_phone: '01000000000',
    signatory_en: 'Ahmed Mohamed Ali', signatory_role_en: 'HR Manager',
    color: '#12264A', logo: ''
  };

  var list = read(KEY, null);
  if (!list || !list.length) list = [JSON.parse(JSON.stringify(SAMPLE))];
  var activeId = read(ACT, list[0].id);
  if (!list.some(function (c) { return c.id === activeId; })) activeId = list[0].id;

  var subs = [];
  function emit() { subs.forEach(function (f) { try { f(api.active()); } catch (e) {} }); }

  var api = {
    list: function () { return list; },
    active: function () { return list.filter(function (c) { return c.id === activeId; })[0]; },
    setActive: function (id) { activeId = id; write(ACT, id); emit(); },
    add: function (name) { var c = { id: uid(), est_name: name || 'شركة جديدة', color: '#12264A', logo: '' }; list.push(c); api.save(); api.setActive(c.id); return c; },
    remove: function (id) { list = list.filter(function (c) { return c.id !== id; }); if (!list.length) list = [JSON.parse(JSON.stringify(SAMPLE))]; api.save(); api.setActive(list[0].id); },
    save: function () { if (!write(KEY, list)) return false; return true; },
    onChange: function (f) { subs.push(f); },
    isSample: function (c) { return (c || api.active()).id === 'sample'; },

    /* Renders a picker (select + new + delete) into el. */
    picker: function (el, opts) {
      opts = opts || {};
      function draw() {
        el.innerHTML = '';
        var wrap = document.createElement('div'); wrap.className = 'co-picker';
        var lab = document.createElement('label'); lab.className = 'co-label'; lab.textContent = opts.label || 'الشركة';
        var sel = document.createElement('select'); sel.id = 'co-select'; sel.setAttribute('aria-label', 'اختر الشركة');
        list.forEach(function (c) { var o = document.createElement('option'); o.value = c.id; o.textContent = c.est_name || 'بدون اسم'; if (c.id === activeId) o.selected = true; sel.appendChild(o); });
        sel.addEventListener('change', function () { api.setActive(sel.value); draw(); });
        var add = document.createElement('button'); add.type = 'button'; add.className = 'btn quiet'; add.textContent = '+ شركة';
        add.addEventListener('click', function () { api.add(); draw(); });
        var del = document.createElement('button'); del.type = 'button'; del.className = 'btn quiet'; del.textContent = 'حذف';
        del.addEventListener('click', function () {
          if (del.dataset.armed) { api.remove(activeId); draw(); return; }
          del.dataset.armed = '1'; del.textContent = 'تأكيد الحذف؟';
          setTimeout(function () { delete del.dataset.armed; del.textContent = 'حذف'; }, 2500);
        });
        lab.appendChild(sel); wrap.appendChild(lab); wrap.appendChild(add); wrap.appendChild(del);
        el.appendChild(wrap);
      }
      draw(); return { redraw: draw };
    },

    /* Reads an image file, downsizes it, stores it as a data URL on the active company. */
    setLogo: function (file, cb) {
      var r = new FileReader();
      r.onload = function () {
        var img = new Image();
        img.onload = function () {
          var max = 360, s = Math.min(1, max / Math.max(img.width, img.height));
          var c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          var url = c.toDataURL('image/png'); var co = api.active(); co.logo = url;
          if (!api.save()) { co.logo = ''; cb && cb('اللوجو كبير، جرّب صورة أصغر'); return; }
          emit(); cb && cb(null, url);
        };
        img.onerror = function () { cb && cb('الصورة ما اتقرتش'); };
        img.src = r.result;
      };
      r.readAsDataURL(file);
    }
  };
  g.MHHCompanies = api;
})(window);
