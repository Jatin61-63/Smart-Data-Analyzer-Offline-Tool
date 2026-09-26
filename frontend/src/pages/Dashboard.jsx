import {useState} from "react";
function Dashboard() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    setFileName(file.name);
  }
};
    return (
    <div className="dashboard">

      <div className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p>Analyze your data with powerful offline AI.</p>
        </div>

        <div className="topbar-actions">
          <button>⚙️</button>
          <button>👤</button>
        </div>
      </div>

      <div className="welcome">
        <h2>Welcome 👋</h2>
        <p>Upload your dataset and start exploring your data.</p>
      </div>

      <div className="stats">

        <div className="stat-card">
          <span>Rows</span>
          <h2>0</h2>
          <p>No dataset loaded</p>
        </div>

        <div className="stat-card">
          <span>Columns</span>
          <h2>0</h2>
          <p>No dataset loaded</p>
        </div>

        <div className="stat-card">
          <span>Missing Values</span>
          <h2>0</h2>
          <p>Waiting for dataset</p>
        </div>

      </div>

      <div className="upload-box">

        <div className="upload-icon">
          📁
        </div>

        <h2>Upload Dataset</h2>

        <p>
          Import your CSV or Excel file to begin analysis.
        </p>

       <label className="upload-button">
        Choose File
        <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            hidden
        />
        </label>
                {fileName && (
        <p className="selected-file">
            Selected: {fileName}
        </p>
        )}

        <small>
          Supported formats: CSV, XLSX, XLS
        </small>

      </div>

    </div>
  );
}

export default Dashboard;