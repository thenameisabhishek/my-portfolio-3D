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
                <h5>MR. ABHISHEK KUMAR</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Data Science and Analytics solutions using Python, SQL, Power BI, and Machine Learning for data-driven decision making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data management and operations intern</h4>
                <h5>3+ months</h5>
              </div>
              <h3>JUN 2025– AUG 26</h3>
            </div>
            <p>
             Data Science & Analytics Enthusiast
            • Building Machine Learning models for predictive analytics and classification tasks.
            • Performing data cleaning, feature engineering, and exploratory data analysis (EDA).
            • Creating interactive dashboards and reports using Power BI, Excel, and SQL.
            • Conducting research in AI, Machine Learning, and Data Science applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Congnifyz technologies </h5>
              </div>
              <h3>SEP 2024– DEC 2024</h3>
            </div>
            <p>
             Sep 2024 – Dec 2024
             • Built classification models using scikit-learn achieving 85% accuracy through feature engineering on 10,000+ record datasets.
             • Performed comprehensive EDA using Pandas, NumPy & Matplotlib, identifying key business patterns to support data-driven decision-making.
             • Applied the complete Machine Learning workflow including data preprocessing, model training, cross-validation, and hyperparameter tuning for real-world business problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Piramal Capital & Housing Finance Limited</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              (Dec 2024 – Jan 2025)
             • Cleaned and organized large datasets in Excel, improving data accuracy and reporting efficiency.
             • Analyzed recruitment and operational data to identify trends and support business decisions.
             • Automated data tracking processes and streamlined workflows, reducing turnaround time.
             • Collaborated with cross-functional teams to maintain data quality and generate actionable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
