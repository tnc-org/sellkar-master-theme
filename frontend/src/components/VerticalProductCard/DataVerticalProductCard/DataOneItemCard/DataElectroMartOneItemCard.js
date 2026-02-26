export const DataElectroMartOneItemCard = [
  {
    id: 1,
    subtitle:"DEALS OF THE WEEK",
    image: '/ThemeElectroMart/electroMart10.png',
    title: 'BEOPLAY A1 PORTABLE',
    currentPrice: 899.00,
    originalPrice: 999.00,
    description:"This is the world’s first panoramic designed speaker, embracing the beauty of nature into a leading technology product. It is combines two seamless pieces of glass with the front screen featuring a gorgeous panoramic view.",
    countdown: {
      days: 25,
      hours: 9,
      mins: 38,
      secs: 56
    },
    buttonProps: {
      text: 'SHOP NOW',
      textColor: 'text-white',
      bgColor: 'bg-black',
      padding: 'px-10 mt-0',
      onClick: () => router.push("/shop")
    },
    bgColor: 'bg-gray-100',
    flexDirection: 'row',
    // containerPadding: 'p-8 md:p-16'
  },
]