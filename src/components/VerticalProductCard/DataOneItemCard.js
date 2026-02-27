export const DataOneItemCard = [
  {
    id: 1,
    image: '/ThemeClothing/item1.png',
    title: 'Shopper with Shoulder Strap',
    currentPrice: 330.00,
    originalPrice: 660.00,
    countdown: {
      days: 283,
      hours: 9,
      mins: 38,
      secs: 56
    },
    buttonProps: {
      text: 'SHOP NOW',
      textColor: 'text-white',
      bgColor: 'bg-black',
      padding: 'px-10',
      onClick: () => router.push("/shop")
    },
    bgColor: 'bg-white',
    flexDirection: 'row',
    // containerPadding: 'p-8 md:p-16'
  },
  {
    id: 2,
    image: '/ThemeClothing/item2.png',
    title: 'Premium Leather Backpack',
    currentPrice: 450.00,
    originalPrice: 800.00,
    countdown: {
      days: 150,
      hours: 12,
      mins: 45,
      secs: 30
    },
    buttonProps: {
      text: 'BUY NOW',
      textColor: 'text-white',
      bgColor: 'bg-black',
      padding: 'px-10',
      border: 'border-2 border-black',
      onClick: () => router.push("/shop")
    },
    bgColor: 'bg-white',
    flexDirection: 'row-reverse',
    // containerPadding: 'p-8 md:p-20'
  }
]
  