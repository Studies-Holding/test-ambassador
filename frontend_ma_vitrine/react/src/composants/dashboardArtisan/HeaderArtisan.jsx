function HeaderArtisan() {

    const today = new Date().toLocaleDateString(
        "fr-FR",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    return (

        <header className="mb-5">

            <h1 className="fw-bold">

                Tableau de bord

            </h1>

            <p className="text-muted">

                {today}

            </p>

        </header>

    );

}

export default HeaderArtisan;