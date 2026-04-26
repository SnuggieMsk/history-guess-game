// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import './App.css';

// Eager-load default route (best UX on first paint)
import ThesisV2 from './components/Dashboard/v2/ThesisV2';

// Lazy-load all other routes — code-split into per-route chunks
// This cuts initial bundle from ~232 kB to ~80 kB and loads each section on demand.
const ExecutiveSummary    = lazy(() => import('./components/Dashboard/sections/ExecutiveSummary'));
const ValueChain          = lazy(() => import('./components/Dashboard/sections/ValueChain'));
const Species             = lazy(() => import('./components/Dashboard/sections/Species'));
const GapSpeciesView      = lazy(() => import('./components/Dashboard/sections/GapSpeciesView'));
const Sourcing            = lazy(() => import('./components/Dashboard/sections/Sourcing'));
const CostCalculator      = lazy(() => import('./components/Dashboard/sections/CostCalculator'));
const FinancialModel      = lazy(() => import('./components/Dashboard/sections/FinancialModel'));
const ExportCalendar      = lazy(() => import('./components/Dashboard/sections/ExportCalendar'));
const Competitors         = lazy(() => import('./components/Dashboard/sections/Competitors'));
const Pestel              = lazy(() => import('./components/Dashboard/sections/Pestel'));
const Porter              = lazy(() => import('./components/Dashboard/sections/Porter'));
const Swot                = lazy(() => import('./components/Dashboard/sections/Swot'));
const Moat                = lazy(() => import('./components/Dashboard/sections/Moat'));
const Subsidies           = lazy(() => import('./components/Dashboard/sections/Subsidies'));
const Risks               = lazy(() => import('./components/Dashboard/sections/Risks'));
const CaseStudies         = lazy(() => import('./components/Dashboard/sections/CaseStudies'));
const Operations          = lazy(() => import('./components/Dashboard/sections/Operations'));
const Roadmap             = lazy(() => import('./components/Dashboard/sections/Roadmap'));
const References          = lazy(() => import('./components/Dashboard/sections/References'));

