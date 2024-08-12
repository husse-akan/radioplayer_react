export default function Stations(props) {
  const radioData = props.stationData;
  const handleLoadingImage = props.handleLoadingImage;
  const userText = props.userText;

  const filteredRadio = radioData.filter(
    (station) =>
      (station =
        station.name.toLowerCase().includes(userText.toLowerCase()) ||
        station.tagline.toLowerCase().includes(userText.toLowerCase()))
  );
  return filteredRadio.map((station) => (
    <li
      className="channel"
      key={station.id}
      style={{ backgroundColor: "#" + station.color }}
    >
      <img
        className="image"
        src={handleLoadingImage(station)}
        alt="Loading image"
        width={200}
        height={200}
      />
      <div className="channel-inner">
        <h2 className="name"> {station.name}</h2>
        <p className="text">{station.tagline}</p>
        <audio className="audio" controls>
          <source src={station.liveaudio.url} type="audio/mpeg"></source>
        </audio>
      </div>
    </li>
  ));
}
