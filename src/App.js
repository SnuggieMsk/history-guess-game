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

// V2 sections
import ThesisV2 from './components/Dashboard/v2/ThesisV2';
import TeardownV2 from './components/Dashboard/v2/TeardownV2';
import MaharashtraView from './components/Dashboard/v2/MaharashtraView';
import SuppliersV2 from './components/Dashboard/v2/SuppliersV2';
import BuyersV2 from './components/Dashboard/v2/BuyersV2';
import OpsV2 from './components/Dashboard/v2/OpsV2';
import LiveCargoCalcV2 from './components/Dashboard/v2/LiveCargoCalcV2';
import CertsV2 from './components/Dashboard/v2/CertsV2';
import SchemesV2 from './components/Dashboard/v2/SchemesV2';
import MarketsV2 from './components/Dashboard/v2/MarketsV2';
import CompeteV2 from './components/Dashboard/v2/CompeteV2';
import StressV2 from './components/Dashboard/v2/StressV2';
import DprV2 from './components/Dashboard/v2/DprV2';
import PlaybookV2 from './components/Dashboard/v2/PlaybookV2';
import NightmaresV2 from './components/Dashboard/v2/NightmaresV2';
import JargonV2 from './components/Dashboard/v2/JargonV2';
import VendorsV2 from './components/Dashboard/v2/VendorsV2';
import BalanceV2 from './components/Dashboard/v2/BalanceV2';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* V2 */}
          <Route path="/v2/thesis"    element={<ThesisV2 />} />
          <Route path="/v2/teardown"  element={<TeardownV2 />} />
          <Route path="/v2/map"       element={<MaharashtraView />} />
          <Route path="/v2/suppliers" element={<SuppliersV2 />} />
          <Route path="/v2/buyers"    element={<BuyersV2 />} />
          <Route path="/v2/ops"       element={<OpsV2 />} />
          <Route path="/v2/live"      element={<LiveCargoCalcV2 />} />
          <Route path="/v2/certs"     element={<CertsV2 />} />
          <Route path="/v2/schemes"   element={<SchemesV2 />} />
          <Route path="/v2/markets"   element={<MarketsV2 />} />
          <Route path="/v2/compete"   element={<CompeteV2 />} />
          <Route path="/v2/stress"    element={<StressV2 />} />
          <Route path="/v2/dpr"       element={<DprV2 />} />
          <Route path="/v2/playbook"  element={<PlaybookV2 />} />
          <Route path="/v2/nightmares" element={<NightmaresV2 />} />
          <Route path="/v2/jargon"    element={<JargonV2 />} />
          <Route path="/v2/vendors"   element={<VendorsV2 />} />
          <Route path="/v2/balance"   element={<BalanceV2 />} />

          {/* V1 reference */}
          <Route path="/"             element={<ThesisV2 />} />
          <Route path="/exec"         element={<ExecutiveSummary />} />
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
