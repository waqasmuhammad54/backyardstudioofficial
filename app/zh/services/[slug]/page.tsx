import type { Metadata } from "next";

const SLUGS = [
  "event-shoots","event-video-editing","dvcs","reels","photo-shoots",
  "social-media-content","testimonial-videos","ads-shooting","aerial-drone","corporate-films",
  "social-media-shoots","automotive","real-estate","corporate-videography","podcast",
  "youtube-content","event-videography","food","product-shoots","fashion-shoots",
  "travel-lifestyle","tv-commercials","car-commercials","corporate-brand-films","documentary",
  "hotel-photography","reels-production","brand-events","pre-post-production",
];

const SERVICE_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  "event-shoots":{ hero:"/images/events/event-01.webp", gallery:["/images/events/event-02.webp","/images/events/event-03.webp","/images/events/event-04.webp"] },
  "event-video-editing":{ hero:"/images/events/event-03.webp", gallery:["/images/events/event-01.webp","/images/events/event-05.webp"] },
  "dvcs":{ hero:"/images/creative/creative-04.webp", gallery:["/images/creative/creative-05.webp","/images/creative/creative-13.webp","/images/creative/creative-10.webp"] },
  "reels":{ hero:"/images/creative/creative-13.webp", gallery:["/images/creative/creative-24.webp","/images/creative/creative-04.webp","/images/creative/creative-10.webp"] },
  "photo-shoots":{ hero:"/images/creative/creative-04.webp", gallery:["/images/wedding/wedding-01.webp","/images/products/product-03.webp","/images/creative/creative-13.webp"] },
  "social-media-content":{ hero:"/images/creative/creative-05.webp", gallery:["/images/creative/creative-01.webp","/images/creative/creative-04.webp","/images/creative/creative-13.webp"] },
  "testimonial-videos":{ hero:"/images/events/event-04.webp", gallery:["/images/events/event-01.webp","/images/events/event-02.webp"] },
  "ads-shooting":{ hero:"/images/events/event-02.webp", gallery:["/images/creative/creative-04.webp","/images/products/product-03.webp","/images/events/event-03.webp"] },
  "aerial-drone":{ hero:"/images/wedding/wedding-01.webp", gallery:["/images/wedding/wedding-02.webp","/images/wedding/wedding-16.webp"] },
  "corporate-films":{ hero:"/images/events/event-05.webp", gallery:["/images/events/event-01.webp","/images/events/event-06.webp"] },
  "social-media-shoots":{ hero:"/images/creative/creative-05.webp", gallery:["/images/creative/creative-01.webp","/images/creative/creative-13.webp","/images/creative/creative-24.webp"] },
  "automotive":{ hero:"/images/events/event-02.webp", gallery:["/images/creative/creative-04.webp","/images/events/event-03.webp"] },
  "real-estate":{ hero:"/images/events/event-05.webp", gallery:["/images/events/event-01.webp","/images/creative/creative-13.webp"] },
  "corporate-videography":{ hero:"/images/events/event-01.webp", gallery:["/images/events/event-05.webp","/images/events/event-03.webp"] },
  "podcast":{ hero:"/images/events/event-04.webp", gallery:["/images/events/event-02.webp","/images/creative/creative-01.webp"] },
  "youtube-content":{ hero:"/images/creative/creative-01.webp", gallery:["/images/creative/creative-04.webp","/images/creative/creative-05.webp"] },
  "event-videography":{ hero:"/images/events/event-01.webp", gallery:["/images/events/event-02.webp","/images/events/event-03.webp","/images/events/event-05.webp"] },
  "food":{ hero:"/images/products/product-03.webp", gallery:["/images/products/product-01.webp","/images/creative/creative-05.webp"] },
  "product-shoots":{ hero:"/images/products/product-01.webp", gallery:["/images/products/product-03.webp","/images/creative/creative-13.webp"] },
  "fashion-shoots":{ hero:"/images/creative/creative-24.webp", gallery:["/images/creative/creative-04.webp","/images/creative/creative-10.webp","/images/creative/creative-13.webp"] },
  "travel-lifestyle":{ hero:"/images/creative/creative-10.webp", gallery:["/images/creative/creative-01.webp","/images/creative/creative-05.webp"] },
  "tv-commercials":{ hero:"/images/creative/creative-13.webp", gallery:["/images/creative/creative-04.webp","/images/events/event-02.webp"] },
  "car-commercials":{ hero:"/images/events/event-02.webp", gallery:["/images/creative/creative-04.webp","/images/creative/creative-10.webp"] },
  "corporate-brand-films":{ hero:"/images/events/event-05.webp", gallery:["/images/events/event-01.webp","/images/creative/creative-04.webp"] },
  "documentary":{ hero:"/images/events/event-06.webp", gallery:["/images/events/event-01.webp","/images/creative/creative-01.webp"] },
  "hotel-photography":{ hero:"/images/events/event-05.webp", gallery:["/images/events/event-04.webp","/images/creative/creative-05.webp"] },
  "reels-production":{ hero:"/images/creative/creative-13.webp", gallery:["/images/creative/creative-24.webp","/images/creative/creative-04.webp"] },
  "brand-events":{ hero:"/images/events/event-01.webp", gallery:["/images/events/event-02.webp","/images/events/event-05.webp","/images/events/event-06.webp"] },
  "pre-post-production":{ hero:"/images/creative/creative-01.webp", gallery:["/images/creative/creative-04.webp","/images/creative/creative-13.webp"] },
};
const DEFAULT_IMAGES = { hero:"/images/creative/creative-04.webp", gallery:["/images/events/event-01.webp","/images/creative/creative-13.webp"] };

