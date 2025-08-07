import './StatsBarItem.css';

export default function StatsBarItem({ title, children, focused }) {



    const focusedStyle = focused ? { backgroundColor: "#ade8f3"} : {};

    return (




        <div className = "stats-bar-item grow p-4" style={focusedStyle}>
            <div>{title}</div>
            <div className="text-5xl font-bold">{children}</div>
        </div>
    );
}
