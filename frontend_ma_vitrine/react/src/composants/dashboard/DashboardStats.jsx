function DashboardStats() {

    const stats = [
    {
        id: 1,
        icon: "📦",
        title: "Mes commandes",
        value: 2
    },
    {
        id: 2,
        icon: "🛒",
        title: "Mon panier",
        value: 3
    },
    {
        id: 3,
        icon: "❤️",
        title: "Mes favoris",
        value: 5
    }
];
    return (
        <div className="row g-4">
            {stats.map((stat) => (
                <div className="col-md-4" key={stat.id}>
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                {stat.icon} {stat.title}
                            </h5>
                            <h2 className="fw-bold">
                                {stat.value}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DashboardStats;