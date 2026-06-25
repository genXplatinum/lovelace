import './CohortCard.css';

/* Abstract mini-dashboard card for the Digithrive CRM, drawn in the studio's
   own mono / hairline language (no real client financials). Reused on Home + Work. */
export default function CohortMock() {
  const bars = [40, 56, 46, 68, 60, 82, 100];
  return (
    <div className="cohort" aria-hidden="true">
      <div className="cohort__top">
        <span /><span /><span />
        <em className="mono">digithrive / crm</em>
      </div>
      <div className="cohort__body">
        <div className="cohort__tiles">
          <div className="cohort__tile">
            <span className="cohort__k mono">Collected</span>
            <span className="cohort__meter"><i style={{ width: '72%' }} /></span>
          </div>
          <div className="cohort__tile">
            <span className="cohort__k mono">Dues</span>
            <span className="cohort__meter cohort__meter--ink"><i style={{ width: '28%' }} /></span>
          </div>
        </div>
        <div className="cohort__chart">
          {bars.map((h, i) => (
            <span key={i} className={i === bars.length - 1 ? 'is-accent' : ''} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="cohort__foot mono">
          <span>Reconciled</span>
          <span className="cohort__pill">15 / 20</span>
        </div>
      </div>
    </div>
  );
}
