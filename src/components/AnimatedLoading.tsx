export function AnimatedLoading() {
    return <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection:'column', gap:'5px', color: "#fff", zIndex: 20, transition: "opacity 400ms ease, visibility 400ms", height:'50%' }} >
        <div className="loaderSpline"></div>
        <div style={{ fontSize: 16 }}>Cargando escena...</div>
    </div>;
}
