// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
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
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/"             element={<ExecutiveSummary />} />
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
          <Route path="*"             element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