const TeardownV2          = lazy(() => import('./components/Dashboard/v2/TeardownV2'));
const MaharashtraView     = lazy(() => import('./components/Dashboard/v2/MaharashtraView'));
const SuppliersV2         = lazy(() => import('./components/Dashboard/v2/SuppliersV2'));
const BuyersV2            = lazy(() => import('./components/Dashboard/v2/BuyersV2'));
const OpsV2               = lazy(() => import('./components/Dashboard/v2/OpsV2'));
const LiveCargoCalcV2     = lazy(() => import('./components/Dashboard/v2/LiveCargoCalcV2'));
const CertsV2             = lazy(() => import('./components/Dashboard/v2/CertsV2'));
const SchemesV2           = lazy(() => import('./components/Dashboard/v2/SchemesV2'));
const MarketsV2           = lazy(() => import('./components/Dashboard/v2/MarketsV2'));
const CompeteV2           = lazy(() => import('./components/Dashboard/v2/CompeteV2'));
const StressV2            = lazy(() => import('./components/Dashboard/v2/StressV2'));
const DprV2               = lazy(() => import('./components/Dashboard/v2/DprV2'));
const PlaybookV2          = lazy(() => import('./components/Dashboard/v2/PlaybookV2'));
const NightmaresV2        = lazy(() => import('./components/Dashboard/v2/NightmaresV2'));
const JargonV2            = lazy(() => import('./components/Dashboard/v2/JargonV2'));
const VendorsV2           = lazy(() => import('./components/Dashboard/v2/VendorsV2'));
const BalanceV2           = lazy(() => import('./components/Dashboard/v2/BalanceV2'));
const TemplatesV2         = lazy(() => import('./components/Dashboard/v2/TemplatesV2'));
const TechStackV2         = lazy(() => import('./components/Dashboard/v2/TechStackV2'));
const InsuranceV2         = lazy(() => import('./components/Dashboard/v2/InsuranceV2'));
const CloseoutV2          = lazy(() => import('./components/Dashboard/v2/CloseoutV2'));
const CompeteStoriesV2    = lazy(() => import('./components/Dashboard/v2/CompeteStoriesV2'));
const SupplyFlowV2        = lazy(() => import('./components/Dashboard/v2/SupplyFlowV2'));
const MarketSimulatorV2   = lazy(() => import('./components/Dashboard/v2/MarketSimulatorV2'));
const ContactsV2          = lazy(() => import('./components/Dashboard/v2/ContactsV2'));
const RegFormsV2          = lazy(() => import('./components/Dashboard/v2/RegFormsV2'));
const SimNewsTimelineV2   = lazy(() => import('./components/Dashboard/v2/SimNewsTimelineV2'));
const ProduceCatalogV2    = lazy(() => import('./components/Dashboard/v2/ProduceCatalogV2'));
const PortfolioSimV2      = lazy(() => import('./components/Dashboard/v2/PortfolioSimV2'));
const RealityChecksV2     = lazy(() => import('./components/Dashboard/v2/RealityChecksV2'));
const MonteCarloSimV2     = lazy(() => import('./components/Dashboard/v2/MonteCarloSimV2'));
const WeatherSimV2        = lazy(() => import('./components/Dashboard/v2/WeatherSimV2'));
const DistributorOptV2    = lazy(() => import('./components/Dashboard/v2/DistributorOptV2'));
const GraveyardV2         = lazy(() => import('./components/Dashboard/v2/GraveyardV2'));
const GlobalFlowsV2       = lazy(() => import('./components/Dashboard/v2/GlobalFlowsV2'));
const CompoundShockSimV2  = lazy(() => import('./components/Dashboard/v2/CompoundShockSimV2'));
const DprDeepDiveV2       = lazy(() => import('./components/Dashboard/v2/DprDeepDiveV2'));
const DprFinModelV2       = lazy(() => import('./components/Dashboard/v2/DprFinModelV2'));
const FiveYearSimV2       = lazy(() => import('./components/Dashboard/v2/FiveYearSimV2'));
const DprAnnexuresV2      = lazy(() => import('./components/Dashboard/v2/DprAnnexuresV2'));
const SimNarrationV2      = lazy(() => import('./components/Dashboard/v2/SimNarrationV2'));
const CapTableExitV2      = lazy(() => import('./components/Dashboard/v2/CapTableExitV2'));
const TeamOrgV2           = lazy(() => import('./components/Dashboard/v2/TeamOrgV2'));
const WCRampV2            = lazy(() => import('./components/Dashboard/v2/WCRampV2'));
const CapExV2             = lazy(() => import('./components/Dashboard/v2/CapExV2'));
const BuyerEvidenceV2     = lazy(() => import('./components/Dashboard/v2/BuyerEvidenceV2'));
const ReactionCaseV2      = lazy(() => import('./components/Dashboard/v2/ReactionCaseV2'));
const CriticalPathV2      = lazy(() => import('./components/Dashboard/v2/CriticalPathV2'));
const InsuranceScheduleV2 = lazy(() => import('./components/Dashboard/v2/InsuranceScheduleV2'));

// Skeleton loader for in-flight chunks
const Loading = () => (
  <div style={{padding:'80px 20px', textAlign:'center', color:'#5c6272'}}>
    <div style={{fontSize:14, fontFamily:'Georgia, serif'}}>Loading section…</div>
    <div style={{
      marginTop:14, width:120, height:4, background:'#efeada', borderRadius:2,
      margin:'14px auto', overflow:'hidden', position:'relative',
    }}>
      <div style={{
        width:'40%', height:'100%', background:'#0d3b66',
        position:'absolute', animation:'load-slide 1.2s linear infinite',
      }}/>
    </div>
    <style>{`@keyframes load-slide{0%{left:-40%}100%{left:100%}}`}</style>
  </div>
);

