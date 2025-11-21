export default function Blog() {
  const posts = [
    { title: 'איך AI משפר ניהול לידים בעסק', excerpt: 'מענה מהיר, סיווג חכם והעברת מידע בלי ידיים – כך נראית מערכת שמחברת בין כל הנקודות.' },
    { title: 'אוטומציות שעובדות באמת', excerpt: 'למה אוטומציה נכונה היא פשוטה להבנה ותלויה במדדים ברורים.' },
    { title: 'שירות לקוחות חכם בוואטסאפ', excerpt: 'ניהול שיחות, תגים והעברה לצוות – בלי לאבד אף לקוח בדרך.' },
    { title: 'בחירת CRM שמתאים לעסק שלך', excerpt: 'שליטה, שקיפות והטמעה נכונה שעובדת עם הצוות – לא נגדו.' },
  ]

  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white">בלוג</h1>
        <p className="mt-4 text-blue-200/90">תוכן קצר, ממוקד ופרקטי על AI, אוטומציה וניהול תהליכים.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-blue-100/90">{p.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
