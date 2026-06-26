"use client";

import { useMemo, useState, type ReactNode } from "react";

type NavKey = "dashboard" | "trades" | "analytics" | "settings";
type ViewKey = NavKey | "newTrade";

type IconName =
  | "analytics"
  | "bell"
  | "calendar"
  | "check"
  | "chevron"
  | "dashboard"
  | "download"
  | "file"
  | "filter"
  | "history"
  | "plusBox"
  | "search"
  | "settings"
  | "trades"
  | "user";

const navItems: { key: NavKey; label: string; icon: IconName }[] = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard" },
  { key: "trades", label: "Trades", icon: "trades" },
  { key: "analytics", label: "Analytics", icon: "analytics" },
  { key: "settings", label: "Settings", icon: "settings" },
];

const metricCards = [
  {
    label: "Total Portfolio Value",
    value: "$1,248,590.42",
    detail: "+2.4% today",
    tone: "positive",
  },
  {
    label: "Cash Balance",
    value: "$142,305.18",
    detail: "11.4% of total capital",
    tone: "neutral",
  },
  {
    label: "Realized P&L (MTD)",
    value: "+$24,190.00",
    detail: "Cleared profits",
    tone: "positive",
  },
  {
    label: "Unrealized P&L",
    value: "-$8,422.33",
    detail: "-0.67% floating",
    tone: "negative",
  },
];

const positions = [
  ["AAPL", "Apple Inc.", "Stock", "450.00", "$228.12", "$102,654.00", "+18.4%"],
  ["BTC", "Bitcoin", "Crypto", "1.42", "$64,210.80", "$91,179.33", "+42.1%"],
  ["VOO", "Vanguard S&P 500", "ETF", "180.00", "$498.42", "$89,715.60", "+6.2%"],
  ["TSLA", "Tesla Inc.", "Stock", "300.00", "$242.84", "$72,852.00", "-12.4%"],
  ["ETH", "Ethereum", "Crypto", "15.00", "$2,410.50", "$36,157.50", "-4.2%"],
];

const tradeRows = [
  ["2023-11-24\n09:32:15", "AAPL", "Equity", "Buy", "500.00", "$191.45", "-$4.75", "$95,729.75", "-"],
  ["2023-11-23\n15:45:02", "BTC/USD", "Crypto", "Sell", "1.2450", "$37,420.10", "-$18.20", "$46,569.82", "+$2,450.12"],
  ["2023-11-22\n10:11:44", "TSLA", "Equity", "Short", "1,200.00", "$234.30", "-$12.40", "$281,147.60", "-"],
  ["2023-11-22\n09:15:00", "NVDA", "Equity", "Cover", "250.00", "$487.16", "-$5.10", "$121,795.10", "-$1,120.45"],
  ["2023-11-21\n16:30:11", "GC.F", "Fixed Income", "Buy", "10.00", "$1,992.50", "-$25.00", "$19,950.00", "-"],
  ["2023-11-21\n14:12:05", "MSFT", "Equity", "Sell", "800.00", "$377.44", "-$7.20", "$301,944.80", "+$8,920.00"],
  ["2023-11-21\n09:30:01", "AMZN", "Equity", "Buy", "1,500.00", "$146.74", "-$14.50", "$220,124.50", "-"],
  ["2023-11-20\n16:15:33", "ETH/USD", "Crypto", "Buy", "12.0000", "$2,060.15", "-$4.20", "$24,726.00", "-"],
];

const strategyRows = [
  ["Trend Following", "42", "+$18,240", "72%"],
  ["Mean Reversion", "28", "+$5,110", "58%"],
  ["Breakout High", "15", "-$2,400", "34%"],
  ["Options Spread", "31", "+$9,820", "61%"],
];