const SERVICE_ZH: Record<string, { title: string; description: string; includes: string[]; faqs: { q: string; a: string }[] }> = {
  "event-shoots": { title: "迪拜活动摄影服务", description: "为迪拜及阿联酋的各类活动提供专业摄影服务——会议、企业活动、产品发布、婚礼及私人庆典。我们的团队确保电影级画质，并在48小时内交付素材。\n\n服务覆盖阿联酋全部七个酋长国，航拍在GCAA许可下执行。", includes: ["摄影师+摄像师团队","4至10小时拍摄","300张以上精修照片","专业精华集锦视频","48小时内交付","GCAA认证无人机航拍"], faqs: [{ q: "迪拜活动摄影费用是多少？", a: "活动摄影从半天3,000迪拉姆起，大型活动可达20,000迪拉姆以上。2小时内免费报价。" },{ q: "你们拍摄哪些类型的活动？", a: "会议、企业活动、产品发布、展览、婚礼及各类私人庆典均可承接。" },{ q: "素材多久能交付？", a: "活动照片和视频在拍摄结束后48小时内交付。" },{ q: "迪拜以外的地区也服务吗？", a: "是的，我们覆盖阿联酋全部七个酋长国——阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。" }] },
  "event-video-editing": { title: "活动视频剪辑与后期制作", description: "专业的活动视频剪辑与制作——将数小时原始素材剪辑成动感精华视频和Reels，并进行电影级调色。\n\n我们既可处理自有摄影团队拍摄的素材，也可接受客户外部拍摄的素材。", includes: ["专业视频剪辑","电影级调色","版权授权背景音乐","添加品牌Logo及图形","多格式交付（MP4、ProRes）","两轮免费修改"], faqs: [{ q: "活动视频剪辑需要多长时间？", a: "根据素材量，专业剪辑通常需要2至5个工作日。" },{ q: "可以处理外部拍摄的素材吗？", a: "可以，我们接受任何摄像机和格式的素材。" },{ q: "提供哪些交付格式？", a: "高清MP4、广播级ProRes以及针对社交媒体压缩的版本。" },{ q: "提供字幕服务吗？", a: "是的，根据需求提供中文、阿拉伯文和英文字幕。" }] },
  "dvcs": { title: "迪拜DVC商业视频制作", description: "为阿联酋品牌制作专业DVC广告视频——从数字社交媒体广告到广播级电视广告一应俱全。\n\n全程创意服务：概念策划、剧本创作、拍摄制作到最终交付。", includes: ["创意概念及剧本开发","完整摄制组","专业演员（按需提供）","4K电影级拍摄","剪辑与专业调色","所有格式与分辨率交付"], faqs: [{ q: "迪拜DVC制作费用是多少？", a: "DVC从数字视频15,000迪拉姆起，高制作标准电视广告可达150,000迪拉姆以上。" },{ q: "制作一部广告需要多长时间？", a: "社交媒体版本5至7天，电视版本从概念到交付需2至4周。" },{ q: "可以制作中文和阿拉伯文版本吗？", a: "可以，我们提供包括中文、阿拉伯文和英文在内的多语言版本制作。" },{ q: "有与奢侈品牌合作的经验吗？", a: "有，我们在汽车、旅游、时尚和房地产行业的阿联酋奢侈品牌合作方面拥有丰富经验。" }] },
  "reels": { title: "迪拜Reels短视频制作", description: "为迪拜品牌和个人账号制作专业短视频Reels——专为Instagram、TikTok和YouTube Shorts算法优化的内容。\n\n团队持续跟踪最新热门趋势和音频，最大化提升互动率。", includes: ["3至8条精剪Reels","横版、竖版及方形格式","版权授权热门音频","内容引导文案","48小时内完成交付","每条帖子配套话题标签策略"], faqs: [{ q: "一天能拍多少条Reels？", a: "全天拍摄可出6至8条精剪Reels，半天可出3至4条。" },{ q: "你们会帮助构思内容吗？", a: "会，我们的创意团队在拍摄日前提供概念和脚本策划。" },{ q: "迪拜Reels制作费用是多少？", a: "短时拍摄从2,500迪拉姆起，整天内容日从5,500迪拉姆以上。" },{ q: "Reels适合所有行业吗？", a: "适合——餐饮、时尚、房地产、酒店、零售、专业服务和个人品牌均适用。" }] },
  "photo-shoots": { title: "迪拜专业摄影服务", description: "迪拜各类场景的创意摄影——情侣、家庭、时尚造型、品牌内容及杂志级拍摄，充分利用迪拜标志性场景。\n\n每次拍摄均包含全套专业后期修图及高分辨率照片交付。", includes: ["经验丰富的创意摄影师","迪拜优质场景选取","4K无反光镜相机拍摄","100至400张以上精修照片","专属网络相册下载","48小时内交付"], faqs: [{ q: "摄影拍摄需要多长时间？", a: "根据选择的套餐和拍摄场景数量，拍摄时长从2小时到8小时不等。" },{ q: "迪拜最佳拍摄场地有哪些？", a: "推荐Downtown市中心、棕榈岛、老迪拉、Al Safa公园以及迪拜工业区等特色场景。" },{ q: "提供质量保证吗？", a: "提供，对任何不符合期望的照片免费重拍。" },{ q: "迪拜摄影费用是多少？", a: "2小时拍摄从1,500迪拉姆起，含视频的全套婚礼摄影可达8,500迪拉姆。" }] },
  "social-media-content": { title: "迪拜社交媒体内容制作", description: "制作高质量社交媒体内容——照片、视频、Reels和Stories，提升互动率、强化品牌形象。一次拍摄解决一个月的内容需求。\n\n拍摄、剪辑到交付，内容直接可发布至Instagram、TikTok、LinkedIn和Snapchat。", includes: ["照片+视频合一拍摄","剪辑完成的Reels和TikTok","Stories专属内容","多平台适配格式","话题标签策略与文案","内容日历及发布计划"], faqs: [{ q: "一天能产出多少内容？", a: "全天拍摄可出6至8条Reels和50至80张精修照片，足够4至6周每日发布。" },{ q: "拍摄前会规划内容吗？", a: "会，我们的团队在拍摄前3天提供详细的内容概念和脚本方案。" },{ q: "迪拜月度内容套餐费用是多少？", a: "月度套餐从每月8,000迪拉姆起，含两个拍摄日。" },{ q: "服务所有行业吗？", a: "是的——餐厅、酒店、零售、诊所、房地产、时尚及阿联酋各类企业均可服务。" }] },
  "testimonial-videos": { title: "迪拜客户证言视频制作", description: "为迪拜品牌制作专业客户证言视频——真实客户故事，提升网站、广告和社交媒体的信任度与转化率。\n\n全程把控：准备、拍摄和专业棚拍风格剪辑。", includes: ["受访者准备与引导","专业灯光与录音","完整剪辑与调色","中英文字幕","多格式网站与广告版本","3个工作日内交付"], faqs: [{ q: "拍摄证言视频需要多长时间？", a: "单次证言拍摄1至2小时，剪辑完成的视频3天内交付。" },{ q: "一天可以拍多个证言吗？", a: "可以，一个拍摄日可拍摄3至5个证言视频。" },{ q: "证言视频如何用于营销？", a: "可用于社交媒体广告、网站首页、电子邮件营销和销售演示。" },{ q: "支持中文拍摄吗？", a: "支持，我们提供中文、阿拉伯文和英文三种语言的证言拍摄。" }] },
  "ads-shooting": { title: "广告拍摄与营销活动制作", description: "为迪拜品牌提供高质量广告拍摄——社交媒体、印刷和户外广告的照片与视频，吸引眼球并提升转化。\n\n丰富的产品、服务和品牌广告拍摄经验，已服务超过40家客户。", includes: ["创意广告方案策划","广告级照片与视频拍摄","专业灯光与场景布置","剪辑与专业后期处理","所需格式全套交付","两轮免费修改"], faqs: [{ q: "广告拍摄与社交媒体内容有何区别？", a: "广告拍摄需要更高的制作标准和创意执导，而社交媒体内容侧重数量和趋势跟随。" },{ q: "与营销代理商合作吗？", a: "合作，我们为迪拜和阿布扎比超过20家营销代理商提供服务。" },{ q: "广告活动制作需要多长时间？", a: "数字广告从拍摄到交付通常需要3至7个工作日。" },{ q: "制作付费广告专用内容吗？", a: "制作，我们专门为Meta、Google和TikTok付费广告活动优化内容。" }] },
  "aerial-drone": { title: "GCAA认证无人机航拍服务", description: "阿联酋全境合法授权无人机航拍——所有商业航拍均在GCAA许可下执行。为房地产、活动和品牌广告提供4K电影级航拍画面。\n\n所有拍摄均已投保并获得阿联酋相关部门授权。", includes: ["GCAA认证无人机飞手","官方许可证协调办理","4K+慢动作航拍","专业电影级调色","RAW原始文件随附","24小时内交付"], faqs: [{ q: "迪拜商业航拍需要许可证吗？", a: "需要，商业航拍须持有GCAA许可证。我们负责办理所有审批手续。" },{ q: "哪些地方禁止航拍？", a: "机场附近、政府设施及限制区域禁止航拍。我们事先对每个拍摄地点进行审查。" },{ q: "迪拜无人机航拍费用是多少？", a: "附加至现有拍摄项目从2,000迪拉姆起，单独无人机拍摄日4,500迪拉姆，多地点广告活动从12,000迪拉姆起。" },{ q: "使用什么设备？", a: "大疆Mavic 3 Pro和Enterprise，支持60fps 4K拍摄，配备完整调色流程。" }] },
  "corporate-films": { title: "迪拜企业形象片制作", description: "为迪拜企业制作专业企业形象片——从品牌宣传片到人力资源影片和产品展示，用电影语言讲述企业故事。\n\n服务过跨国企业、政府机构和阿联酋初创公司。", includes: ["概念策划与剧本创作","4K电影级拍摄","高管访谈拍摄","办公室与团队拍摄","剪辑、调色与原创配乐","中文、阿拉伯文和英文版本"], faqs: [{ q: "企业形象片需要多长时间？", a: "完整企业形象片从准备到最终交付需要2至3周。" },{ q: "企业形象片最佳时长是多少？", a: "网站和演示用2至5分钟，社交媒体和广告用60至90秒。" },{ q: "迪拜企业形象片费用是多少？", a: "数字形象片从15,000迪拉姆起，旗舰级企业电影项目可达100,000迪拉姆以上。" },{ q: "提供字幕服务吗？", a: "提供中文、阿拉伯文和英文字幕，按需提供配音服务。" }] },
  "social-media-shoots": { title: "迪拜社交媒体专项拍摄", description: "专为社交媒体内容设计的摄影拍摄——提升互动率的专业Reels、封面图和Stories，在迪拜最佳场景取景。\n\n每次拍摄前进行内容概念、造型和场景咨询。", includes: ["迪拜标志场景拍摄","Reels+照片+Stories","品牌定制内容概念","多平台发布就绪格式","48小时内交付","单日三个场景拍摄"], faqs: [{ q: "社交媒体拍摄与品牌内容有何区别？", a: "社交媒体拍摄注重速度和趋势跟随，品牌内容更注重制作质量和视觉一致性。" },{ q: "单次拍摄产出多少照片/视频？", a: "全天拍摄可出50至80张精修照片和6至8条精剪Reels。" },{ q: "为网红博主拍摄吗？", a: "拍摄，我们专注于迪拜个人品牌和网红博主的专业拍摄。" },{ q: "内容什么时候能收到？", a: "所有Reels和照片在拍摄后48小时内交付。" }] },
  "automotive": { title: "迪拜汽车摄影服务", description: "专业汽车摄影，以电影风格呈现美学与设计之美——适用于汽车经销商、杂志和广告活动，以迪拜标志场景为背景。\n\n丰富的豪华车型、国际品牌和汽车运动拍摄经验。", includes: ["内饰与外观拍摄","迪拜标志场景背景","GCAA无人机航拍","高质量精修照片","电影级汽车视频","48小时内交付"], faqs: [{ q: "迪拜最佳汽车拍摄场地是哪里？", a: "推荐迪拉溪、工业区、市中心Downtown以及迪拜风景优美的立交桥周边。" },{ q: "拍摄豪华车和跑车吗？", a: "拍摄，有丰富的法拉利、兰博基尼、劳斯莱斯及商用车拍摄经验。" },{ q: "汽车拍摄需要航拍吗？", a: "不是必须的，但航拍能增添震撼视角，额外费用从2,000迪拉姆起。" },{ q: "迪拜汽车拍摄费用是多少？", a: "半天拍摄从3,000迪拉姆起，完整汽车广告视频可达25,000迪拉姆以上。" }] },
  "real-estate": { title: "迪拜房产摄影服务", description: "为迪拜公寓、办公室、别墅和开发项目提供专业房产摄影——吸引买家和租户的高质量照片与视频。\n\nGCAA认证无人机航拍、虚拟参观视频和完整项目影像呈现。", includes: ["室内外全方位拍摄","GCAA无人机航拍","专业后期修图","虚拟参观视频","24小时内交付","完整商业使用权"], faqs: [{ q: "为什么房产销售需要专业摄影？", a: "有专业照片的房产在平台上的销售速度快32%，浏览量高出60%。" },{ q: "拍摄在建项目吗？", a: "拍摄，我们承接各阶段施工进度记录和施工进度视频制作。" },{ q: "迪拜房产摄影费用是多少？", a: "小型公寓从2,000迪拉姆起，别墅从5,000迪拉姆起，大型项目从10,000迪拉姆起。" },{ q: "提供夜间房产摄影吗？", a: "提供，夜间和黄昏拍摄包含在我们的综合套餐中。" }] },
  "corporate-videography": { title: "企业视频拍摄与会议记录", description: "迪拜企业活动、会议和年会的专业视频拍摄——多机位记录每个重要瞬间。\n\n多机位设置、专业录音及按需提供直播服务。", includes: ["多机位设置","演讲及分组会议拍摄","无线嘉宾话筒","直播服务（按需）","48小时快速剪辑","多格式精剪片段"], faqs: [{ q: "承接大型会议拍摄吗？", a: "承接，曾服务超过5,000人的会议，在迪拜和阿布扎比主要会议中心均有作业经验。" },{ q: "提供直播服务吗？", a: "提供，可完整搭建YouTube、Zoom及其他平台的直播系统。" },{ q: "迪拜会议拍摄费用是多少？", a: "简单设备全天从7,500迪拉姆起，大型论坛可达50,000迪拉姆以上。" },{ q: "剪辑视频什么时候能收到？", a: "剪辑完成的视频在活动结束后48至72小时内交付。" }] },
  "podcast": { title: "迪拜播客制作服务", description: "为迪拜品牌和个人提供完整播客制作——专业棚拍设备确保音频和视频播客的高品质呈现。\n\n制作适配Spotify、Apple Podcasts和YouTube发布的播客内容。", includes: ["多麦克风多机位设置","4K视频播客","音频处理与降噪","完整音频与视频剪辑","单集封面设计","上传至各平台（按需）"], faqs: [{ q: "可以在我们办公室录制播客吗？", a: "可以，我们携带全套设备上门录制。" },{ q: "迪拜播客单集制作费用是多少？", a: "含剪辑的完整视频播客单集从4,000迪拉姆起。" },{ q: "帮助策划播客内容吗？", a: "提供结构、问题和形式方面的建议，但不代写完整脚本。" },{ q: "单集制作需要多长时间？", a: "拍摄1至2小时，剪辑与交付2至3天。" }] },
  "youtube-content": { title: "迪拜YouTube内容制作", description: "为迪拜品牌和创作者制作专业YouTube内容——长视频、Shorts和Reels，兼顾高制作水准。\n\n从拍摄到剪辑、封面设计和SEO优化——完整制作流程一站搞定。", includes: ["4K专业摄像机拍摄","含转场和音乐的完整剪辑","吸睛封面图设计","描述与关键词优化","高质量YouTube Shorts","每周发布计划"], faqs: [{ q: "在迪拜任何地点拍摄吗？", a: "拍摄，可在您的办公室、住所或任何选定地点取景。" },{ q: "每月制作多少YouTube视频？", a: "月度套餐包含4至8条长视频加每周Shorts。" },{ q: "YouTube视频制作费用是多少？", a: "含剪辑和封面图的完整YouTube视频从3,500迪拉姆起。" },{ q: "帮助频道成长吗？", a: "为每条视频提供SEO优化并进行竞品分析。" }] },
  "event-videography": { title: "活动与会议视频摄制", description: "迪拜活动和会议的全面视频摄制——多机位电影级拍摄，记录每个重要时刻。\n\n当天快速剪辑社交媒体精华片段，并提供完整档案记录。", includes: ["多机位拍摄","无线演讲话筒","快速精华片段剪辑","社交媒体Reels和短片","完整活动档案","当天交付精剪片段"], faqs: [{ q: "活动拍摄用几台摄像机？", a: "根据活动规模配置2至5台摄像机，确保全方位多角度覆盖。" },{ q: "拍摄夜间活动吗？", a: "拍摄，设备专为弱光环境拍摄设计。" },{ q: "精剪片段多久能出？", a: "社交媒体精剪片段在拍摄完成后2至4小时内交付。" },{ q: "提供附加摄影师吗？", a: "提供，可搭配照片+视频组合套餐，享受更优惠价格。" }] },
  "food": { title: "迪拜餐厅美食摄影", description: "为迪拜餐厅、食品店和外卖服务提供专业美食摄影——提升食欲、促进销售的高质量照片。\n\n丰富的迪拜顶级餐厅合作经验和餐饮营销活动制作经历。", includes: ["专业菜单摄影","美食专业灯光","杂志级后期处理","横版、竖版和俯拍照片","24小时内交付","完整使用授权"], faqs: [{ q: "迪拜美食摄影费用是多少？", a: "半天拍摄20至40道菜品从2,500迪拉姆起。" },{ q: "在餐厅还是棚内拍摄？", a: "两种均可——餐厅拍摄保留真实氛围，棚拍提供完整灯光控制。" },{ q: "一天能拍多少道菜？", a: "半天15至25道，全天30至60道，具体取决于菜品复杂程度。" },{ q: "提供美食造型师吗？", a: "提供，我们与专业美食造型师合作，确保菜品呈现完美。" }] },
  "product-shoots": { title: "迪拜电商产品摄影", description: "为迪拜品牌和网店提供专业产品摄影——纯白背景、生活场景和广告级照片，提升转化率。\n\n专注于电商、社交媒体、产品目录和印刷材料的产品摄影。", includes: ["白底及纯净背景拍摄","产品生活场景拍摄","多角度拍摄","透明背景PNG文件","24小时内交付","适配Amazon、Noon等平台格式"], faqs: [{ q: "一天能拍多少个产品？", a: "半天15至30个，全天40至80个，具体取决于产品复杂程度。" },{ q: "提供Amazon.ae和Noon平台适用的照片吗？", a: "提供，交付格式符合Amazon.ae、Noon及其他阿联酋平台的要求规范。" },{ q: "迪拜产品摄影费用是多少？", a: "10至15个白底产品拍摄从1,800迪拉姆起。" },{ q: "产品拍摄可以加入模特吗？", a: "可以，我们提供专业模特配合产品生活场景拍摄。" }] },
  "fashion-shoots": { title: "迪拜时装摄影服务", description: "迪拜杂志级时装摄影——为设计师、时装公司和时尚品牌提供彰显品牌个性的创意拍摄。\n\n丰富的阿联酋和海湾地区设计师及时尚出版物合作经验。", includes: ["认证专业模特","造型师与专业灯光","迪拜标志场景","100至400张以上精修照片","时装Reels社交媒体版本","48小时内交付"], faqs: [{ q: "时装拍摄提供模特资源吗？", a: "提供，我们与迪拜顶级模特经纪公司合作。" },{ q: "棚拍与外拍有何区别？", a: "棚拍提供完整灯光和背景控制，外拍增添自然动感。" },{ q: "迪拜时装拍摄费用是多少？", a: "单模特半天从5,000迪拉姆起，完整时装广告活动可达20,000迪拉姆以上。" },{ q: "拍摄端庄服饰和头巾时装吗？", a: "拍摄，我们在端庄时装和阿拉伯服饰摄影方面拥有丰富经验。" }] },
  "travel-lifestyle": { title: "阿联酋旅游与生活方式摄影", description: "旅游与生活方式摄影，展现迪拜和阿联酋之美——适用于杂志、旅游网站和数字平台。\n\n服务过度假村、酒店、餐厅、景点和沙漠探险项目。", includes: ["精选旅游场景拍摄","照片+视频+Reels","生活方式概念策划","阿联酋体验专题呈现","无人机航拍（按需）","完整数字发布授权"], faqs: [{ q: "为杂志和旅游网站拍摄吗？", a: "拍摄，我们有为旅游杂志和区域旅游运营商制作旅游内容的经验。" },{ q: "迪拜拍摄的最佳季节是什么时候？", a: "十月至三月是户外拍摄的最佳时段。" },{ q: "拍摄沙漠、海滩和山地场景吗？", a: "拍摄，我们覆盖所有环境——沙漠、海滩、山地和城市场景。" },{ q: "阿联酋旅游内容制作费用是多少？", a: "单场景半天从5,000迪拉姆起，综合旅游广告活动可达25,000迪拉姆以上。" }] },
  "tv-commercials": { title: "迪拜电视广告（TVC）制作", description: "为阿联酋品牌制作广播级电视广告——从完整制作到适配UAE频道的最终版本交付。\n\n完整制作服务：剧本创作、拍摄制作、剪辑、调色、音效与最终交付。", includes: ["导演与创意团队","电视广播标准拍摄","场地租赁与拍摄许可","专业演员与摄制组","剪辑、调色与版权配乐","阿拉伯文和英文版本及技术规格"], faqs: [{ q: "迪拜TVC制作费用是多少？", a: "标准广告从45,000迪拉姆起，顶级广告活动可达200,000迪拉姆以上。" },{ q: "TVC制作需要多少周？", a: "从首次简报到最终交付需要4至8周。" },{ q: "符合MBC和迪拜TV的播出标准吗？", a: "符合，我们按照阿联酋和阿拉伯语频道的所有技术规格交付。" },{ q: "只制作阿拉伯文TVC吗？", a: "也制作，提供完整阿拉伯文版本，包括阿拉伯文文案撰写、导演和表演。" }] },
  "car-commercials": { title: "迪拜与阿联酋汽车广告制作", description: "阿联酋最高制作水准的汽车广告——电影级拍摄，为国际汽车集团呈现设计美学与驾驶动感。\n\n涵盖豪华车、跑车、家用车及商用车广告拍摄经验。", includes: ["汽车广告专业导演","迪拜赛道及标志场景拍摄","GCAA无人机航拍","剪辑与专业特效","原创或版权配乐","电视及数字平台多版本"], faqs: [{ q: "迪拜汽车广告费用是多少？", a: "数字视频从25,000迪拉姆起，完整电视制作可达150,000迪拉姆以上。" },{ q: "可以在迪拜主要道路上拍摄吗？", a: "我们与相关部门协调，获取道路和公共场所拍摄许可。" },{ q: "提供拍摄专业驾驶员吗？", a: "提供，我们与经验丰富的驾驶员合作，配合拍摄最佳特技镜头。" },{ q: "完整汽车广告活动需要多长时间？", a: "从简报到交付需要3至5周。" }] },
  "corporate-brand-films": { title: "迪拜企业品牌影片", description: "以情感叙事讲述企业故事的电影级品牌影片——适用于网站、展览、投资人路演和大型营销活动。\n\n服务过财富500强、初创公司和阿联酋政府机构。", includes: ["品牌故事策划","电影级导演","多天拍摄","企业高管访谈","原创音乐配乐","多时长版本"], faqs: [{ q: "企业影片与品牌影片有何区别？", a: "品牌影片侧重情感共鸣和价值传递，企业影片侧重展示服务、团队和成就。" },{ q: "品牌影片最佳时长是多少？", a: "网站版2至4分钟，社交媒体和广告版60至90秒。" },{ q: "迪拜品牌影片费用是多少？", a: "从25,000迪拉姆起，顶级企业电影项目可达200,000迪拉姆以上。" },{ q: "提供几轮修改？", a: "最终交付前提供3轮完整修改。" }] },
  "documentary": { title: "阿联酋纪录片制作", description: "为品牌、社会公益项目、政府机构和文化项目制作专业纪录片——阿联酋及更广泛地区。\n\n联合创始人Mazhar Zaidi记录了900多个历史故事，为我们的纪录片工作奠定独特基础。", includes: ["深度调研与前期准备","多地点多天拍摄","深入访谈记录","专业解说配音（按需）","剪辑与电影级调色","广播与网络多格式交付"], faqs: [{ q: "纪录片制作需要多长时间？", a: "短纪录片（10至20分钟）需4至8周，长片需3至6个月。" },{ q: "制作哪些类型的纪录片？", a: "品牌纪录片、社会议题、文化、企业和新闻纪录片均可制作。" },{ q: "支持中文纪录片制作吗？", a: "支持，可制作中文旁白纪录片，并可添加其他语言字幕。" },{ q: "纪录片制作费用是多少？", a: "短品牌纪录片从20,000迪拉姆起，长片项目可达200,000迪拉姆以上。" }] },
  "hotel-photography": { title: "迪拜酒店与度假村摄影", description: "为预订平台和营销活动提供专业酒店与度假村摄影——提升入住率的高质量影像。\n\n服务过迪拜、阿布扎比及阿联酋各地5星级酒店和高端度假村。", includes: ["客房与套房室内摄影","设施与公共区域拍摄","餐厅与餐饮项目拍摄","无人机航拍","夜间建筑与泳池拍摄","无限商业使用权"], faqs: [{ q: "为什么酒店需要专业摄影？", a: "有专业照片的酒店在预订平台上的点击量高出40%，入住率显著提升。" },{ q: "最佳酒店拍摄时间是什么时候？", a: "日出或日落时分自然光最佳。" },{ q: "迪拜酒店摄影费用是多少？", a: "客房与设施全天拍摄从8,000迪拉姆起，大型多天项目可达50,000迪拉姆以上。" },{ q: "迪拜以外的酒店也服务吗？", a: "服务，覆盖阿联酋全境酒店和度假村，并可前往沙特阿拉伯和科威特。" }] },
  "reels-production": { title: "品牌商业Reels专业制作", description: "为迪拜品牌制作商业Reels——专为病毒式传播和商业转化设计的短视频内容，从创意到发布48小时内完成。\n\n团队持续追踪各平台最新趋势，针对性优化内容以最大化覆盖范围。", includes: ["个性化Reels策略规划","4K专业拍摄","热门转场和音乐剪辑","优化文案与话题标签","9:16+1:1+16:9全平台格式","48小时内交付"], faqs: [{ q: "品牌最有效的Reels类型是什么？", a: "前后对比、幕后花絮、客户故事、产品展示和知识科普类内容互动率最高。" },{ q: "一天制作多少条Reels？", a: "全天制作日可出6至10条精剪Reels。" },{ q: "可以用现有素材进行剪辑吗？", a: "可以，我们对现有素材进行剪辑和再制作，产出专业Reels。" },{ q: "迪拜单条Reel制作费用是多少？", a: "套餐内单条专业Reel从750迪拉姆起。" }] },
  "brand-events": { title: "企业活动与品牌发布会", description: "迪拜产品发布、品牌日和企业晚宴的专业摄影与视频摄制——现场记录与即时社交媒体内容双管齐下。\n\n多名摄影师和摄像师同时在场，确保每个重要时刻全面覆盖。", includes: ["多机位专业拍摄","摄影师+摄像师配置","当天活动Reels","新闻级照片和专业肖像","完整精剪集锦视频","24小时内交付"], faqs: [{ q: "产品发布会需要几名摄影师？", a: "小型活动推荐1至2名摄影师，大型发布会建议2至4名。" },{ q: "活动现场能即时出Reels吗？", a: "能，拍摄完成后1至2小时内交付短Reels，可即时发布。" },{ q: "品牌发布会摄影费用是多少？", a: "全天从7,500迪拉姆起，大型发布会可达30,000迪拉姆以上。" },{ q: "与公关团队协调配合吗？", a: "配合，我们与公关团队协调，确保最佳覆盖时机和拍摄角度。" }] },
  "pre-post-production": { title: "前期与后期制作服务", description: "视频项目完整的前期与后期制作服务——从剧本创作、分镜设计到剪辑、调色、音效和最终交付。\n\n专业的后期制作团队覆盖全流程：Adobe Premiere Pro、DaVinci Resolve、After Effects。", includes: ["剧本创作与分镜设计","制作统筹与拍摄日程规划","专业精剪剪辑","一级二级调色处理","音频混音与降噪","广播及网络多格式交付"], faqs: [{ q: "接受外部拍摄素材吗？", a: "接受，我们接收任何摄像机和格式的素材。" },{ q: "使用哪些剪辑软件？", a: "剪辑和调色使用Adobe Premiere Pro和DaVinci Resolve，特效使用After Effects。" },{ q: "迪拜视频剪辑费用是多少？", a: "短视频从1,500迪拉姆起，大型制作项目可达15,000迪拉姆以上。" },{ q: "包含几轮修改？", a: "所有项目在最终交付前包含2轮完整修改。" }] },
};

