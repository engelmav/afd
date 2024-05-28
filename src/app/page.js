import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main className={styles.main} style={{ }}>
      <div className={styles.description}>Keep Your Dog Looking Beautiful!</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>All Fur Dogs Grooming Salon</h1>
      </div>

      <Script
        id="setmore_script"
        type="text/javascript"
        src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"
      />
      <a
        style={{ float: "none" }}
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/74df8ba5-fb3e-4b18-8b8c-dcf353e23bd8"
      >
        <img
          border="none"
          src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
          alt="Book an appointment with All Fur Dogs Grooming Salon using Setmore"
        />
      </a>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {["Grooming", "Bathing", "Haircut", "Nail Trim"].map((item, idx) => (
          <div key={idx} style={{ justifyContent: "center", padding: "10px" }}>
            {item}
          </div>
        ))}
      </div>

      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: 0,
          width: "100vw",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{fontSize: "12px"}}>395 Springfield Ave</div>
        <div style={{fontSize: "12px"}}>Berkeley Heights, NJ 07922</div>
      </footer>
    </main>
  );
}

