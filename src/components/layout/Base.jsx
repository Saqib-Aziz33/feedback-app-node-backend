import Header from "./Header";
import Footer from "./Footer";

function Base({ children }) {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
}
export default Base;
