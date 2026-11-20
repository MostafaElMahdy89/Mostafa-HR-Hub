/* Mostafa HR Hub — HR forms & letters library (content).
   Placeholders: {key}. Empty values print as a dotted blank to fill by hand.
   Legal wording stays general ("وفقًا لأحكام قانون العمل ولائحة المنشأة") — no article numbers are cited. */
(function (g) {
  'use strict';

  /* ---------- Field definitions ---------- */
  var FD = {
    // company (from company profile)
    est_name: { ar: 'اسم الشركة', en: 'Company name (Arabic)', group: 'co' },
    est_name_en: { ar: 'اسم الشركة بالإنجليزية', en: 'Company name (English)', group: 'co' },
    est_address: { ar: 'العنوان', en: 'Address (Arabic)', group: 'co' },
    est_address_en: { ar: 'العنوان بالإنجليزية', en: 'Address (English)', group: 'co' },
    phone: { ar: 'تليفون الشركة', en: 'Company phone', group: 'co', type: 'tel' },
    email: { ar: 'البريد الإلكتروني', en: 'Email', group: 'co', type: 'email' },
    cr_no: { ar: 'رقم السجل التجاري', en: 'Commercial register no.', group: 'co' },
    tax_no: { ar: 'رقم البطاقة الضريبية', en: 'Tax card no.', group: 'co' },
    applicant_name: { ar: 'اسم المفوَّض بالتوقيع', en: 'Signatory name (Arabic)', group: 'co' },
    applicant_role: { ar: 'صفته', en: 'Signatory title (Arabic)', group: 'co' },
    signatory_en: { ar: 'اسم المفوَّض بالإنجليزية', en: 'Signatory name (English)', group: 'co' },
    signatory_role_en: { ar: 'صفته بالإنجليزية', en: 'Signatory title (English)', group: 'co' },

    // employee
    emp_name: { ar: 'اسم الموظف', en: 'Employee name', group: 'emp' },
    emp_name_en: { ar: 'اسم الموظف بالإنجليزية', en: 'Employee name (English)', group: 'emp' },
    emp_code: { ar: 'الرقم الوظيفي', en: 'Employee ID', group: 'emp' },
    nid: { ar: 'الرقم القومي', en: 'National ID', group: 'emp', type: 'digits' },
    nationality: { ar: 'الجنسية', en: 'Nationality', group: 'emp' },
    job: { ar: 'الوظيفة', en: 'Job title (Arabic)', group: 'emp' },
    job_en: { ar: 'الوظيفة بالإنجليزية', en: 'Job title (English)', group: 'emp' },
    dept: { ar: 'الإدارة / القسم', en: 'Department (Arabic)', group: 'emp' },
    dept_en: { ar: 'الإدارة بالإنجليزية', en: 'Department (English)', group: 'emp' },
    manager: { ar: 'المدير المباشر', en: 'Direct manager', group: 'emp' },
    hire_date: { ar: 'تاريخ التعيين', en: 'Hire date', group: 'emp', type: 'date' },
    salary_basic: { ar: 'الأجر الأساسي', en: 'Basic salary', group: 'emp', type: 'money' },
    allowances: { ar: 'البدلات', en: 'Allowances', group: 'emp', type: 'money' },
    salary_gross: { ar: 'إجمالي الأجر الشهري', en: 'Gross monthly salary', group: 'emp', type: 'money' },

    // document
    doc_date: { ar: 'تاريخ المستند', en: 'Document date', group: 'doc', type: 'date', today: true },
    ref_no: { ar: 'رقم الصادر / المرجع', en: 'Reference no.', group: 'doc' }
  };

  function F(k, ar, en, type, extra) { var o = { ar: ar, en: en, type: type || 'text' }; for (var x in (extra || {})) o[x] = extra[x]; FD[k] = o; return k; }

  /* ---------- Form-specific fields ---------- */
  F('req_count', 'عدد المطلوب', 'Headcount needed', 'number');
  F('req_reason', 'سبب الطلب', 'Reason', 'select', { opts: [['new', 'وظيفة جديدة', 'New position'], ['replace', 'إحلال', 'Replacement'], ['temp', 'مؤقت / موسمي', 'Temporary / seasonal']] });
  F('req_start', 'تاريخ الاحتياج', 'Needed by', 'date');
  F('contract_type', 'نوع التعاقد', 'Contract type', 'select', { opts: [['fixed', 'محدد المدة', 'Fixed-term'], ['open', 'غير محدد المدة', 'Indefinite'], ['part', 'دوام جزئي', 'Part-time']] });
  F('req_qual', 'المؤهل المطلوب', 'Required qualification', 'textarea');
  F('req_exp', 'سنوات الخبرة', 'Years of experience');
  F('salary_range', 'نطاق الأجر', 'Salary range');
  F('position', 'الوظيفة المتقدم لها', 'Position applied for');
  F('candidate', 'اسم المرشح', 'Candidate name');
  F('interviewer', 'القائم بالمقابلة', 'Interviewer');
  F('start_date', 'تاريخ بدء العمل', 'Start date', 'date');
  F('end_date', 'تاريخ انتهاء العقد', 'Contract end date', 'date');
  F('probation', 'مدة الاختبار', 'Probation period');
  F('work_hours', 'ساعات العمل', 'Working hours');
  F('work_place', 'مكان العمل', 'Place of work');
  F('benefits', 'المزايا الأخرى', 'Other benefits', 'textarea');
  F('offer_valid', 'صلاحية العرض حتى', 'Offer valid until', 'date');
  F('emp_address', 'عنوان الموظف', 'Employee address');
  F('leave_type', 'نوع الإجازة', 'Leave type', 'select', { opts: [['annual', 'اعتيادية', 'Annual'], ['casual', 'عارضة', 'Casual'], ['sick', 'مرضية', 'Sick'], ['unpaid', 'بدون أجر', 'Unpaid'], ['other', 'أخرى', 'Other']] });
  F('from_date', 'من تاريخ', 'From', 'date');
  F('to_date', 'إلى تاريخ', 'To', 'date');
  F('days', 'عدد الأيام', 'Number of days', 'number');
  F('substitute', 'القائم بالعمل أثناء الغياب', 'Covering colleague');
  F('perm_type', 'نوع الإذن', 'Permission type', 'select', { opts: [['late', 'تأخير', 'Late arrival'], ['early', 'انصراف مبكر', 'Early leave'], ['mid', 'خروج أثناء العمل', 'Leave during hours']] });
  F('time_from', 'من الساعة', 'From (time)');
  F('time_to', 'إلى الساعة', 'To (time)');
  F('reason', 'السبب', 'Reason', 'textarea');
  F('destination', 'جهة المأمورية', 'Destination');
  F('purpose', 'الغرض', 'Purpose', 'textarea');
  F('transport', 'وسيلة الانتقال', 'Transport');
  F('loan_amount', 'قيمة السلفة', 'Advance amount', 'money');
  F('installments', 'عدد الأقساط', 'Number of instalments', 'number');
  F('installment_value', 'قيمة القسط الشهري', 'Monthly instalment', 'money');
  F('action_type', 'نوع القرار', 'Action type', 'select', { opts: [['transfer', 'نقل', 'Transfer'], ['promotion', 'ترقية', 'Promotion'], ['raise', 'تعديل أجر', 'Salary adjustment']] });
  F('new_job', 'الوظيفة الجديدة', 'New job title');
  F('new_dept', 'الإدارة الجديدة', 'New department');
  F('new_salary', 'الأجر الجديد', 'New gross salary', 'money');
  F('effective_date', 'تاريخ السريان', 'Effective date', 'date');
  F('incident_date', 'تاريخ الواقعة', 'Incident date', 'date');
  F('incident', 'وصف الواقعة / المخالفة', 'Description of the incident', 'textarea');
  F('inv_date', 'موعد التحقيق', 'Investigation date', 'date');
  F('inv_time', 'الساعة', 'Time');
  F('inv_place', 'المكان', 'Place');
  F('investigator', 'المحقق', 'Investigator');
  F('penalty', 'الجزاء (م 139)', 'Penalty (Art. 139)', 'select', { opts: [['الإنذار الكتابي', 'الإنذار الكتابي', 'written warning'], ['الخصم من الأجر الأساسي', 'الخصم من الأجر الأساسي', 'deduction from basic wage'], ['تأجيل موعد استحقاق العلاوة السنوية', 'تأجيل موعد استحقاق العلاوة السنوية', 'postponing the annual increment'], ['الحرمان من جزء من العلاوة السنوية', 'الحرمان من جزء من العلاوة السنوية', 'forfeiting part of the annual increment'], ['تأجيل الترقية', 'تأجيل الترقية', 'postponing promotion'], ['خفض الأجر الأساسي بمقدار علاوة', 'خفض الأجر الأساسي بمقدار علاوة', 'reducing the basic wage by one increment'], ['الخفض إلى وظيفة في الدرجة الأدنى مباشرة', 'الخفض إلى وظيفة في الدرجة الأدنى مباشرة', 'demotion to the next lower grade']] });
  F('emp_ins_no', 'الرقم التأميني للعامل', 'Employee social insurance no.');
  F('qualification', 'المؤهل', 'Qualification');
  F('pay_method', 'طريقة أداء الأجر', 'Payment method', 'select', { opts: [['تحويلًا بنكيًا', 'تحويلًا بنكيًا', 'by bank transfer'], ['نقدًا', 'نقدًا', 'in cash']] });
  F('absence_kind', 'نوع الغياب', 'Absence type', 'select', { opts: [['consecutive', 'أيام متتالية', 'Consecutive days'], ['intermittent', 'أيام متقطعة', 'Separate days']] });
  F('penalty_detail', 'تفاصيل الجزاء (مثل عدد أيام الخصم)', 'Penalty details (e.g. days deducted)');
  F('end_reason', 'سبب انتهاء علاقة العمل', 'Reason for ending employment');
  F('absence_from', 'تاريخ بدء الانقطاع', 'Absent since', 'date');
  F('absence_days', 'عدد أيام الانقطاع', 'Days of absence', 'number');
    F('review_period', 'فترة التقييم', 'Review period');
  F('pip_weeks', 'مدة الخطة', 'Plan duration');
  F('course', 'اسم البرنامج التدريبي', 'Training course');
  F('provider', 'الجهة المنفذة', 'Provider');
  F('cost', 'التكلفة', 'Cost', 'money');
  F('last_day', 'آخر يوم عمل', 'Last working day', 'date');
  F('settle_amount', 'إجمالي المستحقات المسددة', 'Total amount paid', 'money');
  F('settle_items', 'بنود المستحقات', 'Items paid', 'textarea');
  F('settle_waiver', 'إضافة إقرار بعدم وجود مستحقات أخرى', 'Add no-further-claims statement', 'select', { opts: [['no', 'لا', 'No'], ['yes', 'نعم', 'Yes']] });
  F('end_service', 'تاريخ انتهاء الخدمة', 'End of service date', 'date');
  F('addressee', 'الجهة الموجَّه إليها', 'Addressed to');
  F('bank_name', 'اسم البنك', 'Bank name');
  F('bank_branch', 'الفرع', 'Branch');
  F('bank_purpose', 'الغرض', 'Purpose', 'select', { opts: [['loan', 'قرض شخصي', 'Personal loan'], ['card', 'بطاقة ائتمان', 'Credit card'], ['account', 'فتح حساب', 'Account opening']] });
  F('account_no', 'رقم الحساب', 'Account no.');
  F('embassy', 'السفارة / القنصلية', 'Embassy / consulate');
  F('travel_from', 'السفر من', 'Travel from', 'date');
  F('travel_to', 'العودة في', 'Return by', 'date');
  F('show_salary', 'إظهار الأجر في الخطاب', 'Show salary in letter', 'select', { opts: [['yes', 'نعم', 'Yes'], ['no', 'لا', 'No']] });
  F('subject', 'الموضوع', 'Subject');
  F('body', 'نص الخطاب', 'Letter body', 'textarea');

  /* ---------- Shared block builders ---------- */
  var SIGN = {
    hr: ['الموارد البشرية', 'Human Resources'], mgr: ['المدير المباشر', 'Direct Manager'], gm: ['المدير العام', 'General Manager'],
    emp: ['الموظف', 'Employee'], fin: ['الإدارة المالية', 'Finance'], cand: ['المرشح', 'Candidate'], party1: ['الطرف الأول (صاحب العمل)', 'First Party (Employer)'],
    party2: ['الطرف الثاني (العامل)', 'Second Party (Employee)'], inv: ['المحقق', 'Investigator'], int: ['القائم بالمقابلة', 'Interviewer'], dept: ['مدير الإدارة', 'Department Head']
  };
  function sign(keys) { return { sign: keys.map(function (k) { return SIGN[k]; }) }; }
  function empKV(extra) {
    var base = [['emp_name', 'اسم الموظف', 'Employee name'], ['emp_code', 'الرقم الوظيفي', 'Employee ID'], ['job', 'الوظيفة', 'Job title', 'job_en'], ['dept', 'الإدارة', 'Department', 'dept_en']];
    return { kv: base.concat(extra || []) };
  }

  /* kv rows: [arKey, arLabel, enLabel, enKey?]  (enKey lets English use an *_en field when filled) */
  var C = { // categories
    hire: ['التوظيف', 'Hiring'], staff: ['شؤون العاملين', 'Personnel'], disc: ['الانضباط', 'Discipline'],
    perf: ['الأداء والتدريب', 'Performance & Training'], exit: ['إنهاء الخدمة', 'Separation'], letters: ['الخطابات والشهادات', 'Letters & Certificates']
  };

  var FORMS = [
    /* ===== Hiring ===== */
    { id: 'manpower', cat: 'hire', t: ['طلب احتياج وظيفي', 'Manpower Requisition'],
      f: ['job', 'dept', 'req_count', 'req_reason', 'contract_type', 'req_start', 'req_qual', 'req_exp', 'salary_range', 'manager'],
      ar: [{ kv: [['job', 'الوظيفة المطلوبة'], ['dept', 'الإدارة'], ['req_count', 'العدد'], ['req_start', 'تاريخ الاحتياج'], ['req_exp', 'سنوات الخبرة'], ['salary_range', 'نطاق الأجر المقترح'], ['manager', 'مقدم الطلب']] },
        { checks: 'req_reason', label: 'سبب الطلب' }, { checks: 'contract_type', label: 'نوع التعاقد' },
        { h: 'المؤهلات والمهارات المطلوبة' }, { p: '{req_qual}', box: true }, sign(['dept', 'hr', 'gm'])],
      en: [{ kv: [['job', 'Position', 'job_en'], ['dept', 'Department', 'dept_en'], ['req_count', 'Headcount'], ['req_start', 'Needed by'], ['req_exp', 'Years of experience'], ['salary_range', 'Proposed salary range'], ['manager', 'Requested by']] },
        { checks: 'req_reason', label: 'Reason' }, { checks: 'contract_type', label: 'Contract type' },
        { h: 'Required qualifications and skills' }, { p: '{req_qual}', box: true }, sign(['dept', 'hr', 'gm'])] },

    { id: 'application', cat: 'hire', t: ['طلب توظيف', 'Job Application Form'], f: ['position'],
      ar: [{ kv: [['position', 'الوظيفة المتقدم لها'], ['_', 'الاسم رباعي'], ['_', 'الرقم القومي'], ['_', 'تاريخ الميلاد'], ['_', 'العنوان'], ['_', 'رقم الموبايل'], ['_', 'البريد الإلكتروني'], ['_', 'الحالة الاجتماعية'], ['_', 'الموقف من التجنيد'], ['_', 'المؤهل وسنة التخرج']] },
        { h: 'الخبرات السابقة' }, { grid: ['جهة العمل', 'الوظيفة', 'من', 'إلى', 'سبب ترك العمل'], rows: 4 },
        { h: 'إقرار' }, { p: 'أقر بأن جميع البيانات الواردة بهذا الطلب صحيحة، وأوافق على قيام الشركة بالتحقق منها، وأعلم أن ثبوت عدم صحة أي منها يجيز للشركة استبعاد الطلب أو إنهاء التعاقد وفقًا للقانون.' },
        { sign: [['توقيع المتقدم', 'Applicant']] }],
      en: [{ kv: [['position', 'Position applied for'], ['_', 'Full name'], ['_', 'National ID'], ['_', 'Date of birth'], ['_', 'Address'], ['_', 'Mobile'], ['_', 'Email'], ['_', 'Marital status'], ['_', 'Military status'], ['_', 'Qualification & graduation year']] },
        { h: 'Previous experience' }, { grid: ['Employer', 'Position', 'From', 'To', 'Reason for leaving'], rows: 4 },
        { h: 'Declaration' }, { p: 'I declare that the information in this application is true. I authorise the company to verify it, and I understand that any false information allows the company to reject my application or end my employment in accordance with the law.' },
        { sign: [['توقيع المتقدم', 'Applicant']] }] },

    { id: 'interview', cat: 'hire', t: ['تقييم مقابلة شخصية', 'Interview Evaluation'], f: ['candidate', 'position', 'interviewer', 'doc_date'],
      ar: [{ kv: [['candidate', 'اسم المرشح'], ['position', 'الوظيفة'], ['interviewer', 'القائم بالمقابلة'], ['doc_date', 'تاريخ المقابلة']] },
        { grid: ['المعيار', 'ضعيف 1', '2', '3', '4', 'ممتاز 5', 'ملاحظات'], rows: [['المعرفة الفنية بالوظيفة'], ['الخبرة العملية ذات الصلة'], ['مهارات التواصل'], ['حل المشكلات واتخاذ القرار'], ['العمل ضمن فريق'], ['الدافعية والتوافق مع ثقافة الشركة'], ['المظهر والانضباط']] },
        { checksStatic: ['يُرشَّح للتعيين', 'يُرشَّح لمقابلة ثانية', 'لا يُرشَّح'], label: 'التوصية' }, { h: 'ملاحظات إضافية' }, { lines: 3 }, sign(['int', 'hr'])],
      en: [{ kv: [['candidate', 'Candidate'], ['position', 'Position'], ['interviewer', 'Interviewer'], ['doc_date', 'Interview date']] },
        { grid: ['Criterion', 'Poor 1', '2', '3', '4', 'Excellent 5', 'Notes'], rows: [['Technical knowledge'], ['Relevant experience'], ['Communication'], ['Problem solving & judgement'], ['Teamwork'], ['Motivation & culture fit'], ['Presentation & punctuality']] },
        { checksStatic: ['Recommend to hire', 'Second interview', 'Do not recommend'], label: 'Recommendation' }, { h: 'Additional notes' }, { lines: 3 }, sign(['int', 'hr'])] },

    { id: 'offer', cat: 'hire', t: ['عرض عمل', 'Job Offer Letter'], letter: true,
      f: ['candidate', 'job', 'dept', 'start_date', 'salary_gross', 'probation', 'work_hours', 'benefits', 'offer_valid', 'doc_date', 'ref_no'],
      ar: [{ to: 'السيد/ة {candidate}' }, { subj: 'عرض عمل' }, { p: 'يسعدنا أن نعرض عليكم الانضمام إلى {est_name} وفق الشروط التالية:' },
        { kv: [['job', 'الوظيفة'], ['dept', 'الإدارة'], ['start_date', 'تاريخ بدء العمل'], ['salary_gross', 'إجمالي الأجر الشهري'], ['probation', 'مدة الاختبار'], ['work_hours', 'ساعات العمل']] },
        { p: 'المزايا الأخرى: {benefits}' },
        { p: 'يخضع هذا العرض لاستيفاء مستندات التعيين وتوقيع عقد العمل، ويسري حتى {offer_valid}. نرجو التكرم بالتوقيع بما يفيد القبول.' },
        { sign: [['عن الشركة', 'For the company'], ['قبول المرشح', 'Candidate acceptance']] }],
      en: [{ to: 'Dear {candidate},' }, { subj: 'Offer of Employment' }, { p: 'We are pleased to offer you a position at {est_name_en} on the following terms:' },
        { kv: [['job', 'Position', 'job_en'], ['dept', 'Department', 'dept_en'], ['start_date', 'Start date'], ['salary_gross', 'Gross monthly salary'], ['probation', 'Probation period'], ['work_hours', 'Working hours']] },
        { p: 'Other benefits: {benefits}' },
        { p: 'This offer is subject to submitting the hiring documents and signing the employment contract, and is valid until {offer_valid}. Please sign below to confirm your acceptance.' },
        { sign: [['عن الشركة', 'For the company'], ['قبول المرشح', 'Candidate acceptance']] }] },

    { id: 'contract_fixed', cat: 'hire', t: ['عقد عمل محدد المدة', 'Fixed-Term Employment Contract'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (88) تحوّل العقد لغير محدد المدة، م (89) كتابة العقد وبياناته ونسخه، م (90) فترة الاختبار، م (117) ساعات العمل.', 'Labour Law No. 14 of 2025: Art. 88 (conversion to indefinite), Art. 89 (written contract, contents, copies), Art. 90 (probation), Art. 117 (working hours).'],
      f: ['emp_name', 'nid', 'emp_ins_no', 'qualification', 'emp_address', 'job', 'work_place', 'start_date', 'end_date', 'probation', 'salary_gross', 'pay_method', 'work_hours', 'doc_date'],
      ar: [{ p: 'إنه في يوم {doc_date} تحرر هذا العقد بين كل من:' },
        { p: 'أولًا: {est_name}، وعنوان محل العمل {est_address}، سجل تجاري رقم {cr_no}، ويمثلها {applicant_name} بصفته {applicant_role} (طرف أول).' },
        { p: 'ثانيًا: السيد/ة {emp_name}، رقم قومي {nid}، رقم تأميني {emp_ins_no}، المؤهل {qualification}، والمقيم في {emp_address} (طرف ثانٍ).' },
        { p: 'وقد اتفق الطرفان، وهما بكامل أهليتهما القانونية، على ما يلي:' },
        { ol: ['يعمل الطرف الثاني لدى الطرف الأول بوظيفة {job}، ومقر العمل {work_place}، ويلتزم بأداء المهام المحددة بالوصف الوظيفي وما يُكلَّف به في حدود وظيفته.',
          'مدة هذا العقد تبدأ من {start_date} وتنتهي في {end_date}، ويجوز تجديده باتفاق مكتوب بين الطرفين. وإذا استمر الطرفان في تنفيذه بعد انتهاء مدته دون اتفاق مكتوب، اعتُبر عقدًا غير محدد المدة وفقًا للمادة (88).',
          'يخضع الطرف الثاني لفترة اختبار مدتها {probation}، بما لا يزيد على ثلاثة أشهر، ولا يجوز تعيينه تحت الاختبار لدى الطرف الأول أكثر من مرة واحدة، وفقًا للمادة (90).',
          'يتقاضى الطرف الثاني أجرًا شهريًا إجماليًا قدره {salary_gross}، يُؤدَّى {pay_method} في نهاية كل شهر، ويخضع للاستقطاعات القانونية من تأمينات اجتماعية وضرائب.',
          'ساعات العمل {work_hours}، بما لا يجاوز ثماني ساعات فعلية في اليوم أو ثمانيًا وأربعين ساعة في الأسبوع وفقًا للمادة (117)، ويستحق الطرف الثاني الراحة الأسبوعية والإجازات المقررة قانونًا.',
          'يقر الطرف الثاني باطلاعه على لائحة تنظيم العمل والجزاءات المعتمدة بالمنشأة والتزامه بها، وبالمحافظة على أسرار العمل أثناء الخدمة وبعدها.',
          'يُشترك عن الطرف الثاني في التأمينات الاجتماعية وفقًا للقانون.',
          'فيما لم يرد به نص في هذا العقد تسري أحكام قانون العمل رقم 14 لسنة 2025 ولائحة المنشأة.',
          'تحرر هذا العقد باللغة العربية من أربع نسخ: نسخة لصاحب العمل، ونسخة للعامل، ونسخة تودع بمكتب التأمين الاجتماعي المختص، ونسخة بالجهة الإدارية المختصة، وفقًا للمادة (89).'] },
        sign(['party1', 'party2'])],
      en: [{ p: 'This contract is made on {doc_date} between:' },
        { p: 'First: {est_name_en}, place of work at {est_address_en}, commercial register no. {cr_no}, represented by {signatory_en}, {signatory_role_en} (First Party).' },
        { p: 'Second: Mr./Ms. {emp_name_en}, national ID {nid}, social insurance no. {emp_ins_no}, qualification {qualification}, residing at {emp_address} (Second Party).' },
        { p: 'Both parties, having full legal capacity, agree as follows:' },
        { ol: ['The Second Party shall work for the First Party as {job_en} at {work_place}, performing the duties in the job description and any related tasks assigned within the scope of the job.',
          'This contract starts on {start_date} and ends on {end_date}. It may be renewed by written agreement. If both parties continue to perform it after it expires without a written agreement, it becomes an indefinite contract under Article 88.',
          'The Second Party is subject to a probation period of {probation}, not exceeding three months, and may not be placed on probation by the First Party more than once, under Article 90.',
          'The Second Party shall receive a gross monthly salary of {salary_gross}, paid {pay_method} at the end of each month, subject to statutory social insurance and tax deductions.',
          'Working hours are {work_hours}, not exceeding eight actual hours a day or forty-eight hours a week under Article 117. The Second Party is entitled to weekly rest and statutory leave.',
          'The Second Party confirms having read and accepted the company’s work regulations and disciplinary rules, and shall keep business information confidential during and after employment.',
          'The Second Party shall be registered for social insurance in accordance with the law.',
          'Matters not covered by this contract are governed by Labour Law No. 14 of 2025 and the company regulations.',
          'This contract is written in Arabic in four copies: one for the employer, one for the employee, one filed with the competent social insurance office, and one with the competent administrative authority, under Article 89.'] },
        sign(['party1', 'party2'])] },

    { id: 'contract_open', cat: 'hire', t: ['عقد عمل غير محدد المدة', 'Indefinite Employment Contract'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (89) كتابة العقد وبياناته ونسخه، م (90) فترة الاختبار، م (117) ساعات العمل، م (156) و(157) و(161) الإنهاء والإخطار.', 'Labour Law No. 14 of 2025: Art. 89 (written contract), Art. 90 (probation), Art. 117 (hours), Arts. 156, 157, 161 (termination and notice).'],
      f: ['emp_name', 'nid', 'emp_ins_no', 'qualification', 'emp_address', 'job', 'work_place', 'start_date', 'probation', 'salary_gross', 'pay_method', 'work_hours', 'doc_date'],
      ar: [{ p: 'إنه في يوم {doc_date} تحرر هذا العقد بين كل من:' },
        { p: 'أولًا: {est_name}، وعنوان محل العمل {est_address}، سجل تجاري رقم {cr_no}، ويمثلها {applicant_name} بصفته {applicant_role} (طرف أول).' },
        { p: 'ثانيًا: السيد/ة {emp_name}، رقم قومي {nid}، رقم تأميني {emp_ins_no}، المؤهل {qualification}، والمقيم في {emp_address} (طرف ثانٍ).' },
        { p: 'وقد اتفق الطرفان، وهما بكامل أهليتهما القانونية، على ما يلي:' },
        { ol: ['يعمل الطرف الثاني لدى الطرف الأول بوظيفة {job}، ومقر العمل {work_place}، ويلتزم بأداء المهام المحددة بالوصف الوظيفي وما يُكلَّف به في حدود وظيفته.',
          'هذا العقد غير محدد المدة، ويبدأ سريانه من {start_date}.',
          'يخضع الطرف الثاني لفترة اختبار مدتها {probation}، بما لا يزيد على ثلاثة أشهر، ولا يجوز تعيينه تحت الاختبار لدى الطرف الأول أكثر من مرة واحدة، وفقًا للمادة (90).',
          'يتقاضى الطرف الثاني أجرًا شهريًا إجماليًا قدره {salary_gross}، يُؤدَّى {pay_method} في نهاية كل شهر، ويخضع للاستقطاعات القانونية من تأمينات اجتماعية وضرائب.',
          'ساعات العمل {work_hours}، بما لا يجاوز ثماني ساعات فعلية في اليوم أو ثمانيًا وأربعين ساعة في الأسبوع وفقًا للمادة (117)، ويستحق الطرف الثاني الراحة الأسبوعية والإجازات المقررة قانونًا.',
          'يقر الطرف الثاني باطلاعه على لائحة تنظيم العمل والجزاءات المعتمدة بالمنشأة والتزامه بها، وبالمحافظة على أسرار العمل أثناء الخدمة وبعدها.',
          'يجوز لأي من الطرفين إنهاء هذا العقد بشرط إخطار الطرف الآخر كتابةً قبل الإنهاء بثلاثة أشهر وفقًا للمادة (156)، ولا يكون الإنهاء إلا بمبرر مشروع وكافٍ وفقًا للمادة (157)، ولا يجوز الاتفاق على الإعفاء من الإخطار أو تخفيض مدته وفقًا للمادة (161).',
          'يُشترك عن الطرف الثاني في التأمينات الاجتماعية وفقًا للقانون.',
          'فيما لم يرد به نص في هذا العقد تسري أحكام قانون العمل رقم 14 لسنة 2025 ولائحة المنشأة.',
          'تحرر هذا العقد باللغة العربية من أربع نسخ: نسخة لصاحب العمل، ونسخة للعامل، ونسخة تودع بمكتب التأمين الاجتماعي المختص، ونسخة بالجهة الإدارية المختصة، وفقًا للمادة (89).'] },
        sign(['party1', 'party2'])],
      en: [{ p: 'This contract is made on {doc_date} between:' },
        { p: 'First: {est_name_en}, place of work at {est_address_en}, commercial register no. {cr_no}, represented by {signatory_en}, {signatory_role_en} (First Party).' },
        { p: 'Second: Mr./Ms. {emp_name_en}, national ID {nid}, social insurance no. {emp_ins_no}, qualification {qualification}, residing at {emp_address} (Second Party).' },
        { p: 'Both parties, having full legal capacity, agree as follows:' },
        { ol: ['The Second Party shall work for the First Party as {job_en} at {work_place}, performing the duties in the job description and any related tasks assigned within the scope of the job.',
          'This is an indefinite contract, effective from {start_date}.',
          'The Second Party is subject to a probation period of {probation}, not exceeding three months, and may not be placed on probation by the First Party more than once, under Article 90.',
          'The Second Party shall receive a gross monthly salary of {salary_gross}, paid {pay_method} at the end of each month, subject to statutory social insurance and tax deductions.',
          'Working hours are {work_hours}, not exceeding eight actual hours a day or forty-eight hours a week under Article 117. The Second Party is entitled to weekly rest and statutory leave.',
          'The Second Party confirms having read and accepted the company’s work regulations and disciplinary rules, and shall keep business information confidential during and after employment.',
          'Either party may end this contract by giving the other written notice three months before termination under Article 156. Termination requires a legitimate and sufficient reason under Article 157, and the notice may not be waived or shortened under Article 161.',
          'The Second Party shall be registered for social insurance in accordance with the law.',
          'Matters not covered by this contract are governed by Labour Law No. 14 of 2025 and the company regulations.',
          'This contract is written in Arabic in four copies: one for the employer, one for the employee, one filed with the competent social insurance office, and one with the competent administrative authority, under Article 89.'] },
        sign(['party1', 'party2'])] },

    { id: 'docs_checklist', cat: 'hire', t: ['قائمة مستندات التعيين', 'Hiring Documents Checklist'], f: ['emp_name', 'job', 'hire_date'],
      ar: [{ kv: [['emp_name', 'اسم الموظف'], ['job', 'الوظيفة'], ['hire_date', 'تاريخ التعيين']] },
        { grid: ['المستند', 'تم الاستلام', 'ملاحظات'], rows: [['صورة بطاقة الرقم القومي سارية'], ['شهادة الميلاد'], ['أصل المؤهل الدراسي أو صورة معتمدة'], ['شهادة الموقف من التجنيد (للذكور)'], ['صحيفة الحالة الجنائية'], ['صور شخصية'], ['برنت التأمينات الاجتماعية / شهادة قيد'], ['شهادة الخبرة السابقة / إخلاء الطرف'], ['الشهادة الصحية / الكشف الطبي'], ['بيانات الحساب البنكي'], ['تصريح العمل (لغير المصريين)']] },
        { p: 'أقر الموظف بتسليم المستندات المؤشر عليها أعلاه، وبالتزامه باستكمال الباقي خلال المدة التي تحددها الإدارة.' }, sign(['emp', 'hr'])],
      en: [{ kv: [['emp_name', 'Employee'], ['job', 'Position', 'job_en'], ['hire_date', 'Hire date']] },
        { grid: ['Document', 'Received', 'Notes'], rows: [['Valid national ID copy'], ['Birth certificate'], ['Original or certified qualification'], ['Military status certificate (males)'], ['Criminal record certificate'], ['Personal photos'], ['Social insurance statement'], ['Previous experience certificate / clearance'], ['Health certificate / medical check'], ['Bank account details'], ['Work permit (non-Egyptians)']] },
        { p: 'The employee confirms submitting the documents ticked above and undertakes to complete the rest within the period set by HR.' }, sign(['emp', 'hr'])] },

    { id: 'commencement', cat: 'hire', t: ['إقرار استلام العمل', 'Commencement of Work'], f: ['emp_name', 'job', 'dept', 'start_date', 'manager'],
      ar: [{ p: 'أقر أنا {emp_name} بأنني قد تسلمت العمل بوظيفة {job} بإدارة {dept} اعتبارًا من يوم {start_date}، تحت إشراف {manager}.' }, { kv: [['emp_code', 'الرقم الوظيفي'], ['nid', 'الرقم القومي']] }, sign(['emp', 'mgr', 'hr'])],
      en: [{ p: 'I, {emp_name_en}, confirm that I started work as {job_en} in the {dept_en} department on {start_date}, reporting to {manager}.' }, { kv: [['emp_code', 'Employee ID'], ['nid', 'National ID']] }, sign(['emp', 'mgr', 'hr'])] },

    /* ===== Personnel ===== */
    { id: 'emp_card', cat: 'staff', t: ['بطاقة بيانات الموظف', 'Employee Information Sheet'], f: ['emp_name', 'emp_code', 'nid', 'nationality', 'job', 'dept', 'hire_date', 'emp_address'],
      ar: [{ kv: [['emp_code', 'الرقم الوظيفي'], ['emp_name', 'الاسم'], ['nid', 'الرقم القومي'], ['nationality', 'الجنسية'], ['_', 'تاريخ الميلاد'], ['emp_address', 'العنوان'], ['_', 'الموبايل'], ['_', 'الحالة الاجتماعية'], ['_', 'الموقف من التجنيد'], ['_', 'المؤهل'], ['job', 'الوظيفة'], ['dept', 'الإدارة'], ['hire_date', 'تاريخ التعيين'], ['_', 'الرقم التأميني'], ['_', 'رقم الحساب البنكي']] },
        { h: 'للطوارئ' }, { kv: [['_', 'اسم الشخص'], ['_', 'صلة القرابة'], ['_', 'رقم التليفون']] },
        { p: 'أقر بصحة البيانات أعلاه، وألتزم بإخطار الموارد البشرية بأي تغيير فيها.' }, sign(['emp', 'hr'])],
      en: [{ kv: [['emp_code', 'Employee ID'], ['emp_name', 'Name', 'emp_name_en'], ['nid', 'National ID'], ['nationality', 'Nationality'], ['_', 'Date of birth'], ['emp_address', 'Address'], ['_', 'Mobile'], ['_', 'Marital status'], ['_', 'Military status'], ['_', 'Qualification'], ['job', 'Position', 'job_en'], ['dept', 'Department', 'dept_en'], ['hire_date', 'Hire date'], ['_', 'Social insurance no.'], ['_', 'Bank account no.']] },
        { h: 'Emergency contact' }, { kv: [['_', 'Name'], ['_', 'Relationship'], ['_', 'Phone']] },
        { p: 'I confirm the information above is correct and will inform HR of any change.' }, sign(['emp', 'hr'])] },

    { id: 'policy_ack', cat: 'staff', t: ['إقرار استلام لائحة العمل', 'Handbook Acknowledgement'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (137) لائحة تنظيم العمل والجزاءات.', 'Labour Law No. 14 of 2025: Art. 137 (work regulations and penalties).'],
      f: ['emp_name', 'job', 'doc_date'],
      ar: [{ p: 'أقر أنا {emp_name}، الوظيفة {job}، بأنني قد تسلمت نسخة من لائحة تنظيم العمل والجزاءات المعتمدة في {est_name}، واطلعت عليها وفهمت ما ورد بها، وألتزم بالعمل بموجبها وبما يطرأ عليها من تعديلات معتمدة يتم إخطاري بها.' }, { kv: [['doc_date', 'التاريخ']] }, sign(['emp', 'hr'])],
      en: [{ p: 'I, {emp_name_en}, {job_en}, confirm that I have received a copy of the work regulations and disciplinary rules approved by {est_name_en}. I have read and understood them, and I agree to follow them and any approved amendments notified to me.' }, { kv: [['doc_date', 'Date']] }, sign(['emp', 'hr'])] },

    { id: 'probation_eval', ref: ['قانون العمل رقم 14 لسنة 2025: المادة (90) — فترة الاختبار لا تزيد على ثلاثة أشهر ولا تتكرر لدى صاحب العمل نفسه.','Labour Law No. 14 of 2025: Article 90 — probation up to three months, once per employer.'], cat: 'staff', t: ['تقييم فترة الاختبار', 'Probation Review'], f: ['emp_name', 'job', 'dept', 'hire_date', 'manager'],
      ar: [empKV([['hire_date', 'تاريخ التعيين'], ['manager', 'المقيِّم']]),
        { grid: ['المعيار', 'دون المتوقع', 'يحقق المتوقع', 'يفوق المتوقع', 'ملاحظات'], rows: [['جودة العمل ودقته'], ['الإنتاجية والالتزام بالمواعيد'], ['المعرفة الفنية'], ['التعاون والعمل الجماعي'], ['الانضباط والحضور'], ['القدرة على التعلم']] },
        { checksStatic: ['تثبيت الموظف', 'إنهاء التعاقد خلال فترة الاختبار'], label: 'التوصية' }, { h: 'مبررات التوصية' }, { lines: 3 }, sign(['mgr', 'hr', 'gm'])],
      en: [empKV([['hire_date', 'Hire date'], ['manager', 'Reviewer']]),
        { grid: ['Criterion', 'Below', 'Meets', 'Exceeds', 'Notes'], rows: [['Quality & accuracy'], ['Productivity & deadlines'], ['Technical knowledge'], ['Teamwork'], ['Discipline & attendance'], ['Ability to learn']] },
        { checksStatic: ['Confirm employment', 'End contract during probation'], label: 'Recommendation' }, { h: 'Justification' }, { lines: 3 }, sign(['mgr', 'hr', 'gm'])] },

    { id: 'leave', cat: 'staff', t: ['طلب إجازة', 'Leave Request'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (124) الإجازة السنوية، م (128) الإجازة العارضة، م (131) الإجازة المرضية.', 'Labour Law No. 14 of 2025: Art. 124 (annual), Art. 128 (casual), Art. 131 (sick leave).'],
      f: ['emp_name', 'job', 'dept', 'leave_type', 'from_date', 'to_date', 'days', 'substitute', 'doc_date'],
      ar: [empKV(), { checks: 'leave_type', label: 'نوع الإجازة' }, { kv: [['from_date', 'من'], ['to_date', 'إلى'], ['days', 'عدد الأيام'], ['substitute', 'القائم بالعمل'], ['doc_date', 'تاريخ الطلب']] },
        { h: 'خاص بالموارد البشرية' }, { kv: [['_', 'الرصيد قبل الإجازة'], ['_', 'الرصيد بعد الإجازة']] }, sign(['emp', 'mgr', 'hr'])],
      en: [empKV(), { checks: 'leave_type', label: 'Leave type' }, { kv: [['from_date', 'From'], ['to_date', 'To'], ['days', 'Days'], ['substitute', 'Covering colleague'], ['doc_date', 'Request date']] },
        { h: 'HR use' }, { kv: [['_', 'Balance before'], ['_', 'Balance after']] }, sign(['emp', 'mgr', 'hr'])] },

    { id: 'permission', cat: 'staff', t: ['إذن تأخير / انصراف', 'Permission Request'], f: ['emp_name', 'job', 'dept', 'perm_type', 'doc_date', 'time_from', 'time_to', 'reason'],
      ar: [empKV(), { checks: 'perm_type', label: 'نوع الإذن' }, { kv: [['doc_date', 'التاريخ'], ['time_from', 'من الساعة'], ['time_to', 'إلى الساعة']] }, { p: 'السبب: {reason}' }, sign(['emp', 'mgr', 'hr'])],
      en: [empKV(), { checks: 'perm_type', label: 'Type' }, { kv: [['doc_date', 'Date'], ['time_from', 'From'], ['time_to', 'To']] }, { p: 'Reason: {reason}' }, sign(['emp', 'mgr', 'hr'])] },

    { id: 'mission', cat: 'staff', t: ['تكليف بمأمورية', 'Business Trip Assignment'], f: ['emp_name', 'job', 'dept', 'destination', 'purpose', 'from_date', 'to_date', 'transport'],
      ar: [empKV(), { kv: [['destination', 'جهة المأمورية'], ['from_date', 'من'], ['to_date', 'إلى'], ['transport', 'وسيلة الانتقال']] }, { p: 'الغرض: {purpose}' }, { h: 'تقرير ما بعد المأمورية' }, { lines: 3 }, sign(['emp', 'mgr', 'hr'])],
      en: [empKV(), { kv: [['destination', 'Destination'], ['from_date', 'From'], ['to_date', 'To'], ['transport', 'Transport']] }, { p: 'Purpose: {purpose}' }, { h: 'Post-trip report' }, { lines: 3 }, sign(['emp', 'mgr', 'hr'])] },

    { id: 'advance', cat: 'staff', t: ['طلب سلفة', 'Salary Advance Request'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (113) حد الاستقطاع وفاءً للقروض.', 'Labour Law No. 14 of 2025: Art. 113 (deduction limit for loans).'],
      f: ['emp_name', 'job', 'dept', 'salary_gross', 'loan_amount', 'installments', 'installment_value', 'reason'],
      ar: [empKV([['salary_gross', 'إجمالي الأجر']]), { kv: [['loan_amount', 'قيمة السلفة المطلوبة'], ['installments', 'عدد الأقساط'], ['installment_value', 'القسط الشهري']] }, { p: 'السبب: {reason}' },
        { p: 'أوافق على خصم الأقساط المذكورة من أجري الشهري، على ألا يزيد ما يُقتطع على عشرة بالمائة من الأجر، ودون أي فائدة، وفقًا للمادة (113) من قانون العمل.' }, sign(['emp', 'mgr', 'fin', 'hr'])],
      en: [empKV([['salary_gross', 'Gross salary']]), { kv: [['loan_amount', 'Advance requested'], ['installments', 'Instalments'], ['installment_value', 'Monthly instalment']] }, { p: 'Reason: {reason}' },
        { p: 'I agree to the deduction of these instalments from my monthly salary, provided the deduction does not exceed ten per cent of my wage and no interest is charged, under Article 113 of the Labour Law.' }, sign(['emp', 'mgr', 'fin', 'hr'])] },

    { id: 'personnel_action', cat: 'staff', t: ['قرار نقل / ترقية / تعديل أجر', 'Personnel Action Form'], f: ['emp_name', 'job', 'dept', 'salary_gross', 'action_type', 'new_job', 'new_dept', 'new_salary', 'effective_date', 'reason'],
      ar: [{ kv: [['emp_name', 'اسم الموظف'], ['emp_code', 'الرقم الوظيفي']] }, { checks: 'action_type', label: 'نوع القرار' },
        { grid: ['البيان', 'قبل القرار', 'بعد القرار'], rows: [['الوظيفة', '{job}', '{new_job}'], ['الإدارة', '{dept}', '{new_dept}'], ['إجمالي الأجر', '{salary_gross}', '{new_salary}']] },
        { kv: [['effective_date', 'تاريخ السريان']] }, { p: 'المبررات: {reason}' }, sign(['mgr', 'hr', 'gm'])],
      en: [{ kv: [['emp_name', 'Employee', 'emp_name_en'], ['emp_code', 'Employee ID']] }, { checks: 'action_type', label: 'Action' },
        { grid: ['Item', 'Before', 'After'], rows: [['Position', '{job_en}', '{new_job}'], ['Department', '{dept_en}', '{new_dept}'], ['Gross salary', '{salary_gross}', '{new_salary}']] },
        { kv: [['effective_date', 'Effective date']] }, { p: 'Justification: {reason}' }, sign(['mgr', 'hr', 'gm'])] },

    /* ===== Discipline ===== */
    { id: 'attention', cat: 'disc', t: ['لفت نظر', 'Note of Attention'], letter: true, f: ['emp_name', 'job', 'incident_date', 'incident', 'doc_date', 'ref_no'],
      ar: [{ to: 'السيد/ة {emp_name} — {job}' }, { subj: 'لفت نظر' }, { p: 'نلفت نظركم إلى ما بدر منكم بتاريخ {incident_date}، وهو: {incident}' }, { p: 'ويُعد ذلك مخالفة لتعليمات العمل ولائحة المنشأة، ونأمل عدم تكرار ذلك مستقبلًا، علمًا بأن التكرار يعرضكم للجزاءات المنصوص عليها في لائحة الجزاءات المعتمدة.' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }],
      en: [{ to: 'Mr./Ms. {emp_name_en} — {job_en}' }, { subj: 'Note of Attention' }, { p: 'We draw your attention to the following on {incident_date}: {incident}' }, { p: 'This breaches the work instructions and company regulations. We expect it will not happen again; repetition will expose you to the penalties set out in the approved disciplinary rules.' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }] },

    { id: 'warning', cat: 'disc', t: ['إنذار كتابي', 'Written Warning'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (139) الجزاءات التأديبية، م (141) التحقيق قبل الجزاء، م (148) سلطة توقيع الجزاء.', 'Labour Law No. 14 of 2025: Art. 139 (penalties), Art. 141 (investigation before penalty), Art. 148 (authority to impose).'],
      f: ['emp_name', 'job', 'incident_date', 'incident', 'doc_date', 'ref_no'],
      ar: [{ to: 'السيد/ة {emp_name} — {job}' }, { subj: 'إنذار كتابي' }, { p: 'بعد سماع أقوالكم وتحقيق دفاعكم، ثبت في حقكم بتاريخ {incident_date} ما يلي: {incident}' }, { p: 'وحيث إن ذلك يمثل مخالفة لأحكام لائحة الجزاءات المعتمدة بالمنشأة، فقد تقرر توقيع جزاء الإنذار الكتابي عليكم وفقًا للمادة (139) من قانون العمل، مع العلم بأنه يجوز تشديد الجزاء في حالة العودة لمخالفة من النوع نفسه خلال سنة من تاريخ إبلاغكم بهذا الجزاء وفقًا للمادة (144).' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }],
      en: [{ to: 'Mr./Ms. {emp_name_en} — {job_en}' }, { subj: 'Written Warning' }, { p: 'After hearing your statement and defence, it has been established that on {incident_date}: {incident}' }, { p: 'As this breaches the company’s approved disciplinary rules, a written warning is imposed under Article 139 of the Labour Law. The penalty may be increased if a violation of the same kind recurs within one year of this notification, under Article 144.' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }] },

    { id: 'inv_notice', cat: 'disc', t: ['استدعاء للتحقيق', 'Notice of Investigation'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (141) الإبلاغ الكتابي وبدء التحقيق خلال سبعة أيام، م (142) جهة التحقيق.', 'Labour Law No. 14 of 2025: Art. 141 (written notice; investigation within seven days), Art. 142 (investigating body).'],
      f: ['emp_name', 'job', 'incident', 'inv_date', 'inv_time', 'inv_place', 'doc_date', 'ref_no'],
      ar: [{ to: 'السيد/ة {emp_name} — {job}' }, { subj: 'إبلاغ بمخالفة واستدعاء للتحقيق' }, { p: 'نبلغكم كتابةً بما نُسب إليكم، وهو: {incident}' }, { p: 'لذا يُرجى الحضور يوم {inv_date} الساعة {inv_time} بمقر {inv_place}، لسماع أقوالكم وتحقيق دفاعكم، ولكم تقديم ما يدعم دفاعكم من مستندات. وللمنظمة النقابية التي تتبعونها أن تندب ممثلًا عنها لحضور التحقيق، وذلك وفقًا للمادة (141) من قانون العمل.' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }],
      en: [{ to: 'Mr./Ms. {emp_name_en} — {job_en}' }, { subj: 'Notice of Allegation and Investigation' }, { p: 'You are hereby notified in writing of the following allegation: {incident}' }, { p: 'Please attend on {inv_date} at {inv_time} at {inv_place} to give your statement and defence. You may submit any supporting documents. The trade union you belong to may delegate a representative to attend, under Article 141 of the Labour Law.' },
        { sign: [['الموارد البشرية', 'HR'], ['استلمت نسخة', 'Received by']] }] },

    { id: 'inv_minutes', cat: 'disc', t: ['محضر تحقيق إداري', 'Investigation Minutes'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (141) إثبات التحقيق في محضر يودع ملف العامل، م (142) المحقق.', 'Labour Law No. 14 of 2025: Art. 141 (minutes kept in the employee file), Art. 142 (investigator).'],
      f: ['emp_name', 'job', 'dept', 'inv_date', 'inv_time', 'inv_place', 'investigator', 'incident'],
      ar: [{ p: 'إنه في يوم {inv_date} الساعة {inv_time}، بمقر {inv_place}، قمنا نحن {investigator} بالتحقيق مع:' }, empKV(), { p: 'موضوع التحقيق: {incident}' },
        { p: 'وبمواجهة الموظف بما نُسب إليه، وسؤاله:' }, { qa: 6 }, { kv: [['_', 'ممثل المنظمة النقابية (إن حضر)']] }, { p: 'وأُقفل المحضر في حينه بعد تلاوته على الموظف، ويودع بملفه الخاص.' }, sign(['inv', 'emp'])],
      en: [{ p: 'On {inv_date} at {inv_time}, at {inv_place}, the undersigned {investigator} investigated:' }, empKV(), { p: 'Subject: {incident}' },
        { p: 'The employee was informed of the allegation and asked:' }, { qa: 6 }, { kv: [['_', 'Union representative (if present)']] }, { p: 'The minutes were closed after being read to the employee and are kept in the employee file.' }, sign(['inv', 'emp'])] },

    { id: 'penalty', cat: 'disc', t: ['قرار جزاء', 'Disciplinary Decision'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (138) مدة توقيع الجزاء، م (139) الجزاءات، م (141) تسبيب القرار، م (143) حد الخصم، م (148) سلطة توقيع الجزاء.', 'Labour Law No. 14 of 2025: Arts. 138, 139, 141, 143, 148 (penalties and procedure).'],
      f: ['emp_name', 'job', 'incident_date', 'incident', 'inv_date', 'penalty', 'penalty_detail', 'doc_date', 'ref_no'],
      ar: [{ subj: 'قرار جزاء' }, { p: 'بعد الاطلاع على لائحة تنظيم العمل والجزاءات المعتمدة بـ{est_name}، وعلى محضر التحقيق المؤرخ {inv_date} مع السيد/ة {emp_name} — {job}؛' },
        { p: 'وحيث ثبت في حقه بتاريخ {incident_date}: {incident}، وهو ما يمثل مخالفة لأحكام اللائحة؛' },
        { h: 'قررنا' }, { p: 'مجازاة الموظف المذكور بجزاء: {penalty} {penalty_detail}، وفقًا للمادة (139) من قانون العمل رقم 14 لسنة 2025.' },
        { p: 'ويحق للموظف التظلم من هذا القرار وفقًا للإجراءات المقررة قانونًا.' },
        { sign: [['صاحب العمل / المفوَّض', 'Employer / authorised signatory'], ['استلمت نسخة', 'Received by']] }],
      en: [{ subj: 'Disciplinary Decision' }, { p: 'Having reviewed the work regulations and disciplinary rules approved by {est_name_en} and the investigation minutes dated {inv_date} with Mr./Ms. {emp_name_en} — {job_en};' },
        { p: 'And whereas it has been established that on {incident_date}: {incident}, in breach of the regulations;' },
        { h: 'It is decided' }, { p: 'to impose on the said employee the penalty of: {penalty} {penalty_detail}, under Article 139 of Labour Law No. 14 of 2025.' },
        { p: 'The employee may file a grievance against this decision following the procedures set by law.' },
        { sign: [['صاحب العمل / المفوَّض', 'Employer / authorised signatory'], ['استلمت نسخة', 'Received by']] }] },

    { id: 'absence_warning', cat: 'disc', t: ['إنذار بالانقطاع عن العمل', 'Absence Warning Notice'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (166) الغياب دون مبرر مشروع.', 'Labour Law No. 14 of 2025: Art. 166 (absence without legitimate excuse).'],
      f: ['emp_name', 'job', 'emp_address', 'absence_kind', 'absence_from', 'absence_days', 'doc_date', 'ref_no'],
      ar: [{ to: 'السيد/ة {emp_name} — {job}\nالمقيم في: {emp_address}' }, { subj: 'إنذار بالانقطاع عن العمل' },
        { p: 'نحيطكم علمًا بأنكم منقطعون عن العمل دون مبرر مشروع اعتبارًا من {absence_from}، وبلغ غيابكم حتى تاريخه {absence_days} أيام متتالية.', when: ['absence_kind', 'consecutive'] },
        { p: 'نحيطكم علمًا بأنكم تغيبتم عن العمل دون مبرر مشروع أيامًا متقطعة بلغت حتى تاريخه {absence_days} يومًا خلال السنة الحالية.', when: ['absence_kind', 'intermittent'] },
        { p: 'وننذركم بأنه إذا تجاوز غيابكم دون مبرر مشروع عشرة أيام متتالية، أو عشرين يومًا متقطعة خلال السنة الواحدة، تُعتبرون مستقيلين من العمل وفقًا للمادة (166) من قانون العمل رقم 14 لسنة 2025. لذا يُرجى العودة إلى العمل فورًا وتقديم ما يبرر غيابكم.' },
        { note: 'يُرسل بخطاب موصى عليه بعلم الوصول، بعد غياب خمسة أيام متتالية أو عشرة أيام متقطعة، مع الاحتفاظ بإيصال الإرسال وعلم الوصول.' }, { sign: [['صاحب العمل / من يمثله', 'Employer / representative']] }],
      en: [{ to: 'Mr./Ms. {emp_name_en} — {job_en}\nAddress: {emp_address}' }, { subj: 'Absence Warning Notice' },
        { p: 'You have been absent from work without legitimate excuse since {absence_from}, a total of {absence_days} consecutive days to date.', when: ['absence_kind', 'consecutive'] },
        { p: 'You have been absent from work without legitimate excuse on separate days totalling {absence_days} days so far this year.', when: ['absence_kind', 'intermittent'] },
        { p: 'You are hereby warned that if your absence without legitimate excuse exceeds ten consecutive days, or twenty separate days in one year, you will be considered to have resigned under Article 166 of Labour Law No. 14 of 2025. Please return to work immediately and justify your absence.' },
        { note: 'Send by registered mail with acknowledgement of receipt after five consecutive or ten separate days of absence, and keep the postal receipt.' }, { sign: [['صاحب العمل / من يمثله', 'Employer / representative']] }] },

    /* ===== Performance & Training ===== */
    { id: 'appraisal', cat: 'perf', t: ['تقييم الأداء السنوي', 'Annual Performance Review'], f: ['emp_name', 'job', 'dept', 'manager', 'review_period'],
      ar: [empKV([['manager', 'المقيِّم'], ['review_period', 'فترة التقييم']]),
        { h: 'أولًا: الأهداف' }, { grid: ['الهدف / المؤشر', 'الوزن %', 'المستهدف', 'المحقق', 'التقييم 1–5'], rows: 5 },
        { h: 'ثانيًا: الجدارات' }, { grid: ['الجدارة', 'التقييم 1–5', 'أمثلة سلوكية'], rows: [['الجودة والدقة'], ['التعاون'], ['المبادرة وحل المشكلات'], ['الالتزام والانضباط']] },
        { checksStatic: ['متميز', 'يفوق المتوقع', 'يحقق المتوقع', 'يحتاج تحسين', 'غير مرضٍ'], label: 'التقييم العام' },
        { h: 'أهداف وخطة تطوير الفترة القادمة' }, { lines: 3 }, { h: 'تعليق الموظف' }, { lines: 2 }, sign(['emp', 'mgr', 'hr'])],
      en: [empKV([['manager', 'Reviewer'], ['review_period', 'Review period']]),
        { h: '1. Objectives' }, { grid: ['Objective / KPI', 'Weight %', 'Target', 'Actual', 'Rating 1–5'], rows: 5 },
        { h: '2. Competencies' }, { grid: ['Competency', 'Rating 1–5', 'Behavioural examples'], rows: [['Quality & accuracy'], ['Collaboration'], ['Initiative & problem solving'], ['Commitment & discipline']] },
        { checksStatic: ['Outstanding', 'Exceeds', 'Meets', 'Needs improvement', 'Unsatisfactory'], label: 'Overall rating' },
        { h: 'Goals and development plan for next period' }, { lines: 3 }, { h: 'Employee comments' }, { lines: 2 }, sign(['emp', 'mgr', 'hr'])] },

    { id: 'pip', cat: 'perf', t: ['خطة تحسين الأداء (PIP)', 'Performance Improvement Plan'], f: ['emp_name', 'job', 'dept', 'manager', 'from_date', 'pip_weeks'],
      ar: [empKV([['manager', 'المدير المباشر'], ['from_date', 'تاريخ البدء'], ['pip_weeks', 'مدة الخطة']]),
        { grid: ['مجال التحسين', 'المطلوب تحقيقه (قابل للقياس)', 'الدعم المقدم', 'موعد المراجعة'], rows: 4 },
        { p: 'تهدف هذه الخطة لمساعدة الموظف على الوصول للمستوى المطلوب. وتتم مراجعة التقدم في المواعيد المحددة، وتُوثَّق نتائج كل مراجعة كتابيًا.' }, { h: 'نتيجة الخطة' }, { checksStatic: ['تحقق المطلوب', 'تمديد الخطة', 'لم يتحقق المطلوب'] }, sign(['emp', 'mgr', 'hr'])],
      en: [empKV([['manager', 'Manager'], ['from_date', 'Start date'], ['pip_weeks', 'Duration']]),
        { grid: ['Area to improve', 'Measurable expectation', 'Support provided', 'Review date'], rows: 4 },
        { p: 'This plan aims to help the employee reach the required standard. Progress is reviewed on the dates above, and each review is documented in writing.' }, { h: 'Outcome' }, { checksStatic: ['Expectations met', 'Plan extended', 'Expectations not met'] }, sign(['emp', 'mgr', 'hr'])] },

    { id: 'training', cat: 'perf', t: ['طلب وتقييم تدريب', 'Training Request & Evaluation'], f: ['emp_name', 'job', 'dept', 'course', 'provider', 'from_date', 'to_date', 'cost', 'reason'],
      ar: [empKV(), { kv: [['course', 'البرنامج'], ['provider', 'الجهة المنفذة'], ['from_date', 'من'], ['to_date', 'إلى'], ['cost', 'التكلفة']] }, { p: 'مبررات الاحتياج: {reason}' }, sign(['emp', 'mgr', 'hr']),
        { h: 'تقييم ما بعد التدريب' }, { grid: ['المعيار', '1', '2', '3', '4', '5'], rows: [['ملاءمة المحتوى للعمل'], ['كفاءة المدرب'], ['إمكانية التطبيق'], ['التقييم العام']] }, { p: 'ما سيتم تطبيقه في العمل:' }, { lines: 2 }],
      en: [empKV(), { kv: [['course', 'Course'], ['provider', 'Provider'], ['from_date', 'From'], ['to_date', 'To'], ['cost', 'Cost']] }, { p: 'Business need: {reason}' }, sign(['emp', 'mgr', 'hr']),
        { h: 'Post-training evaluation' }, { grid: ['Criterion', '1', '2', '3', '4', '5'], rows: [['Relevance to the job'], ['Trainer quality'], ['Applicability'], ['Overall']] }, { p: 'What will be applied on the job:' }, { lines: 2 }] },

    /* ===== Separation ===== */
    { id: 'resignation', cat: 'exit', t: ['استقالة', 'Resignation Letter'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (167) الاستقالة وقبولها والعدول عنها.', 'Labour Law No. 14 of 2025: Art. 167 (resignation, acceptance and withdrawal).'],
      f: ['emp_name', 'nid', 'job', 'dept', 'last_day', 'doc_date'],
      ar: [{ to: 'السادة/ {est_name}\nإدارة الموارد البشرية' }, { subj: 'استقالة' }, { p: 'أتقدم أنا {emp_name}، رقم قومي {nid}، الوظيفة {job} بإدارة {dept}، باستقالتي من العمل، على أن يكون آخر يوم عمل لي {last_day}، وألتزم بالاستمرار في العمل حتى البت في الاستقالة، وبتسليم ما بعهدتي وإنهاء إجراءات إخلاء الطرف.' }, { p: 'وتفضلوا بقبول فائق الاحترام،' },
        { sign: [['مقدم الاستقالة', 'Employee'], ['استلام الموارد البشرية (التاريخ)', 'Received by HR (date)']] },
        { h: 'اعتماد الجهة الإدارية المختصة' }, { kv: [['_', 'الجهة'], ['_', 'رقم وتاريخ الاعتماد']] },
        { h: 'قرار صاحب العمل' }, { checksStatic: ['قبول الاستقالة', 'رفض الاستقالة'] }, { kv: [['_', 'تاريخ القرار'], ['_', 'تاريخ إخطار العامل']] },
        { note: 'تُقدَّم الاستقالة كتابة موقعة من العامل أو وكيله الخاص ومعتمدة من الجهة الإدارية المختصة. لا تنتهي الخدمة إلا بقرار قبولها، ويُبت فيها خلال عشرة أيام من تقديمها وإلا اعتُبرت مقبولة، وللعامل العدول عنها كتابةً خلال عشرة أيام من إخطاره بالقبول (م 167).' }],
      en: [{ to: 'To: {est_name_en}\nHuman Resources' }, { subj: 'Resignation' }, { p: 'I, {emp_name_en}, national ID {nid}, {job_en} in the {dept_en} department, hereby resign from my position, with {last_day} as my last working day. I will continue working until a decision is made on my resignation, hand over all items in my custody and complete the clearance process.' }, { p: 'Sincerely,' },
        { sign: [['مقدم الاستقالة', 'Employee'], ['استلام الموارد البشرية (التاريخ)', 'Received by HR (date)']] },
        { h: 'Approval of the competent administrative authority' }, { kv: [['_', 'Authority'], ['_', 'Approval no. and date']] },
        { h: 'Employer decision' }, { checksStatic: ['Resignation accepted', 'Resignation rejected'] }, { kv: [['_', 'Decision date'], ['_', 'Date employee notified']] },
        { note: 'The resignation must be in writing, signed by the employee or a special agent, and approved by the competent administrative authority. Employment ends only by a decision accepting it; it is deemed accepted if not decided within ten days, and the employee may withdraw it in writing within ten days of being notified of acceptance (Art. 167).' }] },

    { id: 'clearance', cat: 'exit', t: ['إخلاء طرف', 'Clearance Form'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (175) رد أوراق العامل وما يفيد إخلاء طرفه عند انتهاء العلاقة.', 'Labour Law No. 14 of 2025: Art. 175 (return of documents and clearance on request).'],
      f: ['emp_name', 'job', 'dept', 'last_day'],
      ar: [empKV([['last_day', 'آخر يوم عمل']]), { grid: ['الجهة', 'البيان', 'لا مانع / عليه', 'الاسم والتوقيع'], rows: [['المدير المباشر', 'تسليم العمل والملفات'], ['تقنية المعلومات', 'الأجهزة والحسابات وكلمات المرور'], ['الشؤون الإدارية', 'الكارنيه، المفاتيح، العُهد'], ['الإدارة المالية', 'السلف والعُهد النقدية'], ['المخازن', 'الأدوات والمهمات'], ['الموارد البشرية', 'الإجازات والجزاءات والتأمينات']] },
        { kv: [['_', 'تم رد أوراق ومستندات الموظف بتاريخ']] }, sign(['emp', 'hr'])],
      en: [empKV([['last_day', 'Last working day']]), { grid: ['Department', 'Item', 'Clear / Owed', 'Name & signature'], rows: [['Direct manager', 'Work and files handover'], ['IT', 'Devices, accounts, passwords'], ['Administration', 'ID card, keys, custody'], ['Finance', 'Advances and cash custody'], ['Stores', 'Tools and equipment'], ['HR', 'Leave, penalties, insurance']] },
        { kv: [['_', 'Employee documents returned on']] }, sign(['emp', 'hr'])] },

    { id: 'exit_interview', cat: 'exit', t: ['مقابلة خروج', 'Exit Interview'], f: ['emp_name', 'job', 'dept', 'hire_date', 'last_day'],
      ar: [empKV([['hire_date', 'تاريخ التعيين'], ['last_day', 'آخر يوم عمل']]), { checksStatic: ['فرصة أفضل', 'الأجر والمزايا', 'العلاقة مع المدير', 'بيئة العمل', 'فرص النمو', 'ظروف شخصية', 'أخرى'], label: 'سبب ترك العمل' },
        { p: 'ما الذي أعجبك في العمل لدينا؟' }, { lines: 2 }, { p: 'ما الذي كان يجب تحسينه؟' }, { lines: 2 }, { p: 'هل تنصح غيرك بالعمل لدينا؟ ولماذا؟' }, { lines: 2 }, sign(['emp', 'hr'])],
      en: [empKV([['hire_date', 'Hire date'], ['last_day', 'Last working day']]), { checksStatic: ['Better opportunity', 'Pay & benefits', 'Relationship with manager', 'Work environment', 'Growth', 'Personal reasons', 'Other'], label: 'Reason for leaving' },
        { p: 'What did you like about working here?' }, { lines: 2 }, { p: 'What should we improve?' }, { lines: 2 }, { p: 'Would you recommend us as an employer? Why?' }, { lines: 2 }, sign(['emp', 'hr'])] },

    { id: 'settlement', cat: 'exit', t: ['مخالصة نهائية', 'Final Settlement Receipt'],
      ref: ['قانون العمل رقم 14 لسنة 2025: م (6) بطلان الإبراء من حقوق العامل خلال سريان العقد أو خلال ثلاثة أشهر من انتهائه.', 'Labour Law No. 14 of 2025: Art. 6 (waivers during the contract or within three months after it ends are void).'],
      f: ['emp_name', 'nid', 'job', 'hire_date', 'end_service', 'settle_items', 'settle_amount', 'settle_waiver', 'doc_date'],
      ar: [{ p: 'أقر أنا {emp_name}، رقم قومي {nid}، والذي كنت أعمل لدى {est_name} بوظيفة {job} في الفترة من {hire_date} حتى {end_service}، بأنني قد استلمت مبلغًا إجماليًا قدره {settle_amount}، وذلك قيمة:' }, { p: '{settle_items}', box: true },
        { p: 'وذلك عن المستحقات المبينة أعلاه.' }, { p: 'وبذلك أكون قد استلمت كافة مستحقاتي لدى الشركة عن مدة خدمتي، وليس لي أي مستحقات أخرى قِبَلها.', when: ['settle_waiver', 'yes'] }, { kv: [['doc_date', 'التاريخ']] }, sign(['emp', 'hr', 'fin'])],
      en: [{ p: 'I, {emp_name_en}, national ID {nid}, formerly employed by {est_name_en} as {job_en} from {hire_date} to {end_service}, confirm that I have received a total of {settle_amount}, being:' }, { p: '{settle_items}', box: true },
        { p: 'in respect of the dues listed above.' }, { p: 'I confirm that I have received all my dues from the company for my period of service and have no further claims against it.', when: ['settle_waiver', 'yes'] }, { kv: [['doc_date', 'Date']] }, sign(['emp', 'hr', 'fin'])] },

    /* ===== Letters & certificates ===== */
    { id: 'hr_letter', cat: 'letters', t: ['خطاب لمن يهمه الأمر (HR Letter)', 'To Whom It May Concern'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (175) حق العامل في شهادة دون مقابل أثناء سريان العقد.', 'Labour Law No. 14 of 2025: Art. 175 (free certificate during employment).'],
      f: ['emp_name', 'nid', 'job', 'hire_date', 'show_salary', 'salary_gross', 'doc_date', 'ref_no'],
      ar: [{ to: 'إلى من يهمه الأمر' }, { p: 'تشهد {est_name} بأن السيد/ة {emp_name}، رقم قومي {nid}، يعمل لديها بوظيفة {job} اعتبارًا من {hire_date} وحتى تاريخه.' }, { p: 'ويتقاضى أجرًا شهريًا إجماليًا قدره {salary_gross}.', when: ['show_salary', 'yes'] },
        { p: 'وقد أُعطي هذا الخطاب بناءً على طلبه دون أدنى مسؤولية على الشركة تجاه الغير.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }],
      en: [{ to: 'To Whom It May Concern' }, { p: 'This is to certify that Mr./Ms. {emp_name_en}, national ID {nid}, has been employed by {est_name_en} as {job_en} since {hire_date} and is still in service.' }, { p: 'His/her gross monthly salary is {salary_gross}.', when: ['show_salary', 'yes'] },
        { p: 'This letter is issued at the employee’s request without any liability on the company towards third parties.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }] },

    { id: 'salary_cert', cat: 'letters', t: ['شهادة مفردات مرتب', 'Salary Certificate'], letter: true, f: ['emp_name', 'nid', 'job', 'hire_date', 'salary_basic', 'allowances', 'salary_gross', 'addressee', 'doc_date', 'ref_no'],
      ar: [{ to: 'السادة/ {addressee}' }, { subj: 'شهادة مفردات مرتب' }, { p: 'تشهد {est_name} بأن السيد/ة {emp_name}، رقم قومي {nid}، يعمل لديها بوظيفة {job} منذ {hire_date}، ومفردات أجره الشهري كالتالي:' },
        { kv: [['salary_basic', 'الأجر الأساسي'], ['allowances', 'البدلات'], ['salary_gross', 'الإجمالي']] }, { p: 'وقد أُعطيت هذه الشهادة بناءً على طلبه لتقديمها إلى الجهة المذكورة.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }],
      en: [{ to: 'To: {addressee}' }, { subj: 'Salary Certificate' }, { p: 'This is to certify that Mr./Ms. {emp_name_en}, national ID {nid}, has been employed by {est_name_en} as {job_en} since {hire_date}. The monthly salary details are:' },
        { kv: [['salary_basic', 'Basic salary'], ['allowances', 'Allowances'], ['salary_gross', 'Gross total']] }, { p: 'This certificate is issued at the employee’s request for submission to the above party.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }] },

    { id: 'bank_letter', cat: 'letters', t: ['خطاب موجَّه لبنك', 'Bank Letter'], letter: true, f: ['emp_name', 'nid', 'job', 'hire_date', 'salary_gross', 'bank_name', 'bank_branch', 'bank_purpose', 'account_no', 'doc_date', 'ref_no'],
      ar: [{ to: 'السادة/ {bank_name} — فرع {bank_branch}' }, { subj: 'تعريف بالأجر' }, { p: 'تحية طيبة وبعد،' }, { p: 'تشهد {est_name} بأن السيد/ة {emp_name}، رقم قومي {nid}، يعمل لديها بوظيفة {job} اعتبارًا من {hire_date}، ويتقاضى أجرًا شهريًا إجماليًا قدره {salary_gross}، يُحوَّل على الحساب رقم {account_no} لدى بنككم.' },
        { checks: 'bank_purpose', label: 'الغرض' }, { p: 'وقد أُعطي هذا الخطاب بناءً على طلبه دون أدنى مسؤولية على الشركة.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }],
      en: [{ to: 'To: {bank_name} — {bank_branch} Branch' }, { subj: 'Salary Confirmation' }, { p: 'Dear Sir/Madam,' }, { p: 'This is to certify that Mr./Ms. {emp_name_en}, national ID {nid}, has been employed by {est_name_en} as {job_en} since {hire_date}, with a gross monthly salary of {salary_gross} transferred to account no. {account_no} at your bank.' },
        { checks: 'bank_purpose', label: 'Purpose' }, { p: 'This letter is issued at the employee’s request without any liability on the company.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }] },

    { id: 'embassy_letter', cat: 'letters', t: ['خطاب لسفارة (تأشيرة)', 'Embassy Letter (Visa)'], letter: true, f: ['emp_name', 'emp_name_en', 'nid', 'job', 'hire_date', 'salary_gross', 'embassy', 'travel_from', 'travel_to', 'doc_date', 'ref_no'],
      ar: [{ to: 'السادة/ {embassy}' }, { subj: 'خطاب تعريف لغرض التأشيرة' }, { p: 'تشهد {est_name} بأن السيد/ة {emp_name}، رقم قومي {nid}، يعمل لديها بوظيفة {job} منذ {hire_date}، ويتقاضى أجرًا شهريًا إجماليًا قدره {salary_gross}.' },
        { p: 'وقد وافقت الشركة على منحه إجازة في الفترة من {travel_from} حتى {travel_to}، وسيعود لاستئناف عمله فور انتهائها.' }, { p: 'وقد أُعطي هذا الخطاب بناءً على طلبه.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }],
      en: [{ to: 'To: {embassy}' }, { subj: 'Employment Letter for Visa Purposes' }, { p: 'This is to certify that Mr./Ms. {emp_name_en}, national ID {nid}, has been employed by {est_name_en} as {job_en} since {hire_date}, with a gross monthly salary of {salary_gross}.' },
        { p: 'The company has approved his/her leave from {travel_from} to {travel_to}, and he/she will resume work immediately afterwards.' }, { p: 'This letter is issued at the employee’s request.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }] },

    { id: 'experience_cert', cat: 'letters', t: ['شهادة خبرة / نهاية خدمة', 'Service Certificate'], letter: true,
      ref: ['قانون العمل رقم 14 لسنة 2025: م (175) شهادة نهاية الخدمة خلال خمسة عشر يومًا من طلبها ودون مقابل.', 'Labour Law No. 14 of 2025: Art. 175 (service certificate within fifteen days of request, free of charge).'],
      f: ['emp_name', 'nid', 'job', 'hire_date', 'end_service', 'benefits', 'show_salary', 'salary_gross', 'end_reason', 'doc_date', 'ref_no'],
      ar: [{ to: 'إلى من يهمه الأمر' }, { p: 'تشهد {est_name} بأن السيد/ة {emp_name}، رقم قومي {nid}، قد عمل لديها بوظيفة {job} في الفترة من {hire_date} حتى {end_service}.' },
        { p: 'وكان يحصل على المزايا التالية: {benefits}' },
        { p: 'وكان آخر أجر شهري إجمالي يتقاضاه {salary_gross}، وسبب انتهاء علاقة العمل: {end_reason}.', when: ['show_salary', 'yes'] },
        { p: 'وقد أُعطيت هذه الشهادة بناءً على طلبه ودون مقابل، وفقًا للمادة (175) من قانون العمل.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }],
      en: [{ to: 'To Whom It May Concern' }, { p: 'This is to certify that Mr./Ms. {emp_name_en}, national ID {nid}, worked for {est_name_en} as {job_en} from {hire_date} to {end_service}.' },
        { p: 'Benefits received: {benefits}' },
        { p: 'The last gross monthly salary was {salary_gross}, and the reason for ending employment was: {end_reason}.', when: ['show_salary', 'yes'] },
        { p: 'This certificate is issued at the employee’s request free of charge, under Article 175 of the Labour Law.' }, { sign: [['الموارد البشرية', 'Human Resources']], stamp: true }] },

    { id: 'general_letter', cat: 'letters', t: ['خطاب لجهة رسمية', 'Letter to an Authority'], letter: true, f: ['addressee', 'subject', 'body', 'doc_date', 'ref_no'],
      ar: [{ to: 'السادة/ {addressee}' }, { subj: '{subject}' }, { p: 'تحية طيبة وبعد،' }, { p: '{body}' }, { p: 'وتفضلوا بقبول فائق الاحترام،' }, { sign: [['{applicant_role}', '{signatory_role_en}']], stamp: true, named: true }],
      en: [{ to: 'To: {addressee}' }, { subj: '{subject}' }, { p: 'Dear Sir/Madam,' }, { p: '{body}' }, { p: 'Yours sincerely,' }, { sign: [['{applicant_role}', '{signatory_role_en}']], stamp: true, named: true }] }
  ];

  g.MHHForms = { FD: FD, FORMS: FORMS, CATS: C };
})(window);
