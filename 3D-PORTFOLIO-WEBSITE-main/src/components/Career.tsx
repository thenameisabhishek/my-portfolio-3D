import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Shivamorphosis</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI Automations, a voice of AI platform for
              automating customer calls, support, and conversions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>6+ months · Snoufai</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Senior Lead Product & Software Developer @ Snoufai pvt. ltd. (Sep 2025 – April 2026):
              Leading product development and software engineering for Snoufai's AI-driven solutions, focusing on innovation and user-centric design.
              Finance Manager @ Shivamorphosis pvt. ltd. (Jan 2025 –
              Present): Managing financial operations, budgeting, and strategic planning to ensure the company's financial health and growth & Building AI Automations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Progressive Shelters </h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Sep 2023 – Nov 2024. Developed and maintained material services consumed
              by the UI; deployment support across environments; Unit tests and
              coverage; bug fixes from QA and users; site work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
