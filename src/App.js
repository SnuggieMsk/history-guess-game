// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';

// V1 sections (reference)
import ExecutiveSummary from './components/Dashboard/sections/ExecutiveSummary';
import ValueChain from './components/Dashboard/sections/ValueChain';
import Species from './components/Dashboard/sections/Species';
import GapSpeciesView from './components/Dashboard/sections/GapSpeciesView';
import Sourcing from './components/Dashboard/sections/Sourcing';
import CostCalculator from './components/Dashboard/sections/CostCalculator';
import FinancialModel from './components/Dashboard/sections/FinancialModel';
import ExportCalendar from './components/Dashboard/sections/ExportCalendar';
import Competitors from './components/Dashboard/sections/Competitors';
import Pestel from './components/Dashboard/sections/Pestel';
import Porter from './components/Dashboard/sections/Porter';
import Swot from './components/Dashboard/sections/Swot';
import Moat from './components/Dashboard/sections/Moat';
import Subsidies from './components/Dashboard/sections/Subsidies';
import Risks from './components/Dashboard/sections/Risks';
import CaseStudies from './components/Dashboard/sections/CaseStudies';
import Operations from './components/Dashboard/sections/Operations';
import Roadmap from './components/Dashboard/sections/Roadmap';
import References from './components/Dashboard/sections/References';

// V2 sections (built for investor-grade depth)
import ThesisV2 from './components/Dashboard/v2/ThesisV2';
import TeardownV2 from './components/Dashboard/v2/TeardownV2';
import MaharashtraView from './components/Dashboard/v2/MaharashtraView';
import SuppliersV2 from './components/Dashboard/v2/SuppliersV2';
import BuyersV2 from './components/Dashboard/v2/BuyersV2';
// Placeholders until the rest are built this round
const Placeholder = ({ title }) => (
  <div>
    <div className="sec-head">
      <div className="sec-eyebrow">V2 · Under construction</div>
      <h1 className="sec-title">{title}</h1>
      <p className="sec-sub">This v2 section is being built. In the meantime, the corresponding markdown doc is in the <code>docs/</code> folder on this branch.</p>
    </div>
  </div>
);

import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* V2 — new investor build */}
          <Route path="/v2/thesis"    element={<ThesisV2 />} />
          <Route path="/v2/teardown"  element={<TeardownV2 />} />
          <Route path="/v2/map"       element={<MaharashtraView />} />
          <Route path="/v2/suppliers" element={<SuppliersV2 />} />
          <Route path="/v2/buyers"    element={<BuyersV2 />} />
          <Route path="/v2/ops"       element={<Placeholder title="Operations & Quality Playbook" />} />
          <Route path="/v2/live"      element={<Placeholder title="Live-Cargo Cost Calculator" />} />
          <Route path="/v2/certs"     element={<Placeholder title="Certification Roadmap" />} />
          <Route path="/v2/schemes"   element={<Placeholder title="Government Schemes Capture" />} />
          <Route path="/v2/markets"   element={<Placeholder title="Destination Countries Deep Dive" />} />
          <Route path="/v2/compete"   element={<Placeholder title="Competitor Forensics" />} />
          <Route path="/v2/stress"    element={<Placeholder title="Stress-Tested Financials" />} />
          <Route path="/v2/dpr"       element={<Placeholder title="PMMSY DPR Skeleton" />} />

          {/* V1 reference */}
          <Route path="/"             element={<ThesisV2 />} />
          <Route path="/value-chain"  element={<ValueChain />} />
          <Route path="/species"      element={<Species />} />
          <Route path="/gap-species"  element={<GapSpeciesView />} />
          <Route path="/sourcing"     element={<Sourcing />} />
          <Route path="/cost-calc"    element={<CostCalculator />} />
          <Route path="/financials"   element={<FinancialModel />} />
          <Route path="/calendar"     element={<ExportCalendar />} />
          <Route path="/competitors"  element={<Competitors />} />
          <Route path="/pestel"       element={<Pestel />} />
          <Route path="/porter"       element={<Porter />} />
          <Route path="/swot"         element={<Swot />} />
          <Route path="/moat"         element={<Moat />} />
          <Route path="/subsidies"    element={<Subsidies />} />
          <Route path="/risks"        element={<Risks />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/operations"   element={<Operations />} />
          <Route path="/roadmap"      element={<Roadmap />} />
          <Route path="/references"   element={<References />} />
          <Route path="*"             element={<Navigate to="/v2/thesis" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
