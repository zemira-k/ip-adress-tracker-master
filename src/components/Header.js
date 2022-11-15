import icon from "../images/icon-arrow.svg";

export const Header = ({ ipInfo, handleClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let ip = e.target[0].value;
    handleClick(ip);
    e.target[0].value = "";
  };

  const infoLIst = [
    {
      label: "IP Address",
      content: ipInfo.ipNumber,
    },
    {
      label: "Location",
      content: ipInfo.location,
    },
    {
      label: "Timezone",
      content: ipInfo.timeZone,
    },
    {
      label: "ISP",
      content: ipInfo.isp,
    },
  ];

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
          {infoLIst.map((infoItem, i) => {
            return (
              <div className="info-box-content" key={i}>
                <label className="info-box-label">{infoItem.label}</label>
                <p className="info-box-text">{infoItem.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
