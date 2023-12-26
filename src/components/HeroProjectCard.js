import todo from "../assets/todo.jpg";
import weather from "../assets/weather.avif";
import ecomm from "../assets/ecomm.avif";

export function HeroProjectCard() {
  return (
    <>
      <div>
        <div className="pro-card">
          <h1 className="pro-heading">Projects</h1>
          <div className="pro-content">
            <div className="card-group">
              <div className="card">
                <img src={weather} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title">Weather App</h2>
                  <p className="card-text">
                    The weather app project involves creating a user-friendly
                    application that provides real-time weather information
                  </p>
                  <div className="buttons-pro">
                    <a
                      href="https://project-weather-app4.netlify.app"
                      className="bt btn-view"
                    >
                      VIEW
                    </a>
                    <button className="bt btn-src">SOURCE</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={todo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title">ToDo Task App</h2>
                  <p className="card-text">
                    The todo tasklist app project aims to develop a app for user
                    to create Tasks.Users can add,edit, and mark tasks as
                    completed
                  </p>
                  <div className="buttons-pro">
                    <a
                      href="https://taskmate-todolist.netlify.app/"
                      className="bt btn-view"
                    >
                      VIEW
                    </a>
                    <button className="bt btn-src">SOURCE</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={ecomm} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title">Ecommerce Website</h2>
                  <p className="card-text">
                    The ecommerce project involves building an online platform
                    where businesses can showcase and sell their products to
                    customers.
                  </p>
                  <div className="buttons-pro">
                    <button className="bt btn-view">VIEW</button>
                    <button className="bt btn-src">SOURCE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
