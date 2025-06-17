//BIOMETRIC SCANNERS
 const products = [
  { name: 'SC700-ID',
    bio: { finger: false, rfid: true, face: false, palm: false },
    user: 30000,
    price: 8800, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '18 months',
  },

  { name: 'LX50',
    bio: { finger: true, rfid: false, face: false, palm: false },
    user: 500,
    price: 5700, 
    connection: { lan: false, usb: true, wifi: false, adms: false },
    warranty: '18 months',
  },

  { name: 'TX628',
    bio: { finger: true, rfid: false, face: false, palm: false },
    user: 3200,
    price: 8900, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '36 months',
  },

  { name: 'T8-ID',
    bio: { finger: true, rfid: true, face: false, palm: false },
    user: 3000,
    price: 11200, 
    connection: { lan: true, usb: true, wifi: false, adms: true },
    warranty: '36 months',
  },

  { name: 'FA1000-ld',
    bio: { finger: false, rfid: true, face: true, palm: false },
    user: 1000, //TO DO
    price: 9200, 
    connection: { lan: true, usb: false, wifi: true, adms: true },
    warranty: '18 months',
  },

  { name: 'BK100',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 1000, //TO DO
    price: 9700, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '36 months',
  },

  { name: 'FA110',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 500,
    price: 9700, 
    connection: { lan: true, usb: true, wifi: true, adms: true },
    warranty: '36 months',
  },

  { name: 'P300',
    bio: { finger: false, rfid: false, face: true, palm: true },
    user: 200,
    price: 9700, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '36 months',
  },

  { name: 'Sf200id-WIFI',
    bio: { finger: true, rfid: true, face: false, palm: false },
    user: 5000, //TO DO
    price: 15700, 
    connection: { lan: true, usb: false, wifi: true, adms: false },
    warranty: '36 months',
  },

  { name: 'F22-ID-WIFI',
    bio: { finger: true, rfid: true, face: false, palm: false },
    user: 5000, //TO DO
    price: 13900, 
    connection: { lan: true, usb: true, wifi: true, adms: false },
    warranty: '36 months',
  },

  { name: 'Iface3',
    bio: { finger: true, rfid: true, face: true, palm: false },
    user: 5000, //TO DO
    price: 19400, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '36 months',
  },

  { name: 'MB460',
    bio: { finger: true, rfid: true, face: true, palm: false },
    user: 5000, //TO DO
    price: 14800, 
    connection: { lan: true, usb: true, wifi: false, adms: true },
    warranty: '36 months',
  },

  { name: 'FA210-ID',
    bio: { finger: true, rfid: true, face: true, palm: false },
    user: 2000, //TO DO
    price: 14800, 
    connection: { lan: true, usb: true, wifi: false, adms: true },
    warranty: '36 months',
  },

  { name: 'FA210-ID-WIFI',
    bio: { finger: true, rfid: true, face: true, palm: false },
    user: 2000, //TO DO
    price: 17000, 
    connection: { lan: true, usb: true, wifi: true, adms: true },
    warranty: '36 months',
  },

  { name: 'Xface100',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 2000, //TO DO
    price: 18900, 
    connection: { lan: true, usb: true, wifi: true, adms: true },
    warranty: '36 months',
  },

  { name: 'MultiBio700-H',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 2000, //TO DO
    price: 19800, 
    connection: { lan: true, usb: true, wifi: false, adms: false },
    warranty: '36 months',
  },

  { name: 'UFace800',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 4000, //TO DO
    price: 22800, 
    connection: { lan: true, usb: true, wifi: true, adms: true },
    warranty: '36 months',
  },

  { name: 'MB560VL',
    bio: { finger: true, rfid: false, face: true, palm: false },
    user: 2000, //TO DO
    price: 21800, 
    connection: { lan: true, usb: true, wifi: true, adms: false },
    warranty: '36 months',
  },
]