// Suspense wrapper for any lazy element
const L = (Comp) => <Suspense fallback={<Loading />}><Comp /></Suspense>;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* V2 — eager-load default for fastest first paint */}
          <Route path="/"             element={<ThesisV2 />} />
          <Route path="/v2/thesis"    element={<ThesisV2 />} />

          {/* All other V2 — lazy */}
          <Route path="/v2/teardown"  element={L(TeardownV2)} />
          <Route path="/v2/map"       element={L(MaharashtraView)} />
          <Route path="/v2/suppliers" element={L(SuppliersV2)} />
          <Route path="/v2/buyers"    element={L(BuyersV2)} />
          <Route path="/v2/ops"       element={L(OpsV2)} />
          <Route path="/v2/live"      element={L(LiveCargoCalcV2)} />
          <Route path="/v2/certs"     element={L(CertsV2)} />
          <Route path="/v2/schemes"   element={L(SchemesV2)} />
          <Route path="/v2/markets"   element={L(MarketsV2)} />
          <Route path="/v2/compete"   element={L(CompeteV2)} />
          <Route path="/v2/stress"    element={L(StressV2)} />
          <Route path="/v2/dpr"       element={L(DprV2)} />
          <Route path="/v2/playbook"  element={L(PlaybookV2)} />
          <Route path="/v2/nightmares" element={L(NightmaresV2)} />
          <Route path="/v2/jargon"    element={L(JargonV2)} />
          <Route path="/v2/vendors"   element={L(VendorsV2)} />
          <Route path="/v2/balance"   element={L(BalanceV2)} />
          <Route path="/v2/templates" element={L(TemplatesV2)} />
          <Route path="/v2/tech"      element={L(TechStackV2)} />
          <Route path="/v2/insurance" element={L(InsuranceV2)} />
          <Route path="/v2/closeout"  element={L(CloseoutV2)} />
          <Route path="/v2/compete-deep" element={L(CompeteStoriesV2)} />
          <Route path="/v2/supply-flow"  element={L(SupplyFlowV2)} />
          <Route path="/v2/simulator"    element={L(MarketSimulatorV2)} />
          <Route path="/v2/contacts"     element={L(ContactsV2)} />
          <Route path="/v2/regforms"     element={L(RegFormsV2)} />
          <Route path="/v2/sim-news"     element={L(SimNewsTimelineV2)} />
          <Route path="/v2/produce"      element={L(ProduceCatalogV2)} />
          <Route path="/v2/portfolio-sim" element={L(PortfolioSimV2)} />
          <Route path="/v2/reality"      element={L(RealityChecksV2)} />
          <Route path="/v2/monte-carlo"  element={L(MonteCarloSimV2)} />
          <Route path="/v2/weather"      element={L(WeatherSimV2)} />
          <Route path="/v2/distributor"  element={L(DistributorOptV2)} />
          <Route path="/v2/graveyard"    element={L(GraveyardV2)} />
          <Route path="/v2/global-flows" element={L(GlobalFlowsV2)} />
          <Route path="/v2/compound-shock" element={L(CompoundShockSimV2)} />
          <Route path="/v2/dpr-deep"     element={L(DprDeepDiveV2)} />
          <Route path="/v2/dpr-finmodel" element={L(DprFinModelV2)} />
          <Route path="/v2/five-year-sim" element={L(FiveYearSimV2)} />
          <Route path="/v2/dpr-annex"    element={L(DprAnnexuresV2)} />
          <Route path="/v2/sim-narration" element={L(SimNarrationV2)} />
          <Route path="/v2/cap-table" element={L(CapTableExitV2)} />
          <Route path="/v2/team"      element={L(TeamOrgV2)} />
          <Route path="/v2/wc-ramp"   element={L(WCRampV2)} />
          <Route path="/v2/capex"     element={L(CapExV2)} />
          <Route path="/v2/buyer-evidence" element={L(BuyerEvidenceV2)} />
          <Route path="/v2/reaction-case"  element={L(ReactionCaseV2)} />
          <Route path="/v2/critical-path"  element={L(CriticalPathV2)} />
          <Route path="/v2/insurance-schedule" element={L(InsuranceScheduleV2)} />

          {/* V1 reference — all lazy */}
          <Route path="/exec"         element={L(ExecutiveSummary)} />
          <Route path="/value-chain"  element={L(ValueChain)} />
          <Route path="/species"      element={L(Species)} />
          <Route path="/gap-species"  element={L(GapSpeciesView)} />
          <Route path="/sourcing"     element={L(Sourcing)} />
          <Route path="/cost-calc"    element={L(CostCalculator)} />
          <Route path="/financials"   element={L(FinancialModel)} />
          <Route path="/calendar"     element={L(ExportCalendar)} />
          <Route path="/competitors"  element={L(Competitors)} />
          <Route path="/pestel"       element={L(Pestel)} />
          <Route path="/porter"       element={L(Porter)} />
          <Route path="/swot"         element={L(Swot)} />
          <Route path="/moat"         element={L(Moat)} />
          <Route path="/subsidies"    element={L(Subsidies)} />
          <Route path="/risks"        element={L(Risks)} />
          <Route path="/case-studies" element={L(CaseStudies)} />
          <Route path="/operations"   element={L(Operations)} />
          <Route path="/roadmap"      element={L(Roadmap)} />
          <Route path="/references"   element={L(References)} />
          <Route path="*"             element={<Navigate to="/v2/thesis" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
