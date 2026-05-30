import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务地区 | 迪拜及阿联酋全境 Backyard Studio Official",
  description: "Backyard Studio Official服务覆盖阿联酋全境：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富吉拉、乌姆盖万。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/locations" },
};

const LOCATIONS = [
  {
    city: "迪拜",
    en: "Dubai",
    desc: "总部所在地。服务区域涵盖迪拜商湾、迪拜码头、棕榈岛、老城区、迪拜溪港、迪拜市中心等所有区域。",
    icon: "🏙️",
  },
  {
    city: "阿布扎比",
    en: "Abu Dhabi",
    desc: "覆盖阿布扎比岛、萨迪亚特岛、亚斯岛、阿布扎比CBD及阿布扎比机场区域。",
    icon: "🕌",
  },
  {
    city: "沙迦",
    en: "Sharjah",
    desc: "沙迦全境摄影摄像服务，包括沙迦海滨、布海拉湖、沙迦文化广场等标志地点。",
    icon: "🌊",
  },
  {
    city: "阿治曼",
    en: "Ajman",
    desc: "阿治曼海滨、阿治曼商业区及周边区域专业拍摄服务。",
    icon: "⛵",
  },
  {
    city: "哈伊马角",
    en: "Ras Al Khaimah",
    desc: "哈伊马角山地、海滩及度假村摄影摄像，无人机航拍一览壮阔山海。",
    icon: "⛰️",
  },
  {
    city: "富吉拉",
    en: "Fujairah",
    desc: "东海岸海滩、富吉拉堡、瓦迪活动摄影全覆盖。",
    icon: "🏖️",
  },
  {
    city: "乌姆盖万",
    en: "Umm Al Quwain",
    desc: "乌姆盖万滨海区域及周边摄影摄像服务。",
    icon: "🌅",
  },
];

export default function ZhLocationsPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          服务地区
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          覆盖阿联酋全境七个酋长国，随时为您提供专业摄影摄像服务。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.75rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{loc.icon}</div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.25rem" }}>{loc.city}</h2>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{loc.en}</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.8, fontSize: "0.875rem" }}>{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          您的项目在哪里？我们来找您
        </h2>
        <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}>
          预约上门拍摄
        </a>
      </section>
    </>
  );
}
