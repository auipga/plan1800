export default [
  {
    config: {
      seed: 101010,
      type: "archipel",
    },
    result: {
      image: '/101010-arch-123',
      world1: [],
      world2: [
        // 5 big
        {island:  1, size: 1, rotation: 90, regionalResources: {Clay: 3, Gold: 3, Oil: 13}, fertilities: ["Plantains", "Sugar_cane", "Cotton", "Cocoa", "Corn", "Caoutchouc", "Coffee_beans", "Pearls", "Tobacco"]},
        {island:  2, size: 1, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  3, size: 1, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  4, size: 1, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  5, size: 1, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        
        // 5 medium from pool of 6
        {island:  6, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  7, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  8, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island:  9, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island: 10, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        
        // 4 small
        {island: 11, size: 3, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island: 12, size: 3, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island: 13, size: 3, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
        {island: 14, size: 3, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
      ],
      world3: [
        // 1 continental
        {island:  1, size: 0, rotation: 0, regionalResources: {}, fertilities: []},

        // x big
        {island:  2, size: 1, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},

        // x medium from pool of x
        {island:  6, size: 2, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},

        // x small
        {island: 11, size: 3, rotation: 0, regionalResources: {Clay: 0, Gold: 0, Oil: 0}, fertilities: []},
      ],
    }
  },
]