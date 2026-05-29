import { useState } from 'react';
import CustomerJourneyMap from './components/CustomerJourneyMap';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9ff]" style={{ fontFamily: 'var(--font-body)' }}>
      <div className="container mx-auto px-6 py-12 max-w-[1280px]">
        <div className="mb-12">
          <h1
            className="text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--trust-blue)',
              letterSpacing: '-0.02em'
            }}
          >
            APEXI Customer Journey Map
          </h1>
          <p className="text-lg" style={{ color: 'var(--on-surface-variant)' }}>
            apexi.ca • Quebec EV Insurance Leader • Complete sales channel & backend integration overview
          </p>
        </div>

        <CustomerJourneyMap />
      </div>
    </div>
  );
}
