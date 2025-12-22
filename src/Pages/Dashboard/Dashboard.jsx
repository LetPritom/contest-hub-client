import React from "react";



const Dashboard = () => {


  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b0f1a] via-[#0c1022] to-[#11152a] text-white">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Top navbar */}
      {/* <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-linear-to-br from-yellow-400 to-amber-600 shadow-lg ring-1 ring-white/20" />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Contest Hub
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-4 py-2 rounded-lg bg-linear-to-r from-yellow-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-yellow-500/40 transition">
              New contest
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 transition" aria-label="Notifications">
                🔔
              </button>
              <img
                className="h-9 w-9 rounded-full ring-2 ring-white/20 object-cover"
                src={user.photoURL}
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </header> */}

      {/* Layout: sidebar + content */}
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-16 h-max">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-3">Navigation</p>
            <nav className="space-y-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition" href="#">
                <span>🏠</span>
                <span className="font-medium">Overview</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" href="#">
                <span>📦</span>
                <span className="font-medium">Contests</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" href="#">
                <span>🏆</span>
                <span className="font-medium">Leaderboard</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" href="#">
                <span>👥</span>
                <span className="font-medium">Participants</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" href="#">
                <span>⚙️</span>
                <span className="font-medium">Settings</span>
              </a>
            </nav>
          </div>

          <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-3">Quick actions</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-3 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 font-semibold shadow-lg hover:shadow-purple-500/40 transition">
                Create
              </button>
              <button className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition">
                Export
              </button>
              <button className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition">
                Invite
              </button>
              <button className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition">
                Help
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="space-y-6">
          {/* KPI cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-yellow-500/20 blur-2xl" />
              <p className="text-sm text-white/70">Active contests</p>
              <h3 className="mt-2 text-3xl font-extrabold">12</h3>
              <p className="mt-1 text-xs text-emerald-400">+3 this week</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
              <p className="text-sm text-white/70">Participants</p>
              <h3 className="mt-2 text-3xl font-extrabold">1,248</h3>
              <p className="mt-1 text-xs text-emerald-400">+8% MoM</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl" />
              <p className="text-sm text-white/70">Submissions</p>
              <h3 className="mt-2 text-3xl font-extrabold">3,560</h3>
              <p className="mt-1 text-xs text-emerald-400">+220 today</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-pink-500/20 blur-2xl" />
              <p className="text-sm text-white/70">Prize pool</p>
              <h3 className="mt-2 text-3xl font-extrabold">$ 12,400</h3>
              <p className="mt-1 text-xs text-yellow-400">Next payout in 3 days</p>
            </div>
          </section>

          {/* Charts row (placeholders) */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Submissions trend</h3>
                <button className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs hover:bg-white/15 transition">
                  Last 30 days
                </button>
              </div>
              <div className="mt-5 h-56 rounded-xl bg-linear-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/50">
                <span>Chart placeholder</span>
              </div>
            </div>

            <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-bold">Win rate by category</h3>
              <div className="mt-5 space-y-4">
                {[
                  { label: "Algorithms", value: 72, color: "bg-emerald-500" },
                  { label: "Web design", value: 58, color: "bg-yellow-500" },
                  { label: "Data structures", value: 64, color: "bg-purple-500" },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{b.label}</span>
                      <span className="text-white/60">{b.value}%</span>
                    </div>
                    <div className="mt-2 h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full ${b.color}`}
                        style={{ width: `${b.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leaderboard + recent activity */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Leaderboard */}
            <div className="xl:col-span-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Top leaders</h3>
                <button className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs hover:bg-white/15 transition">
                  View all
                </button>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-white/60">
                      <th className="py-3 pr-3">Rank</th>
                      <th className="py-3 pr-3">Name</th>
                      <th className="py-3 pr-3">Wins</th>
                      <th className="py-3 pr-3">Prize</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      { name: "Pritom Roy", wins: 10, prize: 800 },
                      { name: "Zia Yun", wins: 8, prize: 600 },
                      { name: "Somir Khan", wins: 7, prize: 500 },
                      { name: "Lay", wins: 5, prize: 300 },
                    ].map((row, i) => (
                      <tr key={row.name} className="hover:bg-white/5 transition">
                        <td className="py-3 pr-3">
                          <span className="inline-flex items-center gap-2">
                            {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                            <span className="px-2 py-0.5 rounded-md bg-yellow-500/20 text-yellow-300 text-[11px] border border-yellow-500/30">
                              {i === 0 ? "Champion" : "Rank " + (i + 1)}
                            </span>
                          </span>
                        </td>
                        <td className="py-3 pr-3">{row.name}</td>
                        <td className="py-3 pr-3">{row.wins}</td>
                        <td className="py-3 pr-3">$ {row.prize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent activity */}
            <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-bold">Recent activity</h3>
              <ul className="mt-4 space-y-4">
                {[
                  { t: "Somir submitted design for Web Sprint", time: "2h ago" },
                  { t: "Pritom won Algo Arena", time: "6h ago" },
                  { t: "Lay joined GameLab Jam", time: "1d ago" },
                ].map((a, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-sm">{a.t}</p>
                      <p className="text-xs text-white/60">{a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition">
                See all activity
              </button>
            </div>
          </section>

          {/* CTA panel */}
          <section className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Launch a new contest</h3>
              <p className="text-sm text-white/70">Set theme, prize pool, and schedule in minutes.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-linear-to-r from-yellow-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-yellow-500/40 transition">
                Create contest
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition">
                Learn more
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-white/10 backdrop-blur-xl bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60">© 2025 Contest Hub</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
