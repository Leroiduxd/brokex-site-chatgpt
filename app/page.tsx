import type { Metadata } from "next";

export const metadata: Metadata = {title:"Brokex — The Gold Market, Rebuilt",description:"A gold-only onchain perpetuals protocol for precise, continuous exposure."};
const Arrow=()=> <span aria-hidden="true">↗</span>;
const Mark=()=> <span className="bx-mark" aria-hidden="true"><i/><i/><i/></span>;

export default function Home(){return <main><section className="screen-one">
  <div className="market-tape"><span>XAU / USD <b>$4,368.02</b> <em>−0.86% ↓</em></span><span>24H HIGH <b>$4,414.80</b></span><span>OPEN INTEREST <b>$18.42M</b></span><span>FUNDING / 1H <b>0.0022%</b></span><a href="#market">FULL MARKET →</a></div>
  <nav className="g-nav"><a className="g-logo" href="#"><Mark/>BROKEX</a><div><a href="#market">Thesis</a><a href="https://app.brokex.trade">Trade</a><a href="https://docs.brokex.trade">Docs</a></div><a className="black-btn" href="https://app.brokex.trade">LAUNCH APP <Arrow/></a></nav>

  <section className="g-hero">
    <img src="/brokex-gold-hero.png" alt="Sculptural refined gold medallions"/>
    <div className="hero-copy"><span className="overline">THE GOLD PERPETUALS PROTOCOL</span><h1>The world’s<br/>oldest asset.<br/><b>Rebuilt.</b></h1><p>Trade XAU/USD perpetuals with onchain execution, transparent risk controls, and up to 50x leverage.</p><div><a className="black-btn" href="https://app.brokex.trade">LAUNCH APP <Arrow/></a><a className="light-btn" href="#market">EXPLORE PROTOCOL →</a></div></div>
    <aside className="hero-quote"><p>One market, designed without compromise. Brokex turns gold into a continuous, composable onchain primitive.</p><div><span><Mark/></span><b>$4,368.02<small>XAU / USD</small></b><em>−$37.56<br/><small>−0.86% TODAY</small></em></div></aside>
  </section>

  </section><section className="screen-two" id="market"><section className="bold-intro"><span>01 / THE THESIS</span><h2>Not another exchange.<br/><b>A new market for gold.</b></h2><p>We removed the token maze and built around a single, global macro asset. Every parameter, interface, and line of code serves one purpose: better gold exposure.</p></section>

  <section className="numbers">
    <article><span>MAXIMUM LEVERAGE</span><strong>50×</strong><p>Shape capital-efficient exposure around your strategy.</p></article>
    <article><span>MAKER FEES FROM</span><strong>0.02%</strong><p>Clear economics, visible before you execute.</p></article>
    <article><span>MARKET ACCESS</span><strong>24/7</strong><p>Continuous onchain access without expiry dates.</p></article>
    <article><span>CORE MARKETS</span><strong>01</strong><p>Total focus on XAU/USD perpetuals.</p></article>
  </section>
  </section>

  <section className="screen-three"><img className="temple-bg" src="/brokex-temple.png" alt="Monumental gold market architecture"/><div className="third-index">02 / THE EDGE</div><div className="third-copy"><span>BUILT FOR THE MOMENT</span><h2>Gold never stops.<br/><b>Neither should you.</b></h2><p>A continuous market deserves continuous infrastructure. Brokex brings precision, speed and visible execution to every position.</p><a href="https://app.brokex.trade">ENTER THE MARKET <Arrow/></a></div><div className="edge-grid"><article><b>01</b><h3>Fast</h3><p>Responsive execution for markets that do not wait.</p></article><article><b>02</b><h3>Precise</h3><p>Set direction, size and leverage with total clarity.</p></article><article><b>03</b><h3>Visible</h3><p>Know margin, fees and liquidation before you trade.</p></article></div></section>

  <section className="screen-four"><div className="history-word">GOLD</div><header><span>03 / 5,000 YEARS OF VALUE</span><h2>Before money,<br/>there was <b>gold.</b></h2><p>From sacred metal to global reserve asset—gold has survived every monetary system. Its next chapter is programmable.</p></header><div className="timeline" role="region" aria-label="5,000 years of gold history" tabIndex={0}><div className="timeline-line"/>{[
    ["c. 3000 BCE","ORIGIN","Gold becomes a symbol of power, permanence and exchange."],
    ["c. 560 BCE","COINAGE","Lydian rulers standardize precious-metal coins for trade."],
    ["1717","STANDARD","Britain’s monetary system moves toward a gold standard."],
    ["1944","RESERVE","Bretton Woods anchors global currencies to the dollar and gold."],
    ["1971","FREEDOM","Dollar convertibility ends. Gold begins trading freely worldwide."],
    ["NOW","ONCHAIN","Brokex turns gold exposure into a continuous, programmable market."]
  ].map((item,i)=><article key={item[0]} style={{"--step":i} as React.CSSProperties}><i/><strong>{item[0]}</strong><b>{item[1]}</b><p>{item[2]}</p></article>)}</div><div className="history-footer"><span>PHYSICAL</span><i/><b>PROGRAMMABLE</b><em>SCROLL TO ADVANCE ↓</em></div></section>

  <section className="screen-five" id="solvency">
    <img className="trust-bg" src="/brokex-institutional-monument.png" alt="Monumental institutional architecture set into a dark mountain"/>
    <div className="trust-grid" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
    <header className="trust-header"><span>04 / HOW IT STAYS SOLVENT</span><h2>Trust is not a promise.<br/><b>It is a system.</b></h2><p>Three independent controls keep pricing, collateral and market capacity aligned—before a position is opened.<span className="trust-status"><i/>PROTOCOL GUARDRAILS ACTIVE</span></p></header>
    <div className="trust-columns">
      <article><div><span>01 / PRICE INTEGRITY</span><b>ORACLE</b></div><h3>Oracle-priced</h3><p>Gold prices are supplied through a decentralized oracle layer, reducing reliance on any single venue or counterparty.</p><ul><li>MULTI-SOURCE INPUT</li><li>ONCHAIN VERIFICATION</li><li>STALENESS CHECKS</li></ul></article>
      <article><div><span>02 / COLLATERAL</span><b>VAULT</b></div><h3>Vault-backed</h3><p>Every position is supported by capital locked in the protocol vault—not an offchain promise or unsecured balance sheet.</p><ul><li>LOCKED COLLATERAL</li><li>VISIBLE CAPACITY</li><li>PROGRAMMATIC SETTLEMENT</li></ul></article>
      <article><div><span>03 / EXPOSURE</span><b>CAP</b></div><h3>Solvency-capped</h3><p>Net open interest is constrained by configured vault capacity, so new exposure cannot expand beyond the system’s risk limits.</p><ul><li>STRICT OI CEILING</li><li>REAL-TIME UTILIZATION</li><li>NEW POSITIONS THROTTLED</li></ul></article>
    </div>
    <div className="trust-flow"><span>PRICE</span><i/><b>COLLATERAL</b><i/><strong>CAPACITY</strong><em>VERIFIED BEFORE EXECUTION</em></div>
  </section>

</main>}
