export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <a className="navbar-brand page-scroll header" href="#page-top">
          Online Exam
        </a>{" "}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#features" className="page-scroll">
              Tính năng
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              Về chúng tôi
            </a>
          </li>
          <li>
            <a href="#services" className="page-scroll">
              Dịch vụ
            </a>
          </li>
          <li>
            <a href="#portfolio" className="page-scroll">
              Hình ảnh
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>

      <a
        href="https://online-exam-2021.herokuapp.com/"
        class="glow-on-hover"
        type="button"
        target="_blank"
        rel="noreferrer"
      >
        TRY IT NOW
      </a>
    </nav>
  );
};