const transactionTypes = ["Buy", "Sell", "Short", "Cover"];

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    analytics: (
      <>
        <path d="m4 16 4-4 3 3 6-8 3 3" />
        <path d="M7 7h.01M12 6h.01M18 17h.01" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4M16 2v4M3 10h18" />
        <path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      </>
    ),
    check: (
      <>
        <path d="M9 12.5 11.2 15 16 9" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    dashboard: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </>
    ),
    filter: <path d="M4 5h16M7 12h10M10 19h4" />,
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 3v6h6M12 7v5l3 2" />
      </>
    ),
    plusBox: (
      <>
        <path d="M12 8v8M8 12h8" />
        <path d="M4 4h16v16H4z" />
      </>
    ),
    search: (
      <>
        <path d="m21 21-4.3-4.3" />
        <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      </>
    ),
    settings: (
      <>
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" />
        <path d="m19.4 15 .6 1.1-2 3.4-1.3-.1a8 8 0 0 1-1.8 1l-.7 1.1h-4l-.7-1.1a8 8 0 0 1-1.8-1l-1.3.1-2-3.4.6-1.1a8.8 8.8 0 0 1 0-2l-.6-1.1 2-3.4 1.3.1a8 8 0 0 1 1.8-1l.7-1.1h4l.7 1.1a8 8 0 0 1 1.8 1l1.3-.1 2 3.4-.6 1.1a8.8 8.8 0 0 1 0 2Z" />
      </>
    ),
    trades: (
      <>
        <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
        <path d="M8 8h2M13 8h3M8 12h2M13 12h3M8 16h2M13 16h3" />
      </>
    ),
    user: (
      <>
        <path d="M20 21a8 8 0 1 0-16 0" />
        <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function IconButton({ label, icon }: { label: string; icon: IconName }) {
  return (
    <button className="icon-button" type="button" aria-label={label} title={label}>
      <Icon name={icon} className="h-5 w-5" />
    </button>
  );
}

function SearchBox({ placeholder, wide = false }: { placeholder: string; wide?: boolean }) {
  return (
    <label className={`search-box ${wide ? "search-box-wide" : ""}`}>
      <Icon name="search" className="h-[18px] w-[18px]" />
      <input placeholder={placeholder} aria-label={placeholder} />
    </label>
  );
}

function AppShell() {
  const [activeView, setActiveView] = useState<ViewKey>("dashboard");
  const title = useMemo(
    () =>
      activeView === "dashboard"
        ? ""
        : activeView === "trades"
          ? ""
          : activeView === "newTrade"
          ? "Add New Position"
          : activeView === "analytics"
            ? "Analytics"
            : "Settings",
    [activeView],
  );

  return (
    <main className="min-h-screen bg-[#fbf7f8] text-[#171516]">
      <aside className="side-rail">
        <div className="px-6 pb-10 pt-7">
          <h1 className="text-[26px] font-extrabold leading-none">TradeTrack Pro</h1>
          <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#464146]">
            Institutional Grade
          </p>
        </div>

        <nav aria-label="Primary" className="space-y-1 px-4">
          {navItems.map((item) => (
            <button
              className={`nav-item ${isNavActive(activeView, item.key) ? "is-active" : ""}`}
              type="button"
              key={item.key}
              onClick={() => setActiveView(item.key)}
            >
              <Icon name={item.icon} className="h-[22px] w-[22px]" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto px-4 pb-10">
          <button className="new-trade-button" type="button" onClick={() => setActiveView("newTrade")}>
            New Trade
          </button>
          <div className="mt-8 h-10 w-10 rounded-xl bg-[#c8ddfb]" />
        </div>
      </aside>

      <section className="min-h-screen lg:pl-64">
        <header className="top-bar">
          {title ? <h2 className="page-title">{title}</h2> : <SearchBox placeholder="Search symbols, indices, or tags..." wide />}
          {title ? <SearchBox placeholder={activeView === "analytics" ? "Search assets or strategies..." : "Search markets..."} /> : null}
          <div className="ml-auto flex items-center gap-4">
            <IconButton label="Notifications" icon="bell" />
            <IconButton label="Account" icon="user" />
          </div>
        </header>

        <div className="page-content">
          {activeView === "dashboard" ? <DashboardView /> : null}
          {activeView === "trades" ? <TradeLogView /> : null}
          {activeView === "newTrade" ? <TradesView /> : null}
          {activeView === "analytics" ? <AnalyticsView /> : null}
          {activeView === "settings" ? <SettingsView /> : null}
        </div>
      </section>

      <nav className="bottom-nav" aria-label="Mobile primary navigation">
        {navItems.slice(0, 3).map((item) => (
          <button
            className={isNavActive(activeView, item.key) ? "is-active" : ""}
            key={item.key}
            onClick={() => setActiveView(item.key)}
            type="button"
          >
            <Icon name={item.icon} className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}

function isNavActive(activeView: ViewKey, navKey: NavKey) {
  return activeView === navKey || (navKey === "trades" && activeView === "newTrade");
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <section className="metric-grid">
        {metricCards.map((card) => (
          <article className="panel metric-card" key={card.label}>
            <p className="eyebrow">{card.label}</p>
            <strong className={`metric-value ${card.tone}`}>{card.value}</strong>
            <span className={`metric-detail ${card.tone}`}>{card.detail}</span>
          </article>
        ))}
      </section>

      <section className="grid gap-3 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <article className="panel chart-panel min-h-[482px]">
          <div className="section-head">
            <h2>Performance Growth</h2>
            <div className="range-tabs">
              <button type="button" className="is-muted">1M</button>
              <button type="button">3M</button>
              <button type="button">1Y</button>
            </div>
          </div>
          <GrowthChart />
        </article>
        <article className="panel p-6">
          <h2 className="section-title">Allocation Breakdown</h2>
          <AllocationBars
            items={[
              ["Stocks", "54.2%", "bg-black"],
              ["ETFs", "21.8%", "bg-[#55667f]"],
              ["Crypto", "15.5%", "bg-[#35d596]"],
              ["Options", "8.5%", "bg-[#bfc8de]"],
            ]}
          />
          <Donut />
        </article>
      </section>

      <section className="panel overflow-hidden">
        <div className="section-head border-b border-[#d7d2d5] px-6 py-5">
          <h2>Top Positions</h2>
          <button className="link-button" type="button">View Full Portfolio {">"}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Asset Class</th>
                <th className="num">Quantity</th>
                <th className="num">Price</th>
                <th className="num">Market Value</th>
                <th className="num">P&L (%)</th>
              </tr>
            </thead>
            <tbody>
              {positions.map(([symbol, name, assetClass, quantity, price, value, pnl]) => (
                <tr key={symbol}>
                  <td>
                    <div className="symbol-cell">
                      <span className={`ticker-logo ${symbol.toLowerCase()}`}>{symbol}</span>
                      <strong>{name}</strong>
                    </div>
                  </td>
                  <td><span className="chip">{assetClass}</span></td>
                  <td className="num">{quantity}</td>
                  <td className="num">{price}</td>
                  <td className="num font-extrabold">{value}</td>
                  <td className={`num font-bold ${pnl.startsWith("-") ? "text-[#e24b60]" : "text-[#10a978]"}`}>{pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function TradesView() {
  return (
    <div className="mx-auto max-w-[672px] space-y-7">
      <section className="panel shadow-[0_16px_28px_rgba(27,23,25,0.10)]">
        <div className="section-head border-b border-[#d2cdd0] bg-[#f7f3f4] px-6 py-4">
          <div className="flex items-center gap-3">
            <Icon name="plusBox" className="h-5 w-5" />
            <h2>Trade Entry</h2>
          </div>
          <p className="font-mono text-xs tracking-[0.16em] text-[#676168]">ID: TRD-0042-X</p>
        </div>

        <form className="space-y-7 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="field">
              <span>Asset Type</span>
              <div className="input-shell">
                <select defaultValue="Stock" aria-label="Asset type">
                  <option>Stock</option>
                  <option>ETF</option>
                  <option>Option</option>
                  <option>Crypto</option>
                </select>
                <Icon name="chevron" className="h-4 w-4 shrink-0 text-[#5f5a60]" />
              </div>
            </label>
            <label className="field">
              <span>Ticker / Symbol</span>
              <div className="input-shell">
                <input defaultValue="e.g.  NVDA" aria-label="Ticker or symbol" />
                <strong className="market-badge">NASDAQ</strong>
              </div>
            </label>
          </div>

          <fieldset className="field">
            <legend>Transaction Type</legend>
            <div className="segmented">
              {transactionTypes.map((type) => (
                <label key={type}>
                  <input type="radio" name="transactionType" defaultChecked={type === "Buy"} />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Execution Date &amp; Time</span>
            <div className="input-shell">
              <input defaultValue="11/20/2023 09:30 AM" aria-label="Execution date and time" />
              <Icon name="calendar" className="h-5 w-5 shrink-0 text-[#555156]" />
            </div>
          </label>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["Quantity", "0", ""],
              ["Price", "0.00", "$"],
              ["Fees / Commission", "4.95", "$"],
            ].map(([label, value, prefix]) => (
              <label className="field" key={label}>
                <span>{label}</span>
                <div className="input-shell">
                  {prefix ? <b>{prefix}</b> : null}
                  <input className="text-right" defaultValue={value} aria-label={label} />
                </div>
              </label>
            ))}
          </div>

          <div className="notice">
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-current text-xs font-black">i</span>
            <div>
              <p className="font-extrabold">Estimated Total Cost: $0.00</p>
              <p>Funds will be locked upon trade execution. Settlement period: T+2.</p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-9 pt-2">
            <button className="plain-button" type="button">Cancel</button>
            <button className="primary-button" type="submit">
              <Icon name="check" className="h-5 w-5" />
              Add Trade
            </button>
          </div>
        </form>
      </section>

      <section>
        <h3 className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#7e787f]">Recent Trades</h3>
        <article className="panel flex items-center justify-between px-3 py-3">
          <div className="flex min-w-0 items-center gap-4">
            <span className="ticker-logo aapl">AAPL</span>
            <div className="min-w-0">
              <p className="truncate text-base font-medium">10 Shares @ $189.24</p>
              <p className="mt-1 text-[11px] text-[#6f6970]">Nov 19, 2023 • 14:22</p>
            </div>
          </div>
          <span className="status-success">Success</span>
        </article>
      </section>
    </div>
  );
}

function TradeLogView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-extrabold">Historical Trade Log</h2>
          <p className="text-sm text-[#5c575d]">Audit-ready comprehensive transaction history</p>
        </div>
        <div className="flex gap-2">
          <button className="ghost-button" type="button"><Icon name="download" className="h-4 w-4" />Export PDF</button>
          <button className="ghost-button" type="button"><Icon name="file" className="h-4 w-4" />Export CSV</button>
        </div>
      </div>

      <section className="panel p-4">
        <div className="filter-grid">
          <label className="field">
            <span>Asset Type</span>
            <div className="input-shell"><select defaultValue="All Assets" aria-label="Asset type"><option>All Assets</option></select><Icon name="chevron" className="h-4 w-4" /></div>
          </label>
          <label className="field"><span>Date Range</span><div className="input-shell"><input defaultValue="mm/dd/yyyy" aria-label="Start date" /><Icon name="calendar" className="h-4 w-4" /></div></label>
          <span className="hidden self-end pb-3 text-[#9b959b] md:block">to</span>
          <label className="field"><span>&nbsp;</span><div className="input-shell"><input defaultValue="mm/dd/yyyy" aria-label="End date" /></div></label>
          <label className="field"><span>Ticker</span><div className="input-shell"><input defaultValue="e.g. AAPL" aria-label="Ticker" /></div></label>
          <button className="primary-button self-end justify-center" type="button">Apply Filters</button>
        </div>
      </section>

      <section className="panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table trade-log">
            <thead>
              <tr>
                {["Execution Date", "Ticker", "Asset Type", "Side", "Quantity", "Price", "Fees", "Total Amount", "P&L"].map((heading) => (
                  <th className={["Quantity", "Price", "Fees", "Total Amount", "P&L"].includes(heading) ? "num" : ""} key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tradeRows.map(([date, ticker, assetClass, side, quantity, price, fees, total, pnl]) => (
                <tr key={`${date}-${ticker}`}>
                  <td>{date.split("\n").map((part) => <span className="block" key={part}>{part}</span>)}</td>
                  <td><span className={`dot ${ticker.split("/")[0].toLowerCase()}`} /> <strong>{ticker}</strong></td>
                  <td><span className="chip">{assetClass}</span></td>
                  <td className={`side-${side.toLowerCase()}`}>{side}</td>
                  <td className="num">{quantity}</td>
                  <td className="num">{price}</td>
                  <td className="num text-[#5f5a60]">{fees}</td>
                  <td className="num font-extrabold">{total}</td>
                  <td className={`num font-bold ${pnl.startsWith("-$") ? "text-[#d83e55]" : pnl.startsWith("+") ? "text-[#0da070]" : "text-[#9b969b]"}`}>{pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-footer">
          <span>Showing <b>1-8</b> of <b>1,248</b> trades</span>
          <div className="pager"><span>|&lt;</span><span>&lt;</span><b>1</b><span>2</span><span>3</span><span>...</span><span>156</span><span>&gt;</span><span>&gt;|</span></div>
          <span>Rows per page: <b className="select-chip">50</b></span>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <ComplianceCard icon="check" title="Audit Verified" detail="Last internal audit: 12 Oct 2023" tone="green" />
        <ComplianceCard icon="history" title="Immutable Records" detail="Distributed ledger timestamped" tone="slate" />
        <ComplianceCard icon="file" title="SEC/FINRA Compliant" detail="Rule 17a-4 recordkeeping active" tone="red" />
      </section>
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="space-y-6">
      <section className="metric-grid">
        {[
          ["Win Rate", "64.2%", "+21% vs last month", "positive"],
          ["Avg Gain / Trade", "$1,240", "", "neutral"],
          ["Largest Win", "$12,450", "NVDA Long Oct 24", "positive"],
          ["Largest Loss", "-$4,120", "BTC Short Aug 12", "negative"],
        ].map(([label, value, detail, tone]) => (
          <article className="panel metric-card" key={label}>
            <p className="eyebrow">{label}</p>
            <strong className={`metric-value ${tone}`}>{value}</strong>
            {label === "Avg Gain / Trade" ? <div className="mini-meter"><span /></div> : <span className={`metric-detail ${tone}`}>{detail}</span>}
          </article>
        ))}
      </section>

      <section className="grid gap-3 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <article className="panel chart-panel">
          <div className="section-head">
            <div>
              <h2>Portfolio Value</h2>
              <p className="text-sm text-[#5d575d]">Equity curve over selected period</p>
            </div>
            <div className="range-tabs surface">
              {["1W", "1M", "3M", "YTD", "ALL"].map((range, index) => <button className={index === 0 ? "is-active" : ""} type="button" key={range}>{range}</button>)}
            </div>
          </div>
          <EquityChart />
        </article>
        <aside className="space-y-3">
          <article className="panel p-4">
            <h2 className="section-title">Sector Exposure</h2>
            <AllocationBars
              compact
              items={[
                ["Technology", "42%", "bg-black"],
                ["Financials", "28%", "bg-[#53657d]"],
                ["Energy", "15%", "bg-[#7a7b7d]"],
                ["Healthcare", "10%", "bg-[#d2d2d2]"],
                ["Others", "5%", "bg-[#bfc0c4]"],
              ]}
            />
          </article>
          <article className="drawdown-card">
            <p>Current Drawdown</p>
            <strong>-2.4%</strong>
          </article>
        </aside>
      </section>

      <section className="grid gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,1fr)]">
        <article className="panel monthly-panel">
          <div className="section-head">
            <h2>Monthly P&L</h2>
            <button className="year-select" type="button">Fiscal Year 2023 <Icon name="chevron" className="h-4 w-4" /></button>
          </div>
          <div className="month-labels">{["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((month) => <span key={month}>{month}</span>)}</div>
        </article>
        <article className="panel p-4">
          <h2 className="section-title">Strategy Analytics</h2>
          <table className="mini-table">
            <thead><tr><th>Strategy</th><th>Count</th><th>Profit</th><th>Win%</th></tr></thead>
            <tbody>
              {strategyRows.map(([strategy, count, profit, win]) => (
                <tr key={strategy}>
                  <td>{strategy}</td>
                  <td>{count}</td>
                  <td className={profit.startsWith("-") ? "text-[#d83e55]" : "text-[#0da070]"}>{profit}</td>
                  <td>{win}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="report-button" type="button">Download Full Report</button>
        </article>
      </section>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="grid gap-4">
      <section className="panel p-6">
        <h2 className="section-title">Settings</h2>
        <p className="mt-2 max-w-xl text-sm text-[#5f5960]">
          Workspace, broker connection, and risk policy controls live here. The supplied screens focus on dashboard,
          trade entry, trade history, and analytics, so this page keeps the shell complete without inventing extra flows.
        </p>
      </section>
    </div>
  );
}

function AllocationBars({ items, compact = false }: { items: [string, string, string][]; compact?: boolean }) {
  return (
    <div className={`allocation-bars ${compact ? "compact" : ""}`}>
      {items.map(([label, value, color]) => (
        <div key={label}>
          <div className="mb-1 flex items-center justify-between gap-3">
            <span>{label}</span>
            <b>{value}</b>
          </div>
          <div className="bar-track"><span className={color} style={{ width: value }} /></div>
        </div>
      ))}
    </div>
  );
}

function ComplianceCard({ icon, title, detail, tone }: { icon: IconName; title: string; detail: string; tone: string }) {
  return (
    <article className="panel compliance-card">
      <span className={`compliance-icon ${tone}`}><Icon name={icon} className="h-5 w-5" /></span>
      <div>
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </article>
  );
}

function GrowthChart() {
  return (
    <div className="chart-wrap">
      <svg viewBox="0 0 760 350" role="img" aria-label="Performance growth line chart">
        <defs>
          <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d9e3f3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="chart-fill" d="M30 260 C80 220 110 270 150 225 C190 175 210 145 250 210 C300 300 320 50 370 110 C415 170 380 300 435 210 C480 110 495 35 530 95 C570 170 525 305 600 175 C645 30 660 10 690 120 L690 260 L30 260 Z" />
        <path className="chart-line" d="M30 260 C80 220 110 270 150 225 C190 175 210 145 250 210 C300 300 320 50 370 110 C415 170 380 300 435 210 C480 110 495 35 530 95 C570 170 525 305 600 175 C645 30 660 10 690 120" />
        <path className="chart-line" d="M690 120 L690 165 L760 120" />
        <circle cx="758" cy="120" r="5" fill="#000" />
        <foreignObject x="640" y="82" width="132" height="38"><div className="tooltip">$1.24M (ATH)</div></foreignObject>
      </svg>
      <div className="axis-labels"><span>OCT 24</span><span>NOV 04</span><span>NOV 14</span><span>NOV 24</span></div>
    </div>
  );
}

function EquityChart() {
  return (
    <div className="equity-chart">
      <svg viewBox="0 0 760 380" role="img" aria-label="Portfolio value chart">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#e6e3e5" strokeWidth="1" />
          </pattern>
          <linearGradient id="equityFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e3e8f2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="760" height="380" fill="url(#grid)" />
        <path d="M30 290 C135 240 185 290 260 270 C340 250 380 160 440 105 C530 25 580 215 730 110 L730 380 L30 380Z" fill="url(#equityFill)" />
        <path className="chart-line" d="M30 290 C135 240 185 290 260 270 C340 250 380 160 440 105 C530 25 580 215 730 110" />
        <circle cx="210" cy="272" r="4" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="395" cy="178" r="4" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="730" cy="110" r="4" fill="#000" />
        <foreignObject x="508" y="66" width="120" height="48"><div className="tooltip">Oct 14, 2023<br />$142,500.00</div></foreignObject>
      </svg>
    </div>
  );
}

function Donut() {
  return (
    <div className="donut-wrap" aria-label="Allocation donut">
      <svg viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="48" fill="none" stroke="#000" strokeWidth="16" />
        <circle cx="80" cy="80" r="48" fill="none" stroke="#56677f" strokeDasharray="92 302" strokeWidth="16" transform="rotate(-90 80 80)" />
        <circle cx="80" cy="80" r="48" fill="none" stroke="#35d596" strokeDasharray="44 302" strokeDashoffset="-92" strokeWidth="16" transform="rotate(-90 80 80)" />
      </svg>
    </div>
  );
}

export default AppShell;
