import './StatsBar.css';

export default function StatsBar({ children }) {
    return (
        <div className="stats-bar flex overflow-hidden">{children}</div>
    );
}
