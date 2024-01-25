import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <section>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <div>
        <div className="bg-white w-full h-screen">
          <h1>404</h1>
        </div>
      </div>
    </section>
  );
}
