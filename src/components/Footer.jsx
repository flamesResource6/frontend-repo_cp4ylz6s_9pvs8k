export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-right" dir="rtl">
        <div>
          <h4 className="text-white font-semibold mb-2">סוכני AI חכמים לעסקים</h4>
          <p className="text-blue-200/80 text-sm leading-7">
            בניית סוכני AI מותאמים אישית שמנהלים לידים, שיחות, תיאומים ושירות – כדי להחזיר לך זמן, שליטה ושקט.
          </p>
        </div>
        <div>
          <h5 className="text-white/90 font-medium mb-3">ניווט מהיר</h5>
          <ul className="space-y-2 text-blue-200/80 text-sm">
            <li>בית</li>
            <li>שירותים</li>
            <li>איך זה עובד</li>
            <li>סיפורי לקוח</li>
            <li>אודות</li>
            <li>בלוג</li>
            <li>צור קשר</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/90 font-medium mb-3">יצירת קשר</h5>
          <p className="text-blue-200/80 text-sm leading-7">
            ליצירת שיחת ייעוץ והדגמה אישית – שלחו הודעה בווטסאפ או השאירו פרטים בטופס. פרטיותכם נשמרת.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-blue-200/60 py-4">
        © כל הזכויות שמורות. נבנה באהבה עם טכנולוגיות מתקדמות.
      </div>
    </footer>
  )
}
