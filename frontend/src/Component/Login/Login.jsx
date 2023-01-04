export default function Login({ children }) {
  return (
    <section className="text-center container">
      <div className=" py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropfilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Login</h2>
                {children}
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://files.fm/thumb_show.php?i=d8etfuwhp"
              className="w-100 rounded-4 shadow-4"
              alt=""
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
