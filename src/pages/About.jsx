export default function About() {
  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white">אודות</h1>
        <p className="mt-4 text-blue-200/90 max-w-3xl">
          אני נדב. בעשור האחרון אני בונה מערכות דיגיטל, אוטומציות ו־AI לעסקים – תמיד עם מטרה אחת: לפשט מורכבות ולהחזיר שליטה. אחרי מאות תהליכים, למדתי שמה שמנצח הוא פתרון חכם, ברור ועקבי שמדבר בשפה של העסק.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <p className="text-blue-100/90">[תמונה של נדב – צילום פורטרט מקצועי]</p>
          <p className="text-blue-100/90">[תמונה של נדב – מדבר עם לקוח]</p>
          <p className="text-blue-100/90">[תמונה של נדב – עובד מול מחשב עם מסכים]</p>
        </div>
        <div className="space-y-4 text-blue-100/90">
          <p>
            התחלתי עם מערכות מורכבות ומפוזרות, והבנתי שעסקים צריכים מוח דיגיטלי אחד שמקשר בין הכל: וואטסאפ, CRM, אתר, טפסים ושיחות.
          </p>
          <p>
            היום אני בונה סוכני AI שעובדים בשבילך גם כשאתה נח – עונים, מתאמים, מתעדים ומקדמים את העסק קדימה.
          </p>
          <p className="text-white font-semibold">אני כאן כדי לתת לעסק שלך מוח דיגיטלי שעובד בשבילך גם כשאתה נח.</p>
        </div>
      </section>
    </main>
  )
}
