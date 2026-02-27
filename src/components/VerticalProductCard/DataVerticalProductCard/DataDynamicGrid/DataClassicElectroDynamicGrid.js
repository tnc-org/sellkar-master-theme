export const DataClassicElectroDynamicGrid = [

   
    {
        id: 1,
        image: "/ThemeClassicElectro/grid1.png",
        category: "AUDIO",
        title: "AirPods Max",
        subtitle: "Every detail, from canopy to cushions, has\nbeen designed for an exceptional fit.",
        categoryColor: "text-white",
        titleColor: "text-white",
        subtitleColor: "text-white",
        grid: "md:row-span-2 md:col-span-1", // Takes 2 rows, 1 column
        contentAlign: "center",
        textAlign: "center",
        bgOverlay: "bg-gradient-to-t from-black/60 to-transparent",
        buttonProps: {
            text: "SHOP NOW",
            textColor: "text-white",
            border: "border-b-2 border-white",
        },
    },
    {
        id: 2,
        video: "/ThemeVideo/video1.mp4",
         isVideo: true, // Enable video mode
        autoPlay: false,
        videoThumbnail: "/ThemeClassicElectro/grid3.png",
        title: "",
        hasPlayButton: true,
        contentAlign: "center",
        textAlign: "center",
        grid: "md:col-span-1 md:row-span-1", // 1 column, 1 row (top-middle)
    },
    {
        id: 3,
        image: "ThemeClassicElectro/grid2.png",
        category: "HERO 12",
        subtitle: "Incredible image quality, even better\nHyperSmooth video stabilization.",
        categoryColor: "text-white",
        titleColor: "text-white",
        subtitleColor: "text-white",
        contentAlign: "left",
        textAlign: "left",
        itemStart: true,
        bgOverlay: "bg-gradient-to-br from-black/50 to-transparent",
        grid: "md:col-span-1 md:row-span-1", // 1 column, 1 row (top-right)
        buttonProps: {
            text: "SHOP NOW",
            textColor: "text-white",
            border: "border-b-2 border-white",
        },
    },
    {
        id: 4,
        image: "ThemeClassicElectro/grid4.png",
        category: "KIDS",
        title: "Kids Smartwatch",
        subtitle: "Keep them active with fun games and daily\ngoals that reward different types of movement.",
        categoryColor: "text-white",
        titleColor: "text-white",
        subtitleColor: "text-white",
        grid: "md:col-span-2 md:row-span-1", // 2 columns, 1 row (bottom-right area)
        contentAlign: "left",
        textAlign: "left",
        itemStart: true,
        buttonProps: {
            text: "SHOP NOW",
            textColor: "text-white",
            border: "border-b-2 border-white",
        },
    },
]