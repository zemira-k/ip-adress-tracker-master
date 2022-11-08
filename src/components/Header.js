import icon from "../images/icon-arrow.svg";

export const Header = ({ ipInfo, handleClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let ip = e.target[0].value;
    handleClick(ip);
    e.target[0].value = "";
  };

  return (
    <section className="header">
      <div className="container">
        <h2 className="container-title">IP Address Tracker</h2>
        <form className="search-container" onSubmit={handleSubmit}>
          <input
            className="search-input"
            placeholder="Search for any IP address or domain"
            defaultValue=""
          />
          <button className="search-button" type="submit">
            <img className="icon" src={icon} alt="arrow icon"></img>
          </button>
        </form>
        <div className="info-box">
          <label className="info-box-label">IP Address</label>
          <p className="info-box-text ip">{ipInfo.ipNumber}</p>
          <label className="info-box-label">Location</label>
          <p className="info-box-text">{ipInfo.location}</p>
          <label className="info-box-label">Timezone</label>
          <p className="info-box-text">{ipInfo.timeZone}</p>
          <label className="info-box-label">ISP</label>
          <p className="info-box-text">{ipInfo.isp}</p>
        </div>
      </div>
    </section>
  );
};
