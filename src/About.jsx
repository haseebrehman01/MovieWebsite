export const About = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        About HaseebFlix
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 50px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        Welcome to <span style={{ fontWeight: "600" }}>HaseebFlix</span>, your
        ultimate destination for unlimited movies, TV shows, and web series. Our
        mission is to bring entertainment closer to you with the best collection
        from around the globe.
      </p>

      {/* Features Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          marginBottom: "60px",
        }}
      >
        {/* Card 1: Unlimited Entertainment */}
        <div
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s ease",
          }}
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23007bff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'/%3E%3Cpath d='M8 13s1.5 2 4 2 4-2 4-2'/%3E%3Cpath d='M9 9h.01'/%3E%3Cpath d='M15 9h.01'/%3E%3C/svg%3E"
            alt="Unlimited Content"
            style={{ width: "64px", height: "64px", margin: "0 auto 15px" }}
          />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            Unlimited Entertainment
          </h3>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Explore thousands of movies and series without limits, anytime and anywhere.
          </p>
        </div>

        {/* Card 2: HD Quality */}
        <div
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s ease",
          }}
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328a745' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/%3E%3Cpath d='M6 10l3 3 6-6'/%3E%3C/svg%3E"
            alt="High Quality"
            style={{ width: "64px", height: "64px", margin: "0 auto 15px" }}
          />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            HD Quality
          </h3>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Enjoy seamless streaming in Full HD and 4K resolution with smooth playback.
          </p>
        </div>

        {/* Card 3: User Friendly */}
        <div
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s ease",
          }}
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffc107' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z'/%3E%3Cpath d='M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/%3E%3C/svg%3E"
            alt="User Friendly"
            style={{ width: "64px", height: "64px", margin: "0 auto 15px" }}
          />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            User Friendly
          </h3>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Simple, easy-to-use interface designed to give you the best viewing experience.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Our Mission
        </h3>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          At HaseebFlix, we aim to redefine the way you watch movies and shows.
          With a vast library, affordable plans, and a smooth user experience,
          we promise to keep you entertained every day.
        </p>
      </div>
    </section>
  );
};