const DEFAULT_ZH = {
  title: "迪拜专业影视制作服务",
  description: "为迪拜及阿联酋的品牌和个人提供高质量创意制作服务。专业团队拥有6年以上经验，完成超过2,400个项目。",
  includes: ["专业摄制团队","顶级设备","48小时内交付","完整使用授权","两轮免费修改","交付后支持服务"],
  faqs: [
    { q: "如何获取报价？", a: "通过WhatsApp或联系表单发送项目描述，我们将在2小时内回复详细报价。" },
    { q: "服务迪拜以外的地区吗？", a: "是的，覆盖阿联酋全部七个酋长国。" },
    { q: "提供什么质量保证？", a: "我们承诺完全满意，并免费修改直至您认可为止。" },
    { q: "有定制套餐吗？", a: "有，每个项目均单独评估报价。请发送需求，我们将提供合适的方案。" },
  ],
};

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = SERVICE_ZH[params.slug] || DEFAULT_ZH;
  const pageUrl = `https://www.backyardstudioofficial.com/zh/services/${params.slug}`;
  return {
    title: `${s.title} | Backyard Studio Official — 迪拜`,
    description: s.description.split("\n")[0].slice(0, 155),
    alternates: {
      canonical: pageUrl,
      languages: {
        "en": `https://www.backyardstudioofficial.com/services/${params.slug}`,
        "ar": `https://www.backyardstudioofficial.com/ar/services/${params.slug}`,
        "ru": `https://www.backyardstudioofficial.com/ru/services/${params.slug}`,
        "zh": pageUrl,
        "x-default": `https://www.backyardstudioofficial.com/services/${params.slug}`,
      },
    },
    openGraph: {
      title: `${s.title} | Backyard Studio Official`,
      description: s.description.split("\n")[0].slice(0, 155),
      url: pageUrl,
      locale: "zh_AE",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function ZhServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICE_ZH[params.slug] || { ...DEFAULT_ZH, title: params.slug.replace(/-/g, " ") };
  const imgs = SERVICE_IMAGES[params.slug] || DEFAULT_IMAGES;
  const pageUrl = `https://www.backyardstudioofficial.com/zh/services/${params.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description.split("\n")[0],
    "url": pageUrl,
    "provider": { "@type": "LocalBusiness", "name": "Backyard Studio Official", "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" } },
    "areaServed": "AE",
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <div style={{ position: "relative", height: "60vh", minHeight: "380px", overflow: "hidden" }}>
        <img src={imgs.hero} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.8) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <a href="/zh/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(245,240,225,0.55)", fontSize: "0.8rem", textDecoration: "none", marginBottom: "1rem", fontFamily: "'Noto Sans SC', sans-serif" }}>← 所有服务</a>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.8)", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "0.75rem", textTransform: "uppercase" }}>Backyard Studio Official</p>
          <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 7vw, 5rem)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.1 }}>{service.title}</h1>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "start" }}>
          <div>
            {service.description.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.25rem" }}>{para}</p>
            ))}
            {imgs.gallery.length > 0 && (
              <div style={{ marginTop: "3rem" }}>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "1.5rem", textTransform: "uppercase" }}>作品展示</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                  {imgs.gallery.slice(0, 3).map((src, i) => (
                    <div key={i} style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px" }}>
                      <img src={src} alt={`${service.title} — 作品 ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>服务内容</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {service.includes.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }}>✓</span>
                    <span style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {service.faqs.length > 0 && (
              <div style={{ marginTop: "3rem" }}>
                <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>常见问题</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {service.faqs.map((faq, i) => (
                    <div key={i} style={{ padding: "1.25rem 1.5rem", background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                      <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.5rem" }}>{faq.q}</p>
                      <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.83rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ padding: "2rem", border: "1px solid var(--gold)", background: "#111", borderRadius: "4px" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--cream)", marginBottom: "0.5rem" }}>获取报价</h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>告诉我们您的项目需求，2小时内回复。</p>
              <a href="/zh/contact" style={{ display: "block", textAlign: "center", background: "var(--gold)", color: "#000", padding: "0.85rem 1rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", marginBottom: "0.75rem", fontSize: "0.85rem" }}>立即咨询</a>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.85rem 1rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "0.85rem" }}>WhatsApp 联系</a>
            </div>
            <div style={{ padding: "1.25rem", border: "1px solid rgba(255,255,255,0.08)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.65rem", letterSpacing: "0.15em", marginBottom: "0.75rem", textTransform: "uppercase" }}>服务地区</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["迪拜", "阿布扎比", "沙迦", "阿治曼", "哈伊马角", "富查伊拉", "乌姆盖万"].map((c) => (
                  <span key={c} style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.72rem", color: "rgba(245,240,225,0.55)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px" }}>{c}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: "1.25rem", border: "1px solid rgba(255,255,255,0.08)", background: "#111", borderRadius: "4px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", marginBottom: "0.75rem" }} />
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.65rem", letterSpacing: "0.15em", marginBottom: "0.25rem", textTransform: "uppercase" }}>平均响应时间</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.75rem", fontWeight: 900, color: "var(--cream)" }}>2小时</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", marginTop: "0.25rem" }}>响应所有咨询</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
