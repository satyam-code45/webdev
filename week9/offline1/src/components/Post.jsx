import world from "../assets/world.png";
export function PostComponent({
  name,
  subtitle,
  description,
  profileImage,
  image,
  time,
  profileDescription,
}) {
  return (
    <div
      style={{
        width: 400,
        height: 320,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
      }}
    >
      <div style={{ padding: 5, display: "flex" }}>
        <img
          src={profileImage}
          style={{
            width: 45,
            height: 45,
            borderRadius: 40,
            marginRight: 3,
            margin: 8,
            marginTop: 20,
          }}
        />

        <div style={{ padding: 5, display: "flex", flexDirection: "column" }}>
          <div>
            <span style={{ fontWeight: "bold" }}>{name} </span>
            <span style={{ color: "gray" }}>(He/Him).1st</span>
          </div>
          <span style={{ color: "gray" }}>{subtitle}</span>
          <span style={{ color: "gray" }}>{profileDescription}</span>
          {time != undefined && (
            <div style={{ display: "flex" }}>
              <div style={{ color: "gray" }}>{time}</div>
              <img
                src={world}
                style={{ width: 15, height: 15, borderRadius: 3, marginTop: 2 }}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <p style={{ paddingLeft: 20, paddingRight: 10, marginTop: -1 }}>
          {name} {description} <span style={{ color: "gray" }}>...more</span>
        </p>
        <img
          src={image}
          style={{
            width: 370,
            height: 160,
            border: 1,
            borderRadius: 20,
            paddingLeft: 12,
            paddingRight: 1,
          }}
        />
      </div>
    </div>
  );
